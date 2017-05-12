/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CLASS_SLIDER = exports.CLASS_SLIDER = 'alGSlider',
    CLASS_SLIDE = exports.CLASS_SLIDE = 'alGSlider__slide',
    CLASS_SLIDE_ITEM = exports.CLASS_SLIDE_ITEM = 'alGSlider__slide-item',
    CLASS_ARROW_LEFT = exports.CLASS_ARROW_LEFT = 'alGSlider__arrow-left',
    CLASS_ARROW_RIGHT = exports.CLASS_ARROW_RIGHT = 'alGSlider__arrow-right',
    CLASS_SLIDE_HIDDEN = exports.CLASS_SLIDE_HIDDEN = 'alGSlider__slide--hidden',
    CLASS_BREADCRUMBS = exports.CLASS_BREADCRUMBS = 'alGSlider__breadcrumbs',
    CLASS_BREADCRUMBS_ITEM = exports.CLASS_BREADCRUMBS_ITEM = 'alGSlider__breadcrumbs-item',
    CLASS_BREADCRUMBS_ITEM_ACTIVE = exports.CLASS_BREADCRUMBS_ITEM_ACTIVE = 'alGSlider__breadcrumbs-item--active';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CREATE_ARROWS = exports.CREATE_ARROWS = 'CREATE_ARROWS',
    CREATE_MAIN_CONTAINER = exports.CREATE_MAIN_CONTAINER = 'CREATE_MAIN_CONTAINER',
    CREATE_SLIDES = exports.CREATE_SLIDES = 'CREATE_SLIDES',
    CREATE_BREADCRUMBS = exports.CREATE_BREADCRUMBS = 'CREATE_BREADCRUMBS',
    CREATE_DATA_NOT_FOUND = exports.CREATE_DATA_NOT_FOUND = 'CREATE_DATA_NOT_FOUND',
    SET_OPTIONS = exports.SET_OPTIONS = 'SET_OPTIONS',
    SET_SLIDES = exports.SET_SLIDES = 'SET_SLIDES',
    SET_BREADCRUMBS = exports.SET_BREADCRUMBS = 'SET_BREADCRUMBS',
    DISPLAY_SLIDE = exports.DISPLAY_SLIDE = 'DISPLAY_SLIDE',
    SET_TIMER = exports.SET_TIMER = 'SET_TIMER';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Store = __webpack_require__(14);

var _Store2 = _interopRequireDefault(_Store);

var _elementsBuilder = __webpack_require__(13);

var _elementsBuilder2 = _interopRequireDefault(_elementsBuilder);

var _actions = __webpack_require__(7);

var action = _interopRequireWildcard(_actions);

var _classNames = __webpack_require__(0);

