/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/corkboard.webp */ "./src/images/corkboard.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pin.png */ "./src/images/pin.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* MEYERS RESET ABOVE */

html {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

:root {
    --post-it-yellow: rgb(160, 160, 36);
    --sidebar-background-colour: rgb(30, 30, 30);
    --error-red: rgb(185, 0, 0);
    --error-red-opaque: rgba(168, 16, 16, 0.384);
}

.error {
    background: var(--error-red-opaque);
    border: 2px solid var(--error-red);
}

.error::placeholder {
    color: white;
}

header {
    font-size: 5rem;
    padding: 2.5rem 0;
    background-color: var(--sidebar-background-colour);
    text-align: center;
    grid-area: 1 / 1 / 2 / 4;
}

.filter {
    position: fixed;
    right: 0;
    top: 0;
    padding: 0.5rem;
    border-radius: 0px 0px 0px 0.5rem;
    background-color: var(--sidebar-background-colour);
}

.sidebar {
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: 2 / 1 / 3 / 1;
    background-color: var(--sidebar-background-colour);
    height: 100vh;
}

.sidebar button {
    color: white;
    font-size: 2rem;
    background: var(--sidebar-background-colour);
    text-align: center;
    margin-top: 1rem;
    border-style: none;
}

#all-projects ,
#current-projects {
    background: var(--sidebar-background-colour);
    border-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;   
}

label {
    margin-top: 1rem;
}

[name="project"],
[name="title"],
[name="to-do"] {
    border: 2px solid var(--post-it-yellow);
    border-bottom: 1px solid black;
    text-indent: 0.5rem;
}

[name="to-do"] {
    border-left: 1px solid black;
    border-right: 1px solid black;
    text-indent: 0rem;
    border-radius: 1rem;  
    padding: 0.5rem;
}

[name="save"] {
    margin-bottom: 2rem;
    background: green;
    color: white;
    font-weight: bold;
}

[name="remove"] {
    background: rgb(220, 20, 20);
    color: white;
    font-weight: bold;
}

#toggle-new-form {
    align-self: center;
    border: 1px dashed black;
    border-radius: 0.5rem;
    background-color: green;
    font-size: 1.5rem;
}

.pegboard {
    display: grid;
    grid-template-columns: minmax(150px,17%) 77%;
}

form {
    display: flex;
    max-height: 600px;
    justify-content: center;
    flex-direction: column;
    background-color: var(--post-it-yellow); 
    padding: 1rem;
    box-shadow: -2px 4px 5px black;
    border: 1px solid black;
}

form p {
    height: 2rem;
}

form textarea {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: inherit;
    color: black;
    max-width: 40ch;
}

form input,
form label,
form span {
    color: black;
    border: none;
    background-color: var(--post-it-yellow);
    border-radius: 1rem;        
}

form button {
    color: black;
    background-color: var(--post-it-yellow);
    border-radius: 1rem; 
}

#to-do {
    margin-top: 4%;
    min-height: 30vh;
    margin-left: 2%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5vw, 350px));
    gap: 4%;
    justify-content: space-evenly;
}

.pin {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
    padding: 25px;
    align-self: center;
}

