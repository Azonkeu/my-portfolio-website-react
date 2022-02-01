(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AcomplishmentsStyle */ "./src/components/Acomplishments/AcomplishmentsStyle.js");



const data = [{
  number: 20,
  text: 'Open Source Projects'
}, {
  number: 50,
  text: 'Students'
}, {
  number: 12,
  text: 'Github Followers'
}, {
  number: 20,
  text: 'Github Stars'
}];

const Acomplishments = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, null, "Personal Achievements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AcomplishmentsStyle__WEBPACK_IMPORTED_MODULE_2__.Boxes, null, data.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AcomplishmentsStyle__WEBPACK_IMPORTED_MODULE_2__.Box, {
  key: card
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AcomplishmentsStyle__WEBPACK_IMPORTED_MODULE_2__.BoxNum, null, `${card.number}+`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AcomplishmentsStyle__WEBPACK_IMPORTED_MODULE_2__.BoxText, null, card.text)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionDivider, null));

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

/***/ }),

/***/ "./src/components/Acomplishments/AcomplishmentsStyle.js":
/*!**************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyle.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Boxes = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;
  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;
const Box = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;
  }
  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;

    &:nth-child(2n){
      grid-row:2;
    }
  }
`;
const BoxNum = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5)`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;
  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
  }
`;
const BoxText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;
const Join = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;
const JoinText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5)`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  @media ${props => props.theme.breakpoints.md}{
    line-height: 32px;
    font-size: 20px;
  };
  @media ${props => props.theme.breakpoints.sm}{
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;
const IconContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`;

/***/ }),

/***/ "./src/components/BackgroundAnimation/BackgroundAnimation.js":
/*!*******************************************************************!*\
  !*** ./src/components/BackgroundAnimation/BackgroundAnimation.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const BackgroundAnimation = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
  className: "BgAnimation__svg",
  viewBox: "0 0 602 602",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
  opacity: "0.15"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
  stroke: "url(#paint0_radial)",
  id: "path_0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
  stroke: "url(#paint1_radial)",
  id: "path_1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
  stroke: "url(#paint2_radial)",
  id: "path_2"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
  cx: "295.027",
  cy: "193.118",
  transform: "translate(-295.027 -193.118)",
  rx: "1.07306",
  ry: "1.07433",
  fill: "#945DD6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "10s",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_2"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M294.685 193.474L268.932 219.258",
  transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
  stroke: "url(#paint3_linear)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "10s",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_2"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
  cx: "295.027",
  cy: "193.118",
  transform: "translate(-295.027 -193.118)",
  rx: "1.07306",
  ry: "1.07433",
  fill: "#46737"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "5s",
  begin: "1",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_2"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M294.685 193.474L268.932 219.258",
  transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
  stroke: "url(#paint7_linear)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "5s",
  begin: "1",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_2"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
  cx: "476.525",
  cy: "363.313",
  rx: "1.07433",
  ry: "1.07306",
  transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
  fill: "#945DD6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "10s",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_0"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M476.171 362.952L450.417 337.168",
  transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
  stroke: "url(#paint4_linear)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "10s",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_0"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
  cx: "382.164",
  cy: "155.029",
  rx: "1.07433",
  ry: "1.07306",
  transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
  fill: "#F46737"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "10s",
  begin: "1",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_0"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M381.81 154.669L356.057 128.885",
  transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
  stroke: "url(#paint5_linear)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "10s",
  begin: "1",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_0"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
  cx: "333.324",
  cy: "382.691",
  rx: "1.07306",
  ry: "1.07433",
  transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
  fill: "#F46737"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "5s",
  begin: "0",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_1"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M333.667 382.335L359.42 356.551",
  transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
  stroke: "url(#paint6_linear)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "5s",
  begin: "0",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_1"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
  cx: "165.524",
  cy: "93.9596",
  rx: "1.07306",
  ry: "1.07433",
  transform: "translate(-165.524 -93.9596)",
  fill: "#F46737"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "10s",
  begin: "3",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_0"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M165.182 94.3159L139.429 120.1",
  transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
  stroke: "url(#paint7_linear)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "10s",
  begin: "3",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_0"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ellipse", {
  cx: "476.525",
  cy: "363.313",
  rx: "1.07433",
  ry: "1.07306",
  transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
  fill: "#13ADC7"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "12s",
  begin: "4",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_0"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M476.171 362.952L450.417 337.168",
  transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
  stroke: "url(#paint11_linear)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateMotion", {
  dur: "12s",
  begin: "4",
  repeatCount: "indefinite",
  rotate: "auto"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("mpath", {
  xlinkHref: "#path_0"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("radialGradient", {
  id: "paint0_radial",
  cx: "0",
  cy: "0",
  r: "1",
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(301 301) rotate(90) scale(300)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "0.333333",
  stopColor: "#FBFBFB"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "white",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("radialGradient", {
  id: "paint1_radial",
  cx: "0",
  cy: "0",
  r: "1",
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(301 301) rotate(90) scale(300)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "0.333333",
  stopColor: "#FBFBFB"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "white",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("radialGradient", {
  id: "paint2_radial",
  cx: "0",
  cy: "0",
  r: "1",
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(301 301) rotate(90) scale(300)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "0.333333",
  stopColor: "#FBFBFB"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "white",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
  id: "paint3_linear",
  x1: "295.043",
  y1: "193.116",
  x2: "269.975",
  y2: "218.154",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  stopColor: "#945DD6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "#945DD6",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
  id: "paint4_linear",
  x1: "476.529",
  y1: "363.31",
  x2: "451.461",
  y2: "338.272",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  stopColor: "#945DD6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "#945DD6",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
  id: "paint5_linear",
  x1: "382.168",
  y1: "155.027",
  x2: "357.1",
  y2: "129.989",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  stopColor: "#F46737"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "#F46737",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
  id: "paint6_linear",
  x1: "333.309",
  y1: "382.693",
  x2: "358.376",
  y2: "357.655",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  stopColor: "#F46737"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "#F46737",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
  id: "paint7_linear",
  x1: "165.54",
  y1: "93.9578",
  x2: "140.472",
  y2: "118.996",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  stopColor: "#F46737"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "#F46737",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
  id: "paint8_linear",
  x1: "414.367",
  y1: "301.156",
  x2: "439.435",
  y2: "276.118",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  stopColor: "#13ADC7"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "#13ADC7",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
  id: "paint9_linear",
  x1: "515.943",
  y1: "288.238",
  x2: "541.339",
  y2: "291.454",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  stopColor: "#13ADC7"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "#13ADC7",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
  id: "paint10_linear",
  x1: "117.001",
  y1: "230.619",
  x2: "117.36",
  y2: "258.193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  stopColor: "#945DD6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "#945DD6",
  stopOpacity: "0"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
  id: "paint11_linear",
  x1: "476.529",
  y1: "363.31",
  x2: "451.461",
  y2: "338.272",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  stopColor: "#13ADC7"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
  offset: "1",
  stopColor: "#13ADC7",
  stopOpacity: "0"
})))));

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _Header_HeaderStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/HeaderStyle */ "./src/components/Header/HeaderStyle.js");
/* harmony import */ var _FooterStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterStyle */ "./src/components/Footer/FooterStyle.js");





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

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/FooterStyle.js":
/*!**********************************************!*\
  !*** ./src/components/Footer/FooterStyle.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "LinkItem": function() { return /* binding */ LinkItem; },
/* harmony export */   "SocialIconsContainer": function() { return /* binding */ SocialIconsContainer; },
/* harmony export */   "CompanyContainer": function() { return /* binding */ CompanyContainer; },
/* harmony export */   "Slogan": function() { return /* binding */ Slogan; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "LinkList": function() { return /* binding */ LinkList; },
/* harmony export */   "LinkColumn": function() { return /* binding */ LinkColumn; },
/* harmony export */   "LinkTitle": function() { return /* binding */ LinkTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;
const LinkItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: .3s ease;
  position: relative;
  left: 0;
  &:hover {
    color: #fff;
    left: 6px;
  }
  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;
const SocialIconsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: space-between;
  }
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;
const CompanyContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items:baseline;
  flex-wrap: wrap;
  margin-right: auto;
  @media ${props => props.theme.breakpoints.md}{
    flex-direction: column;
    align-items: baseline;
  }
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;
const Slogan = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;
  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }
  @media ${props => props.theme.breakpoints.sm}{
    line-height: 22px;
    font-size: 14px;
    min-width: 100px;
  }
`;
const SocialContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items: center;
  @media ${props => props.theme.breakpoints.md}{
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;
const LinkList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;
  @media ${props => props.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;
const LinkColumn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;
const LinkTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _HeaderStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderStyle */ "./src/components/Header/HeaderStyle.js");






const Header = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.Div1, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
  href: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
  href: "/",
  style: {
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_di__WEBPACK_IMPORTED_MODULE_3__.DiCssdeck, {
  size: "3rem"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
  style: {
    fontSize: '1.2em'
  }
}, "Azonkeu Ornela")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.Div2, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
  href: "#projects"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.NavLink, null, "Projects"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
  href: "#tech"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.NavLink, null, "Technologies"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
  href: "#about"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.NavLink, null, "About")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.Div3, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
  href: "https://github.com/Azonkeu"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
  size: "3rem"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
  href: "https://www.linkedin.com/in/azonkeu-ornela-software-developer/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
  size: "3rem"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
  href: "https://www.instagram.com/ornela9238/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillInstagram, {
  size: "3rem"
}))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/HeaderStyle.js":
/*!**********************************************!*\
  !*** ./src/components/Header/HeaderStyle.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  @media ${props => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
const Div1 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
const Div2 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
const Div3 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${props => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`; // Navigation Links

const NavLink = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`; /// DropDown Contact

const ContactDropDown = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${props => props.theme.breakpoints.md} {
    padding: 0;
  }
`;
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({
  isOpen
}) => isOpen ? '1' : '.75'};
  transform: ${({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)'};
  &:hover {
    opacity: 1;
  }
  @media ${props => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`; // Social Icons

const SocialIcons = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyle */ "./src/components/Hero/HeroStyle.js");






const Hero = ({
  handleClick
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  row: true,
  nopadding: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeroStyle__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
  main: true,
  center: true
}, "Welcome To", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "My Personal Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, null, "I'm a software engineer specializing in building and designing exceptional digital experiences."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
  onClick: handleClick
}, "Learn more"))));

Hero.propTypes = {
  handleClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Hero/HeroStyle.js":
/*!******************************************!*\
  !*** ./src/components/Hero/HeroStyle.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LeftSection = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  @media ${props => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (LeftSection);

/***/ }),

/***/ "./src/components/Projects/ProjectStyle.js":
/*!*************************************************!*\
  !*** ./src/components/Projects/ProjectStyle.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`;
const GridContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${props => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`;
const BlogCard = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
const TitleContent = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  text-align: center;
  z-index: 20;
  width: 100%;
`;
const HeaderThree = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3)`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${props => props.title ? '3rem' : '2rem'};
`;
const Hr = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr)`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;
const Intro = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;
const CardInfo = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${props => props.theme.breakpoints.sm} {
    padding:.3rem
  }
`;
const UtilityList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;
const ExternalLinks = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
  color:#d4c0c0;
  font-size: 1.6rem;
  padding:1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    background: #801414;
  }
`;
const TagList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
const Tag = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectStyle */ "./src/components/Projects/ProjectStyle.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constant */ "./src/constants/constant.js");





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

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TechnologiesStyle */ "./src/components/Technologies/TechnologiesStyle.js");





const Technologies = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.Section, {
  id: "tech"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionDivider, {
  divider: true
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionTitle, null, "Technologies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionText, null, "I've worked with a range a technologies in the web development world. From Back-end To Design"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.List, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_di__WEBPACK_IMPORTED_MODULE_3__.DiReact, {
  size: "3rem"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListTitle, null, "Front-End"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListParagraph, null, "Experiece with", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "HTML5", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "CSS3", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "JavaScript", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "React.js", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Redux", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Bootstrap", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Next.js", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Vue.js"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_di__WEBPACK_IMPORTED_MODULE_3__.DiFirebase, {
  size: "3rem"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListTitle, null, "Back-End"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListParagraph, null, "Experience with", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Node and Databases", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Ruby", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Rails", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "MySQL"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_di__WEBPACK_IMPORTED_MODULE_3__.DiZend, {
  size: "3rem"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListTitle, null, "Tools & Methods:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TechnologiesStyle__WEBPACK_IMPORTED_MODULE_2__.ListParagraph, null, "Experience with", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Git", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "GitHub", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Heroku", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Netlify", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Mobile/Responsive Development", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "RSpec", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "TDD", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Chrome Dev Tools", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Figma")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_1__.SectionDivider, {
  colorAlt: true
}));

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyle.js":
/*!**********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyle.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;
const MainImage = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  width: 100%;
`;
const List = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;

  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }
  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;
const ListContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`;
const ListTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;
  @media ${props => props.theme.breakpoints.md}{
    font-size: 24px;
    line-height: 28px;
  }
  @media ${props => props.theme.breakpoints.sm}{
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;
const ListParagraph = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }
  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`;
const ListItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.breakpoints.md}{
    max-width: 203px;
  }
  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: row;
  }
`;
const ListIcon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

/***/ }),

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeLineStyle */ "./src/components/TimeLine/TimeLineStyle.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constant */ "./src/constants/constant.js");




const TOTAL_CAROUSEL_COUNT = _constants_constant__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const scroll = (node, left) => node.scrollTo({
    left,
    behavior: 'smooth'
  });

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constant__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constant__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    id: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, null, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, null, "The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__.CarouselContainer, {
    ref: carouselRef,
    onScroll: handleScroll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, _constants_constant__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__.CarouselMobileScrollNode, {
    key: item,
    final: index === TOTAL_CAROUSEL_COUNT - 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__.CarouselItem, {
    index: index,
    id: `carousel__item-${index}`,
    active: activeItem,
    onClick: e => handleClick(e, index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__.CarouselItemTitle, null, `${item.year}`, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__.CarouselItemImg, {
    width: "208",
    height: "6",
    viewBox: "0 0 208 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
    fill: "url(#paint0_linear)",
    fillOpacity: "0.33"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear",
    x1: "-4.30412e-10",
    y1: "0.5",
    x2: "208",
    y2: "0.500295",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    "stop-Color": "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.79478",
    stopColor: "white",
    stopOpacity: "0"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__.CarouselItemText, null, item.text)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__.CarouselButtons, null, _constants_constant__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__.CarouselButton, {
    key: item,
    index: index,
    active: activeItem,
    onClick: e => handleClick(e, index),
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeLineStyle__WEBPACK_IMPORTED_MODULE_1__.CarouselButtonDot, {
    active: activeItem
  }))), ";"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyle.js":
/*!**************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyle.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */
  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }
  margin-bottom: 80px;
  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }
  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
const CarouselMobileScrollNode = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({
  final
}) => final ? '120%;' : 'min-content'}
  }
`;
const CarouselItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background: #0F1624;
  border-radius: 3px;
  max-width: 196px;
  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${props => props.active === (props.index ? 'opacity: 1' : 'opacity: 0.5')}; 
  }
`;
const CarouselItemTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;
const CarouselItemImg = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg)`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;
  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;
const CarouselItemText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;
  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
const CarouselButtons = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 288px;
  display: none;
  visibility: hidden;
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;
const CarouselButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${props => props.active === (props.index ? '1' : '.33')};
  transform: ${props => props.active === (props.index ? 'scale(1.6)' : 'scale(1)')};
  &:focus {
    outline: none;
  }