var classes = _interopRequireWildcard(_classNames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider(rootContainerId) {
        var _this = this;

        _classCallCheck(this, Slider);

        this.prevSlide = function (event) {
            event && event.preventDefault();

            var _store$state = _Store2.default.state,
                currentSlide = _store$state.currentSlide,
                slides = _store$state.slides,
                targetSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;


            _Store2.default.update(action.displaySlide(targetSlide));
        };

        this.nextSlide = function (event) {
            event && event.preventDefault();

            var _store$state2 = _Store2.default.state,
                currentSlide = _store$state2.currentSlide,
                slides = _store$state2.slides,
                targetSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;


            _Store2.default.update(action.displaySlide(targetSlide));
        };

        this.selectSlide = function (event) {
            event && event.preventDefault();

            var targetSlide = parseInt(event.target.dataset.key, 10);

            if (isNaN(targetSlide)) return;

            _Store2.default.update(action.displaySlide(targetSlide));
        };

        this.displaySlide = function () {
            var _store$state3 = _Store2.default.state,
                currentSlide = _store$state3.currentSlide,
                prevSlide = _store$state3.prevSlide,
                slides = _store$state3.slides,
                breadcrumbs = _store$state3.breadcrumbs,
                options = _store$state3.options;


            slides[prevSlide].classList.add(classes.CLASS_SLIDE_HIDDEN);
            slides[currentSlide].classList.remove(classes.CLASS_SLIDE_HIDDEN);

            if (options.breadcrumbs) {
                breadcrumbs[prevSlide].classList.remove(classes.CLASS_BREADCRUMBS_ITEM_ACTIVE);
                breadcrumbs[currentSlide].classList.add(classes.CLASS_BREADCRUMBS_ITEM_ACTIVE);
            }
        };

        this.run = function (stopEvent) {
            var delay = _Store2.default.state.options.delay,
                self = _this;


            if (!delay) return;

            if (stopEvent === 'stop') {
                var timer = _Store2.default.state.timer;

                clearTimeout(timer);
                _Store2.default.update(action.setTimer(null));
                return;
            }

            var timerId = setTimeout(function run() {
                timerId = setTimeout(run, delay);
                self.nextSlide();
                _Store2.default.update(action.setTimer(timerId));
            }, delay);

            _Store2.default.update(action.setTimer(timerId));
        };

        this.rootContainer = document.getElementById(rootContainerId);
    }

    _createClass(Slider, [{
        key: 'create',
        value: function create() {
            var userOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _Store2.default.update(action.setOptions(userOptions));

            var noop = [],
                options = _Store2.default.state.options,
                urls = options.urls.length ? options.urls : noop,
                elemsRootContainer = Array.prototype.slice.call(this.rootContainer.children),
                slidesContent = Array.prototype.concat(urls, elemsRootContainer),
                arrowData = [{
                direction: 'left',
                listener: this.prevSlide
            }, {
                direction: 'right',
                listener: this.nextSlide
            }],
                breadcrumbsData = {
                amount: slidesContent.length,
                listener: this.selectSlide
            };


            var container = (0, _elementsBuilder2.default)(action.createMainContainer({ listener: this.run })),
                slides = slidesContent.length ? (0, _elementsBuilder2.default)(action.createSlides(slidesContent)) : (0, _elementsBuilder2.default)(action.createDataNotFound()),
                breadcrumbs = options.breadcrumbs ? (0, _elementsBuilder2.default)(action.createBreadcrumbs(breadcrumbsData)) : noop,
                arrows = options.controls ? (0, _elementsBuilder2.default)(action.createArrows(arrowData)) : noop;

            _Store2.default.update(action.setSlides(slides));
            _Store2.default.update(action.setBreadcrumbs(breadcrumbs.children));
            _Store2.default.subscribe(function () {
                console.log('currentSlide ' + _Store2.default.state.currentSlide + ', prevSlide ' + _Store2.default.state.prevSlide);
            });
            _Store2.default.subscribe(this.displaySlide);

            container.append.apply(container, _toConsumableArray(Array.prototype.concat(slides, breadcrumbs, arrows)));
            this.rootContainer.appendChild(container);

            this.run();
        }
    }]);

    return Slider;
}();

exports.default = Slider;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Slider = __webpack_require__(2);