@media only screen and (max-width: 400px) {
 .pegboard {
    grid-template-columns: 100%;
 }

 .sidebar {
    display: none;
 }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,uBAAuB;;AAEvB;IACI,mDAAwC;IACxC,sBAAsB;IACtB,YAAY;IACZ,6EAA6E;AACjF;;AAEA;IACI,mCAAmC;IACnC,4CAA4C;IAC5C,2BAA2B;IAC3B,4CAA4C;AAChD;;AAEA;IACI,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kDAAkD;IAClD,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,MAAM;IACN,eAAe;IACf,iCAAiC;IACjC,kDAAkD;AACtD;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,kDAAkD;IAClD,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,4CAA4C;IAC5C,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;IAGI,uCAAuC;IACvC,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,qBAAqB;IACrB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,sBAAsB;IACtB,uCAAuC;IACvC,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6EAA6E;IAC7E,yBAAyB;IACzB,YAAY;IACZ,eAAe;AACnB;;AAEA;;;IAGI,YAAY;IACZ,YAAY;IACZ,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,uCAAuC;IACvC,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,2DAA2D;IAC3D,OAAO;IACP,6BAA6B;AACjC;;AAEA;IACI,6DAA6C;IAC7C,aAAa;IACb,kBAAkB;AACtB;;AAEA;CACC;IACG,2BAA2B;CAC9B;;CAEA;IACG,aAAa;CAChB;;AAED","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* MEYERS RESET ABOVE */\n\nhtml {\n    background: url(./images/corkboard.webp);\n    background-size: cover;\n    color: white;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n:root {\n    --post-it-yellow: rgb(160, 160, 36);\n    --sidebar-background-colour: rgb(30, 30, 30);\n    --error-red: rgb(185, 0, 0);\n    --error-red-opaque: rgba(168, 16, 16, 0.384);\n}\n\n.error {\n    background: var(--error-red-opaque);\n    border: 2px solid var(--error-red);\n}\n\n.error::placeholder {\n    color: white;\n}\n\nheader {\n    font-size: 5rem;\n    padding: 2.5rem 0;\n    background-color: var(--sidebar-background-colour);\n    text-align: center;\n    grid-area: 1 / 1 / 2 / 4;\n}\n\n.filter {\n    position: fixed;\n    right: 0;\n    top: 0;\n    padding: 0.5rem;\n    border-radius: 0px 0px 0px 0.5rem;\n    background-color: var(--sidebar-background-colour);\n}\n\n.sidebar {\n    padding-top: 10%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-area: 2 / 1 / 3 / 1;\n    background-color: var(--sidebar-background-colour);\n    height: 100vh;\n}\n\n.sidebar button {\n    color: white;\n    font-size: 2rem;\n    background: var(--sidebar-background-colour);\n    text-align: center;\n    margin-top: 1rem;\n    border-style: none;\n}\n\n#all-projects ,\n#current-projects {\n    background: var(--sidebar-background-colour);\n    border-style: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;   \n}\n\nlabel {\n    margin-top: 1rem;\n}\n\n[name=\"project\"],\n[name=\"title\"],\n[name=\"to-do\"] {\n    border: 2px solid var(--post-it-yellow);\n    border-bottom: 1px solid black;\n    text-indent: 0.5rem;\n}\n\n[name=\"to-do\"] {\n    border-left: 1px solid black;\n    border-right: 1px solid black;\n    text-indent: 0rem;\n    border-radius: 1rem;  \n    padding: 0.5rem;\n}\n\n[name=\"save\"] {\n    margin-bottom: 2rem;\n    background: green;\n    color: white;\n    font-weight: bold;\n}\n\n[name=\"remove\"] {\n    background: rgb(220, 20, 20);\n    color: white;\n    font-weight: bold;\n}\n\n#toggle-new-form {\n    align-self: center;\n    border: 1px dashed black;\n    border-radius: 0.5rem;\n    background-color: green;\n    font-size: 1.5rem;\n}\n\n.pegboard {\n    display: grid;\n    grid-template-columns: minmax(150px,17%) 77%;\n}\n\nform {\n    display: flex;\n    max-height: 600px;\n    justify-content: center;\n    flex-direction: column;\n    background-color: var(--post-it-yellow); \n    padding: 1rem;\n    box-shadow: -2px 4px 5px black;\n    border: 1px solid black;\n}\n\nform p {\n    height: 2rem;\n}\n\nform textarea {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background-color: inherit;\n    color: black;\n    max-width: 40ch;\n}\n\nform input,\nform label,\nform span {\n    color: black;\n    border: none;\n    background-color: var(--post-it-yellow);\n    border-radius: 1rem;        \n}\n\nform button {\n    color: black;\n    background-color: var(--post-it-yellow);\n    border-radius: 1rem; \n}\n\n#to-do {\n    margin-top: 4%;\n    min-height: 30vh;\n    margin-left: 2%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(5vw, 350px));\n    gap: 4%;\n    justify-content: space-evenly;\n}\n\n.pin {\n    background: url(\"./images/pin.png\") no-repeat;\n    padding: 25px;\n    align-self: center;\n}\n\n@media only screen and (max-width: 400px) {\n .pegboard {\n    grid-template-columns: 100%;\n }\n\n .sidebar {\n    display: none;\n }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Data)
/* harmony export */ });
function Data() {
  const get = () => {
    const toDoLists = JSON.parse(localStorage.getItem("toDoLists"));
    return toDoLists ? toDoLists : [];
  };

  const add = (list) => {
    const toDoLists = get();
    list.id = Date.now();
    list["created-date"] = new Date();
    toDoLists.push(list);
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
  };

  const update = (list, index) => {
    const toDoLists = get();
    list["created-date"] = toDoLists[index]["created-date"];
    toDoLists.splice(index, 1, list);
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
  };

  const remove = (index) => {
    const toDoLists = get();
    toDoLists.splice(index, 1);
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
  };

  return { add, get, update, remove };
}


/***/ }),

/***/ "./src/modules/get-date.js":
/*!*********************************!*\
  !*** ./src/modules/get-date.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(date) {
  const formatted = () => {
    const date = new Date();
    const day = _format(date.getDate());
    const month = _format(date.getMonth() + 1);
    const year = _format(date.getFullYear());
    return `${day}/${month}/${year}`;
  };
  const _format = (num) => {
    if (num < 10) return "0" + num;
    return num.toString();
  };

  return formatted(date);
}


/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Interface)
/* harmony export */ });
/* harmony import */ var _modules_get_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/get-date */ "./src/modules/get-date.js");


function Interface() {
  const displayProjects = (projects, CURRENT_PROJECTS) => {
    for (const project of projects) {
      const projectButton = document.createElement("button");
      projectButton.textContent = project;
      projectButton.name = "project";
      CURRENT_PROJECTS.appendChild(projectButton);
    }
    return CURRENT_PROJECTS;
  };

  const toDoList = (toDoList, listIndex) => {
    const form = document.createElement("form");
    const pin = document.createElement("div");
    const projectLabel = document.createElement("label");
    const titleLabel = document.createElement("label");
    const toDoLabel = document.createElement("label");
    const dueDateLabel = document.createElement("label");
    const projectInput = document.createElement("input");
    const titleInput = document.createElement("input");
    const toDoInput = document.createElement("textarea");
    const dueDateInput = document.createElement("input");
    const projectBR = document.createElement("br");
    const titleBR = document.createElement("br");
    const toDoBR = document.createElement("br");
    const dueDateBR = document.createElement("br");
    const save = document.createElement("button");
    const remove = document.createElement("button");

    projectLabel.for = "project";
    projectLabel.textContent = "Project Name:";
    projectInput.type = "text";
    projectInput.placeholder = "Enter project name";

    titleLabel.for = "title";
    titleLabel.textContent = "Title:";
    titleInput.type = "text";
    titleInput.placeholder = "Enter title";

    toDoLabel.for = "to-do";
    toDoLabel.textContent = "To Do:";
    toDoInput.rows = "4";
    toDoInput.columns = "50";
    toDoInput.placeholder = "Enter note here";

    dueDateLabel.for = "due-date";
    dueDateLabel.textContent = "Date due:";
    dueDateInput.type = "date";
    dueDateInput.placeholder = "Enter due date";

    save.textContent = "Save";
    remove.textContent = "Delete";

    save.type = "button";
    remove.type = "button";

    form.setAttribute("id", "new-form");
    pin.setAttribute("class", "pin");
    projectInput.setAttribute("name", "project");
    titleInput.setAttribute("name", "title");
    toDoInput.setAttribute("name", "to-do");
    dueDateInput.setAttribute("name", "due-date");
    save.setAttribute("name", "save");
    remove.setAttribute("name", "remove");

    form.appendChild(pin);
    form.appendChild(projectLabel);
    form.appendChild(projectInput);
    form.appendChild(projectBR);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(titleBR);
    form.appendChild(toDoLabel);
    form.appendChild(toDoInput);
    form.appendChild(toDoBR);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(dueDateBR);

    if (toDoList) {
      projectInput.value = toDoList.project;
      titleInput.value = toDoList.title;
      toDoInput.value = toDoList["to-do"];
      dueDateInput.value = toDoList["due-date"];

      const createdDateLabel = document.createElement("label");
      const createdDateSpan = document.createElement("span");
      const createdDateBR = document.createElement("br");

      createdDateLabel.textContent = "Created Date:";
      createdDateLabel.for = "created-date";

      const _format = (num) => {
        if (num < 10) return "0" + num;
        return num.toString();
      };

      const date = toDoList["created-date"];
      createdDateSpan.textContent = (0,_modules_get_date__WEBPACK_IMPORTED_MODULE_0__["default"])(date);
      createdDateSpan.setAttribute("class", "created-date");
      createdDateSpan.setAttribute("name", "created-date");

      form.setAttribute("id", "index-" + listIndex);

      form.appendChild(createdDateLabel);
      form.appendChild(createdDateSpan);
      form.appendChild(createdDateBR);
    } else {
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      form.appendChild(p1);
      form.appendChild(p2);
    }

    form.appendChild(save);
    form.appendChild(remove);

    return form;
  };

  const getToDoListData = (HTMLForm) => {
    return {
      project: HTMLForm["project"].value,
      title: HTMLForm["title"].value,
      "to-do": HTMLForm["to-do"].value,
      "due-date": HTMLForm["due-date"].value,
    };
  };

  const removeChildContent = (...parents) => {
    for (const parent of parents) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  };

  const displayLists = (toDoLists, location) => {
    let listIndex = 0;
    for (const _list of toDoLists) {
      const list = toDoList(_list, listIndex);
      location.appendChild(list);
      listIndex += 1;
    }
  };

  return {
    displayProjects,
    toDoList,
    getToDoListData,
    removeChildContent,
    displayLists,
  };
}