`;
const CarouselButtonDot = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;

/***/ }),

/***/ "./src/constants/constant.js":
/*!***********************************!*\
  !*** ./src/constants/constant.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: 'To-Do-App',
  description: 'This is a to-do application. This website helps users organize their daily activities. Users can add tasks to the list, edit, and remove completed tasks from the list. Check out the website by clicking on "Code" below.',
  image: 'https://www.linkpicture.com/q/todos.png',
  tags: ['React', 'JavaScript', 'CSS3'],
  source: 'https://github.com/Azonkeu/to-do-app/tree/to-do',
  visit: 'https://azonkeu.github.io/to-do-app/',
  id: 0
}, {
  title: 'Movie Shows',
  description: 'This website shows the most popular movies from an external API and allows users to comment and make reservations. The webapp has 3 user interfaces.',
  image: 'https://www.linkpicture.com/q/mov.png',
  tags: ['JavaScript', 'HTML5', 'CSS3', 'API'],
  source: 'https://github.com/Azonkeu/Final-Javascript-capstone',
  visit: 'https://elated-saha-e87646.netlify.app/',
  id: 1
}, {
  title: 'Math-Magicians',
  description: 'Math-Magicians is a website for math lovers. Users can do mathematical operations using the calculator.',
  image: 'https://www.linkpicture.com/q/calculat.png',
  tags: ['React', 'JavaScript', 'CSS3'],
  source: 'https://github.com/Azonkeu/math-magicians',
  visit: 'https://azonkeu.github.io/math-magicians/',
  id: 2
}, {
  title: 'Online Tutoring',
  description: 'Speak Fluently is an online platform where students and teachers can meet for language lessons.',
  image: 'https://www.linkpicture.com/q/flu.png',
  tags: ['JavaScript', 'HTML5', 'CSS3'],
  source: 'https://github.com/Azonkeu/Speak-Fluently',
  visit: 'https://azonkeu.github.io/Speak-Fluently/',
  id: 3
}];
const TimeLineData = [{
  year: 2017,
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a Full-stack developer at Skelia'
}, {
  year: 2019,
  text: 'Worked as a Full-stack developer at VironIT'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Worked as a freelancer'
}];

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _LayoutStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyle */ "./src/layout/LayoutStyle.js");






const Layout = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LayoutStyle__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, null));

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/layout/LayoutStyle.js":
/*!***********************************!*\
  !*** ./src/layout/LayoutStyle.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
max-width: 1280px;
width: 100%;
margin: auto;
`;
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_BackgroundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgroundAnimation/BackgroundAnimation */ "./src/components/BackgroundAnimation/BackgroundAnimation.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");










const Home = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__.Section, {
  grid: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BackgroundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__.default, null));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");




const Button = ({
  alt,
  form,
  disabled,
  onClick,
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonBack, {
  alt: alt,
  form: form,
  disabled: disabled
}, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonFront, {
  alt: alt,
  onClick: onClick,
  disabled: disabled
}, children));