var _Slider2 = _interopRequireDefault(_Slider);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.alGSlider = function (id, options) {
  return new _Slider2.default(id).create(options);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createMainContainer = createMainContainer;
exports.createArrows = createArrows;
exports.createSlides = createSlides;
exports.createBreadcrumbs = createBreadcrumbs;
exports.createDataNotFound = createDataNotFound;
exports.setOptions = setOptions;
exports.setSlides = setSlides;
exports.setBreadcrumbs = setBreadcrumbs;
exports.displaySlide = displaySlide;
exports.setTimer = setTimer;

var _actionTypes = __webpack_require__(1);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createMainContainer(dataContainer) {
    return {
        type: types.CREATE_MAIN_CONTAINER,
        payload: dataContainer
    };
}

function createArrows(dataArrows) {
    return {
        type: types.CREATE_ARROWS,
        payload: dataArrows
    };
}

function createSlides(dataSlides) {
    return {
        type: types.CREATE_SLIDES,
        payload: dataSlides
    };
}

function createBreadcrumbs(dataBreadcrumbs) {
    return {
        type: types.CREATE_BREADCRUMBS,
        payload: dataBreadcrumbs
    };
}

function createDataNotFound() {
    return { type: types.CREATE_DATA_NOT_FOUND };
}

function setOptions(options) {
    return { type: types.SET_OPTIONS, payload: options };
}

function setSlides(slides) {
    return { type: types.SET_SLIDES, payload: slides };
}

function setBreadcrumbs(breadcrumbs) {
    return { type: types.SET_BREADCRUMBS, payload: breadcrumbs };
}

function displaySlide(targetSlide) {
    return { type: types.DISPLAY_SLIDE, payload: targetSlide };
}

function setTimer(timerId) {
    return { type: types.SET_TIMER, payload: timerId };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Arrows;

var _classNames = __webpack_require__(0);

/*
 [
     {
         direction: 'left',
         listener: function()
     },
     {
         direction: 'right',
         listener: function()
     }
 ]
 */

function Arrows(dataArr) {
    return dataArr.map(function (item) {
        var direction = item.direction,
            listener = item.listener;


        return Arrow(direction, listener);
    });
}

function Arrow(direction, listener) {
    var arrow = document.createElement('button'),
        classes = direction === 'left' ? _classNames.CLASS_ARROW_LEFT : _classNames.CLASS_ARROW_RIGHT;

    arrow.classList.add(classes);
    arrow.addEventListener('click', listener, false);

    return arrow;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createBreadcrumbs;

var _classNames = __webpack_require__(0);

function createBreadcrumbs(_ref) {
    var amount = _ref.amount,
        listener = _ref.listener;

    var breadcrumbsContainer = document.createElement('div');

    for (var i = 0; i < amount; i++) {
        var point = document.createElement('div');

        if (i === 0) {
            point.classList.add(_classNames.CLASS_BREADCRUMBS_ITEM, _classNames.CLASS_BREADCRUMBS_ITEM_ACTIVE);
        } else {
            point.classList.add(_classNames.CLASS_BREADCRUMBS_ITEM);
        }

        point.setAttribute('data-key', i);

        breadcrumbsContainer.appendChild(point);
    }

    breadcrumbsContainer.classList.add(_classNames.CLASS_BREADCRUMBS);
    breadcrumbsContainer.addEventListener('click', listener, false);

    return breadcrumbsContainer;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DataNotFound;
function DataNotFound() {
    var divElem = document.createElement('div');

    divElem.textContent = 'Нет данных для отображения';

    return divElem;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Container;

var _classNames = __webpack_require__(0);

function Container(_ref) {
    var listener = _ref.listener;

    var container = document.createElement('div');

    container.classList.add(_classNames.CLASS_SLIDER);
    container.addEventListener('mouseenter', function () {
        console.log('mouseenter');listener('stop');
    });
    container.addEventListener('mouseleave', function () {
        console.log('mouseleave');listener();
    });

    return container;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Slides;

var _classNames = __webpack_require__(0);

function Slides(dataArr) {
    return Array.prototype.map.call(dataArr, function (item, key) {
        return Slide(item, key);
    });
}

function Slide(item, key) {
    var divContainer = document.createElement('div');

    var content = null;

    if (key === 0) {
        divContainer.classList.add(_classNames.CLASS_SLIDE);
    } else {
        divContainer.classList.add(_classNames.CLASS_SLIDE, _classNames.CLASS_SLIDE_HIDDEN);
    }

    divContainer.setAttribute('data-key', key);

    if (item.nodeType) {
        content = item;
    } else {
        content = document.createElement('img');
        content.setAttribute('src', item);
    }

    content.classList.add(_classNames.CLASS_SLIDE_ITEM);

    divContainer.appendChild(content);

    return divContainer;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = elementsBuilder;

var _MainContainer = __webpack_require__(11);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Slides = __webpack_require__(12);

var _Slides2 = _interopRequireDefault(_Slides);

var _Arrows = __webpack_require__(8);

var _Arrows2 = _interopRequireDefault(_Arrows);

var _Breadcrumbs = __webpack_require__(9);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _DataNotFound = __webpack_require__(10);

var _DataNotFound2 = _interopRequireDefault(_DataNotFound);

var _actionTypes = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementsBuilder(action) {
    switch (action.type) {
        case _actionTypes.CREATE_MAIN_CONTAINER:
            return (0, _MainContainer2.default)(action.payload);
        case _actionTypes.CREATE_SLIDES:
            return (0, _Slides2.default)(action.payload);
        case _actionTypes.CREATE_ARROWS:
            return (0, _Arrows2.default)(action.payload);
        case _actionTypes.CREATE_BREADCRUMBS:
            return (0, _Breadcrumbs2.default)(action.payload);
        case _actionTypes.CREATE_DATA_NOT_FOUND:
        default:
            return (0, _DataNotFound2.default)();
    }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _updateState = __webpack_require__(15);

var _updateState2 = _interopRequireDefault(_updateState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
    function Store(updateState, state) {
        _classCallCheck(this, Store);

        this._updateState = updateState;
        this._state = state;
        this._callbacks = [];
    }

    _createClass(Store, [{
        key: 'update',
        value: function update(action) {
            this._state = this._updateState(this._state, action);
            this._callbacks.forEach(function (callback) {
                return callback();
            });
        }
    }, {
        key: 'subscribe',
        value: function subscribe(callback) {
            this._callbacks.push(callback);
        }
    }, {
        key: 'state',
        get: function get() {
            return this._state;
        }
    }]);

    return Store;
}();

var store = new Store(_updateState2.default);

exports.default = store;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = updateState;

var _actionTypes = __webpack_require__(1);

var initialState = {
    slides: null,
    breadcrumbs: null,
    timer: null,
    currentSlide: 0,
    prevSlide: 0,
    options: {
        urls: [],
        breadcrumbs: true,
        controls: true,
        delay: 0,
        transition: 'liner'
    }
};

function updateState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    console.log('action.type', action.type, 'action.payload', action.payload);
    switch (action.type) {
        case _actionTypes.SET_OPTIONS:
            return _extends({}, state, {
                options: _extends({}, state.options, action.payload)
            });
        case _actionTypes.SET_SLIDES:
            return _extends({}, state, {
                slides: action.payload
            });
        case _actionTypes.SET_BREADCRUMBS:
            return _extends({}, state, {
                breadcrumbs: action.payload
            });
        case _actionTypes.DISPLAY_SLIDE:
            return _extends({}, state, {
                prevSlide: state.currentSlide,
                currentSlide: action.payload
            });
        case _actionTypes.SET_TIMER:
            return _extends({}, state, {
                timer: action.payload
            });
        default:
            return state;
    }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".alGSlider {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    max-width: 1280px;\r\n}\r\n\r\n.alGSlider__slide {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.alGSlider__slide--hidden {\r\n    display: none;\r\n}\r\n\r\n.alGSlider__slide-item {\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.alGSlider__arrow-left,\r\n.alGSlider__arrow-right {\r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    display: block;\r\n    width: 40px;\r\n    height: 100%;\r\n    padding: 0;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    background: rgba(0,0,0,0.2);\r\n    color: #fff;\r\n    font-size: 25px;\r\n}\r\n\r\n.alGSlider__arrow-left {\r\n    left: 0;\r\n}\r\n\r\n.alGSlider__arrow-left::after {\r\n    content: '<';\r\n}\r\n\r\n.alGSlider__arrow-right {\r\n    right: 0;\r\n}\r\n\r\n.alGSlider__arrow-right::after {\r\n    content: '>';\r\n}\r\n\r\n.alGSlider__breadcrumbs {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    padding-bottom: 10px;\r\n    z-index: 1;\r\n    text-align: center;\r\n}\r\n\r\n.alGSlider__breadcrumbs-item {\r\n    display: inline-block;\r\n    width: 5px;\r\n    height: 5px;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    border: 3px solid #ffffff;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n.alGSlider__breadcrumbs-item--active {\r\n    background: #22dd33;\r\n}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);