/***/ }),

/***/ "./src/images/corkboard.webp":
/*!***********************************!*\
  !*** ./src/images/corkboard.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c02802bbb5beb87b3fc.webp";

/***/ }),

/***/ "./src/images/pin.png":
/*!****************************!*\
  !*** ./src/images/pin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49b915eb39cab5308d56.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data.js */ "./src/modules/data.js");
/* harmony import */ var _modules_interface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/interface.js */ "./src/modules/interface.js");




/* ---------- ---------- ---------- ---------- ---------- */
const controller = () => {
  const Interface = (0,_modules_interface_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const Data = (0,_modules_data_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const TO_DO_DOM = document.getElementById("to-do");
  const CURRENT_PROJECTS_DOM = document.getElementById("current-projects");
  const ALL_PROJECTS_BUTTON = document.getElementById("all-projects");
  let currentData,
    sort = "";

  ALL_PROJECTS_BUTTON.addEventListener("click", () => {
    updatePegboard(true);
  });

  const updatePegboard = (removeChildContent) => {
    if (removeChildContent) Interface.removeChildContent(TO_DO_DOM);
    currentData = Data.get();
    Interface.displayLists(currentData, TO_DO_DOM);
    startFormListeners();
  };

  const createProjectsSidebar = (removeChildContent) => {
    if (removeChildContent) Interface.removeChildContent(CURRENT_PROJECTS_DOM);
    Interface.displayProjects(projectsToDisplay(), CURRENT_PROJECTS_DOM);

    const projectButtons = document.querySelectorAll('[name="project"]');
    projectButtons.forEach((project) => {
      project.addEventListener("click", () => {
        Interface.removeChildContent(TO_DO_DOM);
        const projectName = project.textContent;
        const thisProjectsLists = getProjectLists(projectName);
        currentData = thisProjectsLists;
        Interface.displayLists(currentData, TO_DO_DOM);
      });
    });
  };

  const getProjectLists = (projectName) => {
    return Data.get().filter((list) => projectName === list.project);
  };

  const projectsToDisplay = () => {
    const toDoLists = Data.get();
    const allProjects = [];
    for (const list in toDoLists) {
      const projectName = toDoLists[list].project;
      if (!allProjects.includes(projectName)) allProjects.push(projectName);
      continue;
    }
    return allProjects;
  };

  const newFormListener = (form, input) => {
    form[input].placeholder = `Please enter a valid ${input}`;
    form[input].classList.add("error");
    form[input].addEventListener("change", (change) => {
      if (change.target.value === "") form[input].classList.add("error");
      if (change.target.value !== "") form[input].classList.remove("error");
    });
  };

  const validateListInput = (form) => {
    const listData = Interface.getToDoListData(form);
    if (listData.project && listData.title && listData["to-do"])
      return listData;

    if (!listData.project) newFormListener(form, "project");
    if (!listData.title) newFormListener(form, "title");
    if (!listData["to-do"]) newFormListener(form, "to-do");
    return { error: "Invalid content entry" };
  };

  const addList = (listData) => {
    const newForm = document.getElementById("new-form");
    Data.add(listData);
    newForm.style.cssText = "display: none;";
  };

  const updateList = (form, listData) => {
    const formIndex = getIndexFromID(form.id);
    Data.update(listData, formIndex);
  };

  const validateAndCreateToDoList = (form) => {
    const validatedListInput = validateListInput(form);
    if (validatedListInput.error) return;

    if (form.id === "new-form") {
      addList(validatedListInput);
    } else {
      updateList(form, validatedListInput);
    }
    createProjectsSidebar(true);
    updatePegboard(true);
  };

  const removeList = (formID) => {
    const index = getIndexFromID(formID);
    Data.remove(index);
    updatePegboard(true);
  };

  /* tidy up ifs */
  const sortData = (sortBy, data) => {
    const [sort, order] = sortBy.split("_");
    if (sort === "title" && order === "asc") {
      const sortedData = data.sort((a, b) => {
        const titleA = a.title;
        const titleB = b.title;
        return titleA > titleB ? 1 : -1;
      });
      return sortedData;
    }
    if (sort === "title" && order === "desc") {
      const sortedData = data.sort((a, b) => {
        const titleA = a.title;
        const titleB = b.title;
        return titleB > titleA ? 1 : -1;
      });
      return sortedData;
    }
    if (order === "asc") {
      const sortedData = data.sort((a, b) => {
        const dateA = new Date(a[sort]).getTime();
        const dateB = new Date(b[sort]).getTime();
        return dateA - dateB;
      });
      return sortedData;
    }
    if (order === "desc") {
      const sortedData = data.sort((a, b) => {
        const dateA = new Date(a[sort]).getTime();
        const dateB = new Date(b[sort]).getTime();
        return dateB - dateA;
      });
      return sortedData;
    }
  };

  const startSortListener = () => {
    const sortBy = document.getElementById("sort");
    sortBy.addEventListener("change", (event) => {
      sort = event.target.value;
      const sortedData = sortData(sort, currentData);
      console.log("--- Data returned --- ");
      console.log(sortedData);
      Interface.removeChildContent(TO_DO_DOM);
      Interface.displayLists(sortedData, TO_DO_DOM);
      currentData = sortedData;
    });
  };

  const startFormListeners = () => {
    toggleNewForm();
    startSortListener();
    const FORMS = document.querySelectorAll("form");
    FORMS.forEach((form) => {
      form["save"].addEventListener("click", () =>
        validateAndCreateToDoList(form)
      );
      form["remove"].addEventListener("click", () => {
        removeList(form.id);
        createProjectsSidebar(true);
      });
    });
  };

  const toggleListDisplay = (form) => {
    if (form.style.cssText === "display: flex;") {
      form.style.cssText = "display: none;";
    } else {
      form.style.cssText = "display: flex;";
    }
  };

  const toggleNewForm = () => {
    const newListForm = Interface.toDoList();
    TO_DO_DOM.appendChild(newListForm);
    const NEW_FORM = document.getElementById("new-form");
    NEW_FORM.style.display = "none";
    const TOGGLE_NEW_FORM = document.getElementById("toggle-new-form");
    TOGGLE_NEW_FORM.addEventListener("click", () =>
      toggleListDisplay(NEW_FORM)
    );
  };

  const getIndexFromID = (formID) => {
    //formID = `index-${array index}`
    const splitID = formID.split("-");
    return splitID[1];
  };

  createProjectsSidebar(false);
  updatePegboard(false);
};

controller();

/* 

add header explaining what this site is for

add "set as complete"

add priority (posit it colour change?)

check you can edit from within projects

create hamburger for projects [projectName] - selector (framework?)

shrink list card (double columns for dates and save/delete)

filters not working properly



*/

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUMsMENBQTBDO0FBQzFDLE1BQU07QUFDTiwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2dldC1kYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jb3JrYm9hcmQud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Bpbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qIE1FWUVSUyBSRVNFVCBBQk9WRSAqL1xuXG5odG1sIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgICAtLXBvc3QtaXQteWVsbG93OiByZ2IoMTYwLCAxNjAsIDM2KTtcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvdXI6IHJnYigzMCwgMzAsIDMwKTtcbiAgICAtLWVycm9yLXJlZDogcmdiKDE4NSwgMCwgMCk7XG4gICAgLS1lcnJvci1yZWQtb3BhcXVlOiByZ2JhKDE2OCwgMTYsIDE2LCAwLjM4NCk7XG59XG5cbi5lcnJvciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3ItcmVkLW9wYXF1ZSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZXJyb3ItcmVkKTtcbn1cblxuLmVycm9yOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBwYWRkaW5nOiAyLjVyZW0gMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3VyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xufVxuXG4uZmlsdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG91cik7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3VyKTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2lkZWJhciBidXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG91cik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4jYWxsLXByb2plY3RzICxcbiNjdXJyZW50LXByb2plY3RzIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3VyKTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXG59XG5cbmxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5bbmFtZT1cInByb2plY3RcIl0sXG5bbmFtZT1cInRpdGxlXCJdLFxuW25hbWU9XCJ0by1kb1wiXSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcG9zdC1pdC15ZWxsb3cpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB0ZXh0LWluZGVudDogMC41cmVtO1xufVxuXG5bbmFtZT1cInRvLWRvXCJdIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHRleHQtaW5kZW50OiAwcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07ICBcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbltuYW1lPVwic2F2ZVwiXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbltuYW1lPVwicmVtb3ZlXCJdIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIwLCAyMCwgMjApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RvZ2dsZS1uZXctZm9ybSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5wZWdib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwxNyUpIDc3JTtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvc3QtaXQteWVsbG93KTsgXG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3gtc2hhZG93OiAtMnB4IDRweCA1cHggYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmZvcm0gcCB7XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuXG5mb3JtIHRleHRhcmVhIHtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXgtd2lkdGg6IDQwY2g7XG59XG5cbmZvcm0gaW5wdXQsXG5mb3JtIGxhYmVsLFxuZm9ybSBzcGFuIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvc3QtaXQteWVsbG93KTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtOyAgICAgICAgXG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9zdC1pdC15ZWxsb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07IFxufVxuXG4jdG8tZG8ge1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIG1pbi1oZWlnaHQ6IDMwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1dncsIDM1MHB4KSk7XG4gICAgZ2FwOiA0JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnBpbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuIC5wZWdib2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuIH1cblxuIC5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLHVCQUF1Qjs7QUFFdkI7SUFDSSxtREFBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw2RUFBNkU7QUFDakY7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsNENBQTRDO0lBQzVDLDJCQUEyQjtJQUMzQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0RBQWtEO0lBQ2xELGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0RBQWtEO0lBQ2xELGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSx1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELE9BQU87SUFDUCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2REFBNkM7SUFDN0MsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtDQUNDO0lBQ0csMkJBQTJCO0NBQzlCOztDQUVBO0lBQ0csYUFBYTtDQUNoQjs7QUFFRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIE1FWUVSUyBSRVNFVCBBQk9WRSAqL1xcblxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvY29ya2JvYXJkLndlYnApO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcG9zdC1pdC15ZWxsb3c6IHJnYigxNjAsIDE2MCwgMzYpO1xcbiAgICAtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvdXI6IHJnYigzMCwgMzAsIDMwKTtcXG4gICAgLS1lcnJvci1yZWQ6IHJnYigxODUsIDAsIDApO1xcbiAgICAtLWVycm9yLXJlZC1vcGFxdWU6IHJnYmEoMTY4LCAxNiwgMTYsIDAuMzg0KTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3ItcmVkLW9wYXF1ZSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLXJlZCk7XFxufVxcblxcbi5lcnJvcjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgcGFkZGluZzogMi41cmVtIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG59XFxuXFxuLmZpbHRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvdXIpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG91cik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3VyKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbiNhbGwtcHJvamVjdHMgLFxcbiNjdXJyZW50LXByb2plY3RzIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG91cik7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICBcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5bbmFtZT1cXFwicHJvamVjdFxcXCJdLFxcbltuYW1lPVxcXCJ0aXRsZVxcXCJdLFxcbltuYW1lPVxcXCJ0by1kb1xcXCJdIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcG9zdC1pdC15ZWxsb3cpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHRleHQtaW5kZW50OiAwLjVyZW07XFxufVxcblxcbltuYW1lPVxcXCJ0by1kb1xcXCJdIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICAgIHRleHQtaW5kZW50OiAwcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtOyAgXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuW25hbWU9XFxcInNhdmVcXFwiXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5bbmFtZT1cXFwicmVtb3ZlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIwLCAyMCwgMjApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdG9nZ2xlLW5ldy1mb3JtIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucGVnYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwxNyUpIDc3JTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9zdC1pdC15ZWxsb3cpOyBcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogLTJweCA0cHggNXB4IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuZm9ybSBwIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG5mb3JtIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWF4LXdpZHRoOiA0MGNoO1xcbn1cXG5cXG5mb3JtIGlucHV0LFxcbmZvcm0gbGFiZWwsXFxuZm9ybSBzcGFuIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvc3QtaXQteWVsbG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTsgICAgICAgIFxcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9zdC1pdC15ZWxsb3cpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtOyBcXG59XFxuXFxuI3RvLWRvIHtcXG4gICAgbWFyZ2luLXRvcDogNCU7XFxuICAgIG1pbi1oZWlnaHQ6IDMwdmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1dncsIDM1MHB4KSk7XFxuICAgIGdhcDogNCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ucGluIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltYWdlcy9waW4ucG5nXFxcIikgbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gLnBlZ2JvYXJkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiB9XFxuXFxuIC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhKCkge1xuICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0xpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9MaXN0c1wiKSk7XG4gICAgcmV0dXJuIHRvRG9MaXN0cyA/IHRvRG9MaXN0cyA6IFtdO1xuICB9O1xuXG4gIGNvbnN0IGFkZCA9IChsaXN0KSA9PiB7XG4gICAgY29uc3QgdG9Eb0xpc3RzID0gZ2V0KCk7XG4gICAgbGlzdC5pZCA9IERhdGUubm93KCk7XG4gICAgbGlzdFtcImNyZWF0ZWQtZGF0ZVwiXSA9IG5ldyBEYXRlKCk7XG4gICAgdG9Eb0xpc3RzLnB1c2gobGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvTGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3RzKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGxpc3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdG9Eb0xpc3RzID0gZ2V0KCk7XG4gICAgbGlzdFtcImNyZWF0ZWQtZGF0ZVwiXSA9IHRvRG9MaXN0c1tpbmRleF1bXCJjcmVhdGVkLWRhdGVcIl07XG4gICAgdG9Eb0xpc3RzLnNwbGljZShpbmRleCwgMSwgbGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvTGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3RzKSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdG9Eb0xpc3RzID0gZ2V0KCk7XG4gICAgdG9Eb0xpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvTGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3RzKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkLCBnZXQsIHVwZGF0ZSwgcmVtb3ZlIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgY29uc3QgZm9ybWF0dGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheSA9IF9mb3JtYXQoZGF0ZS5nZXREYXRlKCkpO1xuICAgIGNvbnN0IG1vbnRoID0gX2Zvcm1hdChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb25zdCB5ZWFyID0gX2Zvcm1hdChkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xuICB9O1xuICBjb25zdCBfZm9ybWF0ID0gKG51bSkgPT4ge1xuICAgIGlmIChudW0gPCAxMCkgcmV0dXJuIFwiMFwiICsgbnVtO1xuICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcbiAgfTtcblxuICByZXR1cm4gZm9ybWF0dGVkKGRhdGUpO1xufVxuIiwiaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uL21vZHVsZXMvZ2V0LWRhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50ZXJmYWNlKCkge1xuICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAocHJvamVjdHMsIENVUlJFTlRfUFJPSkVDVFMpID0+IHtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICBwcm9qZWN0QnV0dG9uLm5hbWUgPSBcInByb2plY3RcIjtcbiAgICAgIENVUlJFTlRfUFJPSkVDVFMuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgfVxuICAgIHJldHVybiBDVVJSRU5UX1BST0pFQ1RTO1xuICB9O1xuXG4gIGNvbnN0IHRvRG9MaXN0ID0gKHRvRG9MaXN0LCBsaXN0SW5kZXgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgcGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0b0RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHRvRG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcHJvamVjdEJSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgIGNvbnN0IHRpdGxlQlIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgY29uc3QgdG9Eb0JSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgIGNvbnN0IGR1ZURhdGVCUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgICBjb25zdCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdExhYmVsLmZvciA9IFwicHJvamVjdFwiO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiO1xuICAgIHByb2plY3RJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcHJvamVjdElucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBwcm9qZWN0IG5hbWVcIjtcblxuICAgIHRpdGxlTGFiZWwuZm9yID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRpdGxlXCI7XG5cbiAgICB0b0RvTGFiZWwuZm9yID0gXCJ0by1kb1wiO1xuICAgIHRvRG9MYWJlbC50ZXh0Q29udGVudCA9IFwiVG8gRG86XCI7XG4gICAgdG9Eb0lucHV0LnJvd3MgPSBcIjRcIjtcbiAgICB0b0RvSW5wdXQuY29sdW1ucyA9IFwiNTBcIjtcbiAgICB0b0RvSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIG5vdGUgaGVyZVwiO1xuXG4gICAgZHVlRGF0ZUxhYmVsLmZvciA9IFwiZHVlLWRhdGVcIjtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGUgZHVlOlwiO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBkdWUgZGF0ZVwiO1xuXG4gICAgc2F2ZS50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuICAgIHJlbW92ZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICBzYXZlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHJlbW92ZS50eXBlID0gXCJidXR0b25cIjtcblxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctZm9ybVwiKTtcbiAgICBwaW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwaW5cIik7XG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRvRG9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG8tZG9cIik7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgICBzYXZlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzYXZlXCIpO1xuICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicmVtb3ZlXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwaW4pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0QlIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlQlIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9Eb0xhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvRG9JbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b0RvQlIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlQlIpO1xuXG4gICAgaWYgKHRvRG9MaXN0KSB7XG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSB0b0RvTGlzdC5wcm9qZWN0O1xuICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvRG9MaXN0LnRpdGxlO1xuICAgICAgdG9Eb0lucHV0LnZhbHVlID0gdG9Eb0xpc3RbXCJ0by1kb1wiXTtcbiAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRvRG9MaXN0W1wiZHVlLWRhdGVcIl07XG5cbiAgICAgIGNvbnN0IGNyZWF0ZWREYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBjb25zdCBjcmVhdGVkRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNvbnN0IGNyZWF0ZWREYXRlQlIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbiAgICAgIGNyZWF0ZWREYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgRGF0ZTpcIjtcbiAgICAgIGNyZWF0ZWREYXRlTGFiZWwuZm9yID0gXCJjcmVhdGVkLWRhdGVcIjtcblxuICAgICAgY29uc3QgX2Zvcm1hdCA9IChudW0pID0+IHtcbiAgICAgICAgaWYgKG51bSA8IDEwKSByZXR1cm4gXCIwXCIgKyBudW07XG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRhdGUgPSB0b0RvTGlzdFtcImNyZWF0ZWQtZGF0ZVwiXTtcbiAgICAgIGNyZWF0ZWREYXRlU3Bhbi50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gICAgICBjcmVhdGVkRGF0ZVNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjcmVhdGVkLWRhdGVcIik7XG4gICAgICBjcmVhdGVkRGF0ZVNwYW4uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNyZWF0ZWQtZGF0ZVwiKTtcblxuICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluZGV4LVwiICsgbGlzdEluZGV4KTtcblxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVkRGF0ZUxhYmVsKTtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlZERhdGVTcGFuKTtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlZERhdGVCUik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChwMSk7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHAyKTtcbiAgICB9XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHNhdmUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgIHJldHVybiBmb3JtO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvRG9MaXN0RGF0YSA9IChIVE1MRm9ybSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0OiBIVE1MRm9ybVtcInByb2plY3RcIl0udmFsdWUsXG4gICAgICB0aXRsZTogSFRNTEZvcm1bXCJ0aXRsZVwiXS52YWx1ZSxcbiAgICAgIFwidG8tZG9cIjogSFRNTEZvcm1bXCJ0by1kb1wiXS52YWx1ZSxcbiAgICAgIFwiZHVlLWRhdGVcIjogSFRNTEZvcm1bXCJkdWUtZGF0ZVwiXS52YWx1ZSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUNoaWxkQ29udGVudCA9ICguLi5wYXJlbnRzKSA9PiB7XG4gICAgZm9yIChjb25zdCBwYXJlbnQgb2YgcGFyZW50cykge1xuICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlMaXN0cyA9ICh0b0RvTGlzdHMsIGxvY2F0aW9uKSA9PiB7XG4gICAgbGV0IGxpc3RJbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBfbGlzdCBvZiB0b0RvTGlzdHMpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSB0b0RvTGlzdChfbGlzdCwgbGlzdEluZGV4KTtcbiAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgbGlzdEluZGV4ICs9IDE7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheVByb2plY3RzLFxuICAgIHRvRG9MaXN0LFxuICAgIGdldFRvRG9MaXN0RGF0YSxcbiAgICByZW1vdmVDaGlsZENvbnRlbnQsXG4gICAgZGlzcGxheUxpc3RzLFxuICB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBEQVRBIGZyb20gXCIuL21vZHVsZXMvZGF0YS5qc1wiO1xuaW1wb3J0IElOVEVSRkFDRSBmcm9tIFwiLi9tb2R1bGVzL2ludGVyZmFjZS5qc1wiO1xuXG4vKiAtLS0tLS0tLS0tIC0tLS0tLS0tLS0gLS0tLS0tLS0tLSAtLS0tLS0tLS0tIC0tLS0tLS0tLS0gKi9cbmNvbnN0IGNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IEludGVyZmFjZSA9IElOVEVSRkFDRSgpO1xuICBjb25zdCBEYXRhID0gREFUQSgpO1xuXG4gIGNvbnN0IFRPX0RPX0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG8tZG9cIik7XG4gIGNvbnN0IENVUlJFTlRfUFJPSkVDVFNfRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXByb2plY3RzXCIpO1xuICBjb25zdCBBTExfUFJPSkVDVFNfQlVUVE9OID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtcHJvamVjdHNcIik7XG4gIGxldCBjdXJyZW50RGF0YSxcbiAgICBzb3J0ID0gXCJcIjtcblxuICBBTExfUFJPSkVDVFNfQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdXBkYXRlUGVnYm9hcmQodHJ1ZSk7XG4gIH0pO1xuXG4gIGNvbnN0IHVwZGF0ZVBlZ2JvYXJkID0gKHJlbW92ZUNoaWxkQ29udGVudCkgPT4ge1xuICAgIGlmIChyZW1vdmVDaGlsZENvbnRlbnQpIEludGVyZmFjZS5yZW1vdmVDaGlsZENvbnRlbnQoVE9fRE9fRE9NKTtcbiAgICBjdXJyZW50RGF0YSA9IERhdGEuZ2V0KCk7XG4gICAgSW50ZXJmYWNlLmRpc3BsYXlMaXN0cyhjdXJyZW50RGF0YSwgVE9fRE9fRE9NKTtcbiAgICBzdGFydEZvcm1MaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0c1NpZGViYXIgPSAocmVtb3ZlQ2hpbGRDb250ZW50KSA9PiB7XG4gICAgaWYgKHJlbW92ZUNoaWxkQ29udGVudCkgSW50ZXJmYWNlLnJlbW92ZUNoaWxkQ29udGVudChDVVJSRU5UX1BST0pFQ1RTX0RPTSk7XG4gICAgSW50ZXJmYWNlLmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0c1RvRGlzcGxheSgpLCBDVVJSRU5UX1BST0pFQ1RTX0RPTSk7XG5cbiAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwicHJvamVjdFwiXScpO1xuICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgSW50ZXJmYWNlLnJlbW92ZUNoaWxkQ29udGVudChUT19ET19ET00pO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHRoaXNQcm9qZWN0c0xpc3RzID0gZ2V0UHJvamVjdExpc3RzKHByb2plY3ROYW1lKTtcbiAgICAgICAgY3VycmVudERhdGEgPSB0aGlzUHJvamVjdHNMaXN0cztcbiAgICAgICAgSW50ZXJmYWNlLmRpc3BsYXlMaXN0cyhjdXJyZW50RGF0YSwgVE9fRE9fRE9NKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RMaXN0cyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHJldHVybiBEYXRhLmdldCgpLmZpbHRlcigobGlzdCkgPT4gcHJvamVjdE5hbWUgPT09IGxpc3QucHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdHNUb0Rpc3BsYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0xpc3RzID0gRGF0YS5nZXQoKTtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuICAgIGZvciAoY29uc3QgbGlzdCBpbiB0b0RvTGlzdHMpIHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gdG9Eb0xpc3RzW2xpc3RdLnByb2plY3Q7XG4gICAgICBpZiAoIWFsbFByb2plY3RzLmluY2x1ZGVzKHByb2plY3ROYW1lKSkgYWxsUHJvamVjdHMucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbFByb2plY3RzO1xuICB9O1xuXG4gIGNvbnN0IG5ld0Zvcm1MaXN0ZW5lciA9IChmb3JtLCBpbnB1dCkgPT4ge1xuICAgIGZvcm1baW5wdXRdLnBsYWNlaG9sZGVyID0gYFBsZWFzZSBlbnRlciBhIHZhbGlkICR7aW5wdXR9YDtcbiAgICBmb3JtW2lucHV0XS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgZm9ybVtpbnB1dF0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoY2hhbmdlKSA9PiB7XG4gICAgICBpZiAoY2hhbmdlLnRhcmdldC52YWx1ZSA9PT0gXCJcIikgZm9ybVtpbnB1dF0uY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgaWYgKGNoYW5nZS50YXJnZXQudmFsdWUgIT09IFwiXCIpIGZvcm1baW5wdXRdLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZUxpc3RJbnB1dCA9IChmb3JtKSA9PiB7XG4gICAgY29uc3QgbGlzdERhdGEgPSBJbnRlcmZhY2UuZ2V0VG9Eb0xpc3REYXRhKGZvcm0pO1xuICAgIGlmIChsaXN0RGF0YS5wcm9qZWN0ICYmIGxpc3REYXRhLnRpdGxlICYmIGxpc3REYXRhW1widG8tZG9cIl0pXG4gICAgICByZXR1cm4gbGlzdERhdGE7XG5cbiAgICBpZiAoIWxpc3REYXRhLnByb2plY3QpIG5ld0Zvcm1MaXN0ZW5lcihmb3JtLCBcInByb2plY3RcIik7XG4gICAgaWYgKCFsaXN0RGF0YS50aXRsZSkgbmV3Rm9ybUxpc3RlbmVyKGZvcm0sIFwidGl0bGVcIik7XG4gICAgaWYgKCFsaXN0RGF0YVtcInRvLWRvXCJdKSBuZXdGb3JtTGlzdGVuZXIoZm9ybSwgXCJ0by1kb1wiKTtcbiAgICByZXR1cm4geyBlcnJvcjogXCJJbnZhbGlkIGNvbnRlbnQgZW50cnlcIiB9O1xuICB9O1xuXG4gIGNvbnN0IGFkZExpc3QgPSAobGlzdERhdGEpID0+IHtcbiAgICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctZm9ybVwiKTtcbiAgICBEYXRhLmFkZChsaXN0RGF0YSk7XG4gICAgbmV3Rm9ybS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBub25lO1wiO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUxpc3QgPSAoZm9ybSwgbGlzdERhdGEpID0+IHtcbiAgICBjb25zdCBmb3JtSW5kZXggPSBnZXRJbmRleEZyb21JRChmb3JtLmlkKTtcbiAgICBEYXRhLnVwZGF0ZShsaXN0RGF0YSwgZm9ybUluZGV4KTtcbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZUFuZENyZWF0ZVRvRG9MaXN0ID0gKGZvcm0pID0+IHtcbiAgICBjb25zdCB2YWxpZGF0ZWRMaXN0SW5wdXQgPSB2YWxpZGF0ZUxpc3RJbnB1dChmb3JtKTtcbiAgICBpZiAodmFsaWRhdGVkTGlzdElucHV0LmVycm9yKSByZXR1cm47XG5cbiAgICBpZiAoZm9ybS5pZCA9PT0gXCJuZXctZm9ybVwiKSB7XG4gICAgICBhZGRMaXN0KHZhbGlkYXRlZExpc3RJbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxpc3QoZm9ybSwgdmFsaWRhdGVkTGlzdElucHV0KTtcbiAgICB9XG4gICAgY3JlYXRlUHJvamVjdHNTaWRlYmFyKHRydWUpO1xuICAgIHVwZGF0ZVBlZ2JvYXJkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUxpc3QgPSAoZm9ybUlEKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEZyb21JRChmb3JtSUQpO1xuICAgIERhdGEucmVtb3ZlKGluZGV4KTtcbiAgICB1cGRhdGVQZWdib2FyZCh0cnVlKTtcbiAgfTtcblxuICAvKiB0aWR5IHVwIGlmcyAqL1xuICBjb25zdCBzb3J0RGF0YSA9IChzb3J0QnksIGRhdGEpID0+IHtcbiAgICBjb25zdCBbc29ydCwgb3JkZXJdID0gc29ydEJ5LnNwbGl0KFwiX1wiKTtcbiAgICBpZiAoc29ydCA9PT0gXCJ0aXRsZVwiICYmIG9yZGVyID09PSBcImFzY1wiKSB7XG4gICAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlQSA9IGEudGl0bGU7XG4gICAgICAgIGNvbnN0IHRpdGxlQiA9IGIudGl0bGU7XG4gICAgICAgIHJldHVybiB0aXRsZUEgPiB0aXRsZUIgPyAxIDogLTE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzb3J0ZWREYXRhO1xuICAgIH1cbiAgICBpZiAoc29ydCA9PT0gXCJ0aXRsZVwiICYmIG9yZGVyID09PSBcImRlc2NcIikge1xuICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZUEgPSBhLnRpdGxlO1xuICAgICAgICBjb25zdCB0aXRsZUIgPSBiLnRpdGxlO1xuICAgICAgICByZXR1cm4gdGl0bGVCID4gdGl0bGVBID8gMSA6IC0xO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc29ydGVkRGF0YTtcbiAgICB9XG4gICAgaWYgKG9yZGVyID09PSBcImFzY1wiKSB7XG4gICAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYVtzb3J0XSkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGJbc29ydF0pLmdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIGRhdGVBIC0gZGF0ZUI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzb3J0ZWREYXRhO1xuICAgIH1cbiAgICBpZiAob3JkZXIgPT09IFwiZGVzY1wiKSB7XG4gICAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYVtzb3J0XSkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGJbc29ydF0pLmdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzb3J0ZWREYXRhO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGFydFNvcnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBzb3J0QnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRcIik7XG4gICAgc29ydEJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBzb3J0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IHNvcnREYXRhKHNvcnQsIGN1cnJlbnREYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tIERhdGEgcmV0dXJuZWQgLS0tIFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHNvcnRlZERhdGEpO1xuICAgICAgSW50ZXJmYWNlLnJlbW92ZUNoaWxkQ29udGVudChUT19ET19ET00pO1xuICAgICAgSW50ZXJmYWNlLmRpc3BsYXlMaXN0cyhzb3J0ZWREYXRhLCBUT19ET19ET00pO1xuICAgICAgY3VycmVudERhdGEgPSBzb3J0ZWREYXRhO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0Rm9ybUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0b2dnbGVOZXdGb3JtKCk7XG4gICAgc3RhcnRTb3J0TGlzdGVuZXIoKTtcbiAgICBjb25zdCBGT1JNUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtXCIpO1xuICAgIEZPUk1TLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgIGZvcm1bXCJzYXZlXCJdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgICB2YWxpZGF0ZUFuZENyZWF0ZVRvRG9MaXN0KGZvcm0pXG4gICAgICApO1xuICAgICAgZm9ybVtcInJlbW92ZVwiXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVMaXN0KGZvcm0uaWQpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0c1NpZGViYXIodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVMaXN0RGlzcGxheSA9IChmb3JtKSA9PiB7XG4gICAgaWYgKGZvcm0uc3R5bGUuY3NzVGV4dCA9PT0gXCJkaXNwbGF5OiBmbGV4O1wiKSB7XG4gICAgICBmb3JtLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmU7XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm0uc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDtcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlTmV3Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0Rm9ybSA9IEludGVyZmFjZS50b0RvTGlzdCgpO1xuICAgIFRPX0RPX0RPTS5hcHBlbmRDaGlsZChuZXdMaXN0Rm9ybSk7XG4gICAgY29uc3QgTkVXX0ZPUk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1mb3JtXCIpO1xuICAgIE5FV19GT1JNLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCBUT0dHTEVfTkVXX0ZPUk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1uZXctZm9ybVwiKTtcbiAgICBUT0dHTEVfTkVXX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICB0b2dnbGVMaXN0RGlzcGxheShORVdfRk9STSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGdldEluZGV4RnJvbUlEID0gKGZvcm1JRCkgPT4ge1xuICAgIC8vZm9ybUlEID0gYGluZGV4LSR7YXJyYXkgaW5kZXh9YFxuICAgIGNvbnN0IHNwbGl0SUQgPSBmb3JtSUQuc3BsaXQoXCItXCIpO1xuICAgIHJldHVybiBzcGxpdElEWzFdO1xuICB9O1xuXG4gIGNyZWF0ZVByb2plY3RzU2lkZWJhcihmYWxzZSk7XG4gIHVwZGF0ZVBlZ2JvYXJkKGZhbHNlKTtcbn07XG5cbmNvbnRyb2xsZXIoKTtcblxuLyogXG5cbmFkZCBoZWFkZXIgZXhwbGFpbmluZyB3aGF0IHRoaXMgc2l0ZSBpcyBmb3JcblxuYWRkIFwic2V0IGFzIGNvbXBsZXRlXCJcblxuYWRkIHByaW9yaXR5IChwb3NpdCBpdCBjb2xvdXIgY2hhbmdlPylcblxuY2hlY2sgeW91IGNhbiBlZGl0IGZyb20gd2l0aGluIHByb2plY3RzXG5cbmNyZWF0ZSBoYW1idXJnZXIgZm9yIHByb2plY3RzIFtwcm9qZWN0TmFtZV0gLSBzZWxlY3RvciAoZnJhbWV3b3JrPylcblxuc2hyaW5rIGxpc3QgY2FyZCAoZG91YmxlIGNvbHVtbnMgZm9yIGRhdGVzIGFuZCBzYXZlL2RlbGV0ZSlcblxuZmlsdGVycyBub3Qgd29ya2luZyBwcm9wZXJseVxuXG5cblxuKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==