Button.propTypes = {
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
Button.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
Button.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
Button.propTypes = {
  alt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
Button.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* disable eslint no-confusing-arrow */

const Section = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  display: ${props => props.grid ? 'grid' : 'flex'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  padding: ${props => props.nopadding ? '0' : '32px 48px 0'} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media ${props => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: ${props => props.nopadding ? '0' : '16px 16px 0'} ;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;
const SectionTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2)`
  font-weight: 800;
  font-size: ${props => props.main ? '65px' : '56px'};
  line-height: ${props => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${props => props.main ? '58px 0 16px' : '0'};
  @media ${props => props.theme.breakpoints.md}{
    font-size: ${props => props.main ? '56px' : '48px'};
    line-height: ${props => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${props => props.main ? '40px 0 12px' : '0'};
  }
  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${props => props.main ? '28px' : '32px'};
    line-height: ${props => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${props => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`;
const SectionText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  @media ${props => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
const SectionDivider = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
    margin: ${props => props.divider ? '4rem 0' : ''};
  @media ${props => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
const SectionSubText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  @media ${props => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
const SecondaryBtn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }
  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  @media ${props => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;
const ButtonBack = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: ${({
  alt
}) => alt ? '150px' : '262px'};
  height: ${({
  alt
}) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({
  alt
}) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px'};
  color: #fff;
  background: ${({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({
  disabled
}) => disabled ? '.5' : '1'};
  @media ${props => props.theme.breakpoints.md} {
    width: ${({
  alt
}) => alt ? '150px' : '184px'};
    height: ${({
  alt
}) => alt ? '52px' : '48px'};
    font-size: ${({
  alt
}) => alt ? '20px' : '16px'};
    margin-bottom: ${({
  alt
}) => alt ? '0' : '64px'};
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({
  alt
}) => alt ? '0' : '32px'};
  }
`;
const ButtonFront = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({
  disabled
}) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({
  alt
}) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};
  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  @media ${props => props.theme.breakpoints.md} {
    font-size: ${({
  alt
}) => alt ? '20px' : '16px'};
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
const LinkContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-left: ${({
  large
}) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${props => props.theme.breakpoints.md} {
    margin-left: ${({
  large
}) => large ? '16px' : '8px'};
  }
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: ${({
  large
}) => large ? '0' : '8px'};
  }
`;
const LinkIconImg = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;  
  height: ${({
  large
}) => large ? '32px' : '24px'};
  @media ${props => props.theme.breakpoints.md} {
    height: ${({
  nav
}) => nav ? '16px' : '24px'};
  }
  @media ${props => props.theme.breakpoints.sm} {
    height: ${({
  large
}) => large ? '32px' : '16px'};
  }
`;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-847d74","vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-92d9c1"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHNTdHlsZS5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0JhY2tncm91bmRBbmltYXRpb24vQmFja2dyb3VuZEFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclN0eWxlLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvU3R5bGUuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0U3R5bGUuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXMuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGUuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lU3R5bGUuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50LmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0Ly4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvLi9zcmMvbGF5b3V0L0xheW91dFN0eWxlLmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0Ly4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC8uL3NyYy9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8td2Vic2l0ZS1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLXdlYnNpdGUtcmVhY3QvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL215LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0L2lnbm9yZWR8QzpcXFVzZXJzXFxQQ1xcT25lRHJpdmVcXERlc2t0b3BcXG15LXBvcnRmb2xpby13ZWJzaXRlLXJlYWN0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiZGF0YSIsIm51bWJlciIsInRleHQiLCJBY29tcGxpc2htZW50cyIsIm1hcCIsImNhcmQiLCJCb3hlcyIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwic20iLCJCb3giLCJsZyIsIkJveE51bSIsIkJveFRleHQiLCJKb2luIiwiSm9pblRleHQiLCJJY29uQ29udGFpbmVyIiwiQmFja2dyb3VuZEFuaW1hdGlvbiIsIkZvb3RlciIsIkZvb3RlcldyYXBwZXIiLCJMaW5rSXRlbSIsIlNvY2lhbEljb25zQ29udGFpbmVyIiwiQ29tcGFueUNvbnRhaW5lciIsIlNsb2dhbiIsIlNvY2lhbENvbnRhaW5lciIsIkxpbmtMaXN0IiwiTGlua0NvbHVtbiIsIkxpbmtUaXRsZSIsIkhlYWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJmb250U2l6ZSIsIkNvbnRhaW5lciIsIkRpdjEiLCJEaXYyIiwiRGl2MyIsIk5hdkxpbmsiLCJDb250YWN0RHJvcERvd24iLCJOYXZQcm9kdWN0c0ljb24iLCJJb0lvc0Fycm93RHJvcGRvd24iLCJpc09wZW4iLCJTb2NpYWxJY29ucyIsIkhlcm8iLCJoYW5kbGVDbGljayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJMZWZ0U2VjdGlvbiIsIkltZyIsIkdyaWRDb250YWluZXIiLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwidGl0bGUiLCJIciIsIkludHJvIiwiQ2FyZEluZm8iLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJUYWdMaXN0IiwiVGFnIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsInAiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwidGFncyIsInQiLCJ2aXNpdCIsInNvdXJjZSIsIlRlY2hub2xvZ2llcyIsIkltYWdlQ29udGFpbmVyIiwiTWFpbkltYWdlIiwiTGlzdCIsIkxpc3RDb250YWluZXIiLCJMaXN0VGl0bGUiLCJMaXN0UGFyYWdyYXBoIiwiTGlzdEl0ZW0iLCJMaXN0SWNvbiIsIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwiVGltZUxpbmVEYXRhIiwiVGltZWxpbmUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsInVzZVN0YXRlIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJzY3JvbGwiLCJub2RlIiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsImluZGV4Iiwicm91bmQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbSIsInllYXIiLCJDYXJvdXNlbENvbnRhaW5lciIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsImZpbmFsIiwiQ2Fyb3VzZWxJdGVtIiwiYWN0aXZlIiwiQ2Fyb3VzZWxJdGVtVGl0bGUiLCJDYXJvdXNlbEl0ZW1JbWciLCJDYXJvdXNlbEl0ZW1UZXh0IiwiQ2Fyb3VzZWxCdXR0b25zIiwiQ2Fyb3VzZWxCdXR0b24iLCJDYXJvdXNlbEJ1dHRvbkRvdCIsImlkIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJPYmplY3QiLCJIb21lIiwiQnV0dG9uIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwib25DbGljayIsIlNlY3Rpb24iLCJncmlkIiwicm93Iiwibm9wYWRkaW5nIiwiU2VjdGlvblRpdGxlIiwibWFpbiIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvbkRpdmlkZXIiLCJjb2xvckFsdCIsImRpdmlkZXIiLCJTZWN0aW9uU3ViVGV4dCIsIlNlY29uZGFyeUJ0biIsIkJ1dHRvbkJhY2siLCJCdXR0b25Gcm9udCIsIkxpbmtDb250YWluZXIiLCJsYXJnZSIsIkxpbmtJY29uSW1nIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFPQSxNQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxRQUFNLEVBQUUsRUFBVjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEVyxFQUVYO0FBQUVELFFBQU0sRUFBRSxFQUFWO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUZXLEVBR1g7QUFBRUQsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSFcsRUFJWDtBQUFFRCxRQUFNLEVBQUUsRUFBVjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKVyxDQUFiOztBQU9BLE1BQU1DLGNBQWMsR0FBRyxtQkFDckIsMkRBQUMsNkRBQUQscUJBQ0UsMkRBQUMsa0VBQUQsZ0NBREYsZUFFRSwyREFBQyx1REFBRCxRQUNHSCxJQUFJLENBQUNJLEdBQUwsQ0FBVUMsSUFBRCxpQkFDUiwyREFBQyxxREFBRDtBQUFLLEtBQUcsRUFBRUE7QUFBVixnQkFDRSwyREFBQyx3REFBRCxRQUFVLEdBQUVBLElBQUksQ0FBQ0osTUFBTyxHQUF4QixDQURGLGVBRUUsMkRBQUMseURBQUQsUUFBVUksSUFBSSxDQUFDSCxJQUFmLENBRkYsQ0FERCxDQURILENBRkYsZUFVRSwyREFBQyxvRUFBRCxPQVZGLENBREY7O0FBZUEsK0RBQWVDLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFTyxNQUFNRyxLQUFLLEdBQUdDLDhEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCTztBQW9CQSxNQUFNQyxHQUFHLEdBQUdOLDhEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkksRUFBRztBQUNqRDtBQUNBO0FBQ0EsV0FBWU4sS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxXQUFZSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FwQk87QUFzQkEsTUFBTUcsTUFBTSxHQUFHUiw2REFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxDQWhCTztBQWtCQSxNQUFNSSxPQUFPLEdBQUdULDREQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxDQWZPO0FBaUJBLE1BQU1LLElBQUksR0FBR1YsOERBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCTztBQW1CQSxNQUFNTSxRQUFRLEdBQUdYLDZEQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFdBQVlILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPO0FBaUJBLE1BQU1PLGFBQWEsR0FBR1osOERBQVc7QUFDeEM7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLENBTk8sQzs7Ozs7Ozs7Ozs7Ozs7QUNuSFA7O0FBRUEsTUFBTVEsbUJBQW1CLEdBQUcsbUJBQzFCLHFGQUNFO0FBQ0UsV0FBUyxFQUFDLGtCQURaO0FBRUUsU0FBTyxFQUFDLGFBRlY7QUFHRSxNQUFJLEVBQUMsTUFIUDtBQUlFLE9BQUssRUFBQztBQUpSLGdCQU1FO0FBQUcsU0FBTyxFQUFDO0FBQVgsZ0JBQ0U7QUFDRSxVQUFRLEVBQUMsU0FEWDtBQUVFLFVBQVEsRUFBQyxTQUZYO0FBR0UsR0FBQyxFQUFDLG1pQkFISjtBQUlFLFFBQU0sRUFBQyxxQkFKVDtBQUtFLElBQUUsRUFBQztBQUxMLEVBREYsZUFRRTtBQUNFLEdBQUMsRUFBQyxtVkFESjtBQUVFLFFBQU0sRUFBQyxxQkFGVDtBQUdFLElBQUUsRUFBQztBQUhMLEVBUkYsZUFhRTtBQUNFLEdBQUMsRUFBQyxtVkFESjtBQUVFLFFBQU0sRUFBQyxxQkFGVDtBQUdFLElBQUUsRUFBQztBQUhMLEVBYkYsQ0FORixlQXlCRTtBQUNFLElBQUUsRUFBQyxTQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxXQUFTLEVBQUMsOEJBSFo7QUFJRSxJQUFFLEVBQUMsU0FKTDtBQUtFLElBQUUsRUFBQyxTQUxMO0FBTUUsTUFBSSxFQUFDO0FBTlAsZ0JBUUU7QUFBZSxLQUFHLEVBQUMsS0FBbkI7QUFBeUIsYUFBVyxFQUFDLFlBQXJDO0FBQWtELFFBQU0sRUFBQztBQUF6RCxnQkFDRTtBQUFPLFdBQVMsRUFBQztBQUFqQixFQURGLENBUkYsQ0F6QkYsZUFxQ0U7QUFDRSxHQUFDLEVBQUMsa0NBREo7QUFFRSxXQUFTLEVBQUMseURBRlo7QUFHRSxRQUFNLEVBQUM7QUFIVCxnQkFLRTtBQUFlLEtBQUcsRUFBQyxLQUFuQjtBQUF5QixhQUFXLEVBQUMsWUFBckM7QUFBa0QsUUFBTSxFQUFDO0FBQXpELGdCQUNFO0FBQU8sV0FBUyxFQUFDO0FBQWpCLEVBREYsQ0FMRixDQXJDRixlQThDRTtBQUNFLElBQUUsRUFBQyxTQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxXQUFTLEVBQUMsOEJBSFo7QUFJRSxJQUFFLEVBQUMsU0FKTDtBQUtFLElBQUUsRUFBQyxTQUxMO0FBTUUsTUFBSSxFQUFDO0FBTlAsZ0JBUUU7QUFDRSxLQUFHLEVBQUMsSUFETjtBQUVFLE9BQUssRUFBQyxHQUZSO0FBR0UsYUFBVyxFQUFDLFlBSGQ7QUFJRSxRQUFNLEVBQUM7QUFKVCxnQkFNRTtBQUFPLFdBQVMsRUFBQztBQUFqQixFQU5GLENBUkYsQ0E5Q0YsZUErREU7QUFDRSxHQUFDLEVBQUMsa0NBREo7QUFFRSxXQUFTLEVBQUMseURBRlo7QUFHRSxRQUFNLEVBQUM7QUFIVCxnQkFLRTtBQUNFLEtBQUcsRUFBQyxJQUROO0FBRUUsT0FBSyxFQUFDLEdBRlI7QUFHRSxhQUFXLEVBQUMsWUFIZDtBQUlFLFFBQU0sRUFBQztBQUpULGdCQU1FO0FBQU8sV0FBUyxFQUFDO0FBQWpCLEVBTkYsQ0FMRixDQS9ERixlQTZFRTtBQUNFLElBQUUsRUFBQyxTQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsU0FITDtBQUlFLElBQUUsRUFBQyxTQUpMO0FBS0UsV0FBUyxFQUFDLHlEQUxaO0FBTUUsTUFBSSxFQUFDO0FBTlAsZ0JBUUU7QUFBZSxLQUFHLEVBQUMsS0FBbkI7QUFBeUIsYUFBVyxFQUFDLFlBQXJDO0FBQWtELFFBQU0sRUFBQztBQUF6RCxnQkFDRTtBQUFPLFdBQVMsRUFBQztBQUFqQixFQURGLENBUkYsQ0E3RUYsZUF5RkU7QUFDRSxHQUFDLEVBQUMsa0NBREo7QUFFRSxXQUFTLEVBQUMsMERBRlo7QUFHRSxRQUFNLEVBQUM7QUFIVCxnQkFLRTtBQUFlLEtBQUcsRUFBQyxLQUFuQjtBQUF5QixhQUFXLEVBQUMsWUFBckM7QUFBa0QsUUFBTSxFQUFDO0FBQXpELGdCQUNFO0FBQU8sV0FBUyxFQUFDO0FBQWpCLEVBREYsQ0FMRixDQXpGRixlQWtHRTtBQUNFLElBQUUsRUFBQyxTQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsU0FITDtBQUlFLElBQUUsRUFBQyxTQUpMO0FBS0UsV0FBUyxFQUFDLHlEQUxaO0FBTUUsTUFBSSxFQUFDO0FBTlAsZ0JBUUU7QUFDRSxLQUFHLEVBQUMsS0FETjtBQUVFLE9BQUssRUFBQyxHQUZSO0FBR0UsYUFBVyxFQUFDLFlBSGQ7QUFJRSxRQUFNLEVBQUM7QUFKVCxnQkFNRTtBQUFPLFdBQVMsRUFBQztBQUFqQixFQU5GLENBUkYsQ0FsR0YsZUFtSEU7QUFDRSxHQUFDLEVBQUMsaUNBREo7QUFFRSxXQUFTLEVBQUMsd0RBRlo7QUFHRSxRQUFNLEVBQUM7QUFIVCxnQkFLRTtBQUNFLEtBQUcsRUFBQyxLQUROO0FBRUUsT0FBSyxFQUFDLEdBRlI7QUFHRSxhQUFXLEVBQUMsWUFIZDtBQUlFLFFBQU0sRUFBQztBQUpULGdCQU1FO0FBQU8sV0FBUyxFQUFDO0FBQWpCLEVBTkYsQ0FMRixDQW5IRixlQWlJRTtBQUNFLElBQUUsRUFBQyxTQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsU0FITDtBQUlFLElBQUUsRUFBQyxTQUpMO0FBS0UsV0FBUyxFQUFDLDJEQUxaO0FBTUUsTUFBSSxFQUFDO0FBTlAsZ0JBUUU7QUFDRSxLQUFHLEVBQUMsSUFETjtBQUVFLE9BQUssRUFBQyxHQUZSO0FBR0UsYUFBVyxFQUFDLFlBSGQ7QUFJRSxRQUFNLEVBQUM7QUFKVCxnQkFNRTtBQUFPLFdBQVMsRUFBQztBQUFqQixFQU5GLENBUkYsQ0FqSUYsZUFrSkU7QUFDRSxHQUFDLEVBQUMsaUNBREo7QUFFRSxXQUFTLEVBQUMscUVBRlo7QUFHRSxRQUFNLEVBQUM7QUFIVCxnQkFLRTtBQUNFLEtBQUcsRUFBQyxJQUROO0FBRUUsT0FBSyxFQUFDLEdBRlI7QUFHRSxhQUFXLEVBQUMsWUFIZDtBQUlFLFFBQU0sRUFBQztBQUpULGdCQU1FO0FBQU8sV0FBUyxFQUFDO0FBQWpCLEVBTkYsQ0FMRixDQWxKRixlQWdLRTtBQUNFLElBQUUsRUFBQyxTQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsU0FITDtBQUlFLElBQUUsRUFBQyxTQUpMO0FBS0UsV0FBUyxFQUFDLDhCQUxaO0FBTUUsTUFBSSxFQUFDO0FBTlAsZ0JBUUU7QUFDRSxLQUFHLEVBQUMsS0FETjtBQUVFLE9BQUssRUFBQyxHQUZSO0FBR0UsYUFBVyxFQUFDLFlBSGQ7QUFJRSxRQUFNLEVBQUM7QUFKVCxnQkFNRTtBQUFPLFdBQVMsRUFBQztBQUFqQixFQU5GLENBUkYsQ0FoS0YsZUFpTEU7QUFDRSxHQUFDLEVBQUMsZ0NBREo7QUFFRSxXQUFTLEVBQUMseURBRlo7QUFHRSxRQUFNLEVBQUM7QUFIVCxnQkFLRTtBQUNFLEtBQUcsRUFBQyxLQUROO0FBRUUsT0FBSyxFQUFDLEdBRlI7QUFHRSxhQUFXLEVBQUMsWUFIZDtBQUlFLFFBQU0sRUFBQztBQUpULGdCQU1FO0FBQU8sV0FBUyxFQUFDO0FBQWpCLEVBTkYsQ0FMRixDQWpMRixlQStMRTtBQUNFLElBQUUsRUFBQyxTQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsU0FITDtBQUlFLElBQUUsRUFBQyxTQUpMO0FBS0UsV0FBUyxFQUFDLHlEQUxaO0FBTUUsTUFBSSxFQUFDO0FBTlAsZ0JBUUU7QUFDRSxLQUFHLEVBQUMsS0FETjtBQUVFLE9BQUssRUFBQyxHQUZSO0FBR0UsYUFBVyxFQUFDLFlBSGQ7QUFJRSxRQUFNLEVBQUM7QUFKVCxnQkFNRTtBQUFPLFdBQVMsRUFBQztBQUFqQixFQU5GLENBUkYsQ0EvTEYsZUFnTkU7QUFDRSxHQUFDLEVBQUMsa0NBREo7QUFFRSxXQUFTLEVBQUMsMERBRlo7QUFHRSxRQUFNLEVBQUM7QUFIVCxnQkFLRTtBQUNFLEtBQUcsRUFBQyxLQUROO0FBRUUsT0FBSyxFQUFDLEdBRlI7QUFHRSxhQUFXLEVBQUMsWUFIZDtBQUlFLFFBQU0sRUFBQztBQUpULGdCQU1FO0FBQU8sV0FBUyxFQUFDO0FBQWpCLEVBTkYsQ0FMRixDQWhORixlQThORSxzRkFDRTtBQUNFLElBQUUsRUFBQyxlQURMO0FBRUUsSUFBRSxFQUFDLEdBRkw7QUFHRSxJQUFFLEVBQUMsR0FITDtBQUlFLEdBQUMsRUFBQyxHQUpKO0FBS0UsZUFBYSxFQUFDLGdCQUxoQjtBQU1FLG1CQUFpQixFQUFDO0FBTnBCLGdCQVFFO0FBQU0sUUFBTSxFQUFDLFVBQWI7QUFBd0IsV0FBUyxFQUFDO0FBQWxDLEVBUkYsZUFTRTtBQUFNLFFBQU0sRUFBQyxHQUFiO0FBQWlCLFdBQVMsRUFBQyxPQUEzQjtBQUFtQyxhQUFXLEVBQUM7QUFBL0MsRUFURixDQURGLGVBWUU7QUFDRSxJQUFFLEVBQUMsZUFETDtBQUVFLElBQUUsRUFBQyxHQUZMO0FBR0UsSUFBRSxFQUFDLEdBSEw7QUFJRSxHQUFDLEVBQUMsR0FKSjtBQUtFLGVBQWEsRUFBQyxnQkFMaEI7QUFNRSxtQkFBaUIsRUFBQztBQU5wQixnQkFRRTtBQUFNLFFBQU0sRUFBQyxVQUFiO0FBQXdCLFdBQVMsRUFBQztBQUFsQyxFQVJGLGVBU0U7QUFBTSxRQUFNLEVBQUMsR0FBYjtBQUFpQixXQUFTLEVBQUMsT0FBM0I7QUFBbUMsYUFBVyxFQUFDO0FBQS9DLEVBVEYsQ0FaRixlQXVCRTtBQUNFLElBQUUsRUFBQyxlQURMO0FBRUUsSUFBRSxFQUFDLEdBRkw7QUFHRSxJQUFFLEVBQUMsR0FITDtBQUlFLEdBQUMsRUFBQyxHQUpKO0FBS0UsZUFBYSxFQUFDLGdCQUxoQjtBQU1FLG1CQUFpQixFQUFDO0FBTnBCLGdCQVFFO0FBQU0sUUFBTSxFQUFDLFVBQWI7QUFBd0IsV0FBUyxFQUFDO0FBQWxDLEVBUkYsZUFTRTtBQUFNLFFBQU0sRUFBQyxHQUFiO0FBQWlCLFdBQVMsRUFBQyxPQUEzQjtBQUFtQyxhQUFXLEVBQUM7QUFBL0MsRUFURixDQXZCRixlQWtDRTtBQUNFLElBQUUsRUFBQyxlQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsU0FITDtBQUlFLElBQUUsRUFBQyxTQUpMO0FBS0UsSUFBRSxFQUFDLFNBTEw7QUFNRSxlQUFhLEVBQUM7QUFOaEIsZ0JBUUU7QUFBTSxXQUFTLEVBQUM7QUFBaEIsRUFSRixlQVNFO0FBQU0sUUFBTSxFQUFDLEdBQWI7QUFBaUIsV0FBUyxFQUFDLFNBQTNCO0FBQXFDLGFBQVcsRUFBQztBQUFqRCxFQVRGLENBbENGLGVBNkNFO0FBQ0UsSUFBRSxFQUFDLGVBREw7QUFFRSxJQUFFLEVBQUMsU0FGTDtBQUdFLElBQUUsRUFBQyxRQUhMO0FBSUUsSUFBRSxFQUFDLFNBSkw7QUFLRSxJQUFFLEVBQUMsU0FMTDtBQU1FLGVBQWEsRUFBQztBQU5oQixnQkFRRTtBQUFNLFdBQVMsRUFBQztBQUFoQixFQVJGLGVBU0U7QUFBTSxRQUFNLEVBQUMsR0FBYjtBQUFpQixXQUFTLEVBQUMsU0FBM0I7QUFBcUMsYUFBVyxFQUFDO0FBQWpELEVBVEYsQ0E3Q0YsZUF3REU7QUFDRSxJQUFFLEVBQUMsZUFETDtBQUVFLElBQUUsRUFBQyxTQUZMO0FBR0UsSUFBRSxFQUFDLFNBSEw7QUFJRSxJQUFFLEVBQUMsT0FKTDtBQUtFLElBQUUsRUFBQyxTQUxMO0FBTUUsZUFBYSxFQUFDO0FBTmhCLGdCQVFFO0FBQU0sV0FBUyxFQUFDO0FBQWhCLEVBUkYsZUFTRTtBQUFNLFFBQU0sRUFBQyxHQUFiO0FBQWlCLFdBQVMsRUFBQyxTQUEzQjtBQUFxQyxhQUFXLEVBQUM7QUFBakQsRUFURixDQXhERixlQW1FRTtBQUNFLElBQUUsRUFBQyxlQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsU0FITDtBQUlFLElBQUUsRUFBQyxTQUpMO0FBS0UsSUFBRSxFQUFDLFNBTEw7QUFNRSxlQUFhLEVBQUM7QUFOaEIsZ0JBUUU7QUFBTSxXQUFTLEVBQUM7QUFBaEIsRUFSRixlQVNFO0FBQU0sUUFBTSxFQUFDLEdBQWI7QUFBaUIsV0FBUyxFQUFDLFNBQTNCO0FBQXFDLGFBQVcsRUFBQztBQUFqRCxFQVRGLENBbkVGLGVBOEVFO0FBQ0UsSUFBRSxFQUFDLGVBREw7QUFFRSxJQUFFLEVBQUMsUUFGTDtBQUdFLElBQUUsRUFBQyxTQUhMO0FBSUUsSUFBRSxFQUFDLFNBSkw7QUFLRSxJQUFFLEVBQUMsU0FMTDtBQU1FLGVBQWEsRUFBQztBQU5oQixnQkFRRTtBQUFNLFdBQVMsRUFBQztBQUFoQixFQVJGLGVBU0U7QUFBTSxRQUFNLEVBQUMsR0FBYjtBQUFpQixXQUFTLEVBQUMsU0FBM0I7QUFBcUMsYUFBVyxFQUFDO0FBQWpELEVBVEYsQ0E5RUYsZUF5RkU7QUFDRSxJQUFFLEVBQUMsZUFETDtBQUVFLElBQUUsRUFBQyxTQUZMO0FBR0UsSUFBRSxFQUFDLFNBSEw7QUFJRSxJQUFFLEVBQUMsU0FKTDtBQUtFLElBQUUsRUFBQyxTQUxMO0FBTUUsZUFBYSxFQUFDO0FBTmhCLGdCQVFFO0FBQU0sV0FBUyxFQUFDO0FBQWhCLEVBUkYsZUFTRTtBQUFNLFFBQU0sRUFBQyxHQUFiO0FBQWlCLFdBQVMsRUFBQyxTQUEzQjtBQUFxQyxhQUFXLEVBQUM7QUFBakQsRUFURixDQXpGRixlQW9HRTtBQUNFLElBQUUsRUFBQyxlQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsU0FITDtBQUlFLElBQUUsRUFBQyxTQUpMO0FBS0UsSUFBRSxFQUFDLFNBTEw7QUFNRSxlQUFhLEVBQUM7QUFOaEIsZ0JBUUU7QUFBTSxXQUFTLEVBQUM7QUFBaEIsRUFSRixlQVNFO0FBQU0sUUFBTSxFQUFDLEdBQWI7QUFBaUIsV0FBUyxFQUFDLFNBQTNCO0FBQXFDLGFBQVcsRUFBQztBQUFqRCxFQVRGLENBcEdGLGVBK0dFO0FBQ0UsSUFBRSxFQUFDLGdCQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsU0FITDtBQUlFLElBQUUsRUFBQyxRQUpMO0FBS0UsSUFBRSxFQUFDLFNBTEw7QUFNRSxlQUFhLEVBQUM7QUFOaEIsZ0JBUUU7QUFBTSxXQUFTLEVBQUM7QUFBaEIsRUFSRixlQVNFO0FBQU0sUUFBTSxFQUFDLEdBQWI7QUFBaUIsV0FBUyxFQUFDLFNBQTNCO0FBQXFDLGFBQVcsRUFBQztBQUFqRCxFQVRGLENBL0dGLGVBMEhFO0FBQ0UsSUFBRSxFQUFDLGdCQURMO0FBRUUsSUFBRSxFQUFDLFNBRkw7QUFHRSxJQUFFLEVBQUMsUUFITDtBQUlFLElBQUUsRUFBQyxTQUpMO0FBS0UsSUFBRSxFQUFDLFNBTEw7QUFNRSxlQUFhLEVBQUM7QUFOaEIsZ0JBUUU7QUFBTSxXQUFTLEVBQUM7QUFBaEIsRUFSRixlQVNFO0FBQU0sUUFBTSxFQUFDLEdBQWI7QUFBaUIsV0FBUyxFQUFDLFNBQTNCO0FBQXFDLGFBQVcsRUFBQztBQUFqRCxFQVRGLENBMUhGLENBOU5GLENBREYsQ0FERjs7QUEwV0EsK0RBQWVBLG1CQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBOztBQVlBLE1BQU1DLE1BQU0sR0FBRyxtQkFDYiwyREFBQyx1REFBRCxxQkFDRSwyREFBQyxrREFBRCxxQkFDRSwyREFBQyxvREFBRCxxQkFDRSwyREFBQyxtREFBRCxlQURGLGVBRUUsMkRBQUMsa0RBQUQ7QUFBVSxNQUFJLEVBQUM7QUFBZix1QkFGRixDQURGLGVBS0UsMkRBQUMsb0RBQUQscUJBQ0UsMkRBQUMsbURBQUQsZ0JBREYsZUFFRSwyREFBQyxrREFBRDtBQUFVLE1BQUksRUFBQztBQUFmLHdCQUZGLENBTEYsQ0FERixlQWFFLDJEQUFDLDhEQUFELHFCQUNFLDJEQUFDLDBEQUFELHFCQUNFLDJEQUFDLGdEQUFELCtCQURGLENBREYsZUFJRSwyREFBQyx5REFBRCxxQkFDRSwyREFBQyw0REFBRDtBQUFhLE1BQUksRUFBQztBQUFsQixnQkFDRSwyREFBQyx3REFBRDtBQUFjLE1BQUksRUFBQztBQUFuQixFQURGLENBREYsZUFJRSwyREFBQyw0REFBRDtBQUFhLE1BQUksRUFBQztBQUFsQixnQkFDRSwyREFBQywwREFBRDtBQUFnQixNQUFJLEVBQUM7QUFBckIsRUFERixDQUpGLGVBT0UsMkRBQUMsNERBQUQ7QUFBYSxNQUFJLEVBQUM7QUFBbEIsZ0JBQ0UsMkRBQUMsMkRBQUQ7QUFBaUIsTUFBSSxFQUFDO0FBQXRCLEVBREYsQ0FQRixDQUpGLENBYkYsQ0FERjs7QUFpQ0EsK0RBQWVBLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUVPLE1BQU1DLGFBQWEsR0FBR2Ysa0VBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsQ0FWTztBQVlBLE1BQU1XLFFBQVEsR0FBR2hCLDREQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXhCTztBQTBCQSxNQUFNWSxvQkFBb0IsR0FBR2pCLDhEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBYk87QUFlQSxNQUFNYSxnQkFBZ0IsR0FBR2xCLDhEQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxXQUFZSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPO0FBaUJBLE1BQU1jLE1BQU0sR0FBR25CLDREQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBaEJPO0FBa0JBLE1BQU1lLGVBQWUsR0FBR3BCLDhEQUFXO0FBQzFDO0FBQ0E7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSTztBQVVBLE1BQU1pQixRQUFRLEdBQUdyQiw2REFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkksRUFBRztBQUNqRDtBQUNBO0FBQ0EsV0FBWU4sS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQW5CTztBQXFCQSxNQUFNaUIsVUFBVSxHQUFHdEIsOERBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxPO0FBT0EsTUFBTXVCLFNBQVMsR0FBR3ZCLDZEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBYk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJUDtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQVNBLE1BQU1tQixNQUFNLEdBQUcsbUJBQ2IsMkRBQUMsbURBQUQscUJBQ0UsMkRBQUMsOENBQUQscUJBQ0UsMkRBQUMsa0RBQUQ7QUFBTSxNQUFJLEVBQUM7QUFBWCxnQkFDRTtBQUFHLE1BQUksRUFBQyxHQUFSO0FBQVksT0FBSyxFQUFFO0FBQUVDLFdBQU8sRUFBRSxNQUFYO0FBQW1CQyxjQUFVLEVBQUUsUUFBL0I7QUFBeUNDLFNBQUssRUFBRTtBQUFoRDtBQUFuQixnQkFDRSwyREFBQyxxREFBRDtBQUFXLE1BQUksRUFBQztBQUFoQixFQURGLGVBRUU7QUFBTSxPQUFLLEVBQUU7QUFBRUMsWUFBUSxFQUFFO0FBQVo7QUFBYixvQkFGRixDQURGLENBREYsQ0FERixlQVNFLDJEQUFDLDhDQUFELHFCQUNFLG9GQUNFLDJEQUFDLGtEQUFEO0FBQU0sTUFBSSxFQUFDO0FBQVgsZ0JBQ0UsMkRBQUMsaURBQUQsbUJBREYsQ0FERixDQURGLGVBTUUsb0ZBQ0UsMkRBQUMsa0RBQUQ7QUFBTSxNQUFJLEVBQUM7QUFBWCxnQkFDRSwyREFBQyxpREFBRCx1QkFERixDQURGLENBTkYsZUFXRSxvRkFDRSwyREFBQyxrREFBRDtBQUFNLE1BQUksRUFBQztBQUFYLGdCQUNFLDJEQUFDLGlEQUFELGdCQURGLENBREYsQ0FYRixDQVRGLGVBMEJFLDJEQUFDLDhDQUFELHFCQUNFLDJEQUFDLHFEQUFEO0FBQWEsTUFBSSxFQUFDO0FBQWxCLGdCQUNFLDJEQUFDLHdEQUFEO0FBQWMsTUFBSSxFQUFDO0FBQW5CLEVBREYsQ0FERixlQUlFLDJEQUFDLHFEQUFEO0FBQWEsTUFBSSxFQUFDO0FBQWxCLGdCQUNFLDJEQUFDLDBEQUFEO0FBQWdCLE1BQUksRUFBQztBQUFyQixFQURGLENBSkYsZUFPRSwyREFBQyxxREFBRDtBQUFhLE1BQUksRUFBQztBQUFsQixnQkFDRSwyREFBQywyREFBRDtBQUFpQixNQUFJLEVBQUM7QUFBdEIsRUFERixDQVBGLENBMUJGLENBREY7O0FBeUNBLCtEQUFlSixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUVPLE1BQU1LLFNBQVMsR0FBRzdCLDhEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FkTztBQWdCQSxNQUFNeUIsSUFBSSxHQUFHOUIsOERBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQSxDQVJPO0FBVUEsTUFBTTBCLElBQUksR0FBRy9CLDhEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBLENBUE87QUFTQSxNQUFNMkIsSUFBSSxHQUFHaEMsOERBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLENBVE8sQyxDQVdQOztBQUNPLE1BQU00QixPQUFPLEdBQUdqQyw0REFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQSxDQWJPLEMsQ0FlUDs7QUFDTyxNQUFNNkIsZUFBZSxHQUFHbEMsaUVBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0EsV0FBWUosS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0EsQ0F0Qk87QUF3QkEsTUFBTStCLGVBQWUsR0FBR25DLHdEQUFNLENBQUNvQyw4REFBRCxDQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUJBLE1BQU0sR0FBRyxHQUFILEdBQVMsS0FBTztBQUNwRCxlQUFlLENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWlCQSxNQUFNLEdBQUcsWUFBSCxHQUFrQixXQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLFdBQVlwQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLENBZE8sQyxDQWdCUDs7QUFFTyxNQUFNaUMsV0FBVyxHQUFHdEMsNERBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWTyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdQO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBRUEsTUFBTXVDLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDWCx1SUFDRSwyREFBQyw2REFBRDtBQUFTLEtBQUcsTUFBWjtBQUFhLFdBQVM7QUFBdEIsZ0JBQ0UsMkRBQUMsK0NBQUQscUJBQ0UsMkRBQUMsa0VBQUQ7QUFBYyxNQUFJLE1BQWxCO0FBQW1CLFFBQU07QUFBekIsOEJBRUUsc0VBRkYsMEJBREYsZUFNRSwyREFBQyxpRUFBRCwwR0FORixlQVVFLDJEQUFDLG9FQUFEO0FBQVEsU0FBTyxFQUFFQTtBQUFqQixnQkFWRixDQURGLENBREYsQ0FERjs7QUFtQkFELElBQUksQ0FBQ0UsU0FBTCxHQUFpQjtBQUFFRCxhQUFXLEVBQUVFLG1FQUF5QkM7QUFBeEMsQ0FBakI7QUFFQSwrREFBZUosSUFBZixFOzs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVBLE1BQU1LLFdBQVcsR0FBRzVDLDhEQUFXO0FBQy9CO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUosS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FkQTtBQWdCQSwrREFBZXdDLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUVPLE1BQU1DLEdBQUcsR0FBRzdDLDhEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMTztBQU9BLE1BQU04QyxhQUFhLEdBQUc5QyxrRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFVQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWJPO0FBZUEsTUFBTTBDLFFBQVEsR0FBRy9DLDhEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0EsQ0FSTztBQVVBLE1BQU0yQyxZQUFZLEdBQUdoRCw4REFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTUEsTUFBTWlELFdBQVcsR0FBR2pELDZEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZ0JDLEtBQUQsSUFBWUEsS0FBSyxDQUFDaUQsS0FBTixHQUFjLE1BQWQsR0FBdUIsTUFBUTtBQUMxRCxDQU5PO0FBUUEsTUFBTUMsRUFBRSxHQUFHbkQsNkRBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTk87QUFRQSxNQUFNb0QsS0FBSyxHQUFHcEQsOERBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJPO0FBVUEsTUFBTXFELFFBQVEsR0FBR3JELDREQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBLENBVk87QUFZQSxNQUFNaUQsV0FBVyxHQUFHdEQsNkRBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTk87QUFRQSxNQUFNdUQsYUFBYSxHQUFHdkQsNERBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWTztBQVlBLE1BQU13RCxPQUFPLEdBQUd4RCw2REFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTUEsTUFBTXlELEdBQUcsR0FBR3pELDZEQUFVO0FBQzdCO0FBQ0E7QUFDQSxDQUhPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdQO0FBQ0E7QUFhQTtBQUtBOztBQUVBLE1BQU0wRCxRQUFRLEdBQUcsbUJBQ2YsMkRBQUMsNkRBQUQ7QUFBUyxXQUFTLE1BQWxCO0FBQW1CLElBQUUsRUFBQztBQUF0QixnQkFDRSwyREFBQyxvRUFBRCxPQURGLGVBRUUsMkRBQUMsa0VBQUQ7QUFBYyxNQUFJO0FBQWxCLGNBRkYsZUFHRSwyREFBQyx3REFBRCxRQUNHQyw2REFBQSxDQUFjQyxDQUFELGlCQUNaLDJEQUFDLG1EQUFEO0FBQVUsS0FBRyxFQUFFQTtBQUFmLGdCQUNFLDJEQUFDLDhDQUFEO0FBQUssS0FBRyxFQUFFQSxDQUFDLENBQUNDO0FBQVosRUFERixlQUVFLDJEQUFDLHVEQUFELHFCQUNFLDJEQUFDLHNEQUFEO0FBQWEsT0FBSztBQUFsQixHQUFvQkQsQ0FBQyxDQUFDVixLQUF0QixDQURGLGVBRUUsMkRBQUMsNkNBQUQsT0FGRixDQUZGLGVBTUUsMkRBQUMsbURBQUQ7QUFBVSxXQUFTLEVBQUM7QUFBcEIsR0FBaUNVLENBQUMsQ0FBQ0UsV0FBbkMsQ0FORixlQU9FLHFGQUNFLDJEQUFDLHVEQUFEO0FBQWMsT0FBSyxFQUFFO0FBQUVDLGFBQVMsRUFBRSxRQUFiO0FBQXVCcEMsU0FBSyxFQUFFLFFBQTlCO0FBQXdDQyxZQUFRLEVBQUU7QUFBbEQ7QUFBckIsV0FERixlQUVFLDJEQUFDLGtEQUFELFFBQ0dnQyxDQUFDLENBQUNJLElBQUYsQ0FBT25FLEdBQVAsQ0FBWW9FLENBQUQsaUJBQ1YsMkRBQUMsOENBQUQ7QUFBSyxLQUFHLEVBQUVBO0FBQVYsR0FBY0EsQ0FBZCxDQURELENBREgsTUFGRixDQVBGLGVBZ0JFLDJEQUFDLHNEQUFELHFCQUNFLDJEQUFDLHdEQUFEO0FBQWUsTUFBSSxFQUFFTCxDQUFDLENBQUNNO0FBQXZCLFVBREYsZUFFRSwyREFBQyx3REFBRDtBQUFlLE1BQUksRUFBRU4sQ0FBQyxDQUFDTztBQUF2QixZQUZGLENBaEJGLENBREQsQ0FESCxDQUhGLENBREY7O0FBZ0NBLCtEQUFlVCxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFLQTtBQU1BOztBQVFBLE1BQU1VLFlBQVksR0FBRyxtQkFDbkIsMkRBQUMsNkRBQUQ7QUFBUyxJQUFFLEVBQUM7QUFBWixnQkFDRSwyREFBQyxvRUFBRDtBQUFnQixTQUFPO0FBQXZCLEVBREYsZUFFRSwyREFBQyxrRUFBRCx1QkFGRixlQUdFLDJEQUFDLGlFQUFELHdHQUhGLGVBT0UsMkRBQUMsb0RBQUQscUJBQ0UsMkRBQUMsd0RBQUQscUJBQ0UseUZBQ0UsMkRBQUMsbURBQUQ7QUFBUyxNQUFJLEVBQUM7QUFBZCxFQURGLENBREYsZUFJRSwyREFBQyw2REFBRCxxQkFDRSwyREFBQyx5REFBRCxvQkFERixlQUVFLDJEQUFDLDZEQUFELHVDQUVFLHNFQUZGLHdCQUlFLHNFQUpGLHVCQU1FLHNFQU5GLDZCQVFFLHNFQVJGLDJCQVVFLHNFQVZGLHdCQVlFLHNFQVpGLDRCQWNFLHNFQWRGLDBCQWdCRSxzRUFoQkYsV0FGRixDQUpGLENBREYsZUE0QkUsMkRBQUMsd0RBQUQscUJBQ0UseUZBQ0UsMkRBQUMsc0RBQUQ7QUFBWSxNQUFJLEVBQUM7QUFBakIsRUFERixDQURGLGVBSUUsMkRBQUMsNkRBQUQscUJBQ0UsMkRBQUMseURBQUQsbUJBREYsZUFFRSwyREFBQyw2REFBRCx3Q0FFRSxzRUFGRixxQ0FJRSxzRUFKRix1QkFNRSxzRUFORix3QkFRRSxzRUFSRixVQUZGLENBSkYsQ0E1QkYsZUErQ0UsMkRBQUMsd0RBQUQscUJBQ0UseUZBQ0UsMkRBQUMsa0RBQUQ7QUFBUSxNQUFJLEVBQUM7QUFBYixFQURGLENBREYsZUFJRSwyREFBQyw2REFBRCxxQkFDRSwyREFBQyx5REFBRCwyQkFERixlQUVFLDJEQUFDLDZEQUFELHdDQUVFLHNFQUZGLHNCQUlFLHNFQUpGLHlCQU1FLHNFQU5GLHlCQVFFLHNFQVJGLDBCQVVFLHNFQVZGLGdEQVlFLHNFQVpGLHdCQWNFLHNFQWRGLHNCQWdCRSxzRUFoQkYsbUNBa0JFLHNFQWxCRixVQUZGLENBSkYsQ0EvQ0YsQ0FQRixlQW9GRSwyREFBQyxvRUFBRDtBQUFnQixVQUFRO0FBQXhCLEVBcEZGLENBREY7O0FBeUZBLCtEQUFlQSxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUVPLE1BQU1DLGNBQWMsR0FBR3JFLDhEQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JJLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZTixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FwQk87QUFzQkEsTUFBTWtFLFNBQVMsR0FBR3RFLDhEQUFXO0FBQ3BDO0FBQ0EsQ0FGTztBQUlBLE1BQU11RSxJQUFJLEdBQUd2RSw2REFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQSxXQUFZTixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBcEJPO0FBc0JBLE1BQU1tRSxhQUFhLEdBQUd4RSw4REFBVztBQUN4QztBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxDQVBPO0FBU0EsTUFBTW9FLFNBQVMsR0FBR3pFLDZEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FqQk87QUFtQkEsTUFBTXFFLGFBQWEsR0FBRzFFLDREQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxDQVpPO0FBY0EsTUFBTXNFLFFBQVEsR0FBRzNFLDZEQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBLFdBQVlILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpPO0FBY0EsTUFBTXVFLFFBQVEsR0FBRzVFLDhEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBaEJPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdQO0FBQ0E7QUFXQTtBQU1BO0FBRUEsTUFBTXdFLG9CQUFvQixHQUFHQyxvRUFBN0I7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEJDLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUNBLFFBQU1DLFdBQVcsR0FBR0MsNkNBQU0sRUFBMUI7O0FBRUEsUUFBTUMsTUFBTSxHQUFHLENBQUNDLElBQUQsRUFBT0MsSUFBUCxLQUFnQkQsSUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBRUQsUUFBRjtBQUFRRSxZQUFRLEVBQUU7QUFBbEIsR0FBZCxDQUEvQjs7QUFDQSxRQUFNakQsV0FBVyxHQUFHLENBQUNrRCxDQUFELEVBQUlDLENBQUosS0FBVTtBQUM1QkQsS0FBQyxDQUFDRSxjQUFGOztBQUNBLFFBQUlULFdBQVcsQ0FBQ1UsT0FBaEIsRUFBeUI7QUFDdkIsWUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2IsV0FBVyxDQUFDVSxPQUFaLENBQW9CSSxXQUFwQixHQUMxQixHQUQwQixJQUNuQk4sQ0FBQyxHQUFHYixvRUFEZSxDQUFYLENBQW5CO0FBRUFPLFlBQU0sQ0FBQ0YsV0FBVyxDQUFDVSxPQUFiLEVBQXNCQyxVQUF0QixDQUFOO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFFBQU1JLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFFBQUlmLFdBQVcsQ0FBQ1UsT0FBaEIsRUFBeUI7QUFDdkIsWUFBTU0sS0FBSyxHQUFHSixJQUFJLENBQUNLLEtBQUwsQ0FBWWpCLFdBQVcsQ0FBQ1UsT0FBWixDQUFvQkMsVUFBcEIsSUFDdkJYLFdBQVcsQ0FBQ1UsT0FBWixDQUFvQkksV0FBcEIsR0FBa0MsR0FEWCxDQUFELEdBQ29CbkIsb0VBRC9CLENBQWQ7QUFFQUcsbUJBQWEsQ0FBQ2tCLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FORCxDQWRxQixDQXFCckI7QUFDQTs7O0FBQ0FFLGtEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFlBQVksR0FBRyxNQUFNO0FBQ3pCakIsWUFBTSxDQUFDRixXQUFXLENBQUNVLE9BQWIsRUFBc0IsQ0FBdEIsQ0FBTjtBQUNELEtBRkQ7O0FBSUFVLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NGLFlBQWxDO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNFLDJEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDO0FBQVosa0JBQ0UsMkRBQUMsa0VBQUQsbUJBREYsZUFFRSwyREFBQyxpRUFBRCxzS0FGRixlQU9FLDJEQUFDLDZEQUFEO0FBQW1CLE9BQUcsRUFBRW5CLFdBQXhCO0FBQXFDLFlBQVEsRUFBRWU7QUFBL0Msa0JBQ0UsMEhBQ0dwQixpRUFBQSxDQUFpQixDQUFDMkIsSUFBRCxFQUFPTixLQUFQLGtCQUNoQiwyREFBQyxvRUFBRDtBQUNFLE9BQUcsRUFBRU0sSUFEUDtBQUVFLFNBQUssRUFBRU4sS0FBSyxLQUFLdEIsb0JBQW9CLEdBQUc7QUFGMUMsa0JBSUUsMkRBQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUVzQixLQURUO0FBRUUsTUFBRSxFQUFHLGtCQUFpQkEsS0FBTSxFQUY5QjtBQUdFLFVBQU0sRUFBRW5CLFVBSFY7QUFJRSxXQUFPLEVBQUdVLENBQUQsSUFBT2xELFdBQVcsQ0FBQ2tELENBQUQsRUFBSVMsS0FBSjtBQUo3QixrQkFNRSwyREFBQyw2REFBRCxRQUNJLEdBQUVNLElBQUksQ0FBQ0MsSUFBSyxFQURoQixlQUVFLDJEQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFDLEtBRFI7QUFFRSxVQUFNLEVBQUMsR0FGVDtBQUdFLFdBQU8sRUFBQyxXQUhWO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxTQUFLLEVBQUM7QUFMUixrQkFPRTtBQUNFLFlBQVEsRUFBQyxTQURYO0FBRUUsWUFBUSxFQUFDLFNBRlg7QUFHRSxLQUFDLEVBQUMsMkpBSEo7QUFJRSxRQUFJLEVBQUMscUJBSlA7QUFLRSxlQUFXLEVBQUM7QUFMZCxJQVBGLGVBY0Usc0ZBQ0U7QUFDRSxNQUFFLEVBQUMsZUFETDtBQUVFLE1BQUUsRUFBQyxjQUZMO0FBR0UsTUFBRSxFQUFDLEtBSEw7QUFJRSxNQUFFLEVBQUMsS0FKTDtBQUtFLE1BQUUsRUFBQyxVQUxMO0FBTUUsaUJBQWEsRUFBQztBQU5oQixrQkFRRTtBQUFNLGtCQUFXO0FBQWpCLElBUkYsZUFTRTtBQUNFLFVBQU0sRUFBQyxTQURUO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxlQUFXLEVBQUM7QUFIZCxJQVRGLENBREYsQ0FkRixDQUZGLENBTkYsZUF5Q0UsMkRBQUMsNERBQUQsUUFBbUJELElBQUksQ0FBQzlHLElBQXhCLENBekNGLENBSkYsQ0FERCxDQURILENBREYsQ0FQRixlQTZERSwyREFBQywyREFBRCxRQUNHbUYsaUVBQUEsQ0FBaUIsQ0FBQzJCLElBQUQsRUFBT04sS0FBUCxrQkFDaEIsMkRBQUMsMERBQUQ7QUFDRSxPQUFHLEVBQUVNLElBRFA7QUFFRSxTQUFLLEVBQUVOLEtBRlQ7QUFHRSxVQUFNLEVBQUVuQixVQUhWO0FBSUUsV0FBTyxFQUFHVSxDQUFELElBQU9sRCxXQUFXLENBQUNrRCxDQUFELEVBQUlTLEtBQUosQ0FKN0I7QUFLRSxRQUFJLEVBQUM7QUFMUCxrQkFPRSwyREFBQyw2REFBRDtBQUFtQixVQUFNLEVBQUVuQjtBQUEzQixJQVBGLENBREQsQ0FESCxNQTdERixlQTJFRSwyREFBQyxvRUFBRCxPQTNFRixDQURGO0FBK0VELENBOUdEOztBQWdIQSwrREFBZUQsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdElBO0FBRU8sTUFBTTRCLGlCQUFpQixHQUFHM0csNkRBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTFCTztBQTRCQSxNQUFNdUcsd0JBQXdCLEdBQUc1Ryw4REFBVztBQUNuRCxXQUFZQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0EsaUJBQWlCLENBQUM7QUFBRXdHO0FBQUYsQ0FBRCxLQUFnQkEsS0FBSyxHQUFHLE9BQUgsR0FBYSxhQUFlO0FBQ2xFO0FBQ0EsQ0FMTztBQU9BLE1BQU1DLFlBQVksR0FBRzlHLDhEQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBWUgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBT0osS0FBRCxJQUFXQSxLQUFLLENBQUM4RyxNQUFOLE1BQWtCOUcsS0FBSyxDQUFDa0csS0FBTixHQUFjLFlBQWQsR0FBNkIsY0FBL0MsQ0FBK0Q7QUFDaEY7QUFDQSxDQXRCTztBQXdCQSxNQUFNYSxpQkFBaUIsR0FBR2hILDZEQUFVO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsQ0FwQk87QUFzQkEsTUFBTTRHLGVBQWUsR0FBR2pILDhEQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRPO0FBV0EsTUFBTTZHLGdCQUFnQixHQUFHbEgsNERBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FoQk87QUFrQkEsTUFBTThHLGVBQWUsR0FBR25ILDhEQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRPO0FBV0EsTUFBTStHLGNBQWMsR0FBR3BILGlFQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWNDLEtBQUQsSUFBV0EsS0FBSyxDQUFDOEcsTUFBTixNQUFrQjlHLEtBQUssQ0FBQ2tHLEtBQU4sR0FBYyxHQUFkLEdBQW9CLEtBQXRDLENBQTZDO0FBQ3JFLGVBQWdCbEcsS0FBRCxJQUFXQSxLQUFLLENBQUM4RyxNQUFOLE1BQWtCOUcsS0FBSyxDQUFDa0csS0FBTixHQUFjLFlBQWQsR0FBNkIsVUFBL0MsQ0FBMkQ7QUFDckY7QUFDQTtBQUNBO0FBQ0EsQ0FaTztBQWNBLE1BQU1rQixpQkFBaUIsR0FBR3JILDhEQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5PLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUEsTUFBTTJELFFBQVEsR0FBRyxDQUN0QjtBQUNFVCxPQUFLLEVBQUUsV0FEVDtBQUVFWSxhQUFXLEVBQUUsNE5BRmY7QUFHRUQsT0FBSyxFQUFFLHlDQUhUO0FBSUVHLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCLE1BQXhCLENBSlI7QUFLRUcsUUFBTSxFQUFFLGlEQUxWO0FBTUVELE9BQUssRUFBRSxzQ0FOVDtBQU9Fb0QsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRXBFLE9BQUssRUFBRSxhQURUO0FBRUVZLGFBQVcsRUFBRSxzSkFGZjtBQUdFRCxPQUFLLEVBQUUsdUNBSFQ7QUFJRUcsTUFBSSxFQUFFLENBQUMsWUFBRCxFQUFlLE9BQWYsRUFBd0IsTUFBeEIsRUFBZ0MsS0FBaEMsQ0FKUjtBQUtFRyxRQUFNLEVBQUUsc0RBTFY7QUFNRUQsT0FBSyxFQUFFLHlDQU5UO0FBT0VvRCxJQUFFLEVBQUU7QUFQTixDQVZzQixFQW1CdEI7QUFDRXBFLE9BQUssRUFBRSxnQkFEVDtBQUVFWSxhQUFXLEVBQUUseUdBRmY7QUFHRUQsT0FBSyxFQUFFLDRDQUhUO0FBSUVHLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCLE1BQXhCLENBSlI7QUFLRUcsUUFBTSxFQUFFLDJDQUxWO0FBTUVELE9BQUssRUFBRSwyQ0FOVDtBQU9Fb0QsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFcEUsT0FBSyxFQUFFLGlCQURUO0FBRUVZLGFBQVcsRUFBRSxpR0FGZjtBQUdFRCxPQUFLLEVBQUUsdUNBSFQ7QUFJRUcsTUFBSSxFQUFFLENBQUMsWUFBRCxFQUFlLE9BQWYsRUFBd0IsTUFBeEIsQ0FKUjtBQUtFRyxRQUFNLEVBQUUsMkNBTFY7QUFNRUQsT0FBSyxFQUFFLDJDQU5UO0FBT0VvRCxJQUFFLEVBQUU7QUFQTixDQTVCc0IsQ0FBakI7QUF1Q0EsTUFBTXhDLFlBQVksR0FBRyxDQUMxQjtBQUFFNEIsTUFBSSxFQUFFLElBQVI7QUFBYy9HLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFK0csTUFBSSxFQUFFLElBQVI7QUFBYy9HLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFK0csTUFBSSxFQUFFLElBQVI7QUFBYy9HLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFK0csTUFBSSxFQUFFLElBQVI7QUFBYy9HLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFK0csTUFBSSxFQUFFLElBQVI7QUFBYy9HLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTRILE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDYiwyREFBQyxpREFBRCxxQkFDRSwyREFBQyw4REFBRCxPQURGLGVBRUUseUVBQU9BLFFBQVAsQ0FGRixlQUdFLDJEQUFDLDhEQUFELE9BSEYsQ0FERjs7QUFRQUQsTUFBTSxDQUFDOUUsU0FBUCxHQUFtQjtBQUFFK0UsVUFBUSxFQUFFOUUsNERBQUEsQ0FBcUIrRSxNQUFyQixFQUE2QjlFO0FBQXpDLENBQW5CO0FBRUEsK0RBQWU0RSxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUEsTUFBTTFGLFNBQVMsR0FBRzdCLDhEQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLENBSkE7QUFNQSwrREFBZTZCLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNNkYsSUFBSSxHQUFHLG1CQUNYLDJEQUFDLG1EQUFELHFCQUNFLDJEQUFDLDZEQUFEO0FBQVMsTUFBSTtBQUFiLGdCQUNFLDJEQUFDLDBEQUFELE9BREYsZUFFRSwyREFBQyx3RkFBRCxPQUZGLENBREYsZUFLRSwyREFBQyxrRUFBRCxPQUxGLGVBTUUsMkRBQUMsMEVBQUQsT0FORixlQU9FLDJEQUFDLGtFQUFELE9BUEYsZUFRRSwyREFBQyw4RUFBRCxPQVJGLENBREY7O0FBYUEsK0RBQWVBLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxDQUFDO0FBQ2RDLEtBRGM7QUFFZEMsTUFGYztBQUdkQyxVQUhjO0FBSWRDLFNBSmM7QUFLZFA7QUFMYyxDQUFELGtCQU9iLDJEQUFDLDhDQUFEO0FBQVksS0FBRyxFQUFFSSxHQUFqQjtBQUFzQixNQUFJLEVBQUVDLElBQTVCO0FBQWtDLFVBQVEsRUFBRUM7QUFBNUMsR0FDR04sUUFESCxlQUVFLDJEQUFDLCtDQUFEO0FBQWEsS0FBRyxFQUFFSSxHQUFsQjtBQUF1QixTQUFPLEVBQUVHLE9BQWhDO0FBQXlDLFVBQVEsRUFBRUQ7QUFBbkQsR0FDR04sUUFESCxDQUZGLENBUEY7O0FBZUFHLE1BQU0sQ0FBQ2xGLFNBQVAsR0FBbUI7QUFBRW9GLE1BQUksRUFBRW5GLG1FQUF5QkM7QUFBakMsQ0FBbkI7QUFDQWdGLE1BQU0sQ0FBQ2xGLFNBQVAsR0FBbUI7QUFBRXFGLFVBQVEsRUFBRXBGLG1FQUF5QkM7QUFBckMsQ0FBbkI7QUFDQWdGLE1BQU0sQ0FBQ2xGLFNBQVAsR0FBbUI7QUFBRXNGLFNBQU8sRUFBRXJGLG1FQUF5QkM7QUFBcEMsQ0FBbkI7QUFDQWdGLE1BQU0sQ0FBQ2xGLFNBQVAsR0FBbUI7QUFBRW1GLEtBQUcsRUFBRWxGLG1FQUF5QkM7QUFBaEMsQ0FBbkI7QUFDQWdGLE1BQU0sQ0FBQ2xGLFNBQVAsR0FBbUI7QUFBRStFLFVBQVEsRUFBRTlFLG1FQUF5QkM7QUFBckMsQ0FBbkI7QUFFQSwrREFBZWdGLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFFQTs7QUFDTyxNQUFNSyxPQUFPLEdBQUdoSSxrRUFBZTtBQUN0QyxhQUFjQyxLQUFELElBQVlBLEtBQUssQ0FBQ2dJLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQVE7QUFDdkQsb0JBQXFCaEksS0FBRCxJQUFZQSxLQUFLLENBQUNpSSxHQUFOLEdBQVksS0FBWixHQUFvQixRQUFVO0FBQzlELGFBQWNqSSxLQUFELElBQVlBLEtBQUssQ0FBQ2tJLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsYUFBZTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZbEksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxXQUFZSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pELGVBQWdCSixLQUFELElBQVlBLEtBQUssQ0FBQ2tJLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsYUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxDQW5CTztBQXFCQSxNQUFNQyxZQUFZLEdBQUdwSSw2REFBVTtBQUN0QztBQUNBLGVBQWdCQyxLQUFELElBQVlBLEtBQUssQ0FBQ29JLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQVE7QUFDekQsaUJBQWtCcEksS0FBRCxJQUFZQSxLQUFLLENBQUNvSSxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWNwSSxLQUFELElBQVlBLEtBQUssQ0FBQ29JLElBQU4sR0FBYSxhQUFiLEdBQTZCLEdBQUs7QUFDM0QsV0FBWXBJLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQsaUJBQWtCSCxLQUFELElBQVlBLEtBQUssQ0FBQ29JLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQVE7QUFDM0QsbUJBQW9CcEksS0FBRCxJQUFZQSxLQUFLLENBQUNvSSxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFRO0FBQzdEO0FBQ0EsZUFBZ0JwSSxLQUFELElBQVlBLEtBQUssQ0FBQ29JLElBQU4sR0FBYSxhQUFiLEdBQTZCLEdBQUs7QUFDN0Q7QUFDQSxXQUFZcEksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0EsaUJBQWtCSixLQUFELElBQVlBLEtBQUssQ0FBQ29JLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQVE7QUFDM0QsbUJBQW9CcEksS0FBRCxJQUFZQSxLQUFLLENBQUNvSSxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFRO0FBQzdEO0FBQ0EsZUFBZ0JwSSxLQUFELElBQVlBLEtBQUssQ0FBQ29JLElBQU4sR0FBYSxZQUFiLEdBQTRCLEdBQUs7QUFDNUQ7QUFDQTtBQUNBLENBMUJPO0FBNEJBLE1BQU1DLFdBQVcsR0FBR3RJLDREQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCTztBQW9CQSxNQUFNa0ksY0FBYyxHQUFHdkksOERBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBaUJDLEtBQUQsSUFBWUEsS0FBSyxDQUFDdUksUUFBTixHQUN0QixtREFEc0IsR0FFdEIsbURBQXFEO0FBQzNELGNBQWV2SSxLQUFELElBQVlBLEtBQUssQ0FBQ3dJLE9BQU4sR0FBZ0IsUUFBaEIsR0FBMkIsRUFBSTtBQUN6RCxXQUFZeEksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxXQUFZSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLENBakJPO0FBbUJBLE1BQU1xSSxjQUFjLEdBQUcxSSw0REFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsQ0FmTztBQWlCQSxNQUFNc0ksWUFBWSxHQUFHM0ksaUVBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVlILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTVDTztBQThDQSxNQUFNdUksVUFBVSxHQUFHNUksOERBQVc7QUFDckMsV0FBVyxDQUFDO0FBQUU0SDtBQUFGLENBQUQsS0FBY0EsR0FBRyxHQUFHLE9BQUgsR0FBYSxPQUFTO0FBQ2xELFlBQVksQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBY0EsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUFRO0FBQ2pEO0FBQ0EsZUFBZSxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLENBQUM7QUFBRUEsS0FBRjtBQUFPQztBQUFQLENBQUQsS0FBcUJELEdBQUcsSUFBSUMsSUFBUixHQUFnQixHQUFoQixHQUFzQixVQUFZO0FBQ2xFO0FBQ0EsZ0JBQWdCLENBQUM7QUFBRUQ7QUFBRixDQUFELEtBQWNBLEdBQUcsR0FBRyxtREFBSCxHQUF5RCxtREFBcUQ7QUFDL0k7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLENBQUM7QUFBRUU7QUFBRixDQUFELEtBQW1CQSxRQUFRLEdBQUcsSUFBSCxHQUFVLEdBQUs7QUFDdkQsV0FBWTdILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQsYUFBYSxDQUFDO0FBQUV3SDtBQUFGLENBQUQsS0FBY0EsR0FBRyxHQUFHLE9BQUgsR0FBYSxPQUFTO0FBQ3BELGNBQWMsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBY0EsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUFRO0FBQ25ELGlCQUFpQixDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQVE7QUFDdEQscUJBQXFCLENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWNBLEdBQUcsR0FBRyxHQUFILEdBQVMsTUFBUTtBQUN2RDtBQUNBLFdBQVkzSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixDQUFDO0FBQUV1SDtBQUFGLENBQUQsS0FBY0EsR0FBRyxHQUFHLEdBQUgsR0FBUyxNQUFRO0FBQ3ZEO0FBQ0EsQ0E3Qk87QUErQkEsTUFBTWlCLFdBQVcsR0FBRzdJLGlFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixDQUFDO0FBQUU0SDtBQUFGLENBQUQsS0FBY0EsR0FBRyxHQUFHLG1EQUFILEdBQXlELG1EQUFxRDtBQUMvSSxhQUFhLENBQUM7QUFBRUU7QUFBRixDQUFELEtBQW1CQSxRQUFRLEdBQUcsSUFBSCxHQUFVLEdBQUs7QUFDdkQ7QUFDQSxlQUFlLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWNBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixDQUFDO0FBQUVFO0FBQUYsQ0FBRCxLQUFtQkEsUUFBUSxHQUFHLG1GQUFILEdBQXlGLE1BQVE7QUFDNUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBWTdILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQsaUJBQWlCLENBQUM7QUFBRXdIO0FBQUYsQ0FBRCxLQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQVE7QUFDdEQ7QUFDQSxXQUFZM0gsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRDtBQUNBO0FBQ0EsQ0F4Q087QUEwQ0EsTUFBTXlJLGFBQWEsR0FBRzlJLDhEQUFXO0FBQ3hDLGlCQUFpQixDQUFDO0FBQUUrSTtBQUFGLENBQUQsS0FBZ0JBLEtBQUssR0FBRyxNQUFILEdBQVksTUFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFZOUksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRCxtQkFBbUIsQ0FBQztBQUFFMkk7QUFBRixDQUFELEtBQWdCQSxLQUFLLEdBQUcsTUFBSCxHQUFZLEtBQU87QUFDM0Q7QUFDQSxXQUFZOUksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBRztBQUNqRCxtQkFBbUIsQ0FBQztBQUFFMEk7QUFBRixDQUFELEtBQWdCQSxLQUFLLEdBQUcsR0FBSCxHQUFTLEtBQU87QUFDeEQ7QUFDQSxDQWpCTztBQW1CQSxNQUFNQyxXQUFXLEdBQUdoSiw4REFBVztBQUN0QztBQUNBLFlBQVksQ0FBQztBQUFFK0k7QUFBRixDQUFELEtBQWdCQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BQVE7QUFDckQsV0FBWTlJLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQUc7QUFDakQsY0FBYyxDQUFDO0FBQUU2STtBQUFGLENBQUQsS0FBY0EsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUFRO0FBQ25EO0FBQ0EsV0FBWWhKLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQUc7QUFDakQsY0FBYyxDQUFDO0FBQUUwSTtBQUFGLENBQUQsS0FBZ0JBLEtBQUssR0FBRyxNQUFILEdBQVksTUFBUTtBQUN2RDtBQUNBLENBVE8sQzs7Ozs7Ozs7Ozs7QUN0UFAseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25EaXZpZGVyLFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7XG4gIEJveCxcbiAgQm94ZXMsXG4gIEJveE51bSxcbiAgQm94VGV4dCxcbn0gZnJvbSAnLi9BY29tcGxpc2htZW50c1N0eWxlJztcblxuY29uc3QgZGF0YSA9IFtcbiAgeyBudW1iZXI6IDIwLCB0ZXh0OiAnT3BlbiBTb3VyY2UgUHJvamVjdHMnIH0sXG4gIHsgbnVtYmVyOiA1MCwgdGV4dDogJ1N0dWRlbnRzJyB9LFxuICB7IG51bWJlcjogMTIsIHRleHQ6ICdHaXRodWIgRm9sbG93ZXJzJyB9LFxuICB7IG51bWJlcjogMjAsIHRleHQ6ICdHaXRodWIgU3RhcnMnIH0sXG5dO1xuXG5jb25zdCBBY29tcGxpc2htZW50cyA9ICgpID0+IChcbiAgPFNlY3Rpb24+XG4gICAgPFNlY3Rpb25UaXRsZT5QZXJzb25hbCBBY2hpZXZlbWVudHM8L1NlY3Rpb25UaXRsZT5cbiAgICA8Qm94ZXM+XG4gICAgICB7ZGF0YS5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgPEJveCBrZXk9e2NhcmR9PlxuICAgICAgICAgIDxCb3hOdW0+e2Ake2NhcmQubnVtYmVyfStgfTwvQm94TnVtPlxuICAgICAgICAgIDxCb3hUZXh0PntjYXJkLnRleHR9PC9Cb3hUZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICkpfVxuICAgIDwvQm94ZXM+XG4gICAgPFNlY3Rpb25EaXZpZGVyIC8+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBCb3hlcyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbjogMjRweCAwIDQwcHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGdhcDogMTZweDtcbiAgICBtYXJnaW46IDIwcHggMCAzMnB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDI0cHggYXV0bztcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyMTJENDU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGhlaWdodDogMTQ0cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBoZWlnaHQ6IDEzNXB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZzogMTJweDtcblxuICAgICY6bnRoLWNoaWxkKDJuKXtcbiAgICAgIGdyaWQtcm93OjI7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQm94TnVtID0gc3R5bGVkLmg1YFxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJveFRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSm9pbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBKb2luVGV4dCA9IHN0eWxlZC5oNWBcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQmFja2dyb3VuZEFuaW1hdGlvbiA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJCZ0FuaW1hdGlvbl9fc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjAyIDYwMlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8ZyBvcGFjaXR5PVwiMC4xNVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTIwMS4zMzcgODcuNDM3QzE5My40NzQgNzkuNTczOCAxODAuNzI1IDc5LjU3MzggMTcyLjg2MiA4Ny40MzdMODcuNDM3IDE3Mi44NjJDNzkuNTczOSAxODAuNzI1IDc5LjU3MzkgMTkzLjQ3NCA4Ny40MzcgMjAxLjMzN0w0MDAuNjYzIDUxNC41NjNDNDA4LjUyNiA1MjIuNDI2IDQyMS4yNzUgNTIyLjQyNiA0MjkuMTM4IDUxNC41NjNMNTE0LjU2MyA0MjkuMTM4QzUyMi40MjYgNDIxLjI3NSA1MjIuNDI2IDQwOC41MjYgNTE0LjU2MyA0MDAuNjYzTDIwMS4zMzcgODcuNDM3Wk0zMC40ODY5IDExNS45MTJDLTguODI4OTcgMTU1LjIyOCAtOC44Mjg5NyAyMTguOTcyIDMwLjQ4NjkgMjU4LjI4N0wzNDMuNzEzIDU3MS41MTNDMzgzLjAyOCA2MTAuODI5IDQ0Ni43NzIgNjEwLjgyOSA0ODYuMDg4IDU3MS41MTNMNTcxLjUxMyA0ODYuMDg4QzYxMC44MjkgNDQ2Ljc3MiA2MTAuODI5IDM4My4wMjggNTcxLjUxMyAzNDMuNzEzTDI1OC4yODcgMzAuNDg2OUMyMTguOTcyIC04LjgyODk2IDE1NS4yMjggLTguODI4OTYgMTE1LjkxMiAzMC40ODY5TDMwLjQ4NjkgMTE1LjkxMlpcIlxuICAgICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQwX3JhZGlhbClcIlxuICAgICAgICAgIGlkPVwicGF0aF8wXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTUxNC41NjMgMjAxLjMzN0M1MjIuNDI2IDE5My40NzQgNTIyLjQyNiAxODAuNzI1IDUxNC41NjMgMTcyLjg2Mkw0MjkuMTM4IDg3LjQzN0M0MjEuMjc1IDc5LjU3MzggNDA4LjUyNiA3OS41NzM5IDQwMC42NjMgODcuNDM3TDM1OC4wOTggMTMwLjAwMkwzMDEuMTQ4IDczLjA1MTZMMzQzLjcxMyAzMC40ODY5QzM4My4wMjggLTguODI4OTYgNDQ2Ljc3MiAtOC44Mjg5NiA0ODYuMDg4IDMwLjQ4NjlMNTcxLjUxMyAxMTUuOTEyQzYxMC44MjkgMTU1LjIyOCA2MTAuODI5IDIxOC45NzIgNTcxLjUxMyAyNTguMjg3TDM1Ny44MDIgNDcxLjk5OUwzMDAuODUyIDQxNS4wNDlMNTE0LjU2MyAyMDEuMzM3WlwiXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDFfcmFkaWFsKVwiXG4gICAgICAgICAgaWQ9XCJwYXRoXzFcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjQzLjkwMSA0NzEuOTk5TDIwMS4zMzcgNTE0LjU2M0MxOTMuNDc0IDUyMi40MjYgMTgwLjcyNSA1MjIuNDI2IDE3Mi44NjIgNTE0LjU2M0w4Ny40MzcgNDI5LjEzOEM3OS41NzM5IDQyMS4yNzUgNzkuNTczOSA0MDguNTI2IDg3LjQzNyA0MDAuNjYzTDMwMS4xNDggMTg2Ljk1MkwyNDQuMTk4IDEzMC4wMDJMMzAuNDg2OSAzNDMuNzEzQy04LjgyODk3IDM4My4wMjggLTguODI4OTcgNDQ2Ljc3MiAzMC40ODY5IDQ4Ni4wODhMMTE1LjkxMiA1NzEuNTEzQzE1NS4yMjggNjEwLjgyOSAyMTguOTcyIDYxMC44MjkgMjU4LjI4NyA1NzEuNTEzTDMwMC44NTIgNTI4Ljk0OUwyNDMuOTAxIDQ3MS45OTlaXCJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Ml9yYWRpYWwpXCJcbiAgICAgICAgICBpZD1cInBhdGhfMlwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZWxsaXBzZVxuICAgICAgICBjeD1cIjI5NS4wMjdcIlxuICAgICAgICBjeT1cIjE5My4xMThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NS4wMjcgLTE5My4xMTgpXCJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcbiAgICAgICAgZmlsbD1cIiM5NDVERDZcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L2VsbGlwc2U+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5NC42ODUgMTkzLjQ3NEwyNjguOTMyIDIxOS4yNThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NC42ODUgLTE5My40NzQpIHJvdGF0ZSg0NSAyOTQuNjg1IDE5My40NzQpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDNfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjEwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHJvdGF0ZT1cImF1dG9cIj5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiMjk1LjAyN1wiXG4gICAgICAgIGN5PVwiMTkzLjExOFwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk1LjAyNyAtMTkzLjExOClcIlxuICAgICAgICByeD1cIjEuMDczMDZcIlxuICAgICAgICByeT1cIjEuMDc0MzNcIlxuICAgICAgICBmaWxsPVwiIzQ2NzM3XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCI1c1wiXG4gICAgICAgICAgYmVnaW49XCIxXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L2VsbGlwc2U+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5NC42ODUgMTkzLjQ3NEwyNjguOTMyIDIxOS4yNThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NC42ODUgLTE5My40NzQpIHJvdGF0ZSg0NSAyOTQuNjg1IDE5My40NzQpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiNXNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCI0NzYuNTI1XCJcbiAgICAgICAgY3k9XCIzNjMuMzEzXCJcbiAgICAgICAgcng9XCIxLjA3NDMzXCJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoOTAgNDc2LjUyNSAzNjMuMzEzKVwiXG4gICAgICAgIGZpbGw9XCIjOTQ1REQ2XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9lbGxpcHNlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00NzYuMTcxIDM2Mi45NTJMNDUwLjQxNyAzMzcuMTY4XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoLTQ1IDQ3Ni4xNzEgMzYyLjk1MilcIlxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50NF9saW5lYXIpXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCIzODIuMTY0XCJcbiAgICAgICAgY3k9XCIxNTUuMDI5XCJcbiAgICAgICAgcng9XCIxLjA3NDMzXCJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODIuMTY0IC0xNTUuMDI5KSByb3RhdGUoOTAgMzgyLjE2NCAxNTUuMDI5KVwiXG4gICAgICAgIGZpbGw9XCIjRjQ2NzM3XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCIxMHNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9lbGxpcHNlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zODEuODEgMTU0LjY2OUwzNTYuMDU3IDEyOC44ODVcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4MS44MSAtMTU0LjY2OSkgcm90YXRlKC00NSAzODEuODEgMTU0LjY2OSlcIlxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50NV9saW5lYXIpXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCIxMHNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCIzMzMuMzI0XCJcbiAgICAgICAgY3k9XCIzODIuNjkxXCJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMzMuMzI0IC0zODIuNjkxKSByb3RhdGUoLTE4MCAzMzMuMzI0IDM4Mi42OTEpXCJcbiAgICAgICAgZmlsbD1cIiNGNDY3MzdcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjVzXCJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMVwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzMzLjY2NyAzODIuMzM1TDM1OS40MiAzNTYuNTUxXCJcbiAgICAgICAgdHJhbnNmb3JtPVwic2NhbGUoLTEgMSkgdHJhbnNsYXRlKC0zMzMuNjY3IC0zODIuMzM1KSByb3RhdGUoNDUgMzMzLjY2NyAzODIuMzM1KVwiXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ2X2xpbmVhcilcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjVzXCJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMVwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiMTY1LjUyNFwiXG4gICAgICAgIGN5PVwiOTMuOTU5NlwiXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXG4gICAgICAgIHJ5PVwiMS4wNzQzM1wiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTY1LjUyNCAtOTMuOTU5NilcIlxuICAgICAgICBmaWxsPVwiI0Y0NjczN1wiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTBzXCJcbiAgICAgICAgICBiZWdpbj1cIjNcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTY1LjE4MiA5NC4zMTU5TDEzOS40MjkgMTIwLjFcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2NS4xODIgLTk0LjMxNTkpIHJvdGF0ZSg0NSAxNjUuMTgyIDk0LjMxNTkpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTBzXCJcbiAgICAgICAgICBiZWdpbj1cIjNcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiNDc2LjUyNVwiXG4gICAgICAgIGN5PVwiMzYzLjMxM1wiXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKDkwIDQ3Ni41MjUgMzYzLjMxMylcIlxuICAgICAgICBmaWxsPVwiIzEzQURDN1wiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTJzXCJcbiAgICAgICAgICBiZWdpbj1cIjRcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNDc2LjE3MSAzNjIuOTUyTDQ1MC40MTcgMzM3LjE2OFwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKC00NSA0NzYuMTcxIDM2Mi45NTIpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDExX2xpbmVhcilcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjEyc1wiXG4gICAgICAgICAgYmVnaW49XCI0XCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L3BhdGg+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDBfcmFkaWFsXCJcbiAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgIGN5PVwiMFwiXG4gICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDFfcmFkaWFsXCJcbiAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgIGN5PVwiMFwiXG4gICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDJfcmFkaWFsXCJcbiAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgIGN5PVwiMFwiXG4gICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDNfbGluZWFyXCJcbiAgICAgICAgICB4MT1cIjI5NS4wNDNcIlxuICAgICAgICAgIHkxPVwiMTkzLjExNlwiXG4gICAgICAgICAgeDI9XCIyNjkuOTc1XCJcbiAgICAgICAgICB5Mj1cIjIxOC4xNTRcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ0X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCI0NzYuNTI5XCJcbiAgICAgICAgICB5MT1cIjM2My4zMVwiXG4gICAgICAgICAgeDI9XCI0NTEuNDYxXCJcbiAgICAgICAgICB5Mj1cIjMzOC4yNzJcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ1X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIzODIuMTY4XCJcbiAgICAgICAgICB5MT1cIjE1NS4wMjdcIlxuICAgICAgICAgIHgyPVwiMzU3LjFcIlxuICAgICAgICAgIHkyPVwiMTI5Ljk4OVwiXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDZfbGluZWFyXCJcbiAgICAgICAgICB4MT1cIjMzMy4zMDlcIlxuICAgICAgICAgIHkxPVwiMzgyLjY5M1wiXG4gICAgICAgICAgeDI9XCIzNTguMzc2XCJcbiAgICAgICAgICB5Mj1cIjM1Ny42NTVcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ3X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIxNjUuNTRcIlxuICAgICAgICAgIHkxPVwiOTMuOTU3OFwiXG4gICAgICAgICAgeDI9XCIxNDAuNDcyXCJcbiAgICAgICAgICB5Mj1cIjExOC45OTZcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ4X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCI0MTQuMzY3XCJcbiAgICAgICAgICB5MT1cIjMwMS4xNTZcIlxuICAgICAgICAgIHgyPVwiNDM5LjQzNVwiXG4gICAgICAgICAgeTI9XCIyNzYuMTE4XCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cInBhaW50OV9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiNTE1Ljk0M1wiXG4gICAgICAgICAgeTE9XCIyODguMjM4XCJcbiAgICAgICAgICB4Mj1cIjU0MS4zMzlcIlxuICAgICAgICAgIHkyPVwiMjkxLjQ1NFwiXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDEwX2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIxMTcuMDAxXCJcbiAgICAgICAgICB5MT1cIjIzMC42MTlcIlxuICAgICAgICAgIHgyPVwiMTE3LjM2XCJcbiAgICAgICAgICB5Mj1cIjI1OC4xOTNcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQxMV9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiNDc2LjUyOVwiXG4gICAgICAgICAgeTE9XCIzNjMuMzFcIlxuICAgICAgICAgIHgyPVwiNDUxLjQ2MVwiXG4gICAgICAgICAgeTI9XCIzMzguMjcyXCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRBbmltYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgU29jaWFsSWNvbnMgfSBmcm9tICcuLi9IZWFkZXIvSGVhZGVyU3R5bGUnO1xuaW1wb3J0IHtcbiAgQ29tcGFueUNvbnRhaW5lcixcbiAgRm9vdGVyV3JhcHBlcixcbiAgTGlua0NvbHVtbixcbiAgTGlua0l0ZW0sXG4gIExpbmtMaXN0LFxuICBMaW5rVGl0bGUsXG4gIFNsb2dhbixcbiAgU29jaWFsQ29udGFpbmVyLFxuICBTb2NpYWxJY29uc0NvbnRhaW5lcixcbn0gZnJvbSAnLi9Gb290ZXJTdHlsZSc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPEZvb3RlcldyYXBwZXI+XG4gICAgPExpbmtMaXN0PlxuICAgICAgPExpbmtDb2x1bW4+XG4gICAgICAgIDxMaW5rVGl0bGU+Q2FsbDwvTGlua1RpdGxlPlxuICAgICAgICA8TGlua0l0ZW0gaHJlZj1cInRlbDowMDIzNzY1MjEyNjQ0MFwiPigrMjM3KSA2NTItMTI2NDQwPC9MaW5rSXRlbT5cbiAgICAgIDwvTGlua0NvbHVtbj5cbiAgICAgIDxMaW5rQ29sdW1uPlxuICAgICAgICA8TGlua1RpdGxlPkVtYWlsPC9MaW5rVGl0bGU+XG4gICAgICAgIDxMaW5rSXRlbSBocmVmPVwibWFpbHRvOm1hem9ua2V1QGdtYWlsLmNvbVwiPlxuICAgICAgICAgIG1hem9ua2V1QGdtYWlsLmNvbVxuICAgICAgICA8L0xpbmtJdGVtPlxuICAgICAgPC9MaW5rQ29sdW1uPlxuICAgIDwvTGlua0xpc3Q+XG4gICAgPFNvY2lhbEljb25zQ29udGFpbmVyPlxuICAgICAgPENvbXBhbnlDb250YWluZXI+XG4gICAgICAgIDxTbG9nYW4+TGV0IGNyZWF0aXZpdHkgbGVhZCE8L1Nsb2dhbj5cbiAgICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgIDxTb2NpYWxDb250YWluZXI+XG4gICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0F6b25rZXVcIj5cbiAgICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cbiAgICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYXpvbmtldS1vcm5lbGEtc29mdHdhcmUtZGV2ZWxvcGVyL1wiPlxuICAgICAgICAgIDxBaUZpbGxMaW5rZWRpbiBzaXplPVwiM3JlbVwiIC8+XG4gICAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9vcm5lbGE5MjM4L1wiPlxuICAgICAgICAgIDxBaUZpbGxJbnN0YWdyYW0gc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgICA8L1NvY2lhbEljb25zPlxuICAgICAgPC9Tb2NpYWxDb250YWluZXI+XG4gICAgPC9Tb2NpYWxJY29uc0NvbnRhaW5lcj5cbiAgPC9Gb290ZXJXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTZweCk7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBwYWRkaW5nOiAycmVtIDQ4cHggNDBweDtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogMCAxNnB4IDQ4cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpbmtJdGVtID0gc3R5bGVkLmFgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsZWZ0OiA2cHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb21wYW55Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6YmFzZWxpbmU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwIDAgMzJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2xvZ2FuID0gc3R5bGVkLnBgXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNvY2lhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlua0xpc3QgPSBzdHlsZWQudWxgXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg4NXB4LCAyMjBweCkpO1xuICBnYXA6IDQwcHg7XG4gIHBhZGRpbmc6IDQwcHggMCAyOHB4O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XG4gICAgcGFkZGluZzogMzJweCAwIDE2cHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDMycHggMCAxNnB4O1xuICAgIGdhcDogMTZweDtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzJweCA0cHggMTZweDtcbiAgICBnYXA6IDVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpbmtDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDIyMHB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rVGl0bGUgPSBzdHlsZWQuaDRgXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbmA7XG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEFpRmlsbEdpdGh1YixcbiAgQWlGaWxsSW5zdGFncmFtLFxuICBBaUZpbGxMaW5rZWRpbixcbn0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgRGlDc3NkZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBEaXYxLFxuICBEaXYyLFxuICBEaXYzLFxuICBOYXZMaW5rLFxuICBTb2NpYWxJY29ucyxcbn0gZnJvbSAnLi9IZWFkZXJTdHlsZSc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8RGl2MT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGhyZWY9XCIvXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgPERpQ3NzZGVjayBzaXplPVwiM3JlbVwiIC8+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxLjJlbScgfX0+QXpvbmtldSBPcm5lbGE8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L0RpdjE+XG4gICAgPERpdjI+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIjcHJvamVjdHNcIj5cbiAgICAgICAgICA8TmF2TGluaz5Qcm9qZWN0czwvTmF2TGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsgaHJlZj1cIiN0ZWNoXCI+XG4gICAgICAgICAgPE5hdkxpbms+VGVjaG5vbG9naWVzPC9OYXZMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPVwiI2Fib3V0XCI+XG4gICAgICAgICAgPE5hdkxpbms+QWJvdXQ8L05hdkxpbms+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC9EaXYyPlxuICAgIDxEaXYzPlxuICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQXpvbmtldVwiPlxuICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cbiAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hem9ua2V1LW9ybmVsYS1zb2Z0d2FyZS1kZXZlbG9wZXIvXCI+XG4gICAgICAgIDxBaUZpbGxMaW5rZWRpbiBzaXplPVwiM3JlbVwiIC8+XG4gICAgICA8L1NvY2lhbEljb25zPlxuICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL29ybmVsYTkyMzgvXCI+XG4gICAgICAgIDxBaUZpbGxJbnN0YWdyYW0gc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICA8L0RpdjM+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IHsgSW9Jb3NBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MHB4KTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgICBncmlkLXJvdy1nYXA6IDAuNXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERpdjEgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGl2MyA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcbiAgfVxuYDtcblxuLy8gTmF2aWdhdGlvbiBMaW5rc1xuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuYDtcblxuLy8vIERyb3BEb3duIENvbnRhY3RcbmV4cG9ydCBjb25zdCBDb250YWN0RHJvcERvd24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2UHJvZHVjdHNJY29uID0gc3R5bGVkKElvSW9zQXJyb3dEcm9wZG93bilgXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJzEnIDogJy43NScpfTtcbiAgdHJhbnNmb3JtOiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJ3NjYWxlWSgtMSknIDogJ3NjYWxlWSgxKScpfTtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luOiAycHggMCAwIDJweDtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuYDtcblxuLy8gU29jaWFsIEljb25zXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxJY29ucyA9IHN0eWxlZC5hYFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogOHB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25UZXh0LFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBMZWZ0U2VjdGlvbiBmcm9tICcuL0hlcm9TdHlsZSc7XG5cbmNvbnN0IEhlcm8gPSAoeyBoYW5kbGVDbGljayB9KSA9PiAoXG4gIDw+XG4gICAgPFNlY3Rpb24gcm93IG5vcGFkZGluZz5cbiAgICAgIDxMZWZ0U2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSBtYWluIGNlbnRlcj5cbiAgICAgICAgICBXZWxjb21lIFRvXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgTXkgUGVyc29uYWwgUG9ydGZvbGlvXG4gICAgICAgIDwvU2VjdGlvblRpdGxlPlxuICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgICAgSSZhcG9zO20gYSBzb2Z0d2FyZSBlbmdpbmVlciBzcGVjaWFsaXppbmcgaW4gYnVpbGRpbmcgYW5kXG4gICAgICAgICAgZGVzaWduaW5nIGV4Y2VwdGlvbmFsIGRpZ2l0YWwgZXhwZXJpZW5jZXMuXG4gICAgICAgIDwvU2VjdGlvblRleHQ+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkxlYXJuIG1vcmU8L0J1dHRvbj5cbiAgICAgIDwvTGVmdFNlY3Rpb24+XG4gICAgPC9TZWN0aW9uPlxuICA8Lz5cbik7XG5cbkhlcm8ucHJvcFR5cGVzID0geyBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IExlZnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMZWZ0U2VjdGlvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XG5wYWRkaW5nOiAzcmVtO1xucGxhY2UtaXRlbXM6IGNlbnRlcjtcbmNvbHVtbi1nYXA6IDJyZW07XG5yb3ctZ2FwOiAzcmVtO1xuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUaHJlZSA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICM5Y2M5ZTM7XG4gIHBhZGRpbmc6IC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy50aXRsZSA/ICczcmVtJyA6ICcycmVtJyl9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2RjZTNlNztcbiAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIHNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQucGBcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgY29sb3I6ICNlNGU2ZTc7XG4gIGZvbnQtc3R5bGU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzouM3JlbVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMi41cmVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxuICBjb2xvcjojZDRjMGMwO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgcGFkZGluZzoxcmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogIzZiMzAzMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjODAxNDE0O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGFnTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgVGFnID0gc3R5bGVkLmxpYFxuICBjb2xvcjogI2Q4YmZiZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJsb2dDYXJkLFxuICBDYXJkSW5mbyxcbiAgRXh0ZXJuYWxMaW5rcyxcbiAgR3JpZENvbnRhaW5lcixcbiAgSGVhZGVyVGhyZWUsXG4gIEhyLFxuICBUYWcsXG4gIFRhZ0xpc3QsXG4gIFRpdGxlQ29udGVudCxcbiAgVXRpbGl0eUxpc3QsXG4gIEltZyxcbn0gZnJvbSAnLi9Qcm9qZWN0U3R5bGUnO1xuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvbkRpdmlkZXIsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnQnO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcbiAgPFNlY3Rpb24gbm9wYWRkaW5nIGlkPVwicHJvamVjdHNcIj5cbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8U2VjdGlvblRpdGxlIG1haW4+UHJvamVjdHM8L1NlY3Rpb25UaXRsZT5cbiAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgIHtwcm9qZWN0cy5tYXAoKHApID0+IChcbiAgICAgICAgPEJsb2dDYXJkIGtleT17cH0+XG4gICAgICAgICAgPEltZyBzcmM9e3AuaW1hZ2V9IC8+XG4gICAgICAgICAgPFRpdGxlQ29udGVudD5cbiAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57cC50aXRsZX08L0hlYWRlclRocmVlPlxuICAgICAgICAgICAgPEhyIC8+XG4gICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgPENhcmRJbmZvIGNsYXNzTmFtZT1cImNhcmQtaW5mb1wiPntwLmRlc2NyaXB0aW9ufTwvQ2FyZEluZm8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMS41cmVtJywgY29sb3I6ICd5ZWxsb3cnLCBmb250U2l6ZTogJzEuMmVtJyB9fT5TdGFjazwvVGl0bGVDb250ZW50PlxuICAgICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICAgIHtwLnRhZ3MubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhZyBrZXk9e3R9Pnt0fTwvVGFnPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgPC9UYWdMaXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxVdGlsaXR5TGlzdD5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3AudmlzaXR9PkxpdmU8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXtwLnNvdXJjZX0+U291cmNlPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XG4gICAgICAgIDwvQmxvZ0NhcmQ+XG4gICAgICApKX1cbiAgICA8L0dyaWRDb250YWluZXI+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIERpRmlyZWJhc2UsXG4gIERpUmVhY3QsXG4gIERpWmVuZCxcbn0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvbkRpdmlkZXIsXG4gIFNlY3Rpb25UZXh0LFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7XG4gIExpc3QsXG4gIExpc3RDb250YWluZXIsXG4gIExpc3RJdGVtLFxuICBMaXN0UGFyYWdyYXBoLFxuICBMaXN0VGl0bGUsXG59IGZyb20gJy4vVGVjaG5vbG9naWVzU3R5bGUnO1xuXG5jb25zdCBUZWNobm9sb2dpZXMgPSAoKSA9PiAoXG4gIDxTZWN0aW9uIGlkPVwidGVjaFwiPlxuICAgIDxTZWN0aW9uRGl2aWRlciBkaXZpZGVyIC8+XG4gICAgPFNlY3Rpb25UaXRsZT5UZWNobm9sb2dpZXM8L1NlY3Rpb25UaXRsZT5cbiAgICA8U2VjdGlvblRleHQ+XG4gICAgICBJJmFwb3M7dmUgd29ya2VkIHdpdGggYSByYW5nZSBhIHRlY2hub2xvZ2llcyBpbiB0aGUgd2ViIGRldmVsb3BtZW50IHdvcmxkLlxuICAgICAgRnJvbSBCYWNrLWVuZCBUbyBEZXNpZ25cbiAgICA8L1NlY3Rpb25UZXh0PlxuICAgIDxMaXN0PlxuICAgICAgPExpc3RJdGVtPlxuICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICA8RGlSZWFjdCBzaXplPVwiM3JlbVwiIC8+XG4gICAgICAgIDwvcGljdHVyZT5cbiAgICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICAgICAgPExpc3RUaXRsZT5Gcm9udC1FbmQ8L0xpc3RUaXRsZT5cbiAgICAgICAgICA8TGlzdFBhcmFncmFwaD5cbiAgICAgICAgICAgIEV4cGVyaWVjZSB3aXRoXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEhUTUw1XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIENTUzNcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgSmF2YVNjcmlwdFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBSZWFjdC5qc1xuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBSZWR1eFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBCb290c3RyYXBcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgTmV4dC5qc1xuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBWdWUuanNcbiAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgIDxEaUZpcmViYXNlIHNpemU9XCIzcmVtXCIgLz5cbiAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICA8TGlzdENvbnRhaW5lcj5cbiAgICAgICAgICA8TGlzdFRpdGxlPkJhY2stRW5kPC9MaXN0VGl0bGU+XG4gICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XG4gICAgICAgICAgICBFeHBlcmllbmNlIHdpdGhcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgTm9kZSBhbmQgRGF0YWJhc2VzXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFJ1YnlcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgUmFpbHNcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgTXlTUUxcbiAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgIDxEaVplbmQgc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICAgIDxMaXN0VGl0bGU+VG9vbHMgJiBNZXRob2RzOjwvTGlzdFRpdGxlPlxuICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxuICAgICAgICAgICAgRXhwZXJpZW5jZSB3aXRoXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEdpdFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgSGVyb2t1XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIE5ldGxpZnlcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgTW9iaWxlL1Jlc3BvbnNpdmUgRGV2ZWxvcG1lbnRcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgUlNwZWNcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgVEREXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIENocm9tZSBEZXYgVG9vbHNcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgRmlnbWFcbiAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9MaXN0PlxuICAgIDxTZWN0aW9uRGl2aWRlciBjb2xvckFsdCAvPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2dpZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoNTAlIDUwJSBhdCA1MCUgNTAlLCByZ2JhKDc5LCAxMDgsIDE3NiwgMC4yNSkgNTMuOCUsIHJnYmEoNzksIDEwOCwgMTc2LCAwKSAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWFpbkltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDQwcHg7XG4gIG1hcmdpbjogM3JlbSAwO1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9e1xuICAgIG1hcmdpbjogNjRweCAwO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1hcmdpbjogNjRweCAwO1xuICAgIGdhcDogMjRweFxuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMzJweCAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuaDRgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1heC13aWR0aDogMjAzcHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaXN0SWNvbiA9IHN0eWxlZC5pbWdgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBDYXJvdXNlbEJ1dHRvbixcbiAgQ2Fyb3VzZWxCdXR0b25Eb3QsXG4gIENhcm91c2VsQnV0dG9ucyxcbiAgQ2Fyb3VzZWxDb250YWluZXIsXG4gIENhcm91c2VsSXRlbSxcbiAgQ2Fyb3VzZWxJdGVtSW1nLFxuICBDYXJvdXNlbEl0ZW1UZXh0LFxuICBDYXJvdXNlbEl0ZW1UaXRsZSxcbiAgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlLFxufSBmcm9tICcuL1RpbWVMaW5lU3R5bGUnO1xuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvbkRpdmlkZXIsXG4gIFNlY3Rpb25UZXh0LFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudCc7XG5cbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcblxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoXG4gICAgICAgICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnRcbiAgICAgIC8gKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqIFRpbWVMaW5lRGF0YS5sZW5ndGgpO1xuICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgfVxuICB9O1xuICAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XG4gICAgICA8U2VjdGlvblRpdGxlPkFib3V0IE1lPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgIFRoZSBwdXJwb3NlIG9mIEphdmFTY3JpcHQgTWFzdGVyeSBpcyB0byBoZWxwIGFzcGlyaW5nIGFuZFxuICAgICAgICBlc3RhYmxpc2hlZCBkZXZlbG9wZXJzIHRvIHRha2UgdGhlaXIgZGV2ZWxvcG1lbnQgc2tpbGxzIHRvIHRoZSBuZXh0XG4gICAgICAgIGxldmVsIGFuZCBidWlsZCBhd2Vzb21lIGFwcHMuXG4gICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxuICAgICAgICA8PlxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxuICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfX2l0ZW0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgICAge2Ake2l0ZW0ueWVhcn1gfVxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbUltZ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwOCA2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjcGFpbnQwX2xpbmVhcilcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5PVwiMC4zM1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiMC41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMjA4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLUNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMC43OTQ3OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS50ZXh0fTwvQ2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxuICAgICAgPENhcm91c2VsQnV0dG9ucz5cbiAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENhcm91c2VsQnV0dG9uXG4gICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uRG90IGFjdGl2ZT17YWN0aXZlSXRlbX0gLz5cbiAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgICAgO1xuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxDb250YWluZXIgPSBzdHlsZWQudWxgXG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xuICBwYWRkaW5nOiAwcmVtO1xuICBsaXN0LXN0eWxlOm5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIC8vcmVtb3ZlIHNjcm9sbGJhclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICBcbiAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgZGlzcGxheTogbm9uZTtcbiAgIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlID0gc3R5bGVkLmRpdmBcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAkeyh7IGZpbmFsIH0pID0+IChmaW5hbCA/ICcxMjAlOycgOiAnbWluLWNvbnRlbnQnKX1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWF4LXdpZHRoOiAxOTZweDtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1heC13aWR0aDogMTI0cHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwRTEzMUY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gKHByb3BzLmluZGV4ID8gJ29wYWNpdHk6IDEnIDogJ29wYWNpdHk6IDAuNScpfTsgXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIFRoaXMgZ3JhZGllbnQgaXMgZGlmZmVyZW50IGR1ZSB0byB0aGUgc2l6ZSBvZiB0aGUgVGl0bGUgY29udGFpbmVyLCBpdCBtdXN0IHRyYW5zaXRpb24gc29vbmVyIHRvIGJlIHZpc2libGUgb24gdGhlIHRleHQgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgMzAuMTUlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfSAgXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1JbWcgPSBzdHlsZWQuc3ZnYFxuICBtYXJnaW4tbGVmdDogMjFweDtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjg4cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gKHByb3BzLmluZGV4ID8gJzEnIDogJy4zMycpfTtcbiAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSAocHJvcHMuaW5kZXggPyAnc2NhbGUoMS42KScgOiAnc2NhbGUoMSknKX07XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbkRvdCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuYDtcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnVG8tRG8tQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSB0by1kbyBhcHBsaWNhdGlvbi4gVGhpcyB3ZWJzaXRlIGhlbHBzIHVzZXJzIG9yZ2FuaXplIHRoZWlyIGRhaWx5IGFjdGl2aXRpZXMuIFVzZXJzIGNhbiBhZGQgdGFza3MgdG8gdGhlIGxpc3QsIGVkaXQsIGFuZCByZW1vdmUgY29tcGxldGVkIHRhc2tzIGZyb20gdGhlIGxpc3QuIENoZWNrIG91dCB0aGUgd2Vic2l0ZSBieSBjbGlja2luZyBvbiBcIkNvZGVcIiBiZWxvdy4nLFxuICAgIGltYWdlOiAnaHR0cHM6Ly93d3cubGlua3BpY3R1cmUuY29tL3EvdG9kb3MucG5nJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0phdmFTY3JpcHQnLCAnQ1NTMyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Bem9ua2V1L3RvLWRvLWFwcC90cmVlL3RvLWRvJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vYXpvbmtldS5naXRodWIuaW8vdG8tZG8tYXBwLycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ01vdmllIFNob3dzJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgd2Vic2l0ZSBzaG93cyB0aGUgbW9zdCBwb3B1bGFyIG1vdmllcyBmcm9tIGFuIGV4dGVybmFsIEFQSSBhbmQgYWxsb3dzIHVzZXJzIHRvIGNvbW1lbnQgYW5kIG1ha2UgcmVzZXJ2YXRpb25zLiBUaGUgd2ViYXBwIGhhcyAzIHVzZXIgaW50ZXJmYWNlcy4nLFxuICAgIGltYWdlOiAnaHR0cHM6Ly93d3cubGlua3BpY3R1cmUuY29tL3EvbW92LnBuZycsXG4gICAgdGFnczogWydKYXZhU2NyaXB0JywgJ0hUTUw1JywgJ0NTUzMnLCAnQVBJJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL0F6b25rZXUvRmluYWwtSmF2YXNjcmlwdC1jYXBzdG9uZScsXG4gICAgdmlzaXQ6ICdodHRwczovL2VsYXRlZC1zYWhhLWU4NzY0Ni5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdNYXRoLU1hZ2ljaWFucycsXG4gICAgZGVzY3JpcHRpb246ICdNYXRoLU1hZ2ljaWFucyBpcyBhIHdlYnNpdGUgZm9yIG1hdGggbG92ZXJzLiBVc2VycyBjYW4gZG8gbWF0aGVtYXRpY2FsIG9wZXJhdGlvbnMgdXNpbmcgdGhlIGNhbGN1bGF0b3IuJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3LmxpbmtwaWN0dXJlLmNvbS9xL2NhbGN1bGF0LnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0JywgJ0NTUzMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vQXpvbmtldS9tYXRoLW1hZ2ljaWFucycsXG4gICAgdmlzaXQ6ICdodHRwczovL2F6b25rZXUuZ2l0aHViLmlvL21hdGgtbWFnaWNpYW5zLycsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ09ubGluZSBUdXRvcmluZycsXG4gICAgZGVzY3JpcHRpb246ICdTcGVhayBGbHVlbnRseSBpcyBhbiBvbmxpbmUgcGxhdGZvcm0gd2hlcmUgc3R1ZGVudHMgYW5kIHRlYWNoZXJzIGNhbiBtZWV0IGZvciBsYW5ndWFnZSBsZXNzb25zLicsXG4gICAgaW1hZ2U6ICdodHRwczovL3d3dy5saW5rcGljdHVyZS5jb20vcS9mbHUucG5nJyxcbiAgICB0YWdzOiBbJ0phdmFTY3JpcHQnLCAnSFRNTDUnLCAnQ1NTMyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Bem9ua2V1L1NwZWFrLUZsdWVudGx5JyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vYXpvbmtldS5naXRodWIuaW8vU3BlYWstRmx1ZW50bHkvJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgRnVsbC1zdGFjayBkZXZlbG9wZXIgYXQgU2tlbGlhJyB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdXb3JrZWQgYXMgYSBGdWxsLXN0YWNrIGRldmVsb3BlciBhdCBWaXJvbklUJyB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdTaGFyZWQgbXkgcHJvamVjdHMgd2l0aCB0aGUgd29ybGQnIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1dvcmtlZCBhcyBhIGZyZWVsYW5jZXInIH0sXG5dO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vTGF5b3V0U3R5bGUnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxDb250YWluZXI+XG4gICAgPEhlYWRlciAvPlxuICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgPEZvb3RlciAvPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7IGNoaWxkcmVuOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5tYXgtd2lkdGg6IDEyODBweDtcbndpZHRoOiAxMDAlO1xubWFyZ2luOiBhdXRvO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY29tcGxpc2htZW50cyBmcm9tICcuLi9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzJztcbmltcG9ydCBCZ0FuaW1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tncm91bmRBbmltYXRpb24vQmFja2dyb3VuZEFuaW1hdGlvbic7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8vSGVybyc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cyc7XG5pbXBvcnQgVGVjaG5vbG9naWVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzL1RlY2hub2xvZ2llcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8U2VjdGlvbiBncmlkPlxuICAgICAgPEhlcm8gLz5cbiAgICAgIDxCZ0FuaW1hdGlvbiAvPlxuICAgIDwvU2VjdGlvbj5cbiAgICA8UHJvamVjdHMgLz5cbiAgICA8VGVjaG5vbG9naWVzIC8+XG4gICAgPFRpbWVsaW5lIC8+XG4gICAgPEFjb21wbGlzaG1lbnRzIC8+XG4gIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQnV0dG9uQmFjaywgQnV0dG9uRnJvbnQgfSBmcm9tICcuL2luZGV4JztcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgYWx0LFxuICBmb3JtLFxuICBkaXNhYmxlZCxcbiAgb25DbGljayxcbiAgY2hpbGRyZW4sXG59KSA9PiAoXG4gIDxCdXR0b25CYWNrIGFsdD17YWx0fSBmb3JtPXtmb3JtfSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgIHtjaGlsZHJlbn1cbiAgICA8QnV0dG9uRnJvbnQgYWx0PXthbHR9IG9uQ2xpY2s9e29uQ2xpY2t9IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9CdXR0b25Gcm9udD5cbiAgPC9CdXR0b25CYWNrPlxuKTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHsgZm9ybTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCB9O1xuQnV0dG9uLnByb3BUeXBlcyA9IHsgZGlzYWJsZWQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQgfTtcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7IG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQgfTtcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7IGFsdDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCB9O1xuQnV0dG9uLnByb3BUeXBlcyA9IHsgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qIGRpc2FibGUgZXNsaW50IG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5ncmlkID8gJ2dyaWQnIDogJ2ZsZXgnKX07XG4gIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gKHByb3BzLnJvdyA/ICdyb3cnIDogJ2NvbHVtbicpfTtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5ub3BhZGRpbmcgPyAnMCcgOiAnMzJweCA0OHB4IDAnKX0gO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHBhZGRpbmc6IDI0cHggNDhweCAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubm9wYWRkaW5nID8gJzAnIDogJzE2cHggMTZweCAwJyl9IDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gJzY1cHgnIDogJzU2cHgnKX07XG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyAnNzJweCcgOiAnNTZweCcpfTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjEuNTdkZWcsICNGRkZGRkYgMTguNzclLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDYwLjE1JSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/ICc1OHB4IDAgMTZweCcgOiAnMCcpfTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCcpfTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnKX07XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyAnNDBweCAwIDEycHgnIDogJzAnKX07XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gJzI4cHgnIDogJzMycHgnKX07XG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/ICczMnB4JyA6ICc0MHB4Jyl9O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyAnMTZweCAwIDhweCcgOiAnMCcpfTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZC5wYFxuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMy42cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiA2NzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25EaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmNvbG9yQWx0XG4gICAgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKSdcbiAgICA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJyl9O1xuICAgIG1hcmdpbjogJHsocHJvcHMpID0+IChwcm9wcy5kaXZpZGVyID8gJzRyZW0gMCcgOiAnJyl9O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvblN1YlRleHQgPSBzdHlsZWQucGBcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXgtd2lkdGg6IDY3MnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMyk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICMwZjE2MjQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNGViO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDQxNjk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIG1hcmdpbi10b3A6IDI0cHg7IFxuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25CYWNrID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IChhbHQgPyAnMTUwcHgnIDogJzI2MnB4Jyl9O1xuICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IChhbHQgPyAnNTJweCcgOiAnNjRweCcpfTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gJzIwcHgnIDogJzI0cHgnKX07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46ICR7KHsgYWx0LCBmb3JtIH0pID0+ICgoYWx0IHx8IGZvcm0pID8gJzAnIDogJzAgMCA4MHB4Jyl9O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY2MjJlIDAlLCAjQjEzM0ZGIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpJyl9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IChkaXNhYmxlZCA/ICcuNScgOiAnMScpfTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gJzE1MHB4JyA6ICcxODRweCcpfTtcbiAgICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IChhbHQgPyAnNTJweCcgOiAnNDhweCcpfTtcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyAnMjBweCcgOiAnMTZweCcpfTtcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gJzAnIDogJzY0cHgnKX07XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/ICcwJyA6ICczMnB4Jyl9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uRnJvbnQgPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IDAlLCAjOTQ1REQ2IDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJyl9O1xuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IChkaXNhYmxlZCA/ICcuNScgOiAnMScpfTtcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/ICcyMHB4JyA6ICcyNHB4Jyl9O1xuICBmb250LXdlaWdodDogNjAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAkeyh7IGRpc2FibGVkIH0pID0+IChkaXNhYmxlZCA/ICdpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyknIDogJ25vbmUnKX07XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gIH1cbiAgJjpkaXNhYmxlZHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/ICcyMHB4JyA6ICcxNnB4Jyl9O1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzI0cHgnIDogJzE2cHgnKX07XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMmQ0NTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMTZweCcgOiAnOHB4Jyl9O1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMCcgOiAnOHB4Jyl9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlua0ljb25JbWcgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4OyAgXG4gIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyAnMzJweCcgOiAnMjRweCcpfTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGhlaWdodDogJHsoeyBuYXYgfSkgPT4gKG5hdiA/ICcxNnB4JyA6ICcyNHB4Jyl9O1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gJzMycHgnIDogJzE2cHgnKX07XG4gIH1cbmA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=