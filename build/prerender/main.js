module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./app/entry.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _mainRoutes = __webpack_require__(/*! ./mainRoutes */ 3);

	var _mainRoutes2 = _interopRequireDefault(_mainRoutes);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	_react2['default'].render(_react2['default'].createElement(_reactRouter2['default'], { routes: _mainRoutes2['default'] }), document.getElementById('content'));

/***/ },
/* 1 */,
/* 2 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/*!***************************!*\
  !*** ./app/mainRoutes.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	/* eslint-disable no-multi-spaces */
	// Only import from `route-handlers/*`

	var _componentsApp = __webpack_require__(/*! components/App */ 46);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

	var _componentsOverview = __webpack_require__(/*! components/Overview */ 53);

	var _componentsOverview2 = _interopRequireDefault(_componentsOverview);

	var _componentsEstimator = __webpack_require__(/*! components/Estimator */ 139);

	var _componentsEstimator2 = _interopRequireDefault(_componentsEstimator);

	var _componentsHistory = __webpack_require__(/*! components/History */ 140);

	var _componentsHistory2 = _interopRequireDefault(_componentsHistory);

	var _componentsSettings = __webpack_require__(/*! components/Settings */ 141);

	var _componentsSettings2 = _interopRequireDefault(_componentsSettings);

	var _componentsMap = __webpack_require__(/*! components/Map */ 142);

	var _componentsMap2 = _interopRequireDefault(_componentsMap);

	/* eslint-enable */

	// polyfill
	if (!Object.assign) Object.assign = _react2["default"].__spread; // eslint-disable-line no-underscore-dangle

	// export routes
	module.exports = _react2["default"].createElement(
		_reactRouter.Route,
		{ name: "app", path: "/", component: _componentsApp2["default"] },
		_react2["default"].createElement(_reactRouter.IndexRoute, { name: "overview", component: _componentsOverview2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "estimator", path: "/estimator", component: _componentsEstimator2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "history", path: "/history", component: _componentsHistory2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "settings", path: "/settings", component: _componentsSettings2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "map", path: "/map", component: _componentsMap2["default"] })
	);

/***/ },
/* 4 */
/*!*************************************!*\
  !*** ./~/react-router/lib/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(/*! ./Router */ 5);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(/*! ./Link */ 37);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	/* components (configuration) */

	var _IndexRoute2 = __webpack_require__(/*! ./IndexRoute */ 38);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	exports.IndexRoute = _IndexRoute3['default'];

	var _Redirect2 = __webpack_require__(/*! ./Redirect */ 39);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(/*! ./Route */ 40);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _History2 = __webpack_require__(/*! ./History */ 41);

	var _History3 = _interopRequireDefault(_History2);

	exports.History = _History3['default'];

	var _Lifecycle2 = __webpack_require__(/*! ./Lifecycle */ 42);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	exports.Lifecycle = _Lifecycle3['default'];

	var _RouteContext2 = __webpack_require__(/*! ./RouteContext */ 43);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	exports.RouteContext = _RouteContext3['default'];

	/* utils */

	var _useRoutes2 = __webpack_require__(/*! ./useRoutes */ 24);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	exports.useRoutes = _useRoutes3['default'];

	var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ 20);

	exports.createRoutes = _RouteUtils.createRoutes;

	var _RoutingContext2 = __webpack_require__(/*! ./RoutingContext */ 21);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	exports.RoutingContext = _RoutingContext3['default'];

	var _PropTypes2 = __webpack_require__(/*! ./PropTypes */ 36);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _match2 = __webpack_require__(/*! ./match */ 44);

	var _match3 = _interopRequireDefault(_match2);

	exports.match = _match3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },
/* 5 */
/*!**************************************!*\
  !*** ./~/react-router/lib/Router.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(/*! warning */ 6);

	var _warning2 = _interopRequireDefault(_warning);

	var _historyLibCreateHashHistory = __webpack_require__(/*! history/lib/createHashHistory */ 7);

	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

	var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ 20);

	var _RoutingContext = __webpack_require__(/*! ./RoutingContext */ 21);

	var _RoutingContext2 = _interopRequireDefault(_RoutingContext);

	var _useRoutes = __webpack_require__(/*! ./useRoutes */ 24);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var _PropTypes = __webpack_require__(/*! ./PropTypes */ 36);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RoutingContext> with all the props
	 * it needs each time the URL changes.
	 */
	var Router = _react2['default'].createClass({
	  displayName: 'Router',

	  propTypes: {
	    history: object,
	    children: _PropTypes.routes,
	    routes: _PropTypes.routes, // alias for children
	    createElement: func,
	    onError: func,
	    onUpdate: func,
	    parseQueryString: func,
	    stringifyQuery: func
	  },

	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },

	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },

	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var history = _props.history;
	    var children = _props.children;
	    var routes = _props.routes;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    var createHistory = history ? function () {
	      return history;
	    } : _historyLibCreateHashHistory2['default'];

	    this.history = _useRoutes2['default'](createHistory)({
	      routes: _RouteUtils.createRoutes(routes || children),
	      parseQueryString: parseQueryString,
	      stringifyQuery: stringifyQuery
	    });

	    this._unlisten = this.history.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    _warning2['default'](nextProps.history === this.props.history, "The `history` provided to <Router/> has changed, it will be ignored.");
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },

	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var createElement = this.props.createElement;

	    if (location == null) return null; // Async match

	    return _react2['default'].createElement(_RoutingContext2['default'], {
	      history: this.history,
	      createElement: createElement,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components
	    });
	  }

	});

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 6 */
/*!*********************************************!*\
  !*** ./~/react-router/~/warning/warning.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var __DEV__ = ("production") !== 'production';

	var warning = function() {};

	if (__DEV__) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 7 */
/*!***********************************************************!*\
  !*** ./~/react-router/~/history/lib/createHashHistory.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(/*! warning */ 6);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(/*! ./Actions */ 9);

	var _ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 10);

	var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ 11);

	var _DOMStateStorage = __webpack_require__(/*! ./DOMStateStorage */ 12);

	var _createDOMHistory = __webpack_require__(/*! ./createDOMHistory */ 13);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	var _createLocation = __webpack_require__(/*! ./createLocation */ 19);

	var _createLocation2 = _interopRequireDefault(_createLocation);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Hash history needs a DOM');

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    }

	    return _createLocation2['default'](path, state, undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = pathname + search;

	    if (queryKey) path = addQueryStringValueToPath(path, queryKey, key);

	    if (path === _DOMUtils.getHashPath()) {
	      _warning2['default'](false, 'You cannot %s the same path using hash history', action);
	    } else {
	      if (queryKey) {
	        _DOMStateStorage.saveState(key, state);
	      } else {
	        // Drop key and state.
	        location.key = location.state = null;
	      }

	      if (action === _Actions.PUSH) {
	        window.location.hash = path;
	      } else {
	        // REPLACE
	        _DOMUtils.replaceHashPath(path);
	      }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function pushState(state, path) {
	    _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped');

	    history.pushState(state, path);
	  }

	  function replaceState(state, path) {
	    _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped');

	    history.replaceState(state, path);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	    _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  return _extends({}, history, {
	    listen: listen,
	    pushState: pushState,
	    replaceState: replaceState,
	    go: go,
	    createHref: createHref
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];

/***/ },
/* 8 */
/*!*************************************************!*\
  !*** ./~/react-router/~/invariant/invariant.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var __DEV__ = ("production") !== 'production';

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (__DEV__) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 9 */
/*!*************************************************!*\
  !*** ./~/react-router/~/history/lib/Actions.js ***!
  \*************************************************/
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 10 */
/*!**************************************************************!*\
  !*** ./~/react-router/~/history/lib/ExecutionEnvironment.js ***!
  \**************************************************************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 11 */
/*!**************************************************!*\
  !*** ./~/react-router/~/history/lib/DOMUtils.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 12 */
/*!*********************************************************!*\
  !*** ./~/react-router/~/history/lib/DOMStateStorage.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;
	var KeyPrefix = '@@History/';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	}

	function readState(key) {
	  var json = window.sessionStorage.getItem(createKey(key));

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}

/***/ },
/* 13 */
/*!**********************************************************!*\
  !*** ./~/react-router/~/history/lib/createDOMHistory.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 10);

	var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ 11);

	var _createHistory = __webpack_require__(/*! ./createHistory */ 14);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'DOM history needs a DOM');

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];

/***/ },
/* 14 */
/*!*******************************************************!*\
  !*** ./~/react-router/~/history/lib/createHistory.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(/*! warning */ 6);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _deepEqual = __webpack_require__(/*! deep-equal */ 15);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ 18);

	var _Actions = __webpack_require__(/*! ./Actions */ 9);

	var _createLocation = __webpack_require__(/*! ./createLocation */ 19);

	var _createLocation2 = _interopRequireDefault(_createLocation);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var keyLength = options.keyLength;
	  var getUserConfirmation = options.getUserConfirmation;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];
	  var changeListeners = [];
	  var location = undefined;

	  var allKeys = [];

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function addChangeListener(listener) {
	    changeListeners.push(listener);
	  }

	  function removeChangeListener(listener) {
	    changeListeners = changeListeners.filter(function (item) {
	      return item !== listener;
	    });
	  }

	  function listen(listener) {
	    addChangeListener(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      removeChangeListener(listener);
	    };
	  }

	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  function runTransitionHook(hook, location, callback) {
	    var result = hook(location, callback);

	    if (hook.length < 2) {
	      // Assume the hook runs synchronously and automatically
	      // call the callback with the return value.
	      callback(result);
	    } else {
	      _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument call the callback instead');
	    }
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      runTransitionHook(transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    _invariant2['default'](pendingLocation == null, 'transitionTo: Another transition is already in progress');

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      pendingLocation = null;

	      if (ok) {
	        finishTransition(nextLocation);
	        updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function pushState(state, path) {
	    transitionTo(_createLocation2['default'](path, state, _Actions.PUSH, createKey()));
	  }

	  function replaceState(state, path) {
	    transitionTo(_createLocation2['default'](path, state, _Actions.REPLACE, createKey()));
	  }

	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(path) {
	    return path;
	  }

	  function createHref(path) {
	    return createPath(path);
	  }

	  return {
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook,
	    transitionTo: transitionTo,
	    pushState: pushState,
	    replaceState: replaceState,
	    setState: setState,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 15 */
/*!********************************************************!*\
  !*** ./~/react-router/~/history/~/deep-equal/index.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(/*! ./lib/keys.js */ 16);
	var isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ 17);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 16 */
/*!***********************************************************!*\
  !*** ./~/react-router/~/history/~/deep-equal/lib/keys.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 17 */
/*!*******************************************************************!*\
  !*** ./~/react-router/~/history/~/deep-equal/lib/is_arguments.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 18 */
/*!****************************************************!*\
  !*** ./~/react-router/~/history/lib/AsyncUtils.js ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

/***/ },
/* 19 */
/*!********************************************************!*\
  !*** ./~/react-router/~/history/lib/createLocation.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(/*! warning */ 6);

	var _warning2 = _interopRequireDefault(_warning);

	var _Actions = __webpack_require__(/*! ./Actions */ 9);

	function extractPath(string) {
	  var match = string.match(/https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  _warning2['default'](false, 'Location path must be pathname + query string only, not a fully qualified URL like "%s"', string);

	  return string.substring(match[0].length);
	}

	function createLocation() {
	  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
	  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  path = extractPath(path);

	  var pathname = path;
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ },
/* 20 */
/*!******************************************!*\
  !*** ./~/react-router/lib/RouteUtils.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(/*! warning */ 6);

	var _warning2 = _interopRequireDefault(_warning);

	function isValidChild(object) {
	  return object == null || _react2['default'].isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      if (error instanceof Error) _warning2['default'](false, error.message);
	    }
	  }
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router';
	 *   
	 *   var routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   );
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if (_react2['default'].isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (!Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 21 */
/*!**********************************************!*\
  !*** ./~/react-router/lib/RoutingContext.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _getRouteParams = __webpack_require__(/*! ./getRouteParams */ 22);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _React$PropTypes = _react2['default'].PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RoutingContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */
	var RoutingContext = _react2['default'].createClass({
	  displayName: 'RoutingContext',

	  propTypes: {
	    history: object.isRequired,
	    createElement: func.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2['default'].createElement
	    };
	  },

	  childContextTypes: {
	    history: object.isRequired,
	    location: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      history: this.props.history,
	      location: this.props.location
	    };
	  },

	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },

	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var history = _props.history;
	    var location = _props.location;
	    var routes = _props.routes;
	    var params = _props.params;
	    var components = _props.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = _getRouteParams2['default'](route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if (element) props.children = element;

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) if (components.hasOwnProperty(key)) elements[key] = _this.createElement(components[key], props);

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    _invariant2['default'](element === null || element === false || _react2['default'].isValidElement(element), 'The root route must render a single element');

	    return element;
	  }

	});

	exports['default'] = RoutingContext;
	module.exports = exports['default'];

/***/ },
/* 22 */
/*!**********************************************!*\
  !*** ./~/react-router/lib/getRouteParams.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ 23);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  for (var p in params) if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];

	  return routeParams;
	}

	exports['default'] = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 23 */
/*!********************************************!*\
  !*** ./~/react-router/lib/PatternUtils.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Ignore trailing slashes

	  var captureRemaining = tokens[tokens.length - 1] !== '*';

	  if (captureRemaining) regexpSource += '([\\s\\S]*?)';

	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

	  var remainingPathname, paramValues;
	  if (match != null) {
	    paramValues = Array.prototype.slice.call(match, 1).map(function (v) {
	      return v != null ? decodeURIComponent(v.replace(/\+/g, '%20')) : v;
	    });

	    if (captureRemaining) {
	      remainingPathname = paramValues.pop();
	    } else {
	      remainingPathname = pathname.replace(match[0], '');
	    }
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, pathname);

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token, paramName, paramValue;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      _invariant2['default'](paramValue != null || parenCount > 0, 'Missing splat #%s for path "%s"', splatIndex, pattern);

	      if (paramValue != null) pathname += encodeURI(paramValue).replace(/%20/g, '+');
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      _invariant2['default'](paramValue != null || parenCount > 0, 'Missing "%s" parameter for path "%s"', paramName, pattern);

	      if (paramValue != null) pathname += encodeURIComponent(paramValue).replace(/%20/g, '+');
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 24 */
/*!*****************************************!*\
  !*** ./~/react-router/lib/useRoutes.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(/*! warning */ 6);

	var _warning2 = _interopRequireDefault(_warning);

	var _historyLibActions = __webpack_require__(/*! history/lib/Actions */ 9);

	var _historyLibUseQueries = __webpack_require__(/*! history/lib/useQueries */ 25);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	var _historyLibCreateLocation = __webpack_require__(/*! history/lib/createLocation */ 19);

	var _historyLibCreateLocation2 = _interopRequireDefault(_historyLibCreateLocation);

	var _computeChangedRoutes2 = __webpack_require__(/*! ./computeChangedRoutes */ 30);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(/*! ./TransitionUtils */ 31);

	var _isActive2 = __webpack_require__(/*! ./isActive */ 33);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(/*! ./getComponents */ 34);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(/*! ./matchRoutes */ 35);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function hasAnyProperties(object) {
	  for (var p in object) if (object.hasOwnProperty(p)) return true;

	  return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * - isActive(pathname, query)
	 * - registerRouteHook(route, (location) => {})
	 * - unregisterRouteHook(route, (location) => {})
	 * - match(location, (error, nextState, nextLocation) => {})
	 * - listen((error, nextState) => {})
	 */
	function useRoutes(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var routes = options.routes;

	    var historyOptions = _objectWithoutProperties(options, ['routes']);

	    var history = _historyLibUseQueries2['default'](createHistory)(historyOptions);
	    var state = {};

	    function isActive(pathname, query) {
	      var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	      return _isActive3['default'](pathname, query, indexOnly, state.location, state.routes, state.params);
	    }

	    var partialNextState = undefined;

	    function match(location, callback) {
	      if (partialNextState && partialNextState.location === location) {
	        // Continue from where we left off.
	        finishMatch(partialNextState, callback);
	      } else {
	        _matchRoutes2['default'](routes, location, function (error, nextState) {
	          if (error) {
	            callback(error, null, null);
	          } else if (nextState) {
	            finishMatch(_extends({}, nextState, { location: location }), function (err, nextLocation, nextState) {
	              if (nextState) state = nextState;
	              callback(err, nextLocation, nextState);
	            });
	          } else {
	            callback(null, null, null);
	          }
	        });
	      }
	    }

	    function createLocationFromRedirectInfo(_ref) {
	      var pathname = _ref.pathname;
	      var query = _ref.query;
	      var state = _ref.state;

	      return _historyLibCreateLocation2['default'](history.createPath(pathname, query), state, _historyLibActions.REPLACE, history.createKey());
	    }

	    function finishMatch(nextState, callback) {
	      var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);

	      var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	      var enterRoutes = _computeChangedRoutes.enterRoutes;

	      _TransitionUtils.runLeaveHooks(leaveRoutes);

	      _TransitionUtils.runEnterHooks(enterRoutes, nextState, function (error, redirectInfo) {
	        if (error) {
	          callback(error);
	        } else if (redirectInfo) {
	          callback(null, createLocationFromRedirectInfo(redirectInfo), null);
	        } else {
	          // TODO: Fetch components after state is updated.
	          _getComponents2['default'](nextState, function (error, components) {
	            if (error) {
	              callback(error);
	            } else {
	              callback(null, null, _extends({}, nextState, { components: components }));
	            }
	          });
	        }
	      });
	    }

	    var RouteHooks = {};

	    var RouteGuid = 1;

	    function getRouteID(route) {
	      return route.__id__ || (route.__id__ = RouteGuid++);
	    }

	    function getRouteHooksForRoutes(routes) {
	      return routes.reduce(function (hooks, route) {
	        hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	        return hooks;
	      }, []);
	    }

	    function transitionHook(location, callback) {
	      _matchRoutes2['default'](routes, location, function (error, nextState) {
	        if (nextState == null) {
	          // TODO: We didn't actually match anything, but hang
	          // onto error/nextState so we don't have to matchRoutes
	          // again in the listen callback.
	          callback();
	          return;
	        }

	        // Cache some state here so we don't have to
	        // matchRoutes() again in the listen callback.
	        partialNextState = _extends({}, nextState, { location: location });

	        var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, nextState).leaveRoutes);

	        var result = undefined;
	        for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	          // Passing the location arg here indicates to
	          // the user that this is a transition hook.
	          result = hooks[i](location);
	        }

	        callback(result);
	      });
	    }

	    function beforeUnloadHook() {
	      // Synchronously check to see if any route hooks want to
	      // prevent the current window/tab from closing.
	      if (state.routes) {
	        var hooks = getRouteHooksForRoutes(state.routes);

	        var message = undefined;
	        for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	          // Passing no args indicates to the user that this is a
	          // beforeunload hook. We don't know the next location.
	          message = hooks[i]();
	        }

	        return message;
	      }
	    }

	    function registerRouteHook(route, hook) {
	      // TODO: Warn if they register for a route that isn't currently
	      // active. They're probably doing something wrong, like re-creating
	      // route objects on every location change.
	      var routeID = getRouteID(route);
	      var hooks = RouteHooks[routeID];

	      if (hooks == null) {
	        var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	        hooks = RouteHooks[routeID] = [hook];

	        if (thereWereNoRouteHooks) {
	          history.registerTransitionHook(transitionHook);

	          if (history.registerBeforeUnloadHook) history.registerBeforeUnloadHook(beforeUnloadHook);
	        }
	      } else if (hooks.indexOf(hook) === -1) {
	        hooks.push(hook);
	      }
	    }

	    function unregisterRouteHook(route, hook) {
	      var routeID = getRouteID(route);
	      var hooks = RouteHooks[routeID];

	      if (hooks != null) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          delete RouteHooks[routeID];

	          if (!hasAnyProperties(RouteHooks)) {
	            history.unregisterTransitionHook(transitionHook);

	            if (history.unregisterBeforeUnloadHook) history.unregisterBeforeUnloadHook(beforeUnloadHook);
	          }
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    }

	    /**
	     * This is the API for stateful environments. As the location changes,
	     * we update state and call the listener. Benefits of this API are:
	     *
	     * - We automatically manage state on the client
	     * - We automatically handle redirects on the client
	     * - We warn when the location doesn't match any routes
	     */
	    function listen(listener) {
	      return history.listen(function (location) {
	        if (state.location === location) {
	          listener(null, state);
	        } else {
	          match(location, function (error, nextLocation, nextState) {
	            if (error) {
	              listener(error);
	            } else if (nextState) {
	              listener(null, state); // match mutates state to nextState
	            } else if (nextLocation) {
	                history.transitionTo(nextLocation);
	              } else {
	                _warning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search);
	              }
	          });
	        }
	      });
	    }

	    return _extends({}, history, {
	      isActive: isActive,
	      registerRouteHook: registerRouteHook,
	      unregisterRouteHook: unregisterRouteHook,
	      listen: listen,
	      match: match
	    });
	  };
	}

	exports['default'] = useRoutes;
	module.exports = exports['default'];

/***/ },
/* 25 */
/*!****************************************************!*\
  !*** ./~/react-router/~/history/lib/useQueries.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _qs = __webpack_require__(/*! qs */ 26);

	var _qs2 = _interopRequireDefault(_qs);

	function defaultStringifyQuery(query) {
	  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
	}

	function defaultParseQueryString(queryString) {
	  return _qs2['default'].parse(queryString);
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

	    var history = createHistory(historyOptions);

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function listen(listener) {
	      return history.listen(function (location) {
	        if (!location.query) location.query = parseQueryString(location.search.substring(1));

	        listener(location);
	      });
	    }

	    function pushState(state, pathname, query) {
	      return history.pushState(state, createPath(pathname, query));
	    }

	    function replaceState(state, pathname, query) {
	      return history.replaceState(state, createPath(pathname, query));
	    }

	    function createPath(pathname, query) {
	      var queryString = undefined;
	      if (query == null || (queryString = stringifyQuery(query)) === '') return pathname;

	      return history.createPath(pathname + (pathname.indexOf('?') === -1 ? '?' : '&') + queryString);
	    }

	    function createHref(pathname, query) {
	      return history.createHref(createPath(pathname, query));
	    }

	    return _extends({}, history, {
	      listen: listen,
	      pushState: pushState,
	      replaceState: replaceState,
	      createPath: createPath,
	      createHref: createHref
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },
/* 26 */
/*!****************************************************!*\
  !*** ./~/react-router/~/history/~/qs/lib/index.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(/*! ./stringify */ 27);
	var Parse = __webpack_require__(/*! ./parse */ 29);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 27 */
/*!********************************************************!*\
  !*** ./~/react-router/~/history/~/qs/lib/stringify.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(/*! ./utils */ 28);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {

	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {

	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {

	            return prefix;
	        }
	    },
	    strictNullHandling: false
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix, strictNullHandling, filter) {

	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    }
	    else if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        if (strictNullHandling) {
	            return Utils.encode(prefix);
	        }

	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [Utils.encode(prefix) + '=' + Utils.encode(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys = Array.isArray(filter) ? filter : Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];

	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, filter));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix, strictNullHandling, filter));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
	    var objKeys;
	    var filter;
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    }
	    else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }

	    var keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, filter));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 28 */
/*!****************************************************!*\
  !*** ./~/react-router/~/history/~/qs/lib/utils.js ***!
  \****************************************************/
/***/ function(module, exports) {

	// Load modules


	// Declare internals

	var internals = {};
	internals.hexTable = new Array(256);
	for (var h = 0; h < 256; ++h) {
	    internals.hexTable[h] = '%' + ((h < 16 ? '0' : '') + h.toString(16)).toUpperCase();
	}


	exports.arrayToObject = function (source, options) {

	    var obj = options.plainObjects ? Object.create(null) : {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source, options) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else if (typeof target === 'object') {
	            target[source] = true;
	        }
	        else {
	            target = [target, source];
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target, options);
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (!Object.prototype.hasOwnProperty.call(target, key)) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value, options);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};

	exports.encode = function (str) {

	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    if (typeof str !== 'string') {
	        str = '' + str;
	    }

	    var out = '';
	    for (var i = 0, il = str.length; i < il; ++i) {
	        var c = str.charCodeAt(i);

	        if (c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A)) { // A-Z

	            out += str[i];
	            continue;
	        }

	        if (c < 0x80) {
	            out += internals.hexTable[c];
	            continue;
	        }

	        if (c < 0x800) {
	            out += internals.hexTable[0xC0 | (c >> 6)] + internals.hexTable[0x80 | (c & 0x3F)];
	            continue;
	        }

	        if (c < 0xD800 || c >= 0xE000) {
	            out += internals.hexTable[0xE0 | (c >> 12)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
	            continue;
	        }

	        ++i;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (str.charCodeAt(i) & 0x3FF));
	        out += internals.hexTable[0xF0 | (c >> 18)] + internals.hexTable[0x80 | ((c >> 12) & 0x3F)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
	    }

	    return out;
	};

	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {

	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	              obj.constructor.isBuffer &&
	              obj.constructor.isBuffer(obj));
	};


/***/ },
/* 29 */
/*!****************************************************!*\
  !*** ./~/react-router/~/history/~/qs/lib/parse.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(/*! ./utils */ 28);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';

	            if (options.strictNullHandling) {
	                obj[Utils.decode(part)] = null;
	            }
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays &&
	             index <= options.arrayLimit)) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // Transform dot notation to bracket notation

	    if (options.allowDots) {
	        key = key.replace(/\.([^\.\[]+)/g, '[$1]');
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects &&
	            Object.prototype.hasOwnProperty(segment[1])) {

	            if (!options.allowPrototypes) {
	                return;
	            }
	        }

	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!options.plainObjects &&
	            Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {

	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.allowDots = options.allowDots !== false;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : internals.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : internals.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return options.plainObjects ? Object.create(null) : {};
	    }

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 30 */
/*!****************************************************!*\
  !*** ./~/react-router/lib/computeChangedRoutes.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ 23);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes, enterRoutes;
	  if (prevRoutes) {
	    leaveRoutes = prevRoutes.filter(function (route) {
	      return nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });

	    // onLeave hooks start at the leaf route.
	    leaveRoutes.reverse();

	    enterRoutes = nextRoutes.filter(function (route) {
	      return prevRoutes.indexOf(route) === -1 || leaveRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leaveRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports['default'] = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 31 */
/*!***********************************************!*\
  !*** ./~/react-router/lib/TransitionUtils.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ 32);

	function createEnterHook(hook, route) {
	  return function (a, b, callback) {
	    hook.apply(route, arguments);

	    if (hook.length < 3) {
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createEnterHook(route.onEnter, route));

	    return hooks;
	  }, []);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replaceState, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replaceState short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */

	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);

	  if (!hooks.length) {
	    callback();
	    return;
	  }

	  var redirectInfo;
	  function replaceState(state, pathname, query) {
	    redirectInfo = { pathname: pathname, query: query, state: state };
	  }

	  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
	    hooks[index](nextState, replaceState, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */

	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	}

/***/ },
/* 32 */
/*!******************************************!*\
  !*** ./~/react-router/lib/AsyncUtils.js ***!
  \******************************************/
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false;
	  var doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 33 */
/*!****************************************!*\
  !*** ./~/react-router/lib/isActive.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ 23);

	/**
	 * Returns true if a route and params that match the given
	 * pathname are currently active.
	 */
	function pathnameIsActive(pathname, activePathname, activeRoutes, activeParams) {
	  if (pathname === activePathname || activePathname.indexOf(pathname + '/') === 0) return true;

	  var route, pattern;
	  var basename = '';
	  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
	    route = activeRoutes[i];
	    if (!route.path) return false;
	    pattern = route.path || '';

	    if (pattern.indexOf('/') !== 0) pattern = basename.replace(/\/*$/, '/') + pattern; // Relative paths build on the parent's path.

	    var _matchPattern = _PatternUtils.matchPattern(pattern, pathname);

	    var remainingPathname = _matchPattern.remainingPathname;
	    var paramNames = _matchPattern.paramNames;
	    var paramValues = _matchPattern.paramValues;

	    if (remainingPathname === '') {
	      return paramNames.every(function (paramName, index) {
	        return String(paramValues[index]) === String(activeParams[paramName]);
	      });
	    }

	    basename = pattern;
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  for (var p in query) if (query.hasOwnProperty(p) && String(query[p]) !== String(activeQuery[p])) return false;

	  return true;
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(pathname, query, indexOnly, location, routes, params) {
	  if (location == null) return false;

	  if (indexOnly && (routes.length < 2 || routes[routes.length - 2].indexRoute !== routes[routes.length - 1])) return false;

	  return pathnameIsActive(pathname, location.pathname, routes, params) && queryIsActive(query, location.query);
	}

	exports['default'] = isActive;
	module.exports = exports['default'];

/***/ },
/* 34 */
/*!*********************************************!*\
  !*** ./~/react-router/lib/getComponents.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ 32);

	function getComponentsForRoute(location, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponent) {
	    route.getComponent(location, callback);
	  } else if (route.getComponents) {
	    route.getComponents(location, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState.location, route, callback);
	  }, callback);
	}

	exports['default'] = getComponents;
	module.exports = exports['default'];

/***/ },
/* 35 */
/*!*******************************************!*\
  !*** ./~/react-router/lib/matchRoutes.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ 32);

	var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ 23);

	var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ 20);

	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(location, function (error, childRoutes) {
	      callback(error, !error && _RouteUtils.createRoutes(childRoutes));
	    });
	  } else {
	    callback();
	  }
	}

	function getIndexRoute(route, location, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(location, function (error, indexRoute) {
	      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
	    });
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduceRight(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].unshift(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [paramValue, params[paramName]];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(basename, route, location, callback) {
	  var pattern = route.path || '';

	  if (pattern.indexOf('/') !== 0) pattern = basename.replace(/\/*$/, '/') + pattern; // Relative paths build on the parent's path.

	  var _matchPattern = _PatternUtils.matchPattern(pattern, location.pathname);

	  var remainingPathname = _matchPattern.remainingPathname;
	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  var isExactMatch = remainingPathname === '';

	  if (isExactMatch && route.path) {
	    var match = {
	      routes: [route],
	      params: createParams(paramNames, paramValues)
	    };

	    getIndexRoute(route, location, function (error, indexRoute) {
	      if (error) {
	        callback(error);
	      } else {
	        if (indexRoute) match.routes.push(indexRoute);

	        callback(null, match);
	      }
	    });
	  } else if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    getChildRoutes(route, location, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, pattern);
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback) {
	  var basename = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

	  _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
	    matchRouteDeep(basename, routes[index], location, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	exports['default'] = matchRoutes;
	module.exports = exports['default'];

/***/ },
/* 36 */
/*!*****************************************!*\
  !*** ./~/react-router/lib/PropTypes.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.falsy = falsy;

	var _react = __webpack_require__(/*! react */ 2);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = shape({
	  listen: func.isRequired,
	  pushState: func.isRequired,
	  replaceState: func.isRequired,
	  go: func.isRequired
	});

	exports.history = history;
	var location = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	exports.location = location;
	var component = oneOfType([func, string]);
	exports.component = component;
	var components = oneOfType([component, object]);
	exports.components = components;
	var route = oneOfType([object, element]);
	exports.route = route;
	var routes = oneOfType([route, arrayOf(route)]);

	exports.routes = routes;
	exports['default'] = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route
	};

/***/ },
/* 37 */
/*!************************************!*\
  !*** ./~/react-router/lib/Link.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(/*! warning */ 6);

	var _warning2 = _interopRequireDefault(_warning);

	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	function isEmptyObject(object) {
	  for (var p in object) if (object.hasOwnProperty(p)) return false;

	  return true;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name
	 * (or the value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2['default'].createClass({
	  displayName: 'Link',

	  contextTypes: {
	    history: object
	  },

	  propTypes: {
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onClick: func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      className: '',
	      style: {}
	    };
	  },

	  handleClick: function handleClick(event) {
	    var allowTransition = true;
	    var clickResult;

	    if (this.props.onClick) clickResult = this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

	    event.preventDefault();

	    if (allowTransition) this.context.history.pushState(this.props.state, this.props.to, this.props.query);
	  },

	  componentWillMount: function componentWillMount() {
	    _warning2['default'](this.context.history, 'A <Link> should not be rendered outside the context of history; ' + 'some features including real hrefs, active styling, and navigation ' + 'will not function correctly');
	  },

	  render: function render() {
	    var history = this.context.history;
	    var _props = this.props;
	    var activeClassName = _props.activeClassName;
	    var activeStyle = _props.activeStyle;
	    var onlyActiveOnIndex = _props.onlyActiveOnIndex;
	    var to = _props.to;
	    var query = _props.query;
	    var state = _props.state;
	    var onClick = _props.onClick;

	    var props = _objectWithoutProperties(_props, ['activeClassName', 'activeStyle', 'onlyActiveOnIndex', 'to', 'query', 'state', 'onClick']);

	    props.onClick = this.handleClick;

	    // Ignore if rendered outside the context
	    // of history, simplifies unit testing.
	    if (history) {
	      props.href = history.createHref(to, query);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (history.isActive(to, query, onlyActiveOnIndex)) {
	          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2['default'].createElement('a', props);
	  }

	});

	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },
/* 38 */
/*!******************************************!*\
  !*** ./~/react-router/lib/IndexRoute.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(/*! warning */ 6);

	var _warning2 = _interopRequireDefault(_warning);

	var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ 20);

	var _PropTypes = __webpack_require__(/*! ./PropTypes */ 36);

	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var func = _React$PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	var IndexRoute = _react2['default'].createClass({
	  displayName: 'IndexRoute',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      if (parentRoute) {
	        parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
	      } else {
	        _warning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config');
	      }
	    }

	  },

	  propTypes: {
	    path: _PropTypes.falsy,
	    ignoreScrollBehavior: bool,
	    component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponents: func
	  },

	  render: function render() {
	    _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered');
	  }

	});

	exports['default'] = IndexRoute;
	module.exports = exports['default'];

/***/ },
/* 39 */
/*!****************************************!*\
  !*** ./~/react-router/lib/Redirect.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ 20);

	var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ 23);

	var _PropTypes = __webpack_require__(/*! ./PropTypes */ 36);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should be sent
	 * to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration and are
	 * traversed in the same manner.
	 */
	var Redirect = _react2['default'].createClass({
	  displayName: 'Redirect',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = _RouteUtils.createRouteFromReactElement(element);

	      if (route.from) route.path = route.from;

	      // TODO: Handle relative pathnames, see #1658
	      _invariant2['default'](route.to.charAt(0) === '/', '<Redirect to> must be an absolute path. This should be fixed in the future');

	      route.onEnter = function (nextState, replaceState) {
	        var location = nextState.location;
	        var params = nextState.params;

	        var pathname = route.to ? _PatternUtils.formatPattern(route.to, params) : location.pathname;

	        replaceState(route.state || location.state, pathname, route.query || location.query);
	      };

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _PropTypes.falsy,
	    children: _PropTypes.falsy
	  },

	  render: function render() {
	    _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered');
	  }

	});

	exports['default'] = Redirect;
	module.exports = exports['default'];

/***/ },
/* 40 */
/*!*************************************!*\
  !*** ./~/react-router/lib/Route.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(/*! warning */ 6);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ 20);

	var _PropTypes = __webpack_require__(/*! ./PropTypes */ 36);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var bool = _React$PropTypes.bool;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the page when
	 * the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 */
	var Route = _react2['default'].createClass({
	  displayName: 'Route',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = _RouteUtils.createRouteFromReactElement(element);

	      if (route.handler) {
	        _warning2['default'](false, '<Route handler> is deprecated, use <Route component> instead');

	        route.component = route.handler;
	        delete route.handler;
	      }

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    ignoreScrollBehavior: bool,
	    handler: // deprecated
	    _PropTypes.component, component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponents: func
	  },

	  render: function render() {
	    _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered');
	  }

	});

	exports['default'] = Route;
	module.exports = exports['default'];

/***/ },
/* 41 */
/*!***************************************!*\
  !*** ./~/react-router/lib/History.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PropTypes = __webpack_require__(/*! ./PropTypes */ 36);

	var History = {

	  contextTypes: { history: _PropTypes.history },

	  componentWillMount: function componentWillMount() {
	    this.history = this.context.history;
	  }

	};

	exports['default'] = History;
	module.exports = exports['default'];

/***/ },
/* 42 */
/*!*****************************************!*\
  !*** ./~/react-router/lib/Lifecycle.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method
	 * to a component that may be used to cancel a transition or prompt
	 * the user for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * routerWillLeave does not receive a location object during the beforeunload
	 * event in web browsers (assuming you're using the useBeforeUnload history
	 * enhancer). In this case, it is not possible for us to know the location
	 * we're transitioning to so routerWillLeave must return a prompt message to
	 * prevent the user from closing the tab.
	 */
	var Lifecycle = {

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  _getRoute: function _getRoute() {
	    var route = this.props.route || this.context.route;

	    _invariant2['default'](route, 'The Lifecycle mixin needs to be used either on 1) a <Route component> or ' + '2) a descendant of a <Route component> that uses the RouteContext mixin');

	    return route;
	  },

	  componentWillMount: function componentWillMount() {
	    _invariant2['default'](this.routerWillLeave, 'The Lifecycle mixin requires you to define a routerWillLeave method');

	    this.context.history.registerRouteHook(this._getRoute(), this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.context.history.unregisterRouteHook(this._getRoute(), this.routerWillLeave);
	  }

	};

	exports['default'] = Lifecycle;
	module.exports = exports['default'];

/***/ },
/* 43 */
/*!********************************************!*\
  !*** ./~/react-router/lib/RouteContext.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  }

	};

	exports['default'] = RouteContext;
	module.exports = exports['default'];

/***/ },
/* 44 */
/*!*************************************!*\
  !*** ./~/react-router/lib/match.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = match;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _historyLibCreateMemoryHistory = __webpack_require__(/*! history/lib/createMemoryHistory */ 45);

	var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

	var _useRoutes = __webpack_require__(/*! ./useRoutes */ 24);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ 20);

	function match(_ref, cb) {
	  var routes = _ref.routes;
	  var history = _ref.history;
	  var location = _ref.location;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;

	  var createHistory = history ? function () {
	    return history;
	  } : _historyLibCreateMemoryHistory2['default'];

	  var staticHistory = _useRoutes2['default'](createHistory)({
	    routes: _RouteUtils.createRoutes(routes),
	    parseQueryString: parseQueryString,
	    stringifyQuery: stringifyQuery
	  });

	  staticHistory.match(location, function (error, nextLocation, nextState) {
	    var renderProps = nextState ? _extends({}, nextState, { history: staticHistory }) : null;
	    cb(error, nextLocation, renderProps);
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 45 */
/*!*************************************************************!*\
  !*** ./~/react-router/~/history/lib/createMemoryHistory.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(/*! invariant */ 8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(/*! ./Actions */ 9);

	var _createLocation = __webpack_require__(/*! ./createLocation */ 19);

	var _createLocation2 = _interopRequireDefault(_createLocation);

	var _createHistory = __webpack_require__(/*! ./createHistory */ 14);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	    _invariant2['default'](false, 'Unable to create history entry from %s', entry);
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    _invariant2['default'](current >= 0 && current < entries.length, 'Current index must be >= 0 and < %s, was %s', entries.length, current);
	  }

	  var storage = createStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var key = entry.key;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = pathname + (search || '');

	    var state = undefined;
	    if (key) {
	      state = readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	      entry.key = key;
	    }

	    return _createLocation2['default'](path, state, undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      _invariant2['default'](canGo(n), 'Cannot go(%s) there is not enough history', n);

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) {
	          entries.splice(current);
	        }

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];

/***/ },
/* 46 */
/*!*******************************!*\
  !*** ./app/components/App.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 4);

	__webpack_require__(/*! ./style.styl */ 47);
	__webpack_require__(/*! ../fonts/font.css */ 48);

	var overview = __webpack_require__(/*! ../images/live-overview.svg */ 49);
	var estimator = __webpack_require__(/*! ../images/estimate.svg */ 50);
	var history = __webpack_require__(/*! ../images/travel_overview.svg */ 51);
	var settings = __webpack_require__(/*! ../images/settings.svg */ 52);

	var Application = (function (_React$Component) {
		_inherits(Application, _React$Component);

		function Application() {
			_classCallCheck(this, Application);

			_get(Object.getPrototypeOf(Application.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Application, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(
						'div',
						{ className: 'content' },
						this.props.children
					),
					_react2['default'].createElement(
						'div',
						{ className: 'menu' },
						_react2['default'].createElement(
							'ul',
							null,
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/' },
									_react2['default'].createElement(
										'div',
										{ className: 'icon-wrapper' },
										_react2['default'].createElement('img', { src: overview, alt: '' })
									),
									_react2['default'].createElement(
										'span',
										null,
										'Live Overview'
									)
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/estimator' },
									_react2['default'].createElement(
										'div',
										{ className: 'icon-wrapper' },
										_react2['default'].createElement('img', { src: estimator, alt: '' })
									),
									_react2['default'].createElement(
										'span',
										null,
										'Etimator'
									)
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/history' },
									_react2['default'].createElement(
										'div',
										{ className: 'icon-wrapper' },
										_react2['default'].createElement('img', { src: history, alt: '' })
									),
									_react2['default'].createElement(
										'span',
										null,
										'Travel History'
									)
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									_reactRouter.Link,
									{ to: '/settings' },
									_react2['default'].createElement(
										'div',
										{ className: 'icon-wrapper' },
										_react2['default'].createElement('img', { src: settings, alt: '' })
									),
									_react2['default'].createElement(
										'span',
										null,
										'Settings'
									)
								)
							)
						)
					)
				);
			}
		}]);

		return Application;
	})(_react2['default'].Component);

	exports['default'] = Application;
	module.exports = exports['default'];

/***/ },
/* 47 */
/*!***********************************!*\
  !*** ./app/components/style.styl ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = {
	  "dot": "IhpfJ4pcsRoIP6ppNt8J",
	  "active": "_11sabBv7L1ZyK_AP506pdj",
	  "menu": "_39033BRni-mSDajMwVGGtT",
	  "icon-wrapper": "q--vzGFqXFB0Ulyl-xgnS"
	};

/***/ },
/* 48 */
/*!****************************!*\
  !*** ./app/fonts/font.css ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = undefined;

/***/ },
/* 49 */
/*!**************************************!*\
  !*** ./app/images/live-overview.svg ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iCiAgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTguNDFweCIgaGVpZ2h0PSIxMC43MzJweCIgdmlld0JveD0iMCAwIDE4LjQxIDEwLjczMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTguNDEgMTAuNzMyIgogICB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGRlZnM+CjwvZGVmcz4KPGc+CiAgCiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9IgogICAgTTE4LjAzNSw1LjM2NmMwLDAtMy45NTMsNC45OTEtOC44Myw0Ljk5MXMtOC44My00Ljk5MS04LjgzLTQuOTkxczMuOTUzLTQuOTkxLDguODMtNC45OTFTMTguMDM1LDUuMzY2LDE4LjAzNSw1LjM2NnoiLz4KICAKICAgIDxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iOS4yMDUiIGN5PSI1LjM2NiIgcj0iMy4wNzEiLz4KICAKICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iCiAgICBNOS4yMDUsMy44M2MwLjg0OCwwLDEuNTM2LDAuNjg4LDEuNTM2LDEuNTM2cy0wLjY4OCwxLjUzNi0xLjUzNiwxLjUzNmMtMC44NDgsMC0xLjUzNi0wLjY4OC0xLjUzNi0xLjUzNiIvPgo8L2c+Cjwvc3ZnPgo="

/***/ },
/* 50 */
/*!*********************************!*\
  !*** ./app/images/estimate.svg ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iCiAgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTguMTE2cHgiIGhlaWdodD0iMTAuODQ2cHgiIHZpZXdCb3g9IjAgMCAxOC4xMTYgMTAuODQ2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxOC4xMTYgMTAuODQ2IgogICB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGRlZnM+CjwvZGVmcz4KPGc+CiAgCiAgICA8cG9seWxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IgogICAgMC4zNzUsMTAuNDcxIDYuODM3LDMuMjAyIDExLjY4Myw3LjI0MSAxNy43NDEsMC4zNzUgICIvPgogIAogICAgPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIKICAgIDEyLjEzNywwLjM3NSAxNy43NDEsMC4zNzUgMTcuNzQxLDUuMjA0ICAiLz4KPC9nPgo8L3N2Zz4K"

/***/ },
/* 51 */
/*!****************************************!*\
  !*** ./app/images/travel_overview.svg ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iCiAgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAuMzE0cHgiIGhlaWdodD0iMTUuNDE1cHgiIHZpZXdCb3g9IjAgMCAxMC4zMTQgMTUuNDE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMC4zMTQgMTUuNDE1IgogICB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGRlZnM+CjwvZGVmcz4KPGc+CiAgPGc+CiAgICAKICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSIKICAgICAgTTAuMzc1LDUuMTU3djcuOTdjMCwxLjkxMywxLjkxMywxLjkxMywxLjkxMywxLjkxM2w3LjY1MS0wLjk1NlYyLjkyNUwxLjY1LDMuODgyYy0wLjcwNCwwLTEuMjc1LTAuNTcxLTEuMjc1LTEuMjc1CiAgICAgIGMwLTEuNDU4LDAuODY4LTAuOTQsOC4yODktMi4yMzIiLz4KICA8L2c+CiAgCiAgICA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxLjk2OSIgeTE9IjIuNjA3IiB4Mj0iOS4zMDEiIHkyPSIxLjY1MSIvPgo8L2c+Cjwvc3ZnPgo="

/***/ },
/* 52 */
/*!*********************************!*\
  !*** ./app/images/settings.svg ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iCiAgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTMuNjMycHgiIGhlaWdodD0iMTMuNjMycHgiIHZpZXdCb3g9IjAgMCAxMy42MzIgMTMuNjMyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMy42MzIgMTMuNjMyIgogICB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGRlZnM+CjwvZGVmcz4KPGc+CiAgCiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9IgogICAgTTExLjQzOSw3LjY1NmgxLjgxOHYtMS42OGgtMS44MTljLTAuMTE3LTAuNDg2LTAuMzA4LTEuMjIxLTAuNTYyLTEuNjM3bDEuMjg2LTEuMjg2bC0xLjU4NS0xLjU4NEw5LjI5MiwyLjc1NQogICAgYy0wLjQxNS0wLjI1My0xLjE1LTAuNDQ0LTEuNjM1LTAuNTYxVjAuMzc1aC0xLjY4djEuODE5QzUuNDksMi4zMTEsNC43NTUsMi41MDIsNC4zNCwyLjc1NUwzLjA1MywxLjQ2OUwxLjQ2OSwzLjA1NEwyLjc1NSw0LjM0CiAgICBDMi41MDIsNC43NTUsMi4zMTEsNS40OSwyLjE5Myw1Ljk3NkgwLjM3NXYxLjY4aDEuODE4YzAuMTE4LDAuNDg2LDAuMzA5LDEuMjIyLDAuNTYyLDEuNjM2bC0xLjI4NiwxLjI4NmwxLjU4NSwxLjU4NGwxLjI4Ni0xLjI4NwogICAgYzAuNDE1LDAuMjU0LDEuMTUxLDAuNDQ1LDEuNjM3LDAuNTYzdjEuODE4aDEuNjh2LTEuODE4YzAuNDg2LTAuMTE4LDEuMjIxLTAuMzA5LDEuNjM1LTAuNTYybDEuMjg3LDEuMjg2bDEuNTg0LTEuNTg0CiAgICBsLTEuMjg2LTEuMjg2QzExLjEzLDguODc4LDExLjMyMSw4LjE0MiwxMS40MzksNy42NTZ6Ii8+CiAgCiAgICA8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3g9IjYuODE2IiBjeT0iNi44MTYiIHI9IjIuNTIiLz4KPC9nPgo8L3N2Zz4K"

/***/ },
/* 53 */
/*!************************************!*\
  !*** ./app/components/Overview.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var _socketIoClient = __webpack_require__(/*! socket.io-client */ 54);

	var _socketIoClient2 = _interopRequireDefault(_socketIoClient);

	var socket = (0, _socketIoClient2["default"])("localhost:3001");

	socket.on('connect', function (conn) {
		console.log('connected ;)');
	});

	var Overview = (function (_React$Component) {
		_inherits(Overview, _React$Component);

		function Overview(props) {
			_classCallCheck(this, Overview);

			_get(Object.getPrototypeOf(Overview.prototype), "constructor", this).call(this, props);

			this.state = {
				connected: false
			};

			socket.on('found', (function (data) {
				if (data.length > 0) {
					this.setState({ connected: true });
				}
			}).bind(this));
		}

		_createClass(Overview, [{
			key: "render",
			value: function render() {
				var name = 'dot';
				if (this.state.connected) {
					name += ' active';
				}
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h1",
						null,
						"Overview"
					),
					_react2["default"].createElement("div", { className: name })
				);
			}
		}]);

		return Overview;
	})(_react2["default"].Component);

	exports["default"] = Overview;
	module.exports = exports["default"];

/***/ },
/* 54 */
/*!*************************************!*\
  !*** ./~/socket.io-client/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(/*! ./lib/ */ 55);


/***/ },
/* 55 */
/*!*****************************************!*\
  !*** ./~/socket.io-client/lib/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(/*! ./url */ 56);
	var parser = __webpack_require__(/*! socket.io-parser */ 60);
	var Manager = __webpack_require__(/*! ./manager */ 67);
	var debug = __webpack_require__(/*! debug */ 58)('socket.io-client');

	/**
	 * Module exports.
	 */

	module.exports = exports = lookup;

	/**
	 * Managers cache.
	 */

	var cache = exports.managers = {};

	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */

	function lookup(uri, opts) {
	  if (typeof uri == 'object') {
	    opts = uri;
	    uri = undefined;
	  }

	  opts = opts || {};

	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var io;

	  if (opts.forceNew || opts['force new connection'] || false === opts.multiplex) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }

	  return io.socket(parsed.path);
	}

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = parser.protocol;

	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */

	exports.connect = lookup;

	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */

	exports.Manager = __webpack_require__(/*! ./manager */ 67);
	exports.Socket = __webpack_require__(/*! ./socket */ 131);


/***/ },
/* 56 */
/*!***************************************!*\
  !*** ./~/socket.io-client/lib/url.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var parseuri = __webpack_require__(/*! parseuri */ 57);
	var debug = __webpack_require__(/*! debug */ 58)('socket.io-client:url');

	/**
	 * Module exports.
	 */

	module.exports = url;

	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */

	function url(uri, loc){
	  var obj = uri;

	  // default to window.location
	  var loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;

	  // relative path support
	  if ('string' == typeof uri) {
	    if ('/' == uri.charAt(0)) {
	      if ('/' == uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.hostname + uri;
	      }
	    }

	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' != typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }

	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }

	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    }
	    else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }

	  obj.path = obj.path || '/';

	  // define unique id
	  obj.id = obj.protocol + '://' + obj.host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + obj.host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

	  return obj;
	}


/***/ },
/* 57 */
/*!************************************************!*\
  !*** ./~/socket.io-client/~/parseuri/index.js ***!
  \************************************************/
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host'
	  , 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	  var m = re.exec(str || '')
	    , uri = {}
	    , i = 14;

	  while (i--) {
	    uri[parts[i]] = m[i] || '';
	  }

	  return uri;
	};


/***/ },
/* 58 */
/*!*************************************************!*\
  !*** ./~/socket.io-client/~/debug/lib/debug.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var tty = __webpack_require__(/*! tty */ 59);

	/**
	 * Expose `debug()` as the module.
	 */

	module.exports = debug;

	/**
	 * Enabled debuggers.
	 */

	var names = []
	  , skips = [];

	(({"NODE_ENV":"production"}).DEBUG || '')
	  .split(/[\s,]+/)
	  .forEach(function(name){
	    name = name.replace('*', '.*?');
	    if (name[0] === '-') {
	      skips.push(new RegExp('^' + name.substr(1) + '$'));
	    } else {
	      names.push(new RegExp('^' + name + '$'));
	    }
	  });

	/**
	 * Colors.
	 */

	var colors = [6, 2, 3, 4, 5, 1];

	/**
	 * Previous debug() call.
	 */

	var prev = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Is stdout a TTY? Colored output is disabled when `true`.
	 */

	var isatty = tty.isatty(2);

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function color() {
	  return colors[prevColor++ % colors.length];
	}

	/**
	 * Humanize the given `ms`.
	 *
	 * @param {Number} m
	 * @return {String}
	 * @api private
	 */

	function humanize(ms) {
	  var sec = 1000
	    , min = 60 * 1000
	    , hour = 60 * min;

	  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
	  if (ms >= min) return (ms / min).toFixed(1) + 'm';
	  if (ms >= sec) return (ms / sec | 0) + 's';
	  return ms + 'ms';
	}

	/**
	 * Create a debugger with the given `name`.
	 *
	 * @param {String} name
	 * @return {Type}
	 * @api public
	 */

	function debug(name) {
	  function disabled(){}
	  disabled.enabled = false;

	  var match = skips.some(function(re){
	    return re.test(name);
	  });

	  if (match) return disabled;

	  match = names.some(function(re){
	    return re.test(name);
	  });

	  if (!match) return disabled;
	  var c = color();

	  function colored(fmt) {
	    fmt = coerce(fmt);

	    var curr = new Date;
	    var ms = curr - (prev[name] || curr);
	    prev[name] = curr;

	    fmt = '  \u001b[9' + c + 'm' + name + ' '
	      + '\u001b[3' + c + 'm\u001b[90m'
	      + fmt + '\u001b[3' + c + 'm'
	      + ' +' + humanize(ms) + '\u001b[0m';

	    console.error.apply(this, arguments);
	  }

	  function plain(fmt) {
	    fmt = coerce(fmt);

	    fmt = new Date().toUTCString()
	      + ' ' + name + ' ' + fmt;
	    console.error.apply(this, arguments);
	  }

	  colored.enabled = plain.enabled = true;

	  return isatty || ({"NODE_ENV":"production"}).DEBUG_COLORS
	    ? colored
	    : plain;
	}

	/**
	 * Coerce `val`.
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 59 */
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = require("tty");

/***/ },
/* 60 */
/*!********************************************************!*\
  !*** ./~/socket.io-client/~/socket.io-parser/index.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var debug = __webpack_require__(/*! debug */ 58)('socket.io-parser');
	var json = __webpack_require__(/*! json3 */ 61);
	var isArray = __webpack_require__(/*! isarray */ 63);
	var Emitter = __webpack_require__(/*! component-emitter */ 64);
	var binary = __webpack_require__(/*! ./binary */ 65);
	var isBuf = __webpack_require__(/*! ./is-buffer */ 66);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = 4;

	/**
	 * Packet types.
	 *
	 * @api public
	 */

	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'BINARY_EVENT',
	  'ACK',
	  'BINARY_ACK',
	  'ERROR'
	];

	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */

	exports.CONNECT = 0;

	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */

	exports.DISCONNECT = 1;

	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */

	exports.EVENT = 2;

	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */

	exports.ACK = 3;

	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */

	exports.ERROR = 4;

	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */

	exports.BINARY_EVENT = 5;

	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */

	exports.BINARY_ACK = 6;

	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */

	exports.Encoder = Encoder;

	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */

	exports.Decoder = Decoder;

	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */

	function Encoder() {}

	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */

	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);

	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};

	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */

	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;

	  // first is type
	  str += obj.type;

	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }

	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }

	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }

	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }

	  debug('encoded %j as %s', obj, str);
	  return str;
	}

	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */

	function encodeAsBinary(obj, callback) {

	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;

	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }

	  binary.removeBlobs(obj, writeEncoding);
	}

	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */

	function Decoder() {
	  this.reconstructor = null;
	}

	/**
	 * Mix in `Emitter` with Decoder.
	 */

	Emitter(Decoder.prototype);

	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */

	Decoder.prototype.add = function(obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);

	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};

	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */

	function decodeString(str) {
	  var p = {};
	  var i = 0;

	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();

	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }

	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }

	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }

	  // look up json data
	  if (str.charAt(++i)) {
	    try {
	      p.data = json.parse(str.substr(i));
	    } catch(e){
	      return error();
	    }
	  }

	  debug('decoded %s as %j', str, p);
	  return p;
	}

	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */

	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};

	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */

	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}

	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */

	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};

	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */

	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};

	function error(data){
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 61 */
/*!********************************************************************!*\
  !*** ./~/socket.io-client/~/socket.io-parser/~/json3/lib/json3.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */
	;(function (window) {
	  // Convenience aliases.
	  var getClass = {}.toString, isProperty, forEach, undef;

	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(/*! !webpack amd options */ 62);

	  // Detect native implementations.
	  var nativeJSON = typeof JSON == "object" && JSON;

	  // Set up the JSON 3 namespace, preferring the CommonJS `exports` object if
	  // available.
	  var JSON3 = typeof exports == "object" && exports && !exports.nodeType && exports;

	  if (JSON3 && nativeJSON) {
	    // Explicitly delegate to the native `stringify` and `parse`
	    // implementations in CommonJS environments.
	    JSON3.stringify = nativeJSON.stringify;
	    JSON3.parse = nativeJSON.parse;
	  } else {
	    // Export for web browsers, JavaScript engines, and asynchronous module
	    // loaders, using the global `JSON` object if available.
	    JSON3 = window.JSON = nativeJSON || {};
	  }

	  // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	  var isExtended = new Date(-3509827334573292);
	  try {
	    // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	    // results for certain dates in Opera >= 10.53.
	    isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	      // Safari < 2.0.2 stores the internal millisecond time value correctly,
	      // but clips the values returned by the date methods to the range of
	      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	  } catch (exception) {}

	  // Internal: Determines whether the native `JSON.stringify` and `parse`
	  // implementations are spec-compliant. Based on work by Ken Snyder.
	  function has(name) {
	    if (has[name] !== undef) {
	      // Return cached feature test result.
	      return has[name];
	    }

	    var isSupported;
	    if (name == "bug-string-char-index") {
	      // IE <= 7 doesn't support accessing string characters using square
	      // bracket notation. IE 8 only supports this for primitives.
	      isSupported = "a"[0] != "a";
	    } else if (name == "json") {
	      // Indicates whether both `JSON.stringify` and `JSON.parse` are
	      // supported.
	      isSupported = has("json-stringify") && has("json-parse");
	    } else {
	      var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	      // Test `JSON.stringify`.
	      if (name == "json-stringify") {
	        var stringify = JSON3.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	        if (stringifySupported) {
	          // A test function object with a custom `toJSON` method.
	          (value = function () {
	            return 1;
	          }).toJSON = value;
	          try {
	            stringifySupported =
	              // Firefox 3.1b1 and b2 serialize string, number, and boolean
	              // primitives as object literals.
	              stringify(0) === "0" &&
	              // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	              // literals.
	              stringify(new Number()) === "0" &&
	              stringify(new String()) == '""' &&
	              // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	              // does not define a canonical JSON representation (this applies to
	              // objects with `toJSON` properties as well, *unless* they are nested
	              // within an object or array).
	              stringify(getClass) === undef &&
	              // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	              // FF 3.1b3 pass this test.
	              stringify(undef) === undef &&
	              // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	              // respectively, if the value is omitted entirely.
	              stringify() === undef &&
	              // FF 3.1b1, 2 throw an error if the given value is not a number,
	              // string, array, object, Boolean, or `null` literal. This applies to
	              // objects with custom `toJSON` methods as well, unless they are nested
	              // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	              // methods entirely.
	              stringify(value) === "1" &&
	              stringify([value]) == "[1]" &&
	              // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	              // `"[null]"`.
	              stringify([undef]) == "[null]" &&
	              // YUI 3.0.0b1 fails to serialize `null` literals.
	              stringify(null) == "null" &&
	              // FF 3.1b1, 2 halts serialization if an array contains a function:
	              // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	              // elides non-JSON values from objects and arrays, unless they
	              // define custom `toJSON` methods.
	              stringify([undef, getClass, null]) == "[null,null,null]" &&
	              // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	              // where character escape codes are expected (e.g., `\b` => `\u0008`).
	              stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	              // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	              stringify(null, value) === "1" &&
	              stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	              // serialize extended years.
	              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	              // The milliseconds are optional in ES 5, but required in 5.1.
	              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	              // four-digit years instead of six-digit years. Credits: @Yaffle.
	              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	              // values less than 1000. Credits: @Yaffle.
	              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	          } catch (exception) {
	            stringifySupported = false;
	          }
	        }
	        isSupported = stringifySupported;
	      }
	      // Test `JSON.parse`.
	      if (name == "json-parse") {
	        var parse = JSON3.parse;
	        if (typeof parse == "function") {
	          try {
	            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	            // Conforming implementations should also coerce the initial argument to
	            // a string prior to parsing.
	            if (parse("0") === 0 && !parse(false)) {
	              // Simple parsing test.
	              value = parse(serialized);
	              var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	              if (parseSupported) {
	                try {
	                  // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                  parseSupported = !parse('"\t"');
	                } catch (exception) {}
	                if (parseSupported) {
	                  try {
	                    // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                    // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                    // certain octal literals.
	                    parseSupported = parse("01") !== 1;
	                  } catch (exception) {}
	                }
	                if (parseSupported) {
	                  try {
	                    // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                    // points. These environments, along with FF 3.1b1 and 2,
	                    // also allow trailing commas in JSON objects and arrays.
	                    parseSupported = parse("1.") !== 1;
	                  } catch (exception) {}
	                }
	              }
	            }
	          } catch (exception) {
	            parseSupported = false;
	          }
	        }
	        isSupported = parseSupported;
	      }
	    }
	    return has[name] = !!isSupported;
	  }

	  if (!has("json")) {
	    // Common `[[Class]]` name aliases.
	    var functionClass = "[object Function]";
	    var dateClass = "[object Date]";
	    var numberClass = "[object Number]";
	    var stringClass = "[object String]";
	    var arrayClass = "[object Array]";
	    var booleanClass = "[object Boolean]";

	    // Detect incomplete support for accessing string characters by index.
	    var charIndexBuggy = has("bug-string-char-index");

	    // Define additional utility methods if the `Date` methods are buggy.
	    if (!isExtended) {
	      var floor = Math.floor;
	      // A mapping between the months of the year and the number of days between
	      // January 1st and the first of the respective month.
	      var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	      // Internal: Calculates the number of days between the Unix epoch and the
	      // first day of the given month.
	      var getDay = function (year, month) {
	        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	      };
	    }

	    // Internal: Determines if a property is a direct property of the given
	    // object. Delegates to the native `Object#hasOwnProperty` method.
	    if (!(isProperty = {}.hasOwnProperty)) {
	      isProperty = function (property) {
	        var members = {}, constructor;
	        if ((members.__proto__ = null, members.__proto__ = {
	          // The *proto* property cannot be set multiple times in recent
	          // versions of Firefox and SeaMonkey.
	          "toString": 1
	        }, members).toString != getClass) {
	          // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	          // supports the mutable *proto* property.
	          isProperty = function (property) {
	            // Capture and break the object's prototype chain (see section 8.6.2
	            // of the ES 5.1 spec). The parenthesized expression prevents an
	            // unsafe transformation by the Closure Compiler.
	            var original = this.__proto__, result = property in (this.__proto__ = null, this);
	            // Restore the original prototype chain.
	            this.__proto__ = original;
	            return result;
	          };
	        } else {
	          // Capture a reference to the top-level `Object` constructor.
	          constructor = members.constructor;
	          // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	          // other environments.
	          isProperty = function (property) {
	            var parent = (this.constructor || constructor).prototype;
	            return property in this && !(property in parent && this[property] === parent[property]);
	          };
	        }
	        members = null;
	        return isProperty.call(this, property);
	      };
	    }

	    // Internal: A set of primitive types used by `isHostType`.
	    var PrimitiveTypes = {
	      'boolean': 1,
	      'number': 1,
	      'string': 1,
	      'undefined': 1
	    };

	    // Internal: Determines if the given object `property` value is a
	    // non-primitive.
	    var isHostType = function (object, property) {
	      var type = typeof object[property];
	      return type == 'object' ? !!object[property] : !PrimitiveTypes[type];
	    };

	    // Internal: Normalizes the `for...in` iteration algorithm across
	    // environments. Each enumerated key is yielded to a `callback` function.
	    forEach = function (object, callback) {
	      var size = 0, Properties, members, property;

	      // Tests for bugs in the current environment's `for...in` algorithm. The
	      // `valueOf` property inherits the non-enumerable flag from
	      // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	      (Properties = function () {
	        this.valueOf = 0;
	      }).prototype.valueOf = 0;

	      // Iterate over a new instance of the `Properties` class.
	      members = new Properties();
	      for (property in members) {
	        // Ignore all properties inherited from `Object.prototype`.
	        if (isProperty.call(members, property)) {
	          size++;
	        }
	      }
	      Properties = members = null;

	      // Normalize the iteration algorithm.
	      if (!size) {
	        // A list of non-enumerable properties inherited from `Object.prototype`.
	        members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	        // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	        // properties.
	        forEach = function (object, callback) {
	          var isFunction = getClass.call(object) == functionClass, property, length;
	          var hasProperty = !isFunction && typeof object.constructor != 'function' && isHostType(object, 'hasOwnProperty') ? object.hasOwnProperty : isProperty;
	          for (property in object) {
	            // Gecko <= 1.0 enumerates the `prototype` property of functions under
	            // certain conditions; IE does not.
	            if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	              callback(property);
	            }
	          }
	          // Manually invoke the callback for each non-enumerable property.
	          for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	        };
	      } else if (size == 2) {
	        // Safari <= 2.0.4 enumerates shadowed properties twice.
	        forEach = function (object, callback) {
	          // Create a set of iterated properties.
	          var members = {}, isFunction = getClass.call(object) == functionClass, property;
	          for (property in object) {
	            // Store each property name to prevent double enumeration. The
	            // `prototype` property of functions is not enumerated due to cross-
	            // environment inconsistencies.
	            if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	              callback(property);
	            }
	          }
	        };
	      } else {
	        // No bugs detected; use the standard `for...in` algorithm.
	        forEach = function (object, callback) {
	          var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	          for (property in object) {
	            if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	              callback(property);
	            }
	          }
	          // Manually invoke the callback for the `constructor` property due to
	          // cross-environment inconsistencies.
	          if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	            callback(property);
	          }
	        };
	      }
	      return forEach(object, callback);
	    };

	    // Public: Serializes a JavaScript `value` as a JSON string. The optional
	    // `filter` argument may specify either a function that alters how object and
	    // array members are serialized, or an array of strings and numbers that
	    // indicates which properties should be serialized. The optional `width`
	    // argument may be either a string or number that specifies the indentation
	    // level of the output.
	    if (!has("json-stringify")) {
	      // Internal: A map of control characters and their escaped equivalents.
	      var Escapes = {
	        92: "\\\\",
	        34: '\\"',
	        8: "\\b",
	        12: "\\f",
	        10: "\\n",
	        13: "\\r",
	        9: "\\t"
	      };

	      // Internal: Converts `value` into a zero-padded string such that its
	      // length is at least equal to `width`. The `width` must be <= 6.
	      var leadingZeroes = "000000";
	      var toPaddedString = function (width, value) {
	        // The `|| 0` expression is necessary to work around a bug in
	        // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	        return (leadingZeroes + (value || 0)).slice(-width);
	      };

	      // Internal: Double-quotes a string `value`, replacing all ASCII control
	      // characters (characters with code unit values between 0 and 31) with
	      // their escaped equivalents. This is an implementation of the
	      // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	      var unicodePrefix = "\\u00";
	      var quote = function (value) {
	        var result = '"', index = 0, length = value.length, isLarge = length > 10 && charIndexBuggy, symbols;
	        if (isLarge) {
	          symbols = value.split("");
	        }
	        for (; index < length; index++) {
	          var charCode = value.charCodeAt(index);
	          // If the character is a control character, append its Unicode or
	          // shorthand escape sequence; otherwise, append the character as-is.
	          switch (charCode) {
	            case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	              result += Escapes[charCode];
	              break;
	            default:
	              if (charCode < 32) {
	                result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                break;
	              }
	              result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
	          }
	        }
	        return result + '"';
	      };

	      // Internal: Recursively serializes an object. Implements the
	      // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	      var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	        var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	        try {
	          // Necessary for host object support.
	          value = object[property];
	        } catch (exception) {}
	        if (typeof value == "object" && value) {
	          className = getClass.call(value);
	          if (className == dateClass && !isProperty.call(value, "toJSON")) {
	            if (value > -1 / 0 && value < 1 / 0) {
	              // Dates are serialized according to the `Date#toJSON` method
	              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	              // for the ISO 8601 date time string format.
	              if (getDay) {
	                // Manually compute the year, month, date, hours, minutes,
	                // seconds, and milliseconds if the `getUTC*` methods are
	                // buggy. Adapted from @Yaffle's `date-shim` project.
	                date = floor(value / 864e5);
	                for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                date = 1 + date - getDay(year, month);
	                // The `time` value specifies the time within the day (see ES
	                // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                // to compute `A modulo B`, as the `%` operator does not
	                // correspond to the `modulo` operation for negative numbers.
	                time = (value % 864e5 + 864e5) % 864e5;
	                // The hours, minutes, seconds, and milliseconds are obtained by
	                // decomposing the time within the day. See section 15.9.1.10.
	                hours = floor(time / 36e5) % 24;
	                minutes = floor(time / 6e4) % 60;
	                seconds = floor(time / 1e3) % 60;
	                milliseconds = time % 1e3;
	              } else {
	                year = value.getUTCFullYear();
	                month = value.getUTCMonth();
	                date = value.getUTCDate();
	                hours = value.getUTCHours();
	                minutes = value.getUTCMinutes();
	                seconds = value.getUTCSeconds();
	                milliseconds = value.getUTCMilliseconds();
	              }
	              // Serialize extended years correctly.
	              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                // Months, dates, hours, minutes, and seconds should have two
	                // digits; milliseconds should have three.
	                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                // Milliseconds are optional in ES 5.0, but required in 5.1.
	                "." + toPaddedString(3, milliseconds) + "Z";
	            } else {
	              value = null;
	            }
	          } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	            // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	            // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	            // ignores all `toJSON` methods on these objects unless they are
	            // defined directly on an instance.
	            value = value.toJSON(property);
	          }
	        }
	        if (callback) {
	          // If a replacement function was provided, call it to obtain the value
	          // for serialization.
	          value = callback.call(object, property, value);
	        }
	        if (value === null) {
	          return "null";
	        }
	        className = getClass.call(value);
	        if (className == booleanClass) {
	          // Booleans are represented literally.
	          return "" + value;
	        } else if (className == numberClass) {
	          // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	          // `"null"`.
	          return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	        } else if (className == stringClass) {
	          // Strings are double-quoted and escaped.
	          return quote("" + value);
	        }
	        // Recursively serialize objects and arrays.
	        if (typeof value == "object") {
	          // Check for cyclic structures. This is a linear search; performance
	          // is inversely proportional to the number of unique nested objects.
	          for (length = stack.length; length--;) {
	            if (stack[length] === value) {
	              // Cyclic structures cannot be serialized by `JSON.stringify`.
	              throw TypeError();
	            }
	          }
	          // Add the object to the stack of traversed objects.
	          stack.push(value);
	          results = [];
	          // Save the current indentation level and indent one additional level.
	          prefix = indentation;
	          indentation += whitespace;
	          if (className == arrayClass) {
	            // Recursively serialize array elements.
	            for (index = 0, length = value.length; index < length; index++) {
	              element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	              results.push(element === undef ? "null" : element);
	            }
	            result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	          } else {
	            // Recursively serialize object members. Members are selected from
	            // either a user-specified list of property names, or the object
	            // itself.
	            forEach(properties || value, function (property) {
	              var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	              if (element !== undef) {
	                // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                // is not the empty string, let `member` {quote(property) + ":"}
	                // be the concatenation of `member` and the `space` character."
	                // The "`space` character" refers to the literal space
	                // character, not the `space` {width} argument provided to
	                // `JSON.stringify`.
	                results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	              }
	            });
	            result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	          }
	          // Remove the object from the traversed object stack.
	          stack.pop();
	          return result;
	        }
	      };

	      // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	      JSON3.stringify = function (source, filter, width) {
	        var whitespace, callback, properties, className;
	        if (typeof filter == "function" || typeof filter == "object" && filter) {
	          if ((className = getClass.call(filter)) == functionClass) {
	            callback = filter;
	          } else if (className == arrayClass) {
	            // Convert the property names array into a makeshift set.
	            properties = {};
	            for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	          }
	        }
	        if (width) {
	          if ((className = getClass.call(width)) == numberClass) {
	            // Convert the `width` to an integer and create a string containing
	            // `width` number of space characters.
	            if ((width -= width % 1) > 0) {
	              for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	            }
	          } else if (className == stringClass) {
	            whitespace = width.length <= 10 ? width : width.slice(0, 10);
	          }
	        }
	        // Opera <= 7.54u2 discards the values associated with empty string keys
	        // (`""`) only if they are used directly within an object member list
	        // (e.g., `!("" in { "": 1})`).
	        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	      };
	    }

	    // Public: Parses a JSON source string.
	    if (!has("json-parse")) {
	      var fromCharCode = String.fromCharCode;

	      // Internal: A map of escaped control characters and their unescaped
	      // equivalents.
	      var Unescapes = {
	        92: "\\",
	        34: '"',
	        47: "/",
	        98: "\b",
	        116: "\t",
	        110: "\n",
	        102: "\f",
	        114: "\r"
	      };

	      // Internal: Stores the parser state.
	      var Index, Source;

	      // Internal: Resets the parser state and throws a `SyntaxError`.
	      var abort = function() {
	        Index = Source = null;
	        throw SyntaxError();
	      };

	      // Internal: Returns the next token, or `"$"` if the parser has reached
	      // the end of the source string. A token may be a string, number, `null`
	      // literal, or Boolean literal.
	      var lex = function () {
	        var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	        while (Index < length) {
	          charCode = source.charCodeAt(Index);
	          switch (charCode) {
	            case 9: case 10: case 13: case 32:
	              // Skip whitespace tokens, including tabs, carriage returns, line
	              // feeds, and space characters.
	              Index++;
	              break;
	            case 123: case 125: case 91: case 93: case 58: case 44:
	              // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	              // the current position.
	              value = charIndexBuggy ? source.charAt(Index) : source[Index];
	              Index++;
	              return value;
	            case 34:
	              // `"` delimits a JSON string; advance to the next character and
	              // begin parsing the string. String tokens are prefixed with the
	              // sentinel `@` character to distinguish them from punctuators and
	              // end-of-string tokens.
	              for (value = "@", Index++; Index < length;) {
	                charCode = source.charCodeAt(Index);
	                if (charCode < 32) {
	                  // Unescaped ASCII control characters (those with a code unit
	                  // less than the space character) are not permitted.
	                  abort();
	                } else if (charCode == 92) {
	                  // A reverse solidus (`\`) marks the beginning of an escaped
	                  // control character (including `"`, `\`, and `/`) or Unicode
	                  // escape sequence.
	                  charCode = source.charCodeAt(++Index);
	                  switch (charCode) {
	                    case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                      // Revive escaped control characters.
	                      value += Unescapes[charCode];
	                      Index++;
	                      break;
	                    case 117:
	                      // `\u` marks the beginning of a Unicode escape sequence.
	                      // Advance to the first character and validate the
	                      // four-digit code point.
	                      begin = ++Index;
	                      for (position = Index + 4; Index < position; Index++) {
	                        charCode = source.charCodeAt(Index);
	                        // A valid sequence comprises four hexdigits (case-
	                        // insensitive) that form a single hexadecimal value.
	                        if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                          // Invalid Unicode escape sequence.
	                          abort();
	                        }
	                      }
	                      // Revive the escaped character.
	                      value += fromCharCode("0x" + source.slice(begin, Index));
	                      break;
	                    default:
	                      // Invalid escape sequence.
	                      abort();
	                  }
	                } else {
	                  if (charCode == 34) {
	                    // An unescaped double-quote character marks the end of the
	                    // string.
	                    break;
	                  }
	                  charCode = source.charCodeAt(Index);
	                  begin = Index;
	                  // Optimize for the common case where a string is valid.
	                  while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                    charCode = source.charCodeAt(++Index);
	                  }
	                  // Append the string as-is.
	                  value += source.slice(begin, Index);
	                }
	              }
	              if (source.charCodeAt(Index) == 34) {
	                // Advance to the next character and return the revived string.
	                Index++;
	                return value;
	              }
	              // Unterminated string.
	              abort();
	            default:
	              // Parse numbers and literals.
	              begin = Index;
	              // Advance past the negative sign, if one is specified.
	              if (charCode == 45) {
	                isSigned = true;
	                charCode = source.charCodeAt(++Index);
	              }
	              // Parse an integer or floating-point value.
	              if (charCode >= 48 && charCode <= 57) {
	                // Leading zeroes are interpreted as octal literals.
	                if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                  // Illegal octal literal.
	                  abort();
	                }
	                isSigned = false;
	                // Parse the integer component.
	                for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                // Floats cannot contain a leading decimal point; however, this
	                // case is already accounted for by the parser.
	                if (source.charCodeAt(Index) == 46) {
	                  position = ++Index;
	                  // Parse the decimal component.
	                  for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                  if (position == Index) {
	                    // Illegal trailing decimal.
	                    abort();
	                  }
	                  Index = position;
	                }
	                // Parse exponents. The `e` denoting the exponent is
	                // case-insensitive.
	                charCode = source.charCodeAt(Index);
	                if (charCode == 101 || charCode == 69) {
	                  charCode = source.charCodeAt(++Index);
	                  // Skip past the sign following the exponent, if one is
	                  // specified.
	                  if (charCode == 43 || charCode == 45) {
	                    Index++;
	                  }
	                  // Parse the exponential component.
	                  for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                  if (position == Index) {
	                    // Illegal empty exponent.
	                    abort();
	                  }
	                  Index = position;
	                }
	                // Coerce the parsed value to a JavaScript number.
	                return +source.slice(begin, Index);
	              }
	              // A negative sign may only precede numbers.
	              if (isSigned) {
	                abort();
	              }
	              // `true`, `false`, and `null` literals.
	              if (source.slice(Index, Index + 4) == "true") {
	                Index += 4;
	                return true;
	              } else if (source.slice(Index, Index + 5) == "false") {
	                Index += 5;
	                return false;
	              } else if (source.slice(Index, Index + 4) == "null") {
	                Index += 4;
	                return null;
	              }
	              // Unrecognized token.
	              abort();
	          }
	        }
	        // Return the sentinel `$` character if the parser has reached the end
	        // of the source string.
	        return "$";
	      };

	      // Internal: Parses a JSON `value` token.
	      var get = function (value) {
	        var results, hasMembers;
	        if (value == "$") {
	          // Unexpected end of input.
	          abort();
	        }
	        if (typeof value == "string") {
	          if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	            // Remove the sentinel `@` character.
	            return value.slice(1);
	          }
	          // Parse object and array literals.
	          if (value == "[") {
	            // Parses a JSON array, returning a new JavaScript array.
	            results = [];
	            for (;; hasMembers || (hasMembers = true)) {
	              value = lex();
	              // A closing square bracket marks the end of the array literal.
	              if (value == "]") {
	                break;
	              }
	              // If the array literal contains elements, the current token
	              // should be a comma separating the previous element from the
	              // next.
	              if (hasMembers) {
	                if (value == ",") {
	                  value = lex();
	                  if (value == "]") {
	                    // Unexpected trailing `,` in array literal.
	                    abort();
	                  }
	                } else {
	                  // A `,` must separate each array element.
	                  abort();
	                }
	              }
	              // Elisions and leading commas are not permitted.
	              if (value == ",") {
	                abort();
	              }
	              results.push(get(value));
	            }
	            return results;
	          } else if (value == "{") {
	            // Parses a JSON object, returning a new JavaScript object.
	            results = {};
	            for (;; hasMembers || (hasMembers = true)) {
	              value = lex();
	              // A closing curly brace marks the end of the object literal.
	              if (value == "}") {
	                break;
	              }
	              // If the object literal contains members, the current token
	              // should be a comma separator.
	              if (hasMembers) {
	                if (value == ",") {
	                  value = lex();
	                  if (value == "}") {
	                    // Unexpected trailing `,` in object literal.
	                    abort();
	                  }
	                } else {
	                  // A `,` must separate each object member.
	                  abort();
	                }
	              }
	              // Leading commas are not permitted, object property names must be
	              // double-quoted strings, and a `:` must separate each property
	              // name and value.
	              if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                abort();
	              }
	              results[value.slice(1)] = get(lex());
	            }
	            return results;
	          }
	          // Unexpected token encountered.
	          abort();
	        }
	        return value;
	      };

	      // Internal: Updates a traversed object member.
	      var update = function(source, property, callback) {
	        var element = walk(source, property, callback);
	        if (element === undef) {
	          delete source[property];
	        } else {
	          source[property] = element;
	        }
	      };

	      // Internal: Recursively traverses a parsed JSON object, invoking the
	      // `callback` function for each value. This is an implementation of the
	      // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	      var walk = function (source, property, callback) {
	        var value = source[property], length;
	        if (typeof value == "object" && value) {
	          // `forEach` can't be used to traverse an array in Opera <= 8.54
	          // because its `Object#hasOwnProperty` implementation returns `false`
	          // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	          if (getClass.call(value) == arrayClass) {
	            for (length = value.length; length--;) {
	              update(value, length, callback);
	            }
	          } else {
	            forEach(value, function (property) {
	              update(value, property, callback);
	            });
	          }
	        }
	        return callback.call(source, property, value);
	      };

	      // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	      JSON3.parse = function (source, callback) {
	        var result, value;
	        Index = 0;
	        Source = "" + source;
	        result = get(lex());
	        // If a JSON string contains multiple tokens, it is invalid.
	        if (lex() != "$") {
	          abort();
	        }
	        // Reset the parser state.
	        Index = Source = null;
	        return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	      };
	    }
	  }

	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}(this));


/***/ },
/* 62 */
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 63 */
/*!******************************************************************!*\
  !*** ./~/socket.io-client/~/socket.io-parser/~/isarray/index.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 64 */
/*!*********************************************************!*\
  !*** ./~/socket.io-client/~/component-emitter/index.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 65 */
/*!*********************************************************!*\
  !*** ./~/socket.io-client/~/socket.io-parser/binary.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*global Blob,File*/

	/**
	 * Module requirements
	 */

	var isArray = __webpack_require__(/*! isarray */ 63);
	var isBuf = __webpack_require__(/*! ./is-buffer */ 66);

	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */

	exports.deconstructPacket = function(packet){
	  var buffers = [];
	  var packetData = packet.data;

	  function _deconstructPacket(data) {
	    if (!data) return data;

	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }

	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};

	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */

	exports.reconstructPacket = function(packet, buffers) {
	  var curPlaceHolder = 0;

	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }

	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};

	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */

	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;

	    // convert any blob
	    if ((global.Blob && obj instanceof Blob) ||
	        (global.File && obj instanceof File)) {
	      pendingBlobs++;

	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }

	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };

	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }

	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};


/***/ },
/* 66 */
/*!************************************************************!*\
  !*** ./~/socket.io-client/~/socket.io-parser/is-buffer.js ***!
  \************************************************************/
/***/ function(module, exports) {

	
	module.exports = isBuf;

	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */

	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}


/***/ },
/* 67 */
/*!*******************************************!*\
  !*** ./~/socket.io-client/lib/manager.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(/*! ./url */ 56);
	var eio = __webpack_require__(/*! engine.io-client */ 68);
	var Socket = __webpack_require__(/*! ./socket */ 131);
	var Emitter = __webpack_require__(/*! component-emitter */ 64);
	var parser = __webpack_require__(/*! socket.io-parser */ 60);
	var on = __webpack_require__(/*! ./on */ 133);
	var bind = __webpack_require__(/*! component-bind */ 134);
	var object = __webpack_require__(/*! object-component */ 137);
	var debug = __webpack_require__(/*! debug */ 58)('socket.io-client:manager');
	var indexOf = __webpack_require__(/*! indexof */ 128);
	var Backoff = __webpack_require__(/*! backo2 */ 138);

	/**
	 * Module exports
	 */

	module.exports = Manager;

	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */

	function Manager(uri, opts){
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' == typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};

	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connected = [];
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}

	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */

	Manager.prototype.emitAll = function() {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	  }
	};

	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */

	Manager.prototype.updateSocketIds = function(){
	  for (var nsp in this.nsps) {
	    this.nsps[nsp].id = this.engine.id;
	  }
	};

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Manager.prototype);

	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnection = function(v){
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};

	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionAttempts = function(v){
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};

	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelay = function(v){
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};

	Manager.prototype.randomizationFactor = function(v){
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};

	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelayMax = function(v){
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};

	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.timeout = function(v){
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};

	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */

	Manager.prototype.maybeReconnectOnOpen = function() {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};


	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */

	Manager.prototype.open =
	Manager.prototype.connect = function(fn){
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;

	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;

	  // emit `open`
	  var openSub = on(socket, 'open', function() {
	    self.onopen();
	    fn && fn();
	  });

	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function(data){
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });

	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);

	    // set timer
	    var timer = setTimeout(function(){
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);

	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }

	  this.subs.push(openSub);
	  this.subs.push(errorSub);

	  return this;
	};

	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */

	Manager.prototype.onopen = function(){
	  debug('open');

	  // clear old subs
	  this.cleanup();

	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');

	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	};

	/**
	 * Called with data.
	 *
	 * @api private
	 */

	Manager.prototype.ondata = function(data){
	  this.decoder.add(data);
	};

	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */

	Manager.prototype.ondecoded = function(packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */

	Manager.prototype.onerror = function(err){
	  debug('error', err);
	  this.emitAll('error', err);
	};

	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */

	Manager.prototype.socket = function(nsp){
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connect', function(){
	      socket.id = self.engine.id;
	      if (!~indexOf(self.connected, socket)) {
	        self.connected.push(socket);
	      }
	    });
	  }
	  return socket;
	};

	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */

	Manager.prototype.destroy = function(socket){
	  var index = indexOf(this.connected, socket);
	  if (~index) this.connected.splice(index, 1);
	  if (this.connected.length) return;

	  this.close();
	};

	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Manager.prototype.packet = function(packet){
	  debug('writing packet %j', packet);
	  var self = this;

	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function(encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i]);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};

	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */

	Manager.prototype.processPacketQueue = function() {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};

	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */

	Manager.prototype.cleanup = function(){
	  var sub;
	  while (sub = this.subs.shift()) sub.destroy();

	  this.packetBuffer = [];
	  this.encoding = false;

	  this.decoder.destroy();
	};

	/**
	 * Close the current socket.
	 *
	 * @api private
	 */

	Manager.prototype.close =
	Manager.prototype.disconnect = function(){
	  this.skipReconnect = true;
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.engine && this.engine.close();
	};

	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */

	Manager.prototype.onclose = function(reason){
	  debug('close');
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};

	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */

	Manager.prototype.reconnect = function(){
	  if (this.reconnecting || this.skipReconnect) return this;

	  var self = this;

	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);

	    this.reconnecting = true;
	    var timer = setTimeout(function(){
	      if (self.skipReconnect) return;

	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);

	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;

	      self.open(function(err){
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);

	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }
	};

	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */

	Manager.prototype.onreconnect = function(){
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ },
/* 68 */
/*!********************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/index.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	module.exports =  __webpack_require__(/*! ./lib/ */ 69);


/***/ },
/* 69 */
/*!************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/lib/index.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(/*! ./socket */ 70);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(/*! engine.io-parser */ 81);


/***/ },
/* 70 */
/*!*************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/lib/socket.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(/*! ./transports */ 71);
	var Emitter = __webpack_require__(/*! component-emitter */ 64);
	var debug = __webpack_require__(/*! debug */ 89)('engine.io-client:socket');
	var index = __webpack_require__(/*! indexof */ 128);
	var parser = __webpack_require__(/*! engine.io-parser */ 81);
	var parseuri = __webpack_require__(/*! parseuri */ 129);
	var parsejson = __webpack_require__(/*! parsejson */ 130);
	var parseqs = __webpack_require__(/*! parseqs */ 87);

	/**
	 * Module exports.
	 */

	module.exports = Socket;

	/**
	 * Noop function.
	 *
	 * @api private
	 */

	function noop(){}

	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */

	function Socket(uri, opts){
	  if (!(this instanceof Socket)) return new Socket(uri, opts);

	  opts = opts || {};

	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = null;
	  }

	  if (uri) {
	    uri = parseuri(uri);
	    opts.host = uri.host;
	    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  }

	  this.secure = null != opts.secure ? opts.secure :
	    (global.location && 'https:' == location.protocol);

	  if (opts.host) {
	    var pieces = opts.host.split(':');
	    opts.hostname = pieces.shift();
	    if (pieces.length) {
	      opts.port = pieces.pop();
	    } else if (!opts.port) {
	      // if no port is specified manually, use the protocol default
	      opts.port = this.secure ? '443' : '80';
	    }
	  }

	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ?
	       location.port :
	       (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.callbackBuffer = [];
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized || null;

	  this.open();
	}

	Socket.priorWebsocketSuccess = false;

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	Socket.protocol = parser.protocol; // this is an int

	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */

	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(/*! ./transport */ 80);
	Socket.transports = __webpack_require__(/*! ./transports */ 71);
	Socket.parser = __webpack_require__(/*! engine.io-parser */ 81);

	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */

	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);

	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;

	  // transport name
	  query.transport = name;

	  // session id if we already have one
	  if (this.id) query.sid = this.id;

	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized
	  });

	  return transport;
	};

	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}

	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
	    transport = 'websocket';
	  } else if (0 == this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function() {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';

	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  var transport;
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }

	  transport.open();
	  this.setTransport(transport);
	};

	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */

	Socket.prototype.setTransport = function(transport){
	  debug('setting transport %s', transport.name);
	  var self = this;

	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }

	  // set up transport
	  this.transport = transport;

	  // set up transport listeners
	  transport
	  .on('drain', function(){
	    self.onDrain();
	  })
	  .on('packet', function(packet){
	    self.onPacket(packet);
	  })
	  .on('error', function(e){
	    self.onError(e);
	  })
	  .on('close', function(){
	    self.onClose('transport close');
	  });
	};

	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */

	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 })
	    , failed = false
	    , self = this;

	  Socket.priorWebsocketSuccess = false;

	  function onTransportOpen(){
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;

	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' == msg.type && 'probe' == msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' == self.readyState) return;
	          debug('changing transport and sending upgrade packet');

	          cleanup();

	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }

	  function freezeTransport() {
	    if (failed) return;

	    // Any callback called by transport should be ignored since now
	    failed = true;

	    cleanup();

	    transport.close();
	    transport = null;
	  }

	  //Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;

	    freezeTransport();

	    debug('probe transport "%s" failed because of error: %s', name, err);

	    self.emit('upgradeError', error);
	  }

	  function onTransportClose(){
	    onerror("transport closed");
	  }

	  //When the socket is closed while we're probing
	  function onclose(){
	    onerror("socket closed");
	  }

	  //When the socket is upgraded while we're probing
	  function onupgrade(to){
	    if (transport && to.name != transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }

	  //Remove all listeners on the transport and on self
	  function cleanup(){
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }

	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);

	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);

	  transport.open();

	};

	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */

	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
	  this.emit('open');
	  this.flush();

	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};

	/**
	 * Handles a packet.
	 *
	 * @api private
	 */

	Socket.prototype.onPacket = function (packet) {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

	    this.emit('packet', packet);

	    // Socket is live - any packet counts
	    this.emit('heartbeat');

	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;

	      case 'pong':
	        this.setPing();
	        break;

	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.emit('error', err);
	        break;

	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};

	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */

	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if  ('closed' == this.readyState) return;
	  this.setPing();

	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};

	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */

	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' == self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};

	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */

	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};

	/**
	* Sends a ping packet.
	*
	* @api public
	*/

	Socket.prototype.ping = function () {
	  this.sendPacket('ping');
	};

	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */

	Socket.prototype.onDrain = function() {
	  for (var i = 0; i < this.prevBufferLen; i++) {
	    if (this.callbackBuffer[i]) {
	      this.callbackBuffer[i]();
	    }
	  }

	  this.writeBuffer.splice(0, this.prevBufferLen);
	  this.callbackBuffer.splice(0, this.prevBufferLen);

	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;

	  if (this.writeBuffer.length == 0) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};

	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */

	Socket.prototype.flush = function () {
	  if ('closed' != this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};

	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @return {Socket} for chaining.
	 * @api public
	 */

	Socket.prototype.write =
	Socket.prototype.send = function (msg, fn) {
	  this.sendPacket('message', msg, fn);
	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Function} callback function.
	 * @api private
	 */

	Socket.prototype.sendPacket = function (type, data, fn) {
	  if ('closing' == this.readyState || 'closed' == this.readyState) {
	    return;
	  }

	  var packet = { type: type, data: data };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  this.callbackBuffer.push(fn);
	  this.flush();
	};

	/**
	 * Closes the connection.
	 *
	 * @api private
	 */

	Socket.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.readyState = 'closing';

	    var self = this;

	    function close() {
	      self.onClose('forced close');
	      debug('socket closing - telling transport to close');
	      self.transport.close();
	    }

	    function cleanupAndClose() {
	      self.removeListener('upgrade', cleanupAndClose);
	      self.removeListener('upgradeError', cleanupAndClose);
	      close();
	    }

	    function waitForUpgrade() {
	      // wait for upgrade to finish since we can't send packets while pausing a transport
	      self.once('upgrade', cleanupAndClose);
	      self.once('upgradeError', cleanupAndClose);
	    }

	    if (this.writeBuffer.length) {
	      this.once('drain', function() {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }

	  return this;
	};

	/**
	 * Called upon transport error
	 *
	 * @api private
	 */

	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};

	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */

	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;

	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);

	    // clean buffers in next tick, so developers can still
	    // grab the buffers on `close` event
	    setTimeout(function() {
	      self.writeBuffer = [];
	      self.callbackBuffer = [];
	      self.prevBufferLen = 0;
	    }, 0);

	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');

	    // ensure transport won't stay open
	    this.transport.close();

	    // ignore further transport communication
	    this.transport.removeAllListeners();

	    // set ready state
	    this.readyState = 'closed';

	    // clear session id
	    this.id = null;

	    // emit close event
	    this.emit('close', reason, desc);
	  }
	};

	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */

	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i<j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};


/***/ },
/* 71 */
/*!***********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/lib/transports/index.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest */ 72);
	var XHR = __webpack_require__(/*! ./polling-xhr */ 78);
	var JSONP = __webpack_require__(/*! ./polling-jsonp */ 93);
	var websocket = __webpack_require__(/*! ./websocket */ 94);

	/**
	 * Export transports.
	 */

	exports.polling = polling;
	exports.websocket = websocket;

	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */

	function polling(opts){
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    xd = opts.hostname != location.hostname || port != opts.port;
	    xs = opts.secure != isSSL;
	  }

	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);

	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}


/***/ },
/* 72 */
/*!**************************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/xmlhttprequest/lib/XMLHttpRequest.js ***!
  \**************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
	 *
	 * This can be used with JS designed for browsers to improve reuse of code and
	 * allow the use of existing libraries.
	 *
	 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
	 *
	 * @author Dan DeFelippi <dan@driverdan.com>
	 * @contributor David Ellis <d.f.ellis@ieee.org>
	 * @license MIT
	 */

	var fs = __webpack_require__(/*! fs */ 73);
	var Url = __webpack_require__(/*! url */ 74);
	var spawn = __webpack_require__(/*! child_process */ 75).spawn;

	/**
	 * Module exports.
	 */

	module.exports = XMLHttpRequest;

	// backwards-compat
	XMLHttpRequest.XMLHttpRequest = XMLHttpRequest;

	/**
	 * `XMLHttpRequest` constructor.
	 *
	 * Supported options for the `opts` object are:
	 *
	 *  - `agent`: An http.Agent instance; http.globalAgent may be used; if 'undefined', agent usage is disabled
	 *
	 * @param {Object} opts optional "options" object
	 */

	function XMLHttpRequest(opts) {
	  /**
	   * Private variables
	   */
	  var self = this;
	  var http = __webpack_require__(/*! http */ 76);
	  var https = __webpack_require__(/*! https */ 77);

	  // Holds http.js objects
	  var request;
	  var response;

	  // Request settings
	  var settings = {};

	  // Disable header blacklist.
	  // Not part of XHR specs.
	  var disableHeaderCheck = false;

	  // Set some default headers
	  var defaultHeaders = {
	    "User-Agent": "node-XMLHttpRequest",
	    "Accept": "*/*"
	  };

	  var headers = defaultHeaders;

	  // These headers are not user setable.
	  // The following are allowed but banned in the spec:
	  // * user-agent
	  var forbiddenRequestHeaders = [
	    "accept-charset",
	    "accept-encoding",
	    "access-control-request-headers",
	    "access-control-request-method",
	    "connection",
	    "content-length",
	    "content-transfer-encoding",
	    "cookie",
	    "cookie2",
	    "date",
	    "expect",
	    "host",
	    "keep-alive",
	    "origin",
	    "referer",
	    "te",
	    "trailer",
	    "transfer-encoding",
	    "upgrade",
	    "via"
	  ];

	  // These request methods are not allowed
	  var forbiddenRequestMethods = [
	    "TRACE",
	    "TRACK",
	    "CONNECT"
	  ];

	  // Send flag
	  var sendFlag = false;
	  // Error flag, used when errors occur or abort is called
	  var errorFlag = false;

	  // Event listeners
	  var listeners = {};

	  /**
	   * Constants
	   */

	  this.UNSENT = 0;
	  this.OPENED = 1;
	  this.HEADERS_RECEIVED = 2;
	  this.LOADING = 3;
	  this.DONE = 4;

	  /**
	   * Public vars
	   */

	  // Current state
	  this.readyState = this.UNSENT;

	  // default ready state change handler in case one is not set or is set late
	  this.onreadystatechange = null;

	  // Result & response
	  this.responseText = "";
	  this.responseXML = "";
	  this.status = null;
	  this.statusText = null;

	  /**
	   * Private methods
	   */

	  /**
	   * Check if the specified header is allowed.
	   *
	   * @param string header Header to validate
	   * @return boolean False if not allowed, otherwise true
	   */
	  var isAllowedHttpHeader = function(header) {
	    return disableHeaderCheck || (header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1);
	  };

	  /**
	   * Check if the specified method is allowed.
	   *
	   * @param string method Request method to validate
	   * @return boolean False if not allowed, otherwise true
	   */
	  var isAllowedHttpMethod = function(method) {
	    return (method && forbiddenRequestMethods.indexOf(method) === -1);
	  };

	  /**
	   * Public methods
	   */

	  /**
	   * Open the connection. Currently supports local server requests.
	   *
	   * @param string method Connection method (eg GET, POST)
	   * @param string url URL for the connection.
	   * @param boolean async Asynchronous connection. Default is true.
	   * @param string user Username for basic authentication (optional)
	   * @param string password Password for basic authentication (optional)
	   */
	  this.open = function(method, url, async, user, password) {
	    this.abort();
	    errorFlag = false;

	    // Check for valid request method
	    if (!isAllowedHttpMethod(method)) {
	      throw "SecurityError: Request method not allowed";
	    }

	    settings = {
	      "method": method,
	      "url": url.toString(),
	      "async": (typeof async !== "boolean" ? true : async),
	      "user": user || null,
	      "password": password || null
	    };

	    setState(this.OPENED);
	  };

	  /**
	   * Disables or enables isAllowedHttpHeader() check the request. Enabled by default.
	   * This does not conform to the W3C spec.
	   *
	   * @param boolean state Enable or disable header checking.
	   */
	  this.setDisableHeaderCheck = function(state) {
	    disableHeaderCheck = state;
	  };

	  /**
	   * Sets a header for the request.
	   *
	   * @param string header Header name
	   * @param string value Header value
	   */
	  this.setRequestHeader = function(header, value) {
	    if (this.readyState != this.OPENED) {
	      throw "INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN";
	    }
	    if (!isAllowedHttpHeader(header)) {
	      console.warn('Refused to set unsafe header "' + header + '"');
	      return;
	    }
	    if (sendFlag) {
	      throw "INVALID_STATE_ERR: send flag is true";
	    }
	    headers[header] = value;
	  };

	  /**
	   * Gets a header from the server response.
	   *
	   * @param string header Name of header to get.
	   * @return string Text of the header or null if it doesn't exist.
	   */
	  this.getResponseHeader = function(header) {
	    if (typeof header === "string"
	      && this.readyState > this.OPENED
	      && response.headers[header.toLowerCase()]
	      && !errorFlag
	    ) {
	      return response.headers[header.toLowerCase()];
	    }

	    return null;
	  };

	  /**
	   * Gets all the response headers.
	   *
	   * @return string A string with all response headers separated by CR+LF
	   */
	  this.getAllResponseHeaders = function() {
	    if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
	      return "";
	    }
	    var result = "";

	    for (var i in response.headers) {
	      // Cookie headers are excluded
	      if (i !== "set-cookie" && i !== "set-cookie2") {
	        result += i + ": " + response.headers[i] + "\r\n";
	      }
	    }
	    return result.substr(0, result.length - 2);
	  };

	  /**
	   * Gets a request header
	   *
	   * @param string name Name of header to get
	   * @return string Returns the request header or empty string if not set
	   */
	  this.getRequestHeader = function(name) {
	    // @TODO Make this case insensitive
	    if (typeof name === "string" && headers[name]) {
	      return headers[name];
	    }

	    return "";
	  };

	  /**
	   * Sends the request to the server.
	   *
	   * @param string data Optional data to send as request body.
	   */
	  this.send = function(data) {
	    if (this.readyState != this.OPENED) {
	      throw "INVALID_STATE_ERR: connection must be opened before send() is called";
	    }

	    if (sendFlag) {
	      throw "INVALID_STATE_ERR: send has already been called";
	    }

	    var ssl = false, local = false;
	    var url = Url.parse(settings.url);
	    var host;
	    // Determine the server
	    switch (url.protocol) {
	      case 'https:':
	        ssl = true;
	        // SSL & non-SSL both need host, no break here.
	      case 'http:':
	        host = url.hostname;
	        break;

	      case 'file:':
	        local = true;
	        break;

	      case undefined:
	      case '':
	        host = "localhost";
	        break;

	      default:
	        throw "Protocol not supported.";
	    }

	    // Load files off the local filesystem (file://)
	    if (local) {
	      if (settings.method !== "GET") {
	        throw "XMLHttpRequest: Only GET method is supported";
	      }

	      if (settings.async) {
	        fs.readFile(url.pathname, 'utf8', function(error, data) {
	          if (error) {
	            self.handleError(error);
	          } else {
	            self.status = 200;
	            self.responseText = data;
	            setState(self.DONE);
	          }
	        });
	      } else {
	        try {
	          this.responseText = fs.readFileSync(url.pathname, 'utf8');
	          this.status = 200;
	          setState(self.DONE);
	        } catch(e) {
	          this.handleError(e);
	        }
	      }

	      return;
	    }

	    // Default to port 80. If accessing localhost on another port be sure
	    // to use http://localhost:port/path
	    var port = url.port || (ssl ? 443 : 80);
	    // Add query string if one is used
	    var uri = url.pathname + (url.search ? url.search : '');

	    // Set the Host header or the server may reject the request
	    headers["Host"] = host;
	    if (!((ssl && port === 443) || port === 80)) {
	      headers["Host"] += ':' + url.port;
	    }

	    // Set Basic Auth if necessary
	    if (settings.user) {
	      if (typeof settings.password == "undefined") {
	        settings.password = "";
	      }
	      var authBuf = new Buffer(settings.user + ":" + settings.password);
	      headers["Authorization"] = "Basic " + authBuf.toString("base64");
	    }

	    // Set content length header
	    if (settings.method === "GET" || settings.method === "HEAD") {
	      data = null;
	    } else if (data) {
	      headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);

	      if (!headers["Content-Type"]) {
	        headers["Content-Type"] = "text/plain;charset=UTF-8";
	      }
	    } else if (settings.method === "POST") {
	      // For a post with no data set Content-Length: 0.
	      // This is required by buggy servers that don't meet the specs.
	      headers["Content-Length"] = 0;
	    }

	    var agent = false;
	    if (opts && opts.agent) {
	      agent = opts.agent;
	    }
	    var options = {
	      host: host,
	      port: port,
	      path: uri,
	      method: settings.method,
	      headers: headers,
	      agent: agent
	    };

	    if (ssl) {
	      options.pfx = opts.pfx;
	      options.key = opts.key;
	      options.passphrase = opts.passphrase;
	      options.cert = opts.cert;
	      options.ca = opts.ca;
	      options.ciphers = opts.ciphers;
	      options.rejectUnauthorized = opts.rejectUnauthorized;
	    }

	    // Reset error flag
	    errorFlag = false;

	    // Handle async requests
	    if (settings.async) {
	      // Use the proper protocol
	      var doRequest = ssl ? https.request : http.request;

	      // Request is being sent, set send flag
	      sendFlag = true;

	      // As per spec, this is called here for historical reasons.
	      self.dispatchEvent("readystatechange");

	      // Handler for the response
	      function responseHandler(resp) {
	        // Set response var to the response we got back
	        // This is so it remains accessable outside this scope
	        response = resp;
	        // Check for redirect
	        // @TODO Prevent looped redirects
	        if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
	          // Change URL to the redirect location
	          settings.url = response.headers.location;
	          var url = Url.parse(settings.url);
	          // Set host var in case it's used later
	          host = url.hostname;
	          // Options for the new request
	          var newOptions = {
	            hostname: url.hostname,
	            port: url.port,
	            path: url.path,
	            method: response.statusCode === 303 ? 'GET' : settings.method,
	            headers: headers
	          };

	          if (ssl) {
	            options.pfx = opts.pfx;
	            options.key = opts.key;
	            options.passphrase = opts.passphrase;
	            options.cert = opts.cert;
	            options.ca = opts.ca;
	            options.ciphers = opts.ciphers;
	            options.rejectUnauthorized = opts.rejectUnauthorized;
	          }

	          // Issue the new request
	          request = doRequest(newOptions, responseHandler).on('error', errorHandler);
	          request.end();
	          // @TODO Check if an XHR event needs to be fired here
	          return;
	        }

	        response.setEncoding("utf8");

	        setState(self.HEADERS_RECEIVED);
	        self.status = response.statusCode;

	        response.on('data', function(chunk) {
	          // Make sure there's some data
	          if (chunk) {
	            self.responseText += chunk;
	          }
	          // Don't emit state changes if the connection has been aborted.
	          if (sendFlag) {
	            setState(self.LOADING);
	          }
	        });

	        response.on('end', function() {
	          if (sendFlag) {
	            // Discard the 'end' event if the connection has been aborted
	            setState(self.DONE);
	            sendFlag = false;
	          }
	        });

	        response.on('error', function(error) {
	          self.handleError(error);
	        });
	      }

	      // Error handler for the request
	      function errorHandler(error) {
	        self.handleError(error);
	      }

	      // Create the request
	      request = doRequest(options, responseHandler).on('error', errorHandler);

	      // Node 0.4 and later won't accept empty data. Make sure it's needed.
	      if (data) {
	        request.write(data);
	      }

	      request.end();

	      self.dispatchEvent("loadstart");
	    } else { // Synchronous
	      // Create a temporary file for communication with the other Node process
	      var contentFile = ".node-xmlhttprequest-content-" + process.pid;
	      var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
	      fs.writeFileSync(syncFile, "", "utf8");
	      // The async request the other Node process executes
	      var execString = "var http = require('http'), https = require('https'), fs = require('fs');"
	        + "var doRequest = http" + (ssl ? "s" : "") + ".request;"
	        + "var options = " + JSON.stringify(options) + ";"
	        + "var responseText = '';"
	        + "var req = doRequest(options, function(response) {"
	        + "response.setEncoding('utf8');"
	        + "response.on('data', function(chunk) {"
	        + "  responseText += chunk;"
	        + "});"
	        + "response.on('end', function() {"
	        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-STATUS:' + response.statusCode + ',' + responseText, 'utf8');"
	        + "fs.unlinkSync('" + syncFile + "');"
	        + "});"
	        + "response.on('error', function(error) {"
	        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
	        + "fs.unlinkSync('" + syncFile + "');"
	        + "});"
	        + "}).on('error', function(error) {"
	        + "fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"
	        + "fs.unlinkSync('" + syncFile + "');"
	        + "});"
	        + (data ? "req.write('" + data.replace(/'/g, "\\'") + "');":"")
	        + "req.end();";
	      // Start the other Node Process, executing this string
	      var syncProc = spawn(process.argv[0], ["-e", execString]);
	      var statusText;
	      while(fs.existsSync(syncFile)) {
	        // Wait while the sync file is empty
	      }
	      self.responseText = fs.readFileSync(contentFile, 'utf8');
	      // Kill the child process once the file has data
	      syncProc.stdin.end();
	      // Remove the temporary file
	      fs.unlinkSync(contentFile);
	      if (self.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)) {
	        // If the file returned an error, handle it
	        var errorObj = self.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, "");
	        self.handleError(errorObj);
	      } else {
	        // If the file returned okay, parse its data and move to the DONE state
	        self.status = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1");
	        self.responseText = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1");
	        setState(self.DONE);
	      }
	    }
	  };

	  /**
	   * Called when an error is encountered to deal with it.
	   */
	  this.handleError = function(error) {
	    this.status = 503;
	    this.statusText = error;
	    this.responseText = error.stack;
	    errorFlag = true;
	    setState(this.DONE);
	  };

	  /**
	   * Aborts a request.
	   */
	  this.abort = function() {
	    if (request) {
	      request.abort();
	      request = null;
	    }

	    headers = defaultHeaders;
	    this.responseText = "";
	    this.responseXML = "";

	    errorFlag = true;

	    if (this.readyState !== this.UNSENT
	        && (this.readyState !== this.OPENED || sendFlag)
	        && this.readyState !== this.DONE) {
	      sendFlag = false;
	      setState(this.DONE);
	    }
	    this.readyState = this.UNSENT;
	  };

	  /**
	   * Adds an event listener. Preferred method of binding to events.
	   */
	  this.addEventListener = function(event, callback) {
	    if (!(event in listeners)) {
	      listeners[event] = [];
	    }
	    // Currently allows duplicate callbacks. Should it?
	    listeners[event].push(callback);
	  };

	  /**
	   * Remove an event callback that has already been bound.
	   * Only works on the matching funciton, cannot be a copy.
	   */
	  this.removeEventListener = function(event, callback) {
	    if (event in listeners) {
	      // Filter will return a new array with the callback removed
	      listeners[event] = listeners[event].filter(function(ev) {
	        return ev !== callback;
	      });
	    }
	  };

	  /**
	   * Dispatch any events, including both "on" methods and events attached using addEventListener.
	   */
	  this.dispatchEvent = function(event) {
	    if (typeof self["on" + event] === "function") {
	      self["on" + event]();
	    }
	    if (event in listeners) {
	      for (var i = 0, len = listeners[event].length; i < len; i++) {
	        listeners[event][i].call(self);
	      }
	    }
	  };

	  /**
	   * Changes readyState and calls onreadystatechange.
	   *
	   * @param int state New state
	   */
	  var setState = function(state) {
	    if (self.readyState !== state) {
	      self.readyState = state;

	      if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
	        self.dispatchEvent("readystatechange");
	      }

	      if (self.readyState === self.DONE && !errorFlag) {
	        self.dispatchEvent("load");
	        // @TODO figure out InspectorInstrumentation::didLoadXHR(cookie)
	        self.dispatchEvent("loadend");
	      }
	    }
	  };
	};


/***/ },
/* 73 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 74 */
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 75 */
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 76 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 77 */
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("https");

/***/ },
/* 78 */
/*!*****************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/lib/transports/polling-xhr.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest */ 72);
	var Polling = __webpack_require__(/*! ./polling */ 79);
	var Emitter = __webpack_require__(/*! component-emitter */ 64);
	var inherit = __webpack_require__(/*! component-inherit */ 88);
	var debug = __webpack_require__(/*! debug */ 89)('engine.io-client:polling-xhr');

	/**
	 * Module exports.
	 */

	module.exports = XHR;
	module.exports.Request = Request;

	/**
	 * Empty function
	 */

	function empty(){}

	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function XHR(opts){
	  Polling.call(this, opts);

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    this.xd = opts.hostname != global.location.hostname ||
	      port != opts.port;
	    this.xs = opts.secure != isSSL;
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(XHR, Polling);

	/**
	 * XHR supports binary
	 */

	XHR.prototype.supportsBinary = true;

	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */

	XHR.prototype.request = function(opts){
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  return new Request(opts);
	};

	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */

	XHR.prototype.doWrite = function(data, fn){
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function(err){
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	XHR.prototype.doPoll = function(){
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function(data){
	    self.onData(data);
	  });
	  req.on('error', function(err){
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};

	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Request(opts){
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined != opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  this.create();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */

	Request.prototype.create = function(){
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;

	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }

	    if ('POST' == this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }

	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }

	    if (this.hasXDR()) {
	      xhr.onload = function(){
	        self.onLoad();
	      };
	      xhr.onerror = function(){
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function(){
	        if (4 != xhr.readyState) return;
	        if (200 == xhr.status || 1223 == xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function(){
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }

	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function() {
	      self.onError(e);
	    }, 0);
	    return;
	  }

	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};

	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */

	Request.prototype.onSuccess = function(){
	  this.emit('success');
	  this.cleanup();
	};

	/**
	 * Called if we have data.
	 *
	 * @api private
	 */

	Request.prototype.onData = function(data){
	  this.emit('data', data);
	  this.onSuccess();
	};

	/**
	 * Called upon error.
	 *
	 * @api private
	 */

	Request.prototype.onError = function(err){
	  this.emit('error', err);
	  this.cleanup(true);
	};

	/**
	 * Cleans up house.
	 *
	 * @api private
	 */

	Request.prototype.cleanup = function(fromError){
	  if ('undefined' == typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }

	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch(e) {}
	  }

	  if (global.document) {
	    delete Request.requests[this.index];
	  }

	  this.xhr = null;
	};

	/**
	 * Called upon load.
	 *
	 * @api private
	 */

	Request.prototype.onLoad = function(){
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        data = 'ok';
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};

	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */

	Request.prototype.hasXDR = function(){
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};

	/**
	 * Aborts the request.
	 *
	 * @api public
	 */

	Request.prototype.abort = function(){
	  this.cleanup();
	};

	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */

	if (global.document) {
	  Request.requestsCount = 0;
	  Request.requests = {};
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}

	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}


/***/ },
/* 79 */
/*!*************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/lib/transports/polling.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(/*! ../transport */ 80);
	var parseqs = __webpack_require__(/*! parseqs */ 87);
	var parser = __webpack_require__(/*! engine.io-parser */ 81);
	var inherit = __webpack_require__(/*! component-inherit */ 88);
	var debug = __webpack_require__(/*! debug */ 89)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = (function() {
	  var XMLHttpRequest = __webpack_require__(/*! xmlhttprequest */ 72);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();

	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */

	function Polling(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(Polling, Transport);

	/**
	 * Transport name.
	 */

	Polling.prototype.name = 'polling';

	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */

	Polling.prototype.doOpen = function(){
	  this.poll();
	};

	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */

	Polling.prototype.pause = function(onPause){
	  var pending = 0;
	  var self = this;

	  this.readyState = 'pausing';

	  function pause(){
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }

	  if (this.polling || !this.writable) {
	    var total = 0;

	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function(){
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }

	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function(){
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};

	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */

	Polling.prototype.poll = function(){
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};

	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */

	Polling.prototype.onData = function(data){
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' == self.readyState) {
	      self.onOpen();
	    }

	    // if its a close packet, we close the ongoing requests
	    if ('close' == packet.type) {
	      self.onClose();
	      return false;
	    }

	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };

	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);

	  // if an event did not trigger closing
	  if ('closed' != this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');

	    if ('open' == this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};

	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */

	Polling.prototype.doClose = function(){
	  var self = this;

	  function close(){
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }

	  if ('open' == this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};

	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */

	Polling.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  var callbackfn = function() {
	    self.writable = true;
	    self.emit('drain');
	  };

	  var self = this;
	  parser.encodePayload(packets, this.supportsBinary, function(data) {
	    self.doWrite(data, callbackfn);
	  });
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	Polling.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';

	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = +new Date + '-' + Transport.timestamps++;
	  }

	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // avoid port if default for schema
	  if (this.port && (('https' == schema && this.port != 443) ||
	     ('http' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  return schema + '://' + this.hostname + port + this.path + query;
	};


/***/ },
/* 80 */
/*!****************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/lib/transport.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(/*! engine.io-parser */ 81);
	var Emitter = __webpack_require__(/*! component-emitter */ 64);

	/**
	 * Module exports.
	 */

	module.exports = Transport;

	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */

	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Transport.prototype);

	/**
	 * A counter used to prevent collisions in the timestamps used
	 * for cache busting.
	 */

	Transport.timestamps = 0;

	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */

	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};

	/**
	 * Opens the transport.
	 *
	 * @api public
	 */

	Transport.prototype.open = function () {
	  if ('closed' == this.readyState || '' == this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }

	  return this;
	};

	/**
	 * Closes the transport.
	 *
	 * @api private
	 */

	Transport.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.doClose();
	    this.onClose();
	  }

	  return this;
	};

	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */

	Transport.prototype.send = function(packets){
	  if ('open' == this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};

	/**
	 * Called upon open
	 *
	 * @api private
	 */

	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};

	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */

	Transport.prototype.onData = function(data){
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};

	/**
	 * Called with a decoded packet.
	 */

	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon close.
	 *
	 * @api private
	 */

	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 81 */
/*!***************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/engine.io-parser/index.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(/*! ./lib/ */ 82);


/***/ },
/* 82 */
/*!*******************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/engine.io-parser/lib/index.js ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var utf8 = __webpack_require__(/*! utf8 */ 83);
	var after = __webpack_require__(/*! after */ 85);
	var keys = __webpack_require__(/*! ./keys */ 86);

	/**
	 * Current protocol version.
	 */
	exports.protocol = 3;

	/**
	 * Packet types.
	 */

	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};

	var packetslist = keys(packets);

	/**
	 * Premade error packet.
	 */

	var err = { type: 'error', data: 'parser error' };

	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */

	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  if ('function' == typeof utf8encode ) {
	    callback = utf8encode;
	    utf8encode = null;
	  }

	  if (Buffer.isBuffer(packet.data)) {
	    return encodeBuffer(packet, supportsBinary, callback);
	  } else if (packet.data && (packet.data.buffer || packet.data) instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  }

	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];

	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }

	  return callback('' + encoded);
	};

	/**
	 * Encode Buffer data
	 */

	function encodeBuffer(packet, supportsBinary, callback) {
	  var data = packet.data;
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var typeBuffer = new Buffer(1);
	  typeBuffer[0] = packets[packet.type];
	  return callback(Buffer.concat([typeBuffer, data]));
	}

	function encodeArrayBuffer(packet, supportsBinary, callback) {

	  var data = packet.data.buffer || packet.data;

	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Buffer(1 + data.byteLength);

	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++){
	    resultBuffer[i+1] = contentArray[i];
	  }
	  return callback(resultBuffer);
	}

	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */

	exports.encodeBase64Packet = function(packet, callback){

	  if (!Buffer.isBuffer(packet.data)) {
	    var buf = new Buffer(packet.data.byteLength);
	    for (var i = 0; i < buf.length; i++) {
	      buf[i] = packet.data[i];
	    }
	    packet.data = buf;
	  }

	  var message = 'b' + packets[packet.type];
	  message += packet.data.toString('base64');
	  return callback(message);
	};

	/**
	 * Decodes a packet. Data also available as an ArrayBuffer if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */

	exports.decodePacket = function (data, binaryType, utf8decode) {
	  // String data
	  if (typeof data == 'string' || data === undefined) {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }

	    var type = data.charAt(0);
	    if (utf8decode) {
	      try {
	        data = utf8.decode(data);
	      } catch (e) {
	        return err;
	      }
	    }

	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }

	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }

	  // Binary data
	  if (binaryType === 'arraybuffer') {
	    var type = data[0];
	    var intArray = new Uint8Array(data.length - 1);
	    for (var i = 1; i < data.length; i++) {
	      intArray[i - 1] = data[i];
	    }
	    return { type: packetslist[type], data: intArray.buffer };
	  }
	  var type = data[0];
	  return { type: packetslist[type], data: data.slice(1) };
	};

	/**
	 * Decodes a packet encoded in a base64 string.
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */

	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  var data = new Buffer(msg.substr(1), 'base64');
	  if (binaryType === 'arraybuffer') {
	    var abv = new Uint8Array(data.length);
	    for (var i = 0; i < abv.length; i++){
	      abv[i] = data[i];
	    }
	    data = abv.buffer;
	  }
	  return { type: type, data: data };
	};

	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */

	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  if (supportsBinary) {
	    return exports.encodePayloadAsBinary(packets, callback);
	  }

	  if (!packets.length) {
	    return callback('0:');
	  }

	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};

	/**
	 * Async array map using after
	 */

	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);

	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };

	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}

	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */

	exports.decodePayload = function (data, binaryType, callback) {
	  if ('string' != typeof data) {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }

	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	  var length = ''
	    , n, msg;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);

	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      msg = data.substr(i + 1, n);

	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);

	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }

	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }

	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }

	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	};

	/**
	 *
	 * Converts a buffer to a utf8.js encoded string
	 *
	 * @api private
	 */

	function bufferToString(buffer) {
	  var str = '';
	  for (var i = 0; i < buffer.length; i++) {
	    str += String.fromCharCode(buffer[i]);
	  }
	  return str;
	}

	/**
	 *
	 * Converts a utf8.js encoded string to a buffer
	 *
	 * @api private
	 */

	function stringToBuffer(string) {
	  var buf = new Buffer(string.length);
	  for (var i = 0; i < string.length; i++) {
	    buf.writeUInt8(string.charCodeAt(i), i);
	  }
	  return buf;
	}

	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {Buffer} encoded payload
	 * @api private
	 */

	exports.encodePayloadAsBinary = function (packets, callback) {
	  if (!packets.length) {
	    return callback(new Buffer(0));
	  }

	  function encodeOne(p, doneCallback) {
	    exports.encodePacket(p, true, true, function(packet) {

	      if (typeof packet === 'string') {
	        var encodingLength = '' + packet.length;
	        var sizeBuffer = new Buffer(encodingLength.length + 2);
	        sizeBuffer[0] = 0; // is a string (not true binary = 0)
	        for (var i = 0; i < encodingLength.length; i++) {
	          sizeBuffer[i + 1] = parseInt(encodingLength[i], 10);
	        }
	        sizeBuffer[sizeBuffer.length - 1] = 255;
	        return doneCallback(null, Buffer.concat([sizeBuffer, stringToBuffer(packet)]));
	      }

	      var encodingLength = '' + packet.length;
	      var sizeBuffer = new Buffer(encodingLength.length + 2);
	      sizeBuffer[0] = 1; // is binary (true binary = 1)
	      for (var i = 0; i < encodingLength.length; i++) {
	        sizeBuffer[i + 1] = parseInt(encodingLength[i], 10);
	      }
	      sizeBuffer[sizeBuffer.length - 1] = 255;
	      doneCallback(null, Buffer.concat([sizeBuffer, packet]));
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(Buffer.concat(results));
	  });
	};

	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary

	 * @param {Buffer} data, callback method
	 * @api public
	 */

	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var bufferTail = data;
	  var buffers = [];

	  while (bufferTail.length > 0) {
	    var strLen = '';
	    var isString = bufferTail[0] === 0;
	    var numberTooLong = false;
	    for (var i = 1; ; i++) {
	      if (bufferTail[i] == 255)  break;
	      // 310 = char length of Number.MAX_VALUE
	      if (strLen.length > 310) {
	        numberTooLong = true;
	        break;
	      }
	      strLen += '' + bufferTail[i];
	    }
	    if(numberTooLong) return callback(err, 0, 1);
	    bufferTail = bufferTail.slice(strLen.length + 1);

	    var msgLength = parseInt(strLen, 10);

	    var msg = bufferTail.slice(1, msgLength + 1);
	    if (isString) msg = bufferToString(msg);
	    buffers.push(msg);
	    bufferTail = bufferTail.slice(msgLength + 1);
	  }

	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};


/***/ },
/* 83 */
/*!*********************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/engine.io-parser/~/utf8/utf8.js ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*! https://mths.be/utf8js v2.0.0 by @mathias */
	;(function(root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
		}
		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}

		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}

		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid UTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/module.js */ 84)(module)))

/***/ },
/* 84 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 85 */
/*!***********************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/engine.io-parser/~/after/index.js ***!
  \***********************************************************************************/
/***/ function(module, exports) {

	module.exports = after

	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count

	    return (count === 0) ? callback() : proxy

	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count

	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}

	function noop() {}


/***/ },
/* 86 */
/*!******************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/engine.io-parser/lib/keys.js ***!
  \******************************************************************************/
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */

	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;

	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 87 */
/*!******************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/parseqs/index.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */

	exports.encode = function (obj) {
	  var str = '';

	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }

	  return str;
	};

	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */

	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 88 */
/*!****************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/component-inherit/index.js ***!
  \****************************************************************************/
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 89 */
/*!***************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/debug/node.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var tty = __webpack_require__(/*! tty */ 59);
	var util = __webpack_require__(/*! util */ 90);

	/**
	 * This is the Node.js implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(/*! ./debug */ 91);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;

	/**
	 * Colors.
	 */

	exports.colors = [6, 2, 3, 4, 5, 1];

	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */

	function useColors() {
	  var debugColors = (({"NODE_ENV":"production"}).DEBUG_COLORS || '').trim().toLowerCase();
	  if (0 === debugColors.length) {
	    return tty.isatty(1);
	  } else {
	    return '0' !== debugColors
	        && 'no' !== debugColors
	        && 'false' !== debugColors
	        && 'disabled' !== debugColors;
	  }
	}

	/**
	 * Map %o to `util.inspect()`, since Node doesn't do that out of the box.
	 */

	var inspect = (4 === util.inspect.length ?
	  // node <= 0.8.x
	  function (v, colors) {
	    return util.inspect(v, void 0, void 0, colors);
	  } :
	  // node > 0.8.x
	  function (v, colors) {
	    return util.inspect(v, { colors: colors });
	  }
	);

	exports.formatters.o = function(v) {
	  return inspect(v, this.useColors)
	    .replace(/\s*\n\s*/g, ' ');
	};

	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	  var name = this.namespace;

	  if (useColors) {
	    var c = this.color;

	    args[0] = '  \u001b[9' + c + 'm' + name + ' '
	      + '\u001b[0m'
	      + args[0] + '\u001b[3' + c + 'm'
	      + ' +' + exports.humanize(this.diff) + '\u001b[0m';
	  } else {
	    args[0] = new Date().toUTCString()
	      + ' ' + name + ' ' + args[0];
	  }
	  return args;
	}

	/**
	 * Invokes `console.log()` with the specified arguments.
	 */

	function log() {
	  return console.log.apply(console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  if (null == namespaces) {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete ({"NODE_ENV":"production"}).DEBUG;
	  } else {
	    ({"NODE_ENV":"production"}).DEBUG = namespaces;
	  }
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  return ({"NODE_ENV":"production"}).DEBUG;
	}

	/**
	 * Enable namespaces listed in `process.env.DEBUG` initially.
	 */

	exports.enable(load());


/***/ },
/* 90 */
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 91 */
/*!****************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/debug/debug.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(/*! ms */ 92);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 92 */
/*!*********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/debug/~/ms/index.js ***!
  \*********************************************************************/
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 's':
	      return n * s;
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 93 */
/*!*******************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/lib/transports/polling-jsonp.js ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(/*! ./polling */ 79);
	var inherit = __webpack_require__(/*! component-inherit */ 88);

	/**
	 * Module exports.
	 */

	module.exports = JSONPPolling;

	/**
	 * Cached regular expressions.
	 */

	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;

	/**
	 * Global JSONP callbacks.
	 */

	var callbacks;

	/**
	 * Callbacks count.
	 */

	var index = 0;

	/**
	 * Noop.
	 */

	function empty () { }

	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */

	function JSONPPolling (opts) {
	  Polling.call(this, opts);

	  this.query = this.query || {};

	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }

	  // callback identifier
	  this.index = callbacks.length;

	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });

	  // append to query string
	  this.query.j = this.index;

	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(JSONPPolling, Polling);

	/*
	 * JSONP only supports binary as base64 encoded strings
	 */

	JSONPPolling.prototype.supportsBinary = false;

	/**
	 * Closes the socket.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }

	  Polling.prototype.doClose.call(this);
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');

	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function(e){
	    self.onError('jsonp poll error',e);
	  };

	  var insertAt = document.getElementsByTagName('script')[0];
	  insertAt.parentNode.insertBefore(script, insertAt);
	  this.script = script;

	  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
	  
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};

	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */

	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;

	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;

	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);

	    this.form = form;
	    this.area = area;
	  }

	  this.form.action = this.uri();

	  function complete () {
	    initIframe();
	    fn();
	  }

	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }

	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }

	    iframe.id = self.iframeId;

	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }

	  initIframe();

	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');

	  try {
	    this.form.submit();
	  } catch(e) {}

	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function(){
	      if (self.iframe.readyState == 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};


/***/ },
/* 94 */
/*!***************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/lib/transports/websocket.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(/*! ../transport */ 80);
	var parser = __webpack_require__(/*! engine.io-parser */ 81);
	var parseqs = __webpack_require__(/*! parseqs */ 87);
	var inherit = __webpack_require__(/*! component-inherit */ 88);
	var debug = __webpack_require__(/*! debug */ 89)('engine.io-client:websocket');

	/**
	 * `ws` exposes a WebSocket-compatible interface in
	 * Node, or the `WebSocket` or `MozWebSocket` globals
	 * in the browser.
	 */

	var WebSocket = __webpack_require__(/*! ws */ 95);

	/**
	 * Module exports.
	 */

	module.exports = WS;

	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */

	function WS(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(WS, Transport);

	/**
	 * Transport name.
	 *
	 * @api public
	 */

	WS.prototype.name = 'websocket';

	/*
	 * WebSockets support binary
	 */

	WS.prototype.supportsBinary = true;

	/**
	 * Opens socket.
	 *
	 * @api private
	 */

	WS.prototype.doOpen = function(){
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }

	  var self = this;
	  var uri = this.uri();
	  var protocols = void(0);
	  var opts = { agent: this.agent };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  this.ws = new WebSocket(uri, protocols, opts);

	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }

	  this.ws.binaryType = 'arraybuffer';
	  this.addEventListeners();
	};

	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */

	WS.prototype.addEventListeners = function(){
	  var self = this;

	  this.ws.onopen = function(){
	    self.onOpen();
	  };
	  this.ws.onclose = function(){
	    self.onClose();
	  };
	  this.ws.onmessage = function(ev){
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function(e){
	    self.onError('websocket error', e);
	  };
	};

	/**
	 * Override `onData` to use a timer on iOS.
	 * See: https://gist.github.com/mloughran/2052006
	 *
	 * @api private
	 */

	if ('undefined' != typeof navigator
	  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
	  WS.prototype.onData = function(data){
	    var self = this;
	    setTimeout(function(){
	      Transport.prototype.onData.call(self, data);
	    }, 0);
	  };
	}

	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */

	WS.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  for (var i = 0, l = packets.length; i < l; i++) {
	    parser.encodePacket(packets[i], this.supportsBinary, function(data) {
	      //Sometimes the websocket has already been closed but the browser didn't
	      //have a chance of informing us about it yet, in that case send will
	      //throw an error
	      try {
	        self.ws.send(data);
	      } catch (e){
	        debug('websocket closed before onclose event');
	      }
	    });
	  }

	  function ondrain() {
	    self.writable = true;
	    self.emit('drain');
	  }
	  // fake drain
	  // defer to next tick to allow Socket to clear writeBuffer
	  setTimeout(ondrain, 0);
	};

	/**
	 * Called upon close
	 *
	 * @api private
	 */

	WS.prototype.onClose = function(){
	  Transport.prototype.onClose.call(this);
	};

	/**
	 * Closes socket.
	 *
	 * @api private
	 */

	WS.prototype.doClose = function(){
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	WS.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';

	  // avoid port if default for schema
	  if (this.port && (('wss' == schema && this.port != 443)
	    || ('ws' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = +new Date;
	  }

	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  return schema + '://' + this.hostname + port + this.path + query;
	};

	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */

	WS.prototype.check = function(){
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};


/***/ },
/* 95 */
/*!*************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/index.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	var WS = module.exports = __webpack_require__(/*! ./lib/WebSocket */ 96);

	WS.Server = __webpack_require__(/*! ./lib/WebSocketServer */ 126);
	WS.Sender = __webpack_require__(/*! ./lib/Sender */ 101);
	WS.Receiver = __webpack_require__(/*! ./lib/Receiver */ 114);

	/**
	 * Create a new WebSocket server.
	 *
	 * @param {Object} options Server options
	 * @param {Function} fn Optional connection listener.
	 * @returns {WS.Server}
	 * @api public
	 */
	WS.createServer = function createServer(options, fn) {
	  var server = new WS.Server(options);

	  if (typeof fn === 'function') {
	    server.on('connection', fn);
	  }

	  return server;
	};

	/**
	 * Create a new WebSocket connection.
	 *
	 * @param {String} address The URL/address we need to connect to.
	 * @param {Function} fn Open listener.
	 * @returns {WS}
	 * @api public
	 */
	WS.connect = WS.createConnection = function connect(address, fn) {
	  var client = new WS(address);

	  if (typeof fn === 'function') {
	    client.on('open', fn);
	  }

	  return client;
	};


/***/ },
/* 96 */
/*!*********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/WebSocket.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	var url = __webpack_require__(/*! url */ 74)
	  , util = __webpack_require__(/*! util */ 90)
	  , http = __webpack_require__(/*! http */ 76)
	  , https = __webpack_require__(/*! https */ 77)
	  , crypto = __webpack_require__(/*! crypto */ 97)
	  , stream = __webpack_require__(/*! stream */ 98)
	  , Ultron = __webpack_require__(/*! ultron */ 99)
	  , Options = __webpack_require__(/*! options */ 100)
	  , Sender = __webpack_require__(/*! ./Sender */ 101)
	  , Receiver = __webpack_require__(/*! ./Receiver */ 114)
	  , SenderHixie = __webpack_require__(/*! ./Sender.hixie */ 123)
	  , ReceiverHixie = __webpack_require__(/*! ./Receiver.hixie */ 124)
	  , Extensions = __webpack_require__(/*! ./Extensions */ 125)
	  , PerMessageDeflate = __webpack_require__(/*! ./PerMessageDeflate */ 112)
	  , EventEmitter = __webpack_require__(/*! events */ 102).EventEmitter;

	/**
	 * Constants
	 */

	// Default protocol version

	var protocolVersion = 13;

	// Close timeout

	var closeTimeout = 30 * 1000; // Allow 30 seconds to terminate the connection cleanly

	/**
	 * WebSocket implementation
	 *
	 * @constructor
	 * @param {String} address Connection address.
	 * @param {String|Array} protocols WebSocket protocols.
	 * @param {Object} options Additional connection options.
	 * @api public
	 */
	function WebSocket(address, protocols, options) {
	  if (this instanceof WebSocket === false) {
	    throw new TypeError("Classes can't be function-called");
	  }

	  EventEmitter.call(this);

	  if (protocols && !Array.isArray(protocols) && 'object' === typeof protocols) {
	    // accept the "options" Object as the 2nd argument
	    options = protocols;
	    protocols = null;
	  }

	  if ('string' === typeof protocols) {
	    protocols = [ protocols ];
	  }

	  if (!Array.isArray(protocols)) {
	    protocols = [];
	  }

	  this._socket = null;
	  this._ultron = null;
	  this._closeReceived = false;
	  this.bytesReceived = 0;
	  this.readyState = null;
	  this.supports = {};
	  this.extensions = {};

	  if (Array.isArray(address)) {
	    initAsServerClient.apply(this, address.concat(options));
	  } else {
	    initAsClient.apply(this, [address, protocols, options]);
	  }
	}

	/**
	 * Inherits from EventEmitter.
	 */
	util.inherits(WebSocket, EventEmitter);

	/**
	 * Ready States
	 */
	["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function each(state, index) {
	    WebSocket.prototype[state] = WebSocket[state] = index;
	});

	/**
	 * Gracefully closes the connection, after sending a description message to the server
	 *
	 * @param {Object} data to be sent to the server
	 * @api public
	 */
	WebSocket.prototype.close = function close(code, data) {
	  if (this.readyState === WebSocket.CLOSED) return;

	  if (this.readyState === WebSocket.CONNECTING) {
	    this.readyState = WebSocket.CLOSED;
	    return;
	  }

	  if (this.readyState === WebSocket.CLOSING) {
	    if (this._closeReceived && this._isServer) {
	      this.terminate();
	    }
	    return;
	  }

	  var self = this;
	  try {
	    this.readyState = WebSocket.CLOSING;
	    this._closeCode = code;
	    this._closeMessage = data;
	    var mask = !this._isServer;
	    this._sender.close(code, data, mask, function(err) {
	      if (err) self.emit('error', err);

	      if (self._closeReceived && self._isServer) {
	        self.terminate();
	      } else {
	        // ensure that the connection is cleaned up even when no response of closing handshake.
	        clearTimeout(self._closeTimer);
	        self._closeTimer = setTimeout(cleanupWebsocketResources.bind(self, true), closeTimeout);
	      }
	    });
	  } catch (e) {
	    this.emit('error', e);
	  }
	};

	/**
	 * Pause the client stream
	 *
	 * @api public
	 */
	WebSocket.prototype.pause = function pauser() {
	  if (this.readyState !== WebSocket.OPEN) throw new Error('not opened');

	  return this._socket.pause();
	};

	/**
	 * Sends a ping
	 *
	 * @param {Object} data to be sent to the server
	 * @param {Object} Members - mask: boolean, binary: boolean
	 * @param {boolean} dontFailWhenClosed indicates whether or not to throw if the connection isnt open
	 * @api public
	 */
	WebSocket.prototype.ping = function ping(data, options, dontFailWhenClosed) {
	  if (this.readyState !== WebSocket.OPEN) {
	    if (dontFailWhenClosed === true) return;
	    throw new Error('not opened');
	  }

	  options = options || {};

	  if (typeof options.mask === 'undefined') options.mask = !this._isServer;

	  this._sender.ping(data, options);
	};

	/**
	 * Sends a pong
	 *
	 * @param {Object} data to be sent to the server
	 * @param {Object} Members - mask: boolean, binary: boolean
	 * @param {boolean} dontFailWhenClosed indicates whether or not to throw if the connection isnt open
	 * @api public
	 */
	WebSocket.prototype.pong = function(data, options, dontFailWhenClosed) {
	  if (this.readyState !== WebSocket.OPEN) {
	    if (dontFailWhenClosed === true) return;
	    throw new Error('not opened');
	  }

	  options = options || {};

	  if (typeof options.mask === 'undefined') options.mask = !this._isServer;

	  this._sender.pong(data, options);
	};

	/**
	 * Resume the client stream
	 *
	 * @api public
	 */
	WebSocket.prototype.resume = function resume() {
	  if (this.readyState !== WebSocket.OPEN) throw new Error('not opened');

	  return this._socket.resume();
	};

	/**
	 * Sends a piece of data
	 *
	 * @param {Object} data to be sent to the server
	 * @param {Object} Members - mask: boolean, binary: boolean, compress: boolean
	 * @param {function} Optional callback which is executed after the send completes
	 * @api public
	 */

	WebSocket.prototype.send = function send(data, options, cb) {
	  if (typeof options === 'function') {
	    cb = options;
	    options = {};
	  }

	  if (this.readyState !== WebSocket.OPEN) {
	    if (typeof cb === 'function') cb(new Error('not opened'));
	    else throw new Error('not opened');
	    return;
	  }

	  if (!data) data = '';
	  if (this._queue) {
	    var self = this;
	    this._queue.push(function() { self.send(data, options, cb); });
	    return;
	  }

	  options = options || {};
	  options.fin = true;

	  if (typeof options.binary === 'undefined') {
	    options.binary = (data instanceof ArrayBuffer || data instanceof Buffer ||
	      data instanceof Uint8Array ||
	      data instanceof Uint16Array ||
	      data instanceof Uint32Array ||
	      data instanceof Int8Array ||
	      data instanceof Int16Array ||
	      data instanceof Int32Array ||
	      data instanceof Float32Array ||
	      data instanceof Float64Array);
	  }

	  if (typeof options.mask === 'undefined') options.mask = !this._isServer;
	  if (typeof options.compress === 'undefined') options.compress = true;
	  if (!this.extensions[PerMessageDeflate.extensionName]) {
	    options.compress = false;
	  }

	  var readable = typeof stream.Readable === 'function'
	    ? stream.Readable
	    : stream.Stream;

	  if (data instanceof readable) {
	    startQueue(this);
	    var self = this;

	    sendStream(this, data, options, function send(error) {
	      process.nextTick(function tock() {
	        executeQueueSends(self);
	      });

	      if (typeof cb === 'function') cb(error);
	    });
	  } else {
	    this._sender.send(data, options, cb);
	  }
	};

	/**
	 * Streams data through calls to a user supplied function
	 *
	 * @param {Object} Members - mask: boolean, binary: boolean, compress: boolean
	 * @param {function} 'function (error, send)' which is executed on successive ticks of which send is 'function (data, final)'.
	 * @api public
	 */
	WebSocket.prototype.stream = function stream(options, cb) {
	  if (typeof options === 'function') {
	    cb = options;
	    options = {};
	  }

	  var self = this;

	  if (typeof cb !== 'function') throw new Error('callback must be provided');

	  if (this.readyState !== WebSocket.OPEN) {
	    if (typeof cb === 'function') cb(new Error('not opened'));
	    else throw new Error('not opened');
	    return;
	  }

	  if (this._queue) {
	    this._queue.push(function () { self.stream(options, cb); });
	    return;
	  }

	  options = options || {};

	  if (typeof options.mask === 'undefined') options.mask = !this._isServer;
	  if (typeof options.compress === 'undefined') options.compress = true;
	  if (!this.extensions[PerMessageDeflate.extensionName]) {
	    options.compress = false;
	  }

	  startQueue(this);

	  function send(data, final) {
	    try {
	      if (self.readyState !== WebSocket.OPEN) throw new Error('not opened');
	      options.fin = final === true;
	      self._sender.send(data, options);
	      if (!final) process.nextTick(cb.bind(null, null, send));
	      else executeQueueSends(self);
	    } catch (e) {
	      if (typeof cb === 'function') cb(e);
	      else {
	        delete self._queue;
	        self.emit('error', e);
	      }
	    }
	  }

	  process.nextTick(cb.bind(null, null, send));
	};

	/**
	 * Immediately shuts down the connection
	 *
	 * @api public
	 */
	WebSocket.prototype.terminate = function terminate() {
	  if (this.readyState === WebSocket.CLOSED) return;

	  if (this._socket) {
	    this.readyState = WebSocket.CLOSING;

	    // End the connection
	    try { this._socket.end(); }
	    catch (e) {
	      // Socket error during end() call, so just destroy it right now
	      cleanupWebsocketResources.call(this, true);
	      return;
	    }

	    // Add a timeout to ensure that the connection is completely
	    // cleaned up within 30 seconds, even if the clean close procedure
	    // fails for whatever reason
	    // First cleanup any pre-existing timeout from an earlier "terminate" call,
	    // if one exists.  Otherwise terminate calls in quick succession will leak timeouts
	    // and hold the program open for `closeTimout` time.
	    if (this._closeTimer) { clearTimeout(this._closeTimer); }
	    this._closeTimer = setTimeout(cleanupWebsocketResources.bind(this, true), closeTimeout);
	  } else if (this.readyState === WebSocket.CONNECTING) {
	    cleanupWebsocketResources.call(this, true);
	  }
	};

	/**
	 * Expose bufferedAmount
	 *
	 * @api public
	 */
	Object.defineProperty(WebSocket.prototype, 'bufferedAmount', {
	  get: function get() {
	    var amount = 0;
	    if (this._socket) {
	      amount = this._socket.bufferSize || 0;
	    }
	    return amount;
	  }
	});

	/**
	 * Emulates the W3C Browser based WebSocket interface using function members.
	 *
	 * @see http://dev.w3.org/html5/websockets/#the-websocket-interface
	 * @api public
	 */
	['open', 'error', 'close', 'message'].forEach(function(method) {
	  Object.defineProperty(WebSocket.prototype, 'on' + method, {
	    /**
	     * Returns the current listener
	     *
	     * @returns {Mixed} the set function or undefined
	     * @api public
	     */
	    get: function get() {
	      var listener = this.listeners(method)[0];
	      return listener ? (listener._listener ? listener._listener : listener) : undefined;
	    },

	    /**
	     * Start listening for events
	     *
	     * @param {Function} listener the listener
	     * @returns {Mixed} the set function or undefined
	     * @api public
	     */
	    set: function set(listener) {
	      this.removeAllListeners(method);
	      this.addEventListener(method, listener);
	    }
	  });
	});

	/**
	 * Emulates the W3C Browser based WebSocket interface using addEventListener.
	 *
	 * @see https://developer.mozilla.org/en/DOM/element.addEventListener
	 * @see http://dev.w3.org/html5/websockets/#the-websocket-interface
	 * @api public
	 */
	WebSocket.prototype.addEventListener = function(method, listener) {
	  var target = this;

	  function onMessage (data, flags) {
	    listener.call(target, new MessageEvent(data, !!flags.binary, target));
	  }

	  function onClose (code, message) {
	    listener.call(target, new CloseEvent(code, message, target));
	  }

	  function onError (event) {
	    event.type = 'error';
	    event.target = target;
	    listener.call(target, event);
	  }

	  function onOpen () {
	    listener.call(target, new OpenEvent(target));
	  }

	  if (typeof listener === 'function') {
	    if (method === 'message') {
	      // store a reference so we can return the original function from the
	      // addEventListener hook
	      onMessage._listener = listener;
	      this.on(method, onMessage);
	    } else if (method === 'close') {
	      // store a reference so we can return the original function from the
	      // addEventListener hook
	      onClose._listener = listener;
	      this.on(method, onClose);
	    } else if (method === 'error') {
	      // store a reference so we can return the original function from the
	      // addEventListener hook
	      onError._listener = listener;
	      this.on(method, onError);
	    } else if (method === 'open') {
	      // store a reference so we can return the original function from the
	      // addEventListener hook
	      onOpen._listener = listener;
	      this.on(method, onOpen);
	    } else {
	      this.on(method, listener);
	    }
	  }
	};

	module.exports = WebSocket;
	module.exports.buildHostHeader = buildHostHeader

	/**
	 * W3C MessageEvent
	 *
	 * @see http://www.w3.org/TR/html5/comms.html
	 * @constructor
	 * @api private
	 */
	function MessageEvent(dataArg, isBinary, target) {
	  this.type = 'message';
	  this.data = dataArg;
	  this.target = target;
	  this.binary = isBinary; // non-standard.
	}

	/**
	 * W3C CloseEvent
	 *
	 * @see http://www.w3.org/TR/html5/comms.html
	 * @constructor
	 * @api private
	 */
	function CloseEvent(code, reason, target) {
	  this.type = 'close';
	  this.wasClean = (typeof code === 'undefined' || code === 1000);
	  this.code = code;
	  this.reason = reason;
	  this.target = target;
	}

	/**
	 * W3C OpenEvent
	 *
	 * @see http://www.w3.org/TR/html5/comms.html
	 * @constructor
	 * @api private
	 */
	function OpenEvent(target) {
	  this.type = 'open';
	  this.target = target;
	}

	// Append port number to Host header, only if specified in the url
	// and non-default
	function buildHostHeader(isSecure, hostname, port) {
	  var headerHost = hostname;
	  if (hostname) {
	    if ((isSecure && (port != 443)) || (!isSecure && (port != 80))){
	      headerHost = headerHost + ':' + port;
	    }
	  }
	  return headerHost;
	}

	/**
	 * Entirely private apis,
	 * which may or may not be bound to a sepcific WebSocket instance.
	 */
	function initAsServerClient(req, socket, upgradeHead, options) {
	  options = new Options({
	    protocolVersion: protocolVersion,
	    protocol: null,
	    extensions: {}
	  }).merge(options);

	  // expose state properties
	  this.protocol = options.value.protocol;
	  this.protocolVersion = options.value.protocolVersion;
	  this.extensions = options.value.extensions;
	  this.supports.binary = (this.protocolVersion !== 'hixie-76');
	  this.upgradeReq = req;
	  this.readyState = WebSocket.CONNECTING;
	  this._isServer = true;

	  // establish connection
	  if (options.value.protocolVersion === 'hixie-76') {
	    establishConnection.call(this, ReceiverHixie, SenderHixie, socket, upgradeHead);
	  } else {
	    establishConnection.call(this, Receiver, Sender, socket, upgradeHead);
	  }
	}

	function initAsClient(address, protocols, options) {
	  options = new Options({
	    origin: null,
	    protocolVersion: protocolVersion,
	    host: null,
	    headers: null,
	    protocol: protocols.join(','),
	    agent: null,

	    // ssl-related options
	    pfx: null,
	    key: null,
	    passphrase: null,
	    cert: null,
	    ca: null,
	    ciphers: null,
	    rejectUnauthorized: null,
	    perMessageDeflate: true,
	    localAddress: null
	  }).merge(options);

	  if (options.value.protocolVersion !== 8 && options.value.protocolVersion !== 13) {
	    throw new Error('unsupported protocol version');
	  }

	  // verify URL and establish http class
	  var serverUrl = url.parse(address);
	  var isUnixSocket = serverUrl.protocol === 'ws+unix:';
	  if (!serverUrl.host && !isUnixSocket) throw new Error('invalid url');
	  var isSecure = serverUrl.protocol === 'wss:' || serverUrl.protocol === 'https:';
	  var httpObj = isSecure ? https : http;
	  var port = serverUrl.port || (isSecure ? 443 : 80);
	  var auth = serverUrl.auth;

	  // prepare extensions
	  var extensionsOffer = {};
	  var perMessageDeflate;
	  if (options.value.perMessageDeflate) {
	    perMessageDeflate = new PerMessageDeflate(typeof options.value.perMessageDeflate !== true ? options.value.perMessageDeflate : {}, false);
	    extensionsOffer[PerMessageDeflate.extensionName] = perMessageDeflate.offer();
	  }

	  // expose state properties
	  this._isServer = false;
	  this.url = address;
	  this.protocolVersion = options.value.protocolVersion;
	  this.supports.binary = (this.protocolVersion !== 'hixie-76');

	  // begin handshake
	  var key = new Buffer(options.value.protocolVersion + '-' + Date.now()).toString('base64');
	  var shasum = crypto.createHash('sha1');
	  shasum.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11');
	  var expectedServerKey = shasum.digest('base64');

	  var agent = options.value.agent;

	  var headerHost = buildHostHeader(isSecure, serverUrl.hostname, port)

	  var requestOptions = {
	    port: port,
	    host: serverUrl.hostname,
	    headers: {
	      'Connection': 'Upgrade',
	      'Upgrade': 'websocket',
	      'Host': headerHost,
	      'Sec-WebSocket-Version': options.value.protocolVersion,
	      'Sec-WebSocket-Key': key
	    }
	  };

	  // If we have basic auth.
	  if (auth) {
	    requestOptions.headers.Authorization = 'Basic ' + new Buffer(auth).toString('base64');
	  }

	  if (options.value.protocol) {
	    requestOptions.headers['Sec-WebSocket-Protocol'] = options.value.protocol;
	  }

	  if (options.value.host) {
	    requestOptions.headers.Host = options.value.host;
	  }

	  if (options.value.headers) {
	    for (var header in options.value.headers) {
	       if (options.value.headers.hasOwnProperty(header)) {
	        requestOptions.headers[header] = options.value.headers[header];
	       }
	    }
	  }

	  if (Object.keys(extensionsOffer).length) {
	    requestOptions.headers['Sec-WebSocket-Extensions'] = Extensions.format(extensionsOffer);
	  }

	  if (options.isDefinedAndNonNull('pfx')
	   || options.isDefinedAndNonNull('key')
	   || options.isDefinedAndNonNull('passphrase')
	   || options.isDefinedAndNonNull('cert')
	   || options.isDefinedAndNonNull('ca')
	   || options.isDefinedAndNonNull('ciphers')
	   || options.isDefinedAndNonNull('rejectUnauthorized')) {

	    if (options.isDefinedAndNonNull('pfx')) requestOptions.pfx = options.value.pfx;
	    if (options.isDefinedAndNonNull('key')) requestOptions.key = options.value.key;
	    if (options.isDefinedAndNonNull('passphrase')) requestOptions.passphrase = options.value.passphrase;
	    if (options.isDefinedAndNonNull('cert')) requestOptions.cert = options.value.cert;
	    if (options.isDefinedAndNonNull('ca')) requestOptions.ca = options.value.ca;
	    if (options.isDefinedAndNonNull('ciphers')) requestOptions.ciphers = options.value.ciphers;
	    if (options.isDefinedAndNonNull('rejectUnauthorized')) requestOptions.rejectUnauthorized = options.value.rejectUnauthorized;

	    if (!agent) {
	        // global agent ignores client side certificates
	        agent = new httpObj.Agent(requestOptions);
	    }
	  }

	  requestOptions.path = serverUrl.path || '/';

	  if (agent) {
	    requestOptions.agent = agent;
	  }

	  if (isUnixSocket) {
	    requestOptions.socketPath = serverUrl.pathname;
	  }

	  if (options.value.localAddress) {
	    requestOptions.localAddress = options.value.localAddress;
	  }

	  if (options.value.origin) {
	    if (options.value.protocolVersion < 13) requestOptions.headers['Sec-WebSocket-Origin'] = options.value.origin;
	    else requestOptions.headers.Origin = options.value.origin;
	  }

	  var self = this;
	  var req = httpObj.request(requestOptions);

	  req.on('error', function onerror(error) {
	    self.emit('error', error);
	    cleanupWebsocketResources.call(self, error);
	  });

	  req.once('response', function response(res) {
	    var error;

	    if (!self.emit('unexpected-response', req, res)) {
	      error = new Error('unexpected server response (' + res.statusCode + ')');
	      req.abort();
	      self.emit('error', error);
	    }

	    cleanupWebsocketResources.call(self, error);
	  });

	  req.once('upgrade', function upgrade(res, socket, upgradeHead) {
	    if (self.readyState === WebSocket.CLOSED) {
	      // client closed before server accepted connection
	      self.emit('close');
	      self.removeAllListeners();
	      socket.end();
	      return;
	    }

	    var serverKey = res.headers['sec-websocket-accept'];
	    if (typeof serverKey === 'undefined' || serverKey !== expectedServerKey) {
	      self.emit('error', 'invalid server key');
	      self.removeAllListeners();
	      socket.end();
	      return;
	    }

	    var serverProt = res.headers['sec-websocket-protocol'];
	    var protList = (options.value.protocol || "").split(/, */);
	    var protError = null;

	    if (!options.value.protocol && serverProt) {
	      protError = 'server sent a subprotocol even though none requested';
	    } else if (options.value.protocol && !serverProt) {
	      protError = 'server sent no subprotocol even though requested';
	    } else if (serverProt && protList.indexOf(serverProt) === -1) {
	      protError = 'server responded with an invalid protocol';
	    }

	    if (protError) {
	      self.emit('error', protError);
	      self.removeAllListeners();
	      socket.end();
	      return;
	    } else if (serverProt) {
	      self.protocol = serverProt;
	    }

	    var serverExtensions = Extensions.parse(res.headers['sec-websocket-extensions']);
	    if (perMessageDeflate && serverExtensions[PerMessageDeflate.extensionName]) {
	      try {
	        perMessageDeflate.accept(serverExtensions[PerMessageDeflate.extensionName]);
	      } catch (err) {
	        self.emit('error', 'invalid extension parameter');
	        self.removeAllListeners();
	        socket.end();
	        return;
	      }
	      self.extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
	    }

	    establishConnection.call(self, Receiver, Sender, socket, upgradeHead);

	    // perform cleanup on http resources
	    req.removeAllListeners();
	    req = null;
	    agent = null;
	  });

	  req.end();
	  this.readyState = WebSocket.CONNECTING;
	}

	function establishConnection(ReceiverClass, SenderClass, socket, upgradeHead) {
	  var ultron = this._ultron = new Ultron(socket)
	    , called = false
	    , self = this;

	  socket.setTimeout(0);
	  socket.setNoDelay(true);

	  this._receiver = new ReceiverClass(this.extensions);
	  this._socket = socket;

	  // socket cleanup handlers
	  ultron.on('end', cleanupWebsocketResources.bind(this));
	  ultron.on('close', cleanupWebsocketResources.bind(this));
	  ultron.on('error', cleanupWebsocketResources.bind(this));

	  // ensure that the upgradeHead is added to the receiver
	  function firstHandler(data) {
	    if (called || self.readyState === WebSocket.CLOSED) return;

	    called = true;
	    socket.removeListener('data', firstHandler);
	    ultron.on('data', realHandler);

	    if (upgradeHead && upgradeHead.length > 0) {
	      realHandler(upgradeHead);
	      upgradeHead = null;
	    }

	    if (data) realHandler(data);
	  }

	  // subsequent packets are pushed straight to the receiver
	  function realHandler(data) {
	    self.bytesReceived += data.length;
	    self._receiver.add(data);
	  }

	  ultron.on('data', firstHandler);

	  // if data was passed along with the http upgrade,
	  // this will schedule a push of that on to the receiver.
	  // this has to be done on next tick, since the caller
	  // hasn't had a chance to set event handlers on this client
	  // object yet.
	  process.nextTick(firstHandler);

	  // receiver event handlers
	  self._receiver.ontext = function ontext(data, flags) {
	    flags = flags || {};

	    self.emit('message', data, flags);
	  };

	  self._receiver.onbinary = function onbinary(data, flags) {
	    flags = flags || {};

	    flags.binary = true;
	    self.emit('message', data, flags);
	  };

	  self._receiver.onping = function onping(data, flags) {
	    flags = flags || {};

	    self.pong(data, {
	      mask: !self._isServer,
	      binary: flags.binary === true
	    }, true);

	    self.emit('ping', data, flags);
	  };

	  self._receiver.onpong = function onpong(data, flags) {
	    self.emit('pong', data, flags || {});
	  };

	  self._receiver.onclose = function onclose(code, data, flags) {
	    flags = flags || {};

	    self._closeReceived = true;
	    self.close(code, data);
	  };

	  self._receiver.onerror = function onerror(reason, errorCode) {
	    // close the connection when the receiver reports a HyBi error code
	    self.close(typeof errorCode !== 'undefined' ? errorCode : 1002, '');
	    self.emit('error', reason, errorCode);
	  };

	  // finalize the client
	  this._sender = new SenderClass(socket, this.extensions);
	  this._sender.on('error', function onerror(error) {
	    self.close(1002, '');
	    self.emit('error', error);
	  });

	  this.readyState = WebSocket.OPEN;
	  this.emit('open');
	}

	function startQueue(instance) {
	  instance._queue = instance._queue || [];
	}

	function executeQueueSends(instance) {
	  var queue = instance._queue;
	  if (typeof queue === 'undefined') return;

	  delete instance._queue;
	  for (var i = 0, l = queue.length; i < l; ++i) {
	    queue[i]();
	  }
	}

	function sendStream(instance, stream, options, cb) {
	  stream.on('data', function incoming(data) {
	    if (instance.readyState !== WebSocket.OPEN) {
	      if (typeof cb === 'function') cb(new Error('not opened'));
	      else {
	        delete instance._queue;
	        instance.emit('error', new Error('not opened'));
	      }
	      return;
	    }

	    options.fin = false;
	    instance._sender.send(data, options);
	  });

	  stream.on('end', function end() {
	    if (instance.readyState !== WebSocket.OPEN) {
	      if (typeof cb === 'function') cb(new Error('not opened'));
	      else {
	        delete instance._queue;
	        instance.emit('error', new Error('not opened'));
	      }
	      return;
	    }

	    options.fin = true;
	    instance._sender.send(null, options);

	    if (typeof cb === 'function') cb(null);
	  });
	}

	function cleanupWebsocketResources(error) {
	  if (this.readyState === WebSocket.CLOSED) return;

	  var emitClose = this.readyState !== WebSocket.CONNECTING;
	  this.readyState = WebSocket.CLOSED;

	  clearTimeout(this._closeTimer);
	  this._closeTimer = null;

	  if (emitClose) {
	    // If the connection was closed abnormally (with an error), 
	    // then the close code must default to 1006.
	    if (error) {
	      this._closeCode = 1006;
	    }
	    this.emit('close', this._closeCode || 1000, this._closeMessage || '');
	  }

	  if (this._socket) {
	    if (this._ultron) this._ultron.destroy();
	    this._socket.on('error', function onerror() {
	      try { this.destroy(); }
	      catch (e) {}
	    });

	    try {
	      if (!error) this._socket.end();
	      else this._socket.destroy();
	    } catch (e) { /* Ignore termination errors */ }

	    this._socket = null;
	    this._ultron = null;
	  }

	  if (this._sender) {
	    this._sender.removeAllListeners();
	    this._sender = null;
	  }

	  if (this._receiver) {
	    this._receiver.cleanup();
	    this._receiver = null;
	  }

	  this.removeAllListeners();
	  this.on('error', function onerror() {}); // catch all errors after this
	  delete this._queue;
	}


/***/ },
/* 97 */
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 98 */
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("stream");

/***/ },
/* 99 */
/*!**********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/ultron/index.js ***!
  \**********************************************************************/
/***/ function(module, exports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	/**
	 * An auto incrementing id which we can use to create "unique" Ultron instances
	 * so we can track the event emitters that are added through the Ultron
	 * interface.
	 *
	 * @type {Number}
	 * @private
	 */
	var id = 0;

	/**
	 * Ultron is high-intelligence robot. It gathers intelligence so it can start improving
	 * upon his rudimentary design. It will learn from your EventEmitting patterns
	 * and exterminate them.
	 *
	 * @constructor
	 * @param {EventEmitter} ee EventEmitter instance we need to wrap.
	 * @api public
	 */
	function Ultron(ee) {
	  if (!(this instanceof Ultron)) return new Ultron(ee);

	  this.id = id++;
	  this.ee = ee;
	}

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @returns {Ultron}
	 * @api public
	 */
	Ultron.prototype.on = function on(event, fn, context) {
	  fn.__ultron = this.id;
	  this.ee.on(event, fn, context);

	  return this;
	};
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @returns {Ultron}
	 * @api public
	 */
	Ultron.prototype.once = function once(event, fn, context) {
	  fn.__ultron = this.id;
	  this.ee.once(event, fn, context);

	  return this;
	};

	/**
	 * Remove the listeners we assigned for the given event.
	 *
	 * @returns {Ultron}
	 * @api public
	 */
	Ultron.prototype.remove = function remove() {
	  var args = arguments
	    , event;

	  //
	  // When no event names are provided we assume that we need to clear all the
	  // events that were assigned through us.
	  //
	  if (args.length === 1 && 'string' === typeof args[0]) {
	    args = args[0].split(/[, ]+/);
	  } else if (!args.length) {
	    args = [];

	    for (event in this.ee._events) {
	      if (has.call(this.ee._events, event)) args.push(event);
	    }
	  }

	  for (var i = 0; i < args.length; i++) {
	    var listeners = this.ee.listeners(args[i]);

	    for (var j = 0; j < listeners.length; j++) {
	      event = listeners[j];

	      //
	      // Once listeners have a `listener` property that stores the real listener
	      // in the EventEmitter that ships with Node.js.
	      //
	      if (event.listener) {
	        if (event.listener.__ultron !== this.id) continue;
	        delete event.listener.__ultron;
	      } else {
	        if (event.__ultron !== this.id) continue;
	        delete event.__ultron;
	      }

	      this.ee.removeListener(args[i], event);
	    }
	  }

	  return this;
	};

	/**
	 * Destroy the Ultron instance, remove all listeners and release all references.
	 *
	 * @returns {Boolean}
	 * @api public
	 */
	Ultron.prototype.destroy = function destroy() {
	  if (!this.ee) return false;

	  this.remove();
	  this.ee = null;

	  return true;
	};

	//
	// Expose the module.
	//
	module.exports = Ultron;


/***/ },
/* 100 */
/*!*****************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/options/lib/options.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	var fs = __webpack_require__(/*! fs */ 73);

	function Options(defaults) {
	  var internalValues = {};
	  var values = this.value = {};
	  Object.keys(defaults).forEach(function(key) {
	    internalValues[key] = defaults[key];
	    Object.defineProperty(values, key, {
	      get: function() { return internalValues[key]; },
	      configurable: false,
	      enumerable: true
	    });
	  });
	  this.reset = function() {
	    Object.keys(defaults).forEach(function(key) {
	      internalValues[key] = defaults[key];
	    });
	    return this;
	  };
	  this.merge = function(options, required) {
	    options = options || {};
	    if (Object.prototype.toString.call(required) === '[object Array]') {
	      var missing = [];
	      for (var i = 0, l = required.length; i < l; ++i) {
	        var key = required[i];
	        if (!(key in options)) {
	          missing.push(key);
	        }
	      }
	      if (missing.length > 0) {
	        if (missing.length > 1) {
	          throw new Error('options ' +
	            missing.slice(0, missing.length - 1).join(', ') + ' and ' +
	            missing[missing.length - 1] + ' must be defined');
	        }
	        else throw new Error('option ' + missing[0] + ' must be defined');
	      }
	    }
	    Object.keys(options).forEach(function(key) {
	      if (key in internalValues) {
	        internalValues[key] = options[key];
	      }
	    });
	    return this;
	  };
	  this.copy = function(keys) {
	    var obj = {};
	    Object.keys(defaults).forEach(function(key) {
	      if (keys.indexOf(key) !== -1) {
	        obj[key] = values[key];
	      }
	    });
	    return obj;
	  };
	  this.read = function(filename, cb) {
	    if (typeof cb == 'function') {
	      var self = this;
	      fs.readFile(filename, function(error, data) {
	        if (error) return cb(error);
	        var conf = JSON.parse(data);
	        self.merge(conf);
	        cb();
	      });
	    }
	    else {
	      var conf = JSON.parse(fs.readFileSync(filename));
	      this.merge(conf);
	    }
	    return this;
	  };
	  this.isDefined = function(key) {
	    return typeof values[key] != 'undefined';
	  };
	  this.isDefinedAndNonNull = function(key) {
	    return typeof values[key] != 'undefined' && values[key] !== null;
	  };
	  Object.freeze(values);
	  Object.freeze(this);
	}

	module.exports = Options;


/***/ },
/* 101 */
/*!******************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/Sender.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	var events = __webpack_require__(/*! events */ 102)
	  , util = __webpack_require__(/*! util */ 90)
	  , EventEmitter = events.EventEmitter
	  , ErrorCodes = __webpack_require__(/*! ./ErrorCodes */ 103)
	  , bufferUtil = __webpack_require__(/*! ./BufferUtil */ 104).BufferUtil
	  , PerMessageDeflate = __webpack_require__(/*! ./PerMessageDeflate */ 112);

	/**
	 * HyBi Sender implementation
	 */

	function Sender(socket, extensions) {
	  if (this instanceof Sender === false) {
	    throw new TypeError("Classes can't be function-called");
	  }

	  events.EventEmitter.call(this);

	  this._socket = socket;
	  this.extensions = extensions || {};
	  this.firstFragment = true;
	  this.compress = false;
	  this.messageHandlers = [];
	  this.processing = false;
	}

	/**
	 * Inherits from EventEmitter.
	 */

	util.inherits(Sender, events.EventEmitter);

	/**
	 * Sends a close instruction to the remote party.
	 *
	 * @api public
	 */

	Sender.prototype.close = function(code, data, mask, cb) {
	  if (typeof code !== 'undefined') {
	    if (typeof code !== 'number' ||
	      !ErrorCodes.isValidErrorCode(code)) throw new Error('first argument must be a valid error code number');
	  }
	  code = code || 1000;
	  var dataBuffer = new Buffer(2 + (data ? Buffer.byteLength(data) : 0));
	  writeUInt16BE.call(dataBuffer, code, 0);
	  if (dataBuffer.length > 2) dataBuffer.write(data, 2);

	  var self = this;
	  this.messageHandlers.push(function(callback) {
	    self.frameAndSend(0x8, dataBuffer, true, mask);
	    callback();
	    if (typeof cb == 'function') cb();
	  });
	  this.flush();
	};

	/**
	 * Sends a ping message to the remote party.
	 *
	 * @api public
	 */

	Sender.prototype.ping = function(data, options) {
	  var mask = options && options.mask;
	  var self = this;
	  this.messageHandlers.push(function(callback) {
	    self.frameAndSend(0x9, data || '', true, mask);
	    callback();
	  });
	  this.flush();
	};

	/**
	 * Sends a pong message to the remote party.
	 *
	 * @api public
	 */

	Sender.prototype.pong = function(data, options) {
	  var mask = options && options.mask;
	  var self = this;
	  this.messageHandlers.push(function(callback) {
	    self.frameAndSend(0xa, data || '', true, mask);
	    callback();
	  });
	  this.flush();
	};

	/**
	 * Sends text or binary data to the remote party.
	 *
	 * @api public
	 */

	Sender.prototype.send = function(data, options, cb) {
	  var finalFragment = options && options.fin === false ? false : true;
	  var mask = options && options.mask;
	  var compress = options && options.compress;
	  var opcode = options && options.binary ? 2 : 1;
	  if (this.firstFragment === false) {
	    opcode = 0;
	    compress = false;
	  } else {
	    this.firstFragment = false;
	    this.compress = compress;
	  }
	  if (finalFragment) this.firstFragment = true

	  var compressFragment = this.compress;

	  var self = this;
	  this.messageHandlers.push(function(callback) {
	    self.applyExtensions(data, finalFragment, compressFragment, function(err, data) {
	      if (err) {
	        if (typeof cb == 'function') cb(err);
	        else self.emit('error', err);
	        return;
	      }
	      self.frameAndSend(opcode, data, finalFragment, mask, compress, cb);
	      callback();
	    });
	  });
	  this.flush();
	};

	/**
	 * Frames and sends a piece of data according to the HyBi WebSocket protocol.
	 *
	 * @api private
	 */

	Sender.prototype.frameAndSend = function(opcode, data, finalFragment, maskData, compressed, cb) {
	  var canModifyData = false;

	  if (!data) {
	    try {
	      this._socket.write(new Buffer([opcode | (finalFragment ? 0x80 : 0), 0 | (maskData ? 0x80 : 0)].concat(maskData ? [0, 0, 0, 0] : [])), 'binary', cb);
	    }
	    catch (e) {
	      if (typeof cb == 'function') cb(e);
	      else this.emit('error', e);
	    }
	    return;
	  }

	  if (!Buffer.isBuffer(data)) {
	    canModifyData = true;
	    if (data && (typeof data.byteLength !== 'undefined' || typeof data.buffer !== 'undefined')) {
	      data = getArrayBuffer(data);
	    } else {
	      data = new Buffer(data);
	    }
	  }

	  var dataLength = data.length
	    , dataOffset = maskData ? 6 : 2
	    , secondByte = dataLength;

	  if (dataLength >= 65536) {
	    dataOffset += 8;
	    secondByte = 127;
	  }
	  else if (dataLength > 125) {
	    dataOffset += 2;
	    secondByte = 126;
	  }

	  var mergeBuffers = dataLength < 32768 || (maskData && !canModifyData);
	  var totalLength = mergeBuffers ? dataLength + dataOffset : dataOffset;
	  var outputBuffer = new Buffer(totalLength);
	  outputBuffer[0] = finalFragment ? opcode | 0x80 : opcode;
	  if (compressed) outputBuffer[0] |= 0x40;

	  switch (secondByte) {
	    case 126:
	      writeUInt16BE.call(outputBuffer, dataLength, 2);
	      break;
	    case 127:
	      writeUInt32BE.call(outputBuffer, 0, 2);
	      writeUInt32BE.call(outputBuffer, dataLength, 6);
	  }

	  if (maskData) {
	    outputBuffer[1] = secondByte | 0x80;
	    var mask = this._randomMask || (this._randomMask = getRandomMask());
	    outputBuffer[dataOffset - 4] = mask[0];
	    outputBuffer[dataOffset - 3] = mask[1];
	    outputBuffer[dataOffset - 2] = mask[2];
	    outputBuffer[dataOffset - 1] = mask[3];
	    if (mergeBuffers) {
	      bufferUtil.mask(data, mask, outputBuffer, dataOffset, dataLength);
	      try {
	        this._socket.write(outputBuffer, 'binary', cb);
	      }
	      catch (e) {
	        if (typeof cb == 'function') cb(e);
	        else this.emit('error', e);
	      }
	    }
	    else {
	      bufferUtil.mask(data, mask, data, 0, dataLength);
	      try {
	        this._socket.write(outputBuffer, 'binary');
	        this._socket.write(data, 'binary', cb);
	      }
	      catch (e) {
	        if (typeof cb == 'function') cb(e);
	        else this.emit('error', e);
	      }
	    }
	  }
	  else {
	    outputBuffer[1] = secondByte;
	    if (mergeBuffers) {
	      data.copy(outputBuffer, dataOffset);
	      try {
	        this._socket.write(outputBuffer, 'binary', cb);
	      }
	      catch (e) {
	        if (typeof cb == 'function') cb(e);
	        else this.emit('error', e);
	      }
	    }
	    else {
	      try {
	        this._socket.write(outputBuffer, 'binary');
	        this._socket.write(data, 'binary', cb);
	      }
	      catch (e) {
	        if (typeof cb == 'function') cb(e);
	        else this.emit('error', e);
	      }
	    }
	  }
	};

	/**
	 * Execute message handler buffers
	 *
	 * @api private
	 */

	Sender.prototype.flush = function() {
	  if (this.processing) return;

	  var handler = this.messageHandlers.shift();
	  if (!handler) return;

	  this.processing = true;

	  var self = this;

	  handler(function() {
	    self.processing = false;
	    self.flush();
	  });
	};

	/**
	 * Apply extensions to message
	 *
	 * @api private
	 */

	Sender.prototype.applyExtensions = function(data, fin, compress, callback) {
	  if (compress && data) {
	    if ((data.buffer || data) instanceof ArrayBuffer) {
	      data = getArrayBuffer(data);
	    }
	    this.extensions[PerMessageDeflate.extensionName].compress(data, fin, callback);
	  } else {
	    callback(null, data);
	  }
	};

	module.exports = Sender;

	function writeUInt16BE(value, offset) {
	  this[offset] = (value & 0xff00)>>8;
	  this[offset+1] = value & 0xff;
	}

	function writeUInt32BE(value, offset) {
	  this[offset] = (value & 0xff000000)>>24;
	  this[offset+1] = (value & 0xff0000)>>16;
	  this[offset+2] = (value & 0xff00)>>8;
	  this[offset+3] = value & 0xff;
	}

	function getArrayBuffer(data) {
	  // data is either an ArrayBuffer or ArrayBufferView.
	  var array = new Uint8Array(data.buffer || data)
	    , l = data.byteLength || data.length
	    , o = data.byteOffset || 0
	    , buffer = new Buffer(l);
	  for (var i = 0; i < l; ++i) {
	    buffer[i] = array[o+i];
	  }
	  return buffer;
	}

	function getRandomMask() {
	  return new Buffer([
	    ~~(Math.random() * 255),
	    ~~(Math.random() * 255),
	    ~~(Math.random() * 255),
	    ~~(Math.random() * 255)
	  ]);
	}


/***/ },
/* 102 */
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 103 */
/*!**********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/ErrorCodes.js ***!
  \**********************************************************************/
/***/ function(module, exports) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	module.exports = {
	  isValidErrorCode: function(code) {
	    return (code >= 1000 && code <= 1011 && code != 1004 && code != 1005 && code != 1006) ||
	         (code >= 3000 && code <= 4999);
	  },
	  1000: 'normal',
	  1001: 'going away',
	  1002: 'protocol error',
	  1003: 'unsupported data',
	  1004: 'reserved',
	  1005: 'reserved for extensions',
	  1006: 'reserved for extensions',
	  1007: 'inconsistent or invalid data',
	  1008: 'policy violation',
	  1009: 'message too big',
	  1010: 'extension handshake missing',
	  1011: 'an unexpected condition prevented the request from being fulfilled',
	};

/***/ },
/* 104 */
/*!**********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/BufferUtil.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	try {
	  module.exports = __webpack_require__(/*! bufferutil */ 105);
	} catch (e) {
	  module.exports = __webpack_require__(/*! ./BufferUtil.fallback */ 111);
	}


/***/ },
/* 105 */
/*!**************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/bufferutil/index.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	try {
	  module.exports = __webpack_require__(/*! bindings */ 106)('bufferutil');
	} catch (e) {
	  module.exports = __webpack_require__(/*! ./fallback */ 110);
	}


/***/ },
/* 106 */
/*!****************************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/bufferutil/~/bindings/bindings.js ***!
  \****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {
	/**
	 * Module dependencies.
	 */

	var fs = __webpack_require__(/*! fs */ 73)
	  , path = __webpack_require__(/*! path */ 107)
	  , join = path.join
	  , dirname = path.dirname
	  , exists = fs.existsSync || path.existsSync
	  , defaults = {
	        arrow: ({"NODE_ENV":"production"}).NODE_BINDINGS_ARROW || ' → '
	      , compiled: ({"NODE_ENV":"production"}).NODE_BINDINGS_COMPILED_DIR || 'compiled'
	      , platform: process.platform
	      , arch: process.arch
	      , version: process.versions.node
	      , bindings: 'bindings.node'
	      , try: [
	          // node-gyp's linked version in the "build" dir
	          [ 'module_root', 'build', 'bindings' ]
	          // node-waf and gyp_addon (a.k.a node-gyp)
	        , [ 'module_root', 'build', 'Debug', 'bindings' ]
	        , [ 'module_root', 'build', 'Release', 'bindings' ]
	          // Debug files, for development (legacy behavior, remove for node v0.9)
	        , [ 'module_root', 'out', 'Debug', 'bindings' ]
	        , [ 'module_root', 'Debug', 'bindings' ]
	          // Release files, but manually compiled (legacy behavior, remove for node v0.9)
	        , [ 'module_root', 'out', 'Release', 'bindings' ]
	        , [ 'module_root', 'Release', 'bindings' ]
	          // Legacy from node-waf, node <= 0.4.x
	        , [ 'module_root', 'build', 'default', 'bindings' ]
	          // Production "Release" buildtype binary (meh...)
	        , [ 'module_root', 'compiled', 'version', 'platform', 'arch', 'bindings' ]
	        ]
	    }

	/**
	 * The main `bindings()` function loads the compiled bindings for a given module.
	 * It uses V8's Error API to determine the parent filename that this function is
	 * being invoked from, which is then used to find the root directory.
	 */

	function bindings (opts) {

	  // Argument surgery
	  if (typeof opts == 'string') {
	    opts = { bindings: opts }
	  } else if (!opts) {
	    opts = {}
	  }
	  opts.__proto__ = defaults

	  // Get the module root
	  if (!opts.module_root) {
	    opts.module_root = exports.getRoot(exports.getFileName())
	  }

	  // Ensure the given bindings name ends with .node
	  if (path.extname(opts.bindings) != '.node') {
	    opts.bindings += '.node'
	  }

	  var tries = []
	    , i = 0
	    , l = opts.try.length
	    , n
	    , b
	    , err

	  for (; i<l; i++) {
	    n = join.apply(null, opts.try[i].map(function (p) {
	      return opts[p] || p
	    }))
	    tries.push(n)
	    try {
	      b = opts.path ? /*require.resolve*/(__webpack_require__(/*! . */ 108).resolve(n)) : __webpack_require__(/*! . */ 108)(n)
	      if (!opts.path) {
	        b.path = n
	      }
	      return b
	    } catch (e) {
	      if (!/not find/i.test(e.message)) {
	        throw e
	      }
	    }
	  }

	  err = new Error('Could not locate the bindings file. Tried:\n'
	    + tries.map(function (a) { return opts.arrow + a }).join('\n'))
	  err.tries = tries
	  throw err
	}
	module.exports = exports = bindings


	/**
	 * Gets the filename of the JavaScript file that invokes this function.
	 * Used to help find the root directory of a module.
	 * Optionally accepts an filename argument to skip when searching for the invoking filename
	 */

	exports.getFileName = function getFileName (calling_file) {
	  var origPST = Error.prepareStackTrace
	    , origSTL = Error.stackTraceLimit
	    , dummy = {}
	    , fileName

	  Error.stackTraceLimit = 10

	  Error.prepareStackTrace = function (e, st) {
	    for (var i=0, l=st.length; i<l; i++) {
	      fileName = st[i].getFileName()
	      if (fileName !== __filename) {
	        if (calling_file) {
	            if (fileName !== calling_file) {
	              return
	            }
	        } else {
	          return
	        }
	      }
	    }
	  }

	  // run the 'prepareStackTrace' function above
	  Error.captureStackTrace(dummy)
	  dummy.stack

	  // cleanup
	  Error.prepareStackTrace = origPST
	  Error.stackTraceLimit = origSTL

	  return fileName
	}

	/**
	 * Gets the root directory of a module, given an arbitrary filename
	 * somewhere in the module tree. The "root directory" is the directory
	 * containing the `package.json` file.
	 *
	 *   In:  /home/nate/node-native-module/lib/index.js
	 *   Out: /home/nate/node-native-module
	 */

	exports.getRoot = function getRoot (file) {
	  var dir = dirname(file)
	    , prev
	  while (true) {
	    if (dir === '.') {
	      // Avoids an infinite loop in rare cases, like the REPL
	      dir = process.cwd()
	    }
	    if (exists(join(dir, 'package.json')) || exists(join(dir, 'node_modules'))) {
	      // Found the 'package.json' file or 'node_modules' dir; we're done
	      return dir
	    }
	    if (prev === dir) {
	      // Got to the top
	      throw new Error('Could not find module root given file: "' + file
	                    + '". Do you have a `package.json` file? ')
	    }
	    // Try the parent dir next
	    prev = dir
	    dir = join(dir, '..')
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ },
/* 107 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 108 */
/*!*************************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/bufferutil/~/bindings ^\.\/.*$ ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./README.md": 109,
		"./bindings": 106,
		"./bindings.js": 106
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 108;


/***/ },
/* 109 */
/*!**************************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/bufferutil/~/bindings/README.md ***!
  \**************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<h1 id=\"node-bindings\">node-bindings</h1>\n<h3 id=\"helper-module-for-loading-your-native-module-s-node-file\">Helper module for loading your native module&#39;s .node file</h3>\n<p>This is a helper module for authors of Node.js native addon modules.\nIt is basically the &quot;swiss army knife&quot; of <code>require()</code>ing your native module&#39;s\n<code>.node</code> file.</p>\n<p>Throughout the course of Node&#39;s native addon history, addons have ended up being\ncompiled in a variety of different places, depending on which build tool and which\nversion of node was used. To make matters worse, now the <em>gyp</em> build tool can\nproduce either a <em>Release</em> or <em>Debug</em> build, each being built into different\nlocations.</p>\n<p>This module checks <em>all</em> the possible locations that a native addon would be built\nat, and returns the first one that loads successfully.</p>\n<h2 id=\"installation\">Installation</h2>\n<p>Install with <code>npm</code>:</p>\n<pre><code class=\"lang-bash\">$ npm install bindings\n</code></pre>\n<p>Or add it to the <code>&quot;dependencies&quot;</code> section of your <em>package.json</em> file.</p>\n<h2 id=\"example\">Example</h2>\n<p><code>require()</code>ing the proper bindings file for the current node version, platform\nand architecture is as simple as:</p>\n<pre><code class=\"lang-js\">var bindings = require(&#39;bindings&#39;)(&#39;binding.node&#39;)\n\n// Use your bindings defined in your C files\nbindings.your_c_function()\n</code></pre>\n<h2 id=\"nice-error-output\">Nice Error Output</h2>\n<p>When the <code>.node</code> file could not be loaded, <code>node-bindings</code> throws an Error with\na nice error message telling you exactly what was tried. You can also check the\n<code>err.tries</code> Array property.</p>\n<pre><code>Error: Could not load the bindings file. Tried:\n → /Users/nrajlich/ref/build/binding.node\n → /Users/nrajlich/ref/build/Debug/binding.node\n → /Users/nrajlich/ref/build/Release/binding.node\n → /Users/nrajlich/ref/out/Debug/binding.node\n → /Users/nrajlich/ref/Debug/binding.node\n → /Users/nrajlich/ref/out/Release/binding.node\n → /Users/nrajlich/ref/Release/binding.node\n → /Users/nrajlich/ref/build/default/binding.node\n → /Users/nrajlich/ref/compiled/0.8.2/darwin/x64/binding.node\n    at bindings (/Users/nrajlich/ref/node_modules/bindings/bindings.js:84:13)\n    at Object.&lt;anonymous&gt; (/Users/nrajlich/ref/lib/ref.js:5:47)\n    at Module._compile (module.js:449:26)\n    at Object.Module._extensions..js (module.js:467:10)\n    at Module.load (module.js:356:32)\n    at Function.Module._load (module.js:312:12)\n    ...\n</code></pre><h2 id=\"license\">License</h2>\n<p>(The MIT License)</p>\n<p>Copyright (c) 2012 Nathan Rajlich &lt;nathan@tootallnate.net&gt;</p>\n<p>Permission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n&#39;Software&#39;), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:</p>\n<p>The above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.</p>\n<p>THE SOFTWARE IS PROVIDED &#39;AS IS&#39;, WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\nIN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\nCLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\nTORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\nSOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>\n";

/***/ },
/* 110 */
/*!*****************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/bufferutil/fallback.js ***!
  \*****************************************************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * bufferutil: WebSocket buffer utils
	 * Copyright(c) 2015 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	module.exports.BufferUtil = {
	  merge: function(mergedBuffer, buffers) {
	    for (var i = 0, offset = 0, l = buffers.length; i < l; ++i) {
	      var buf = buffers[i];

	      buf.copy(mergedBuffer, offset);
	      offset += buf.length;
	    }
	  },

	  mask: function(source, mask, output, offset, length) {
	    var maskNum = mask.readUInt32LE(0, true)
	      , i = 0
	      , num;

	    for (; i < length - 3; i += 4) {
	      num = maskNum ^ source.readUInt32LE(i, true);

	      if (num < 0) num = 4294967296 + num;
	      output.writeUInt32LE(num, offset + i, true);
	    }

	    switch (length % 4) {
	      case 3: output[offset + i + 2] = source[i + 2] ^ mask[2];
	      case 2: output[offset + i + 1] = source[i + 1] ^ mask[1];
	      case 1: output[offset + i] = source[i] ^ mask[0];
	    }
	  },

	  unmask: function(data, mask) {
	    var maskNum = mask.readUInt32LE(0, true)
	      , length = data.length
	      , i = 0
	      , num;

	    for (; i < length - 3; i += 4) {
	      num = maskNum ^ data.readUInt32LE(i, true);

	      if (num < 0) num = 4294967296 + num;
	      data.writeUInt32LE(num, i, true);
	    }

	    switch (length % 4) {
	      case 3: data[i + 2] = data[i + 2] ^ mask[2];
	      case 2: data[i + 1] = data[i + 1] ^ mask[1];
	      case 1: data[i] = data[i] ^ mask[0];
	    }
	  }
	};


/***/ },
/* 111 */
/*!*******************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/BufferUtil.fallback.js ***!
  \*******************************************************************************/
/***/ function(module, exports) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	module.exports.BufferUtil = {
	  merge: function(mergedBuffer, buffers) {
	    var offset = 0;
	    for (var i = 0, l = buffers.length; i < l; ++i) {
	      var buf = buffers[i];
	      buf.copy(mergedBuffer, offset);
	      offset += buf.length;
	    }
	  },
	  mask: function(source, mask, output, offset, length) {
	    var maskNum = mask.readUInt32LE(0, true);
	    var i = 0;
	    for (; i < length - 3; i += 4) {
	      var num = maskNum ^ source.readUInt32LE(i, true);
	      if (num < 0) num = 4294967296 + num;
	      output.writeUInt32LE(num, offset + i, true);
	    }
	    switch (length % 4) {
	      case 3: output[offset + i + 2] = source[i + 2] ^ mask[2];
	      case 2: output[offset + i + 1] = source[i + 1] ^ mask[1];
	      case 1: output[offset + i] = source[i] ^ mask[0];
	      case 0:;
	    }
	  },
	  unmask: function(data, mask) {
	    var maskNum = mask.readUInt32LE(0, true);
	    var length = data.length;
	    var i = 0;
	    for (; i < length - 3; i += 4) {
	      var num = maskNum ^ data.readUInt32LE(i, true);
	      if (num < 0) num = 4294967296 + num;
	      data.writeUInt32LE(num, i, true);
	    }
	    switch (length % 4) {
	      case 3: data[i + 2] = data[i + 2] ^ mask[2];
	      case 2: data[i + 1] = data[i + 1] ^ mask[1];
	      case 1: data[i] = data[i] ^ mask[0];
	      case 0:;
	    }
	  }
	}


/***/ },
/* 112 */
/*!*****************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/PerMessageDeflate.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var zlib = __webpack_require__(/*! zlib */ 113);

	var AVAILABLE_WINDOW_BITS = [8, 9, 10, 11, 12, 13, 14, 15];
	var DEFAULT_WINDOW_BITS = 15;
	var DEFAULT_MEM_LEVEL = 8;

	PerMessageDeflate.extensionName = 'permessage-deflate';

	/**
	 * Per-message Compression Extensions implementation
	 */

	function PerMessageDeflate(options, isServer) {
	  if (this instanceof PerMessageDeflate === false) {
	    throw new TypeError("Classes can't be function-called");
	  }

	  this._options = options || {};
	  this._isServer = !!isServer;
	  this._inflate = null;
	  this._deflate = null;
	  this.params = null;
	}

	/**
	 * Create extension parameters offer
	 *
	 * @api public
	 */

	PerMessageDeflate.prototype.offer = function() {
	  var params = {};
	  if (this._options.serverNoContextTakeover) {
	    params.server_no_context_takeover = true;
	  }
	  if (this._options.clientNoContextTakeover) {
	    params.client_no_context_takeover = true;
	  }
	  if (this._options.serverMaxWindowBits) {
	    params.server_max_window_bits = this._options.serverMaxWindowBits;
	  }
	  if (this._options.clientMaxWindowBits) {
	    params.client_max_window_bits = this._options.clientMaxWindowBits;
	  } else if (this._options.clientMaxWindowBits == null) {
	    params.client_max_window_bits = true;
	  }
	  return params;
	};

	/**
	 * Accept extension offer
	 *
	 * @api public
	 */

	PerMessageDeflate.prototype.accept = function(paramsList) {
	  paramsList = this.normalizeParams(paramsList);

	  var params;
	  if (this._isServer) {
	    params = this.acceptAsServer(paramsList);
	  } else {
	    params = this.acceptAsClient(paramsList);
	  }

	  this.params = params;
	  return params;
	};

	/**
	 * Accept extension offer from client
	 *
	 * @api private
	 */

	PerMessageDeflate.prototype.acceptAsServer = function(paramsList) {
	  var accepted = {};
	  var result = paramsList.some(function(params) {
	    accepted = {};
	    if (this._options.serverNoContextTakeover === false && params.server_no_context_takeover) {
	      return;
	    }
	    if (this._options.serverMaxWindowBits === false && params.server_max_window_bits) {
	      return;
	    }
	    if (typeof this._options.serverMaxWindowBits === 'number' &&
	        typeof params.server_max_window_bits === 'number' &&
	        this._options.serverMaxWindowBits > params.server_max_window_bits) {
	      return;
	    }
	    if (typeof this._options.clientMaxWindowBits === 'number' && !params.client_max_window_bits) {
	      return;
	    }

	    if (this._options.serverNoContextTakeover || params.server_no_context_takeover) {
	      accepted.server_no_context_takeover = true;
	    }
	    if (this._options.clientNoContextTakeover) {
	      accepted.client_no_context_takeover = true;
	    }
	    if (this._options.clientNoContextTakeover !== false && params.client_no_context_takeover) {
	      accepted.client_no_context_takeover = true;
	    }
	    if (typeof this._options.serverMaxWindowBits === 'number') {
	      accepted.server_max_window_bits = this._options.serverMaxWindowBits;
	    } else if (typeof params.server_max_window_bits === 'number') {
	      accepted.server_max_window_bits = params.server_max_window_bits;
	    }
	    if (typeof this._options.clientMaxWindowBits === 'number') {
	      accepted.client_max_window_bits = this._options.clientMaxWindowBits;
	    } else if (this._options.clientMaxWindowBits !== false && typeof params.client_max_window_bits === 'number') {
	      accepted.client_max_window_bits = params.client_max_window_bits;
	    }
	    return true;
	  }, this);

	  if (!result) {
	    throw new Error('Doesn\'t support the offered configuration');
	  }

	  return accepted;
	};

	/**
	 * Accept extension response from server
	 *
	 * @api privaye
	 */

	PerMessageDeflate.prototype.acceptAsClient = function(paramsList) {
	  var params = paramsList[0];
	  if (this._options.clientNoContextTakeover != null) {
	    if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
	      throw new Error('Invalid value for "client_no_context_takeover"');
	    }
	  }
	  if (this._options.clientMaxWindowBits != null) {
	    if (this._options.clientMaxWindowBits === false && params.client_max_window_bits) {
	      throw new Error('Invalid value for "client_max_window_bits"');
	    }
	    if (typeof this._options.clientMaxWindowBits === 'number' &&
	        (!params.client_max_window_bits || params.client_max_window_bits > this._options.clientMaxWindowBits)) {
	      throw new Error('Invalid value for "client_max_window_bits"');
	    }
	  }
	  return params;
	};

	/**
	 * Normalize extensions parameters
	 *
	 * @api private
	 */

	PerMessageDeflate.prototype.normalizeParams = function(paramsList) {
	  return paramsList.map(function(params) {
	    Object.keys(params).forEach(function(key) {
	      var value = params[key];
	      if (value.length > 1) {
	        throw new Error('Multiple extension parameters for ' + key);
	      }

	      value = value[0];

	      switch (key) {
	      case 'server_no_context_takeover':
	      case 'client_no_context_takeover':
	        if (value !== true) {
	          throw new Error('invalid extension parameter value for ' + key + ' (' + value + ')');
	        }
	        params[key] = true;
	        break;
	      case 'server_max_window_bits':
	      case 'client_max_window_bits':
	        if (typeof value === 'string') {
	          value = parseInt(value, 10);
	          if (!~AVAILABLE_WINDOW_BITS.indexOf(value)) {
	            throw new Error('invalid extension parameter value for ' + key + ' (' + value + ')');
	          }
	        }
	        if (!this._isServer && value === true) {
	          throw new Error('Missing extension parameter value for ' + key);
	        }
	        params[key] = value;
	        break;
	      default:
	        throw new Error('Not defined extension parameter (' + key + ')');
	      }
	    }, this);
	    return params;
	  }, this);
	};

	/**
	 * Decompress message
	 *
	 * @api public
	 */

	PerMessageDeflate.prototype.decompress = function (data, fin, callback) {
	  var endpoint = this._isServer ? 'client' : 'server';

	  if (!this._inflate) {
	    var maxWindowBits = this.params[endpoint + '_max_window_bits'];
	    this._inflate = zlib.createInflateRaw({
	      windowBits: 'number' === typeof maxWindowBits ? maxWindowBits : DEFAULT_WINDOW_BITS
	    });
	  }

	  var self = this;
	  var buffers = [];

	  this._inflate.on('error', onError).on('data', onData);
	  this._inflate.write(data);
	  if (fin) {
	    this._inflate.write(new Buffer([0x00, 0x00, 0xff, 0xff]));
	  }
	  this._inflate.flush(function() {
	    cleanup();
	    callback(null, Buffer.concat(buffers));
	  });

	  function onError(err) {
	    cleanup();
	    callback(err);
	  }

	  function onData(data) {
	    buffers.push(data);
	  }

	  function cleanup() {
	    self._inflate.removeListener('error', onError);
	    self._inflate.removeListener('data', onData);
	    if (fin && self.params[endpoint + '_no_context_takeover']) {
	      self._inflate = null;
	    }
	  }
	};

	/**
	 * Compress message
	 *
	 * @api public
	 */

	PerMessageDeflate.prototype.compress = function (data, fin, callback) {
	  var endpoint = this._isServer ? 'server' : 'client';

	  if (!this._deflate) {
	    var maxWindowBits = this.params[endpoint + '_max_window_bits'];
	    this._deflate = zlib.createDeflateRaw({
	      flush: zlib.Z_SYNC_FLUSH,
	      windowBits: 'number' === typeof maxWindowBits ? maxWindowBits : DEFAULT_WINDOW_BITS,
	      memLevel: this._options.memLevel || DEFAULT_MEM_LEVEL
	    });
	  }

	  var self = this;
	  var buffers = [];

	  this._deflate.on('error', onError).on('data', onData);
	  this._deflate.write(data);
	  this._deflate.flush(function() {
	    cleanup();
	    var data = Buffer.concat(buffers);
	    if (fin) {
	      data = data.slice(0, data.length - 4);
	    }
	    callback(null, data);
	  });

	  function onError(err) {
	    cleanup();
	    callback(err);
	  }

	  function onData(data) {
	    buffers.push(data);
	  }

	  function cleanup() {
	    self._deflate.removeListener('error', onError);
	    self._deflate.removeListener('data', onData);
	    if (fin && self.params[endpoint + '_no_context_takeover']) {
	      self._deflate = null;
	    }
	  }
	};

	module.exports = PerMessageDeflate;


/***/ },
/* 113 */
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("zlib");

/***/ },
/* 114 */
/*!********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/Receiver.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	var util = __webpack_require__(/*! util */ 90)
	  , Validation = __webpack_require__(/*! ./Validation */ 115).Validation
	  , ErrorCodes = __webpack_require__(/*! ./ErrorCodes */ 103)
	  , BufferPool = __webpack_require__(/*! ./BufferPool */ 122)
	  , bufferUtil = __webpack_require__(/*! ./BufferUtil */ 104).BufferUtil
	  , PerMessageDeflate = __webpack_require__(/*! ./PerMessageDeflate */ 112);

	/**
	 * HyBi Receiver implementation
	 */

	function Receiver (extensions) {
	  if (this instanceof Receiver === false) {
	    throw new TypeError("Classes can't be function-called");
	  }

	  // memory pool for fragmented messages
	  var fragmentedPoolPrevUsed = -1;
	  this.fragmentedBufferPool = new BufferPool(1024, function(db, length) {
	    return db.used + length;
	  }, function(db) {
	    return fragmentedPoolPrevUsed = fragmentedPoolPrevUsed >= 0 ?
	      (fragmentedPoolPrevUsed + db.used) / 2 :
	      db.used;
	  });

	  // memory pool for unfragmented messages
	  var unfragmentedPoolPrevUsed = -1;
	  this.unfragmentedBufferPool = new BufferPool(1024, function(db, length) {
	    return db.used + length;
	  }, function(db) {
	    return unfragmentedPoolPrevUsed = unfragmentedPoolPrevUsed >= 0 ?
	      (unfragmentedPoolPrevUsed + db.used) / 2 :
	      db.used;
	  });

	  this.extensions = extensions || {};
	  this.state = {
	    activeFragmentedOperation: null,
	    lastFragment: false,
	    masked: false,
	    opcode: 0,
	    fragmentedOperation: false
	  };
	  this.overflow = [];
	  this.headerBuffer = new Buffer(10);
	  this.expectOffset = 0;
	  this.expectBuffer = null;
	  this.expectHandler = null;
	  this.currentMessage = [];
	  this.messageHandlers = [];
	  this.expectHeader(2, this.processPacket);
	  this.dead = false;
	  this.processing = false;

	  this.onerror = function() {};
	  this.ontext = function() {};
	  this.onbinary = function() {};
	  this.onclose = function() {};
	  this.onping = function() {};
	  this.onpong = function() {};
	}

	module.exports = Receiver;

	/**
	 * Add new data to the parser.
	 *
	 * @api public
	 */

	Receiver.prototype.add = function(data) {
	  var dataLength = data.length;
	  if (dataLength == 0) return;
	  if (this.expectBuffer == null) {
	    this.overflow.push(data);
	    return;
	  }
	  var toRead = Math.min(dataLength, this.expectBuffer.length - this.expectOffset);
	  fastCopy(toRead, data, this.expectBuffer, this.expectOffset);
	  this.expectOffset += toRead;
	  if (toRead < dataLength) {
	    this.overflow.push(data.slice(toRead));
	  }
	  while (this.expectBuffer && this.expectOffset == this.expectBuffer.length) {
	    var bufferForHandler = this.expectBuffer;
	    this.expectBuffer = null;
	    this.expectOffset = 0;
	    this.expectHandler.call(this, bufferForHandler);
	  }
	};

	/**
	 * Releases all resources used by the receiver.
	 *
	 * @api public
	 */

	Receiver.prototype.cleanup = function() {
	  this.dead = true;
	  this.overflow = null;
	  this.headerBuffer = null;
	  this.expectBuffer = null;
	  this.expectHandler = null;
	  this.unfragmentedBufferPool = null;
	  this.fragmentedBufferPool = null;
	  this.state = null;
	  this.currentMessage = null;
	  this.onerror = null;
	  this.ontext = null;
	  this.onbinary = null;
	  this.onclose = null;
	  this.onping = null;
	  this.onpong = null;
	};

	/**
	 * Waits for a certain amount of header bytes to be available, then fires a callback.
	 *
	 * @api private
	 */

	Receiver.prototype.expectHeader = function(length, handler) {
	  if (length == 0) {
	    handler(null);
	    return;
	  }
	  this.expectBuffer = this.headerBuffer.slice(this.expectOffset, this.expectOffset + length);
	  this.expectHandler = handler;
	  var toRead = length;
	  while (toRead > 0 && this.overflow.length > 0) {
	    var fromOverflow = this.overflow.pop();
	    if (toRead < fromOverflow.length) this.overflow.push(fromOverflow.slice(toRead));
	    var read = Math.min(fromOverflow.length, toRead);
	    fastCopy(read, fromOverflow, this.expectBuffer, this.expectOffset);
	    this.expectOffset += read;
	    toRead -= read;
	  }
	};

	/**
	 * Waits for a certain amount of data bytes to be available, then fires a callback.
	 *
	 * @api private
	 */

	Receiver.prototype.expectData = function(length, handler) {
	  if (length == 0) {
	    handler(null);
	    return;
	  }
	  this.expectBuffer = this.allocateFromPool(length, this.state.fragmentedOperation);
	  this.expectHandler = handler;
	  var toRead = length;
	  while (toRead > 0 && this.overflow.length > 0) {
	    var fromOverflow = this.overflow.pop();
	    if (toRead < fromOverflow.length) this.overflow.push(fromOverflow.slice(toRead));
	    var read = Math.min(fromOverflow.length, toRead);
	    fastCopy(read, fromOverflow, this.expectBuffer, this.expectOffset);
	    this.expectOffset += read;
	    toRead -= read;
	  }
	};

	/**
	 * Allocates memory from the buffer pool.
	 *
	 * @api private
	 */

	Receiver.prototype.allocateFromPool = function(length, isFragmented) {
	  return (isFragmented ? this.fragmentedBufferPool : this.unfragmentedBufferPool).get(length);
	};

	/**
	 * Start processing a new packet.
	 *
	 * @api private
	 */

	Receiver.prototype.processPacket = function (data) {
	  if (this.extensions[PerMessageDeflate.extensionName]) {
	    if ((data[0] & 0x30) != 0) {
	      this.error('reserved fields (2, 3) must be empty', 1002);
	      return;
	    }
	  } else {
	    if ((data[0] & 0x70) != 0) {
	      this.error('reserved fields must be empty', 1002);
	      return;
	    }
	  }
	  this.state.lastFragment = (data[0] & 0x80) == 0x80;
	  this.state.masked = (data[1] & 0x80) == 0x80;
	  var compressed = (data[0] & 0x40) == 0x40;
	  var opcode = data[0] & 0xf;
	  if (opcode === 0) {
	    if (compressed) {
	      this.error('continuation frame cannot have the Per-message Compressed bits', 1002);
	      return;
	    }
	    // continuation frame
	    this.state.fragmentedOperation = true;
	    this.state.opcode = this.state.activeFragmentedOperation;
	    if (!(this.state.opcode == 1 || this.state.opcode == 2)) {
	      this.error('continuation frame cannot follow current opcode', 1002);
	      return;
	    }
	  }
	  else {
	    if (opcode < 3 && this.state.activeFragmentedOperation != null) {
	      this.error('data frames after the initial data frame must have opcode 0', 1002);
	      return;
	    }
	    if (opcode >= 8 && compressed) {
	      this.error('control frames cannot have the Per-message Compressed bits', 1002);
	      return;
	    }
	    this.state.compressed = compressed;
	    this.state.opcode = opcode;
	    if (this.state.lastFragment === false) {
	      this.state.fragmentedOperation = true;
	      this.state.activeFragmentedOperation = opcode;
	    }
	    else this.state.fragmentedOperation = false;
	  }
	  var handler = opcodes[this.state.opcode];
	  if (typeof handler == 'undefined') this.error('no handler for opcode ' + this.state.opcode, 1002);
	  else {
	    handler.start.call(this, data);
	  }
	};

	/**
	 * Endprocessing a packet.
	 *
	 * @api private
	 */

	Receiver.prototype.endPacket = function() {
	  if (!this.state.fragmentedOperation) this.unfragmentedBufferPool.reset(true);
	  else if (this.state.lastFragment) this.fragmentedBufferPool.reset(false);
	  this.expectOffset = 0;
	  this.expectBuffer = null;
	  this.expectHandler = null;
	  if (this.state.lastFragment && this.state.opcode === this.state.activeFragmentedOperation) {
	    // end current fragmented operation
	    this.state.activeFragmentedOperation = null;
	  }
	  this.state.lastFragment = false;
	  this.state.opcode = this.state.activeFragmentedOperation != null ? this.state.activeFragmentedOperation : 0;
	  this.state.masked = false;
	  this.expectHeader(2, this.processPacket);
	};

	/**
	 * Reset the parser state.
	 *
	 * @api private
	 */

	Receiver.prototype.reset = function() {
	  if (this.dead) return;
	  this.state = {
	    activeFragmentedOperation: null,
	    lastFragment: false,
	    masked: false,
	    opcode: 0,
	    fragmentedOperation: false
	  };
	  this.fragmentedBufferPool.reset(true);
	  this.unfragmentedBufferPool.reset(true);
	  this.expectOffset = 0;
	  this.expectBuffer = null;
	  this.expectHandler = null;
	  this.overflow = [];
	  this.currentMessage = [];
	  this.messageHandlers = [];
	};

	/**
	 * Unmask received data.
	 *
	 * @api private
	 */

	Receiver.prototype.unmask = function (mask, buf, binary) {
	  if (mask != null && buf != null) bufferUtil.unmask(buf, mask);
	  if (binary) return buf;
	  return buf != null ? buf.toString('utf8') : '';
	};

	/**
	 * Concatenates a list of buffers.
	 *
	 * @api private
	 */

	Receiver.prototype.concatBuffers = function(buffers) {
	  var length = 0;
	  for (var i = 0, l = buffers.length; i < l; ++i) length += buffers[i].length;
	  var mergedBuffer = new Buffer(length);
	  bufferUtil.merge(mergedBuffer, buffers);
	  return mergedBuffer;
	};

	/**
	 * Handles an error
	 *
	 * @api private
	 */

	Receiver.prototype.error = function (reason, protocolErrorCode) {
	  this.reset();
	  this.onerror(reason, protocolErrorCode);
	  return this;
	};

	/**
	 * Execute message handler buffers
	 *
	 * @api private
	 */

	Receiver.prototype.flush = function() {
	  if (this.processing || this.dead) return;

	  var handler = this.messageHandlers.shift();
	  if (!handler) return;

	  this.processing = true;
	  var self = this;

	  handler(function() {
	    self.processing = false;
	    self.flush();
	  });
	};

	/**
	 * Apply extensions to message
	 *
	 * @api private
	 */

	Receiver.prototype.applyExtensions = function(messageBuffer, fin, compressed, callback) {
	  var self = this;
	  if (compressed) {
	    this.extensions[PerMessageDeflate.extensionName].decompress(messageBuffer, fin, function(err, buffer) {
	      if (self.dead) return;
	      if (err) {
	        callback(new Error('invalid compressed data'));
	        return;
	      }
	      callback(null, buffer);
	    });
	  } else {
	    callback(null, messageBuffer);
	  }
	};

	/**
	 * Buffer utilities
	 */

	function readUInt16BE(start) {
	  return (this[start]<<8) +
	         this[start+1];
	}

	function readUInt32BE(start) {
	  return (this[start]<<24) +
	         (this[start+1]<<16) +
	         (this[start+2]<<8) +
	         this[start+3];
	}

	function fastCopy(length, srcBuffer, dstBuffer, dstOffset) {
	  switch (length) {
	    default: srcBuffer.copy(dstBuffer, dstOffset, 0, length); break;
	    case 16: dstBuffer[dstOffset+15] = srcBuffer[15];
	    case 15: dstBuffer[dstOffset+14] = srcBuffer[14];
	    case 14: dstBuffer[dstOffset+13] = srcBuffer[13];
	    case 13: dstBuffer[dstOffset+12] = srcBuffer[12];
	    case 12: dstBuffer[dstOffset+11] = srcBuffer[11];
	    case 11: dstBuffer[dstOffset+10] = srcBuffer[10];
	    case 10: dstBuffer[dstOffset+9] = srcBuffer[9];
	    case 9: dstBuffer[dstOffset+8] = srcBuffer[8];
	    case 8: dstBuffer[dstOffset+7] = srcBuffer[7];
	    case 7: dstBuffer[dstOffset+6] = srcBuffer[6];
	    case 6: dstBuffer[dstOffset+5] = srcBuffer[5];
	    case 5: dstBuffer[dstOffset+4] = srcBuffer[4];
	    case 4: dstBuffer[dstOffset+3] = srcBuffer[3];
	    case 3: dstBuffer[dstOffset+2] = srcBuffer[2];
	    case 2: dstBuffer[dstOffset+1] = srcBuffer[1];
	    case 1: dstBuffer[dstOffset] = srcBuffer[0];
	  }
	}

	function clone(obj) {
	  var cloned = {};
	  for (var k in obj) {
	    if (obj.hasOwnProperty(k)) {
	      cloned[k] = obj[k];
	    }
	  }
	  return cloned;
	}

	/**
	 * Opcode handlers
	 */

	var opcodes = {
	  // text
	  '1': {
	    start: function(data) {
	      var self = this;
	      // decode length
	      var firstLength = data[1] & 0x7f;
	      if (firstLength < 126) {
	        opcodes['1'].getData.call(self, firstLength);
	      }
	      else if (firstLength == 126) {
	        self.expectHeader(2, function(data) {
	          opcodes['1'].getData.call(self, readUInt16BE.call(data, 0));
	        });
	      }
	      else if (firstLength == 127) {
	        self.expectHeader(8, function(data) {
	          if (readUInt32BE.call(data, 0) != 0) {
	            self.error('packets with length spanning more than 32 bit is currently not supported', 1008);
	            return;
	          }
	          opcodes['1'].getData.call(self, readUInt32BE.call(data, 4));
	        });
	      }
	    },
	    getData: function(length) {
	      var self = this;
	      if (self.state.masked) {
	        self.expectHeader(4, function(data) {
	          var mask = data;
	          self.expectData(length, function(data) {
	            opcodes['1'].finish.call(self, mask, data);
	          });
	        });
	      }
	      else {
	        self.expectData(length, function(data) {
	          opcodes['1'].finish.call(self, null, data);
	        });
	      }
	    },
	    finish: function(mask, data) {
	      var self = this;
	      var packet = this.unmask(mask, data, true) || new Buffer(0);
	      var state = clone(this.state);
	      this.messageHandlers.push(function(callback) {
	        self.applyExtensions(packet, state.lastFragment, state.compressed, function(err, buffer) {
	          if (err) return self.error(err.message, 1007);
	          if (buffer != null) self.currentMessage.push(buffer);

	          if (state.lastFragment) {
	            var messageBuffer = self.concatBuffers(self.currentMessage);
	            self.currentMessage = [];
	            if (!Validation.isValidUTF8(messageBuffer)) {
	              self.error('invalid utf8 sequence', 1007);
	              return;
	            }
	            self.ontext(messageBuffer.toString('utf8'), {masked: state.masked, buffer: messageBuffer});
	          }
	          callback();
	        });
	      });
	      this.flush();
	      this.endPacket();
	    }
	  },
	  // binary
	  '2': {
	    start: function(data) {
	      var self = this;
	      // decode length
	      var firstLength = data[1] & 0x7f;
	      if (firstLength < 126) {
	        opcodes['2'].getData.call(self, firstLength);
	      }
	      else if (firstLength == 126) {
	        self.expectHeader(2, function(data) {
	          opcodes['2'].getData.call(self, readUInt16BE.call(data, 0));
	        });
	      }
	      else if (firstLength == 127) {
	        self.expectHeader(8, function(data) {
	          if (readUInt32BE.call(data, 0) != 0) {
	            self.error('packets with length spanning more than 32 bit is currently not supported', 1008);
	            return;
	          }
	          opcodes['2'].getData.call(self, readUInt32BE.call(data, 4, true));
	        });
	      }
	    },
	    getData: function(length) {
	      var self = this;
	      if (self.state.masked) {
	        self.expectHeader(4, function(data) {
	          var mask = data;
	          self.expectData(length, function(data) {
	            opcodes['2'].finish.call(self, mask, data);
	          });
	        });
	      }
	      else {
	        self.expectData(length, function(data) {
	          opcodes['2'].finish.call(self, null, data);
	        });
	      }
	    },
	    finish: function(mask, data) {
	      var self = this;
	      var packet = this.unmask(mask, data, true) || new Buffer(0);
	      var state = clone(this.state);
	      this.messageHandlers.push(function(callback) {
	        self.applyExtensions(packet, state.lastFragment, state.compressed, function(err, buffer) {
	          if (err) return self.error(err.message, 1007);
	          if (buffer != null) self.currentMessage.push(buffer);
	          if (state.lastFragment) {
	            var messageBuffer = self.concatBuffers(self.currentMessage);
	            self.currentMessage = [];
	            self.onbinary(messageBuffer, {masked: state.masked, buffer: messageBuffer});
	          }
	          callback();
	        });
	      });
	      this.flush();
	      this.endPacket();
	    }
	  },
	  // close
	  '8': {
	    start: function(data) {
	      var self = this;
	      if (self.state.lastFragment == false) {
	        self.error('fragmented close is not supported', 1002);
	        return;
	      }

	      // decode length
	      var firstLength = data[1] & 0x7f;
	      if (firstLength < 126) {
	        opcodes['8'].getData.call(self, firstLength);
	      }
	      else {
	        self.error('control frames cannot have more than 125 bytes of data', 1002);
	      }
	    },
	    getData: function(length) {
	      var self = this;
	      if (self.state.masked) {
	        self.expectHeader(4, function(data) {
	          var mask = data;
	          self.expectData(length, function(data) {
	            opcodes['8'].finish.call(self, mask, data);
	          });
	        });
	      }
	      else {
	        self.expectData(length, function(data) {
	          opcodes['8'].finish.call(self, null, data);
	        });
	      }
	    },
	    finish: function(mask, data) {
	      var self = this;
	      data = self.unmask(mask, data, true);

	      var state = clone(this.state);
	      this.messageHandlers.push(function() {
	        if (data && data.length == 1) {
	          self.error('close packets with data must be at least two bytes long', 1002);
	          return;
	        }
	        var code = data && data.length > 1 ? readUInt16BE.call(data, 0) : 1000;
	        if (!ErrorCodes.isValidErrorCode(code)) {
	          self.error('invalid error code', 1002);
	          return;
	        }
	        var message = '';
	        if (data && data.length > 2) {
	          var messageBuffer = data.slice(2);
	          if (!Validation.isValidUTF8(messageBuffer)) {
	            self.error('invalid utf8 sequence', 1007);
	            return;
	          }
	          message = messageBuffer.toString('utf8');
	        }
	        self.onclose(code, message, {masked: state.masked});
	        self.reset();
	      });
	      this.flush();
	    },
	  },
	  // ping
	  '9': {
	    start: function(data) {
	      var self = this;
	      if (self.state.lastFragment == false) {
	        self.error('fragmented ping is not supported', 1002);
	        return;
	      }

	      // decode length
	      var firstLength = data[1] & 0x7f;
	      if (firstLength < 126) {
	        opcodes['9'].getData.call(self, firstLength);
	      }
	      else {
	        self.error('control frames cannot have more than 125 bytes of data', 1002);
	      }
	    },
	    getData: function(length) {
	      var self = this;
	      if (self.state.masked) {
	        self.expectHeader(4, function(data) {
	          var mask = data;
	          self.expectData(length, function(data) {
	            opcodes['9'].finish.call(self, mask, data);
	          });
	        });
	      }
	      else {
	        self.expectData(length, function(data) {
	          opcodes['9'].finish.call(self, null, data);
	        });
	      }
	    },
	    finish: function(mask, data) {
	      var self = this;
	      data = this.unmask(mask, data, true);
	      var state = clone(this.state);
	      this.messageHandlers.push(function(callback) {
	        self.onping(data, {masked: state.masked, binary: true});
	        callback();
	      });
	      this.flush();
	      this.endPacket();
	    }
	  },
	  // pong
	  '10': {
	    start: function(data) {
	      var self = this;
	      if (self.state.lastFragment == false) {
	        self.error('fragmented pong is not supported', 1002);
	        return;
	      }

	      // decode length
	      var firstLength = data[1] & 0x7f;
	      if (firstLength < 126) {
	        opcodes['10'].getData.call(self, firstLength);
	      }
	      else {
	        self.error('control frames cannot have more than 125 bytes of data', 1002);
	      }
	    },
	    getData: function(length) {
	      var self = this;
	      if (this.state.masked) {
	        this.expectHeader(4, function(data) {
	          var mask = data;
	          self.expectData(length, function(data) {
	            opcodes['10'].finish.call(self, mask, data);
	          });
	        });
	      }
	      else {
	        this.expectData(length, function(data) {
	          opcodes['10'].finish.call(self, null, data);
	        });
	      }
	    },
	    finish: function(mask, data) {
	      var self = this;
	      data = self.unmask(mask, data, true);
	      var state = clone(this.state);
	      this.messageHandlers.push(function(callback) {
	        self.onpong(data, {masked: state.masked, binary: true});
	        callback();
	      });
	      this.flush();
	      this.endPacket();
	    }
	  }
	}


/***/ },
/* 115 */
/*!**********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/Validation.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	try {
	  module.exports = __webpack_require__(/*! utf-8-validate */ 116);
	} catch (e) {
	  module.exports = __webpack_require__(/*! ./Validation.fallback */ 121);
	}


/***/ },
/* 116 */
/*!******************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/utf-8-validate/index.js ***!
  \******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	try {
	  module.exports = __webpack_require__(/*! bindings */ 117)('validation');
	} catch (e) {
	  module.exports = __webpack_require__(/*! ./fallback */ 120);
	}


/***/ },
/* 117 */
/*!********************************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/utf-8-validate/~/bindings/bindings.js ***!
  \********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {
	/**
	 * Module dependencies.
	 */

	var fs = __webpack_require__(/*! fs */ 73)
	  , path = __webpack_require__(/*! path */ 107)
	  , join = path.join
	  , dirname = path.dirname
	  , exists = fs.existsSync || path.existsSync
	  , defaults = {
	        arrow: ({"NODE_ENV":"production"}).NODE_BINDINGS_ARROW || ' → '
	      , compiled: ({"NODE_ENV":"production"}).NODE_BINDINGS_COMPILED_DIR || 'compiled'
	      , platform: process.platform
	      , arch: process.arch
	      , version: process.versions.node
	      , bindings: 'bindings.node'
	      , try: [
	          // node-gyp's linked version in the "build" dir
	          [ 'module_root', 'build', 'bindings' ]
	          // node-waf and gyp_addon (a.k.a node-gyp)
	        , [ 'module_root', 'build', 'Debug', 'bindings' ]
	        , [ 'module_root', 'build', 'Release', 'bindings' ]
	          // Debug files, for development (legacy behavior, remove for node v0.9)
	        , [ 'module_root', 'out', 'Debug', 'bindings' ]
	        , [ 'module_root', 'Debug', 'bindings' ]
	          // Release files, but manually compiled (legacy behavior, remove for node v0.9)
	        , [ 'module_root', 'out', 'Release', 'bindings' ]
	        , [ 'module_root', 'Release', 'bindings' ]
	          // Legacy from node-waf, node <= 0.4.x
	        , [ 'module_root', 'build', 'default', 'bindings' ]
	          // Production "Release" buildtype binary (meh...)
	        , [ 'module_root', 'compiled', 'version', 'platform', 'arch', 'bindings' ]
	        ]
	    }

	/**
	 * The main `bindings()` function loads the compiled bindings for a given module.
	 * It uses V8's Error API to determine the parent filename that this function is
	 * being invoked from, which is then used to find the root directory.
	 */

	function bindings (opts) {

	  // Argument surgery
	  if (typeof opts == 'string') {
	    opts = { bindings: opts }
	  } else if (!opts) {
	    opts = {}
	  }
	  opts.__proto__ = defaults

	  // Get the module root
	  if (!opts.module_root) {
	    opts.module_root = exports.getRoot(exports.getFileName())
	  }

	  // Ensure the given bindings name ends with .node
	  if (path.extname(opts.bindings) != '.node') {
	    opts.bindings += '.node'
	  }

	  var tries = []
	    , i = 0
	    , l = opts.try.length
	    , n
	    , b
	    , err

	  for (; i<l; i++) {
	    n = join.apply(null, opts.try[i].map(function (p) {
	      return opts[p] || p
	    }))
	    tries.push(n)
	    try {
	      b = opts.path ? /*require.resolve*/(__webpack_require__(/*! . */ 118).resolve(n)) : __webpack_require__(/*! . */ 118)(n)
	      if (!opts.path) {
	        b.path = n
	      }
	      return b
	    } catch (e) {
	      if (!/not find/i.test(e.message)) {
	        throw e
	      }
	    }
	  }

	  err = new Error('Could not locate the bindings file. Tried:\n'
	    + tries.map(function (a) { return opts.arrow + a }).join('\n'))
	  err.tries = tries
	  throw err
	}
	module.exports = exports = bindings


	/**
	 * Gets the filename of the JavaScript file that invokes this function.
	 * Used to help find the root directory of a module.
	 * Optionally accepts an filename argument to skip when searching for the invoking filename
	 */

	exports.getFileName = function getFileName (calling_file) {
	  var origPST = Error.prepareStackTrace
	    , origSTL = Error.stackTraceLimit
	    , dummy = {}
	    , fileName

	  Error.stackTraceLimit = 10

	  Error.prepareStackTrace = function (e, st) {
	    for (var i=0, l=st.length; i<l; i++) {
	      fileName = st[i].getFileName()
	      if (fileName !== __filename) {
	        if (calling_file) {
	            if (fileName !== calling_file) {
	              return
	            }
	        } else {
	          return
	        }
	      }
	    }
	  }

	  // run the 'prepareStackTrace' function above
	  Error.captureStackTrace(dummy)
	  dummy.stack

	  // cleanup
	  Error.prepareStackTrace = origPST
	  Error.stackTraceLimit = origSTL

	  return fileName
	}

	/**
	 * Gets the root directory of a module, given an arbitrary filename
	 * somewhere in the module tree. The "root directory" is the directory
	 * containing the `package.json` file.
	 *
	 *   In:  /home/nate/node-native-module/lib/index.js
	 *   Out: /home/nate/node-native-module
	 */

	exports.getRoot = function getRoot (file) {
	  var dir = dirname(file)
	    , prev
	  while (true) {
	    if (dir === '.') {
	      // Avoids an infinite loop in rare cases, like the REPL
	      dir = process.cwd()
	    }
	    if (exists(join(dir, 'package.json')) || exists(join(dir, 'node_modules'))) {
	      // Found the 'package.json' file or 'node_modules' dir; we're done
	      return dir
	    }
	    if (prev === dir) {
	      // Got to the top
	      throw new Error('Could not find module root given file: "' + file
	                    + '". Do you have a `package.json` file? ')
	    }
	    // Try the parent dir next
	    prev = dir
	    dir = join(dir, '..')
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ },
/* 118 */
/*!*****************************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/utf-8-validate/~/bindings ^\.\/.*$ ***!
  \*****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./README.md": 119,
		"./bindings": 117,
		"./bindings.js": 117
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 118;


/***/ },
/* 119 */
/*!******************************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/utf-8-validate/~/bindings/README.md ***!
  \******************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<h1 id=\"node-bindings\">node-bindings</h1>\n<h3 id=\"helper-module-for-loading-your-native-module-s-node-file\">Helper module for loading your native module&#39;s .node file</h3>\n<p>This is a helper module for authors of Node.js native addon modules.\nIt is basically the &quot;swiss army knife&quot; of <code>require()</code>ing your native module&#39;s\n<code>.node</code> file.</p>\n<p>Throughout the course of Node&#39;s native addon history, addons have ended up being\ncompiled in a variety of different places, depending on which build tool and which\nversion of node was used. To make matters worse, now the <em>gyp</em> build tool can\nproduce either a <em>Release</em> or <em>Debug</em> build, each being built into different\nlocations.</p>\n<p>This module checks <em>all</em> the possible locations that a native addon would be built\nat, and returns the first one that loads successfully.</p>\n<h2 id=\"installation\">Installation</h2>\n<p>Install with <code>npm</code>:</p>\n<pre><code class=\"lang-bash\">$ npm install bindings\n</code></pre>\n<p>Or add it to the <code>&quot;dependencies&quot;</code> section of your <em>package.json</em> file.</p>\n<h2 id=\"example\">Example</h2>\n<p><code>require()</code>ing the proper bindings file for the current node version, platform\nand architecture is as simple as:</p>\n<pre><code class=\"lang-js\">var bindings = require(&#39;bindings&#39;)(&#39;binding.node&#39;)\n\n// Use your bindings defined in your C files\nbindings.your_c_function()\n</code></pre>\n<h2 id=\"nice-error-output\">Nice Error Output</h2>\n<p>When the <code>.node</code> file could not be loaded, <code>node-bindings</code> throws an Error with\na nice error message telling you exactly what was tried. You can also check the\n<code>err.tries</code> Array property.</p>\n<pre><code>Error: Could not load the bindings file. Tried:\n → /Users/nrajlich/ref/build/binding.node\n → /Users/nrajlich/ref/build/Debug/binding.node\n → /Users/nrajlich/ref/build/Release/binding.node\n → /Users/nrajlich/ref/out/Debug/binding.node\n → /Users/nrajlich/ref/Debug/binding.node\n → /Users/nrajlich/ref/out/Release/binding.node\n → /Users/nrajlich/ref/Release/binding.node\n → /Users/nrajlich/ref/build/default/binding.node\n → /Users/nrajlich/ref/compiled/0.8.2/darwin/x64/binding.node\n    at bindings (/Users/nrajlich/ref/node_modules/bindings/bindings.js:84:13)\n    at Object.&lt;anonymous&gt; (/Users/nrajlich/ref/lib/ref.js:5:47)\n    at Module._compile (module.js:449:26)\n    at Object.Module._extensions..js (module.js:467:10)\n    at Module.load (module.js:356:32)\n    at Function.Module._load (module.js:312:12)\n    ...\n</code></pre><h2 id=\"license\">License</h2>\n<p>(The MIT License)</p>\n<p>Copyright (c) 2012 Nathan Rajlich &lt;nathan@tootallnate.net&gt;</p>\n<p>Permission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n&#39;Software&#39;), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:</p>\n<p>The above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.</p>\n<p>THE SOFTWARE IS PROVIDED &#39;AS IS&#39;, WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\nIN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\nCLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\nTORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\nSOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>\n";

/***/ },
/* 120 */
/*!*********************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/~/utf-8-validate/fallback.js ***!
  \*********************************************************************************/
/***/ function(module, exports) {

	'use strict';

	/*!
	 * UTF-8 validate: UTF-8 validation for WebSockets.
	 * Copyright(c) 2015 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	module.exports.Validation = {
	  isValidUTF8: function(buffer) {
	    return true;
	  }
	};


/***/ },
/* 121 */
/*!*******************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/Validation.fallback.js ***!
  \*******************************************************************************/
/***/ function(module, exports) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */
	 
	module.exports.Validation = {
	  isValidUTF8: function(buffer) {
	    return true;
	  }
	};



/***/ },
/* 122 */
/*!**********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/BufferPool.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	var util = __webpack_require__(/*! util */ 90);

	function BufferPool(initialSize, growStrategy, shrinkStrategy) {
	  if (this instanceof BufferPool === false) {
	    throw new TypeError("Classes can't be function-called");
	  }

	  if (typeof initialSize === 'function') {
	    shrinkStrategy = growStrategy;
	    growStrategy = initialSize;
	    initialSize = 0;
	  }
	  else if (typeof initialSize === 'undefined') {
	    initialSize = 0;
	  }
	  this._growStrategy = (growStrategy || function(db, size) {
	    return db.used + size;
	  }).bind(null, this);
	  this._shrinkStrategy = (shrinkStrategy || function(db) {
	    return initialSize;
	  }).bind(null, this);
	  this._buffer = initialSize ? new Buffer(initialSize) : null;
	  this._offset = 0;
	  this._used = 0;
	  this._changeFactor = 0;
	  this.__defineGetter__('size', function(){
	    return this._buffer == null ? 0 : this._buffer.length;
	  });
	  this.__defineGetter__('used', function(){
	    return this._used;
	  });
	}

	BufferPool.prototype.get = function(length) {
	  if (this._buffer == null || this._offset + length > this._buffer.length) {
	    var newBuf = new Buffer(this._growStrategy(length));
	    this._buffer = newBuf;
	    this._offset = 0;
	  }
	  this._used += length;
	  var buf = this._buffer.slice(this._offset, this._offset + length);
	  this._offset += length;
	  return buf;
	}

	BufferPool.prototype.reset = function(forceNewBuffer) {
	  var len = this._shrinkStrategy();
	  if (len < this.size) this._changeFactor -= 1;
	  if (forceNewBuffer || this._changeFactor < -2) {
	    this._changeFactor = 0;
	    this._buffer = len ? new Buffer(len) : null;
	  }
	  this._offset = 0;
	  this._used = 0;
	}

	module.exports = BufferPool;


/***/ },
/* 123 */
/*!************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/Sender.hixie.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	var events = __webpack_require__(/*! events */ 102)
	  , util = __webpack_require__(/*! util */ 90)
	  , EventEmitter = events.EventEmitter;

	/**
	 * Hixie Sender implementation
	 */

	function Sender(socket) {
	  if (this instanceof Sender === false) {
	    throw new TypeError("Classes can't be function-called");
	  }

	  events.EventEmitter.call(this);

	  this.socket = socket;
	  this.continuationFrame = false;
	  this.isClosed = false;
	}

	module.exports = Sender;

	/**
	 * Inherits from EventEmitter.
	 */

	util.inherits(Sender, events.EventEmitter);

	/**
	 * Frames and writes data.
	 *
	 * @api public
	 */

	Sender.prototype.send = function(data, options, cb) {
	  if (this.isClosed) return;

	  var isString = typeof data == 'string'
	    , length = isString ? Buffer.byteLength(data) : data.length
	    , lengthbytes = (length > 127) ? 2 : 1 // assume less than 2**14 bytes
	    , writeStartMarker = this.continuationFrame == false
	    , writeEndMarker = !options || !(typeof options.fin != 'undefined' && !options.fin)
	    , buffer = new Buffer((writeStartMarker ? ((options && options.binary) ? (1 + lengthbytes) : 1) : 0) + length + ((writeEndMarker && !(options && options.binary)) ? 1 : 0))
	    , offset = writeStartMarker ? 1 : 0;

	  if (writeStartMarker) {
	    if (options && options.binary) {
	      buffer.write('\x80', 'binary');
	      // assume length less than 2**14 bytes
	      if (lengthbytes > 1)
	        buffer.write(String.fromCharCode(128+length/128), offset++, 'binary');
	      buffer.write(String.fromCharCode(length&0x7f), offset++, 'binary');
	    } else
	      buffer.write('\x00', 'binary');
	  }

	  if (isString) buffer.write(data, offset, 'utf8');
	  else data.copy(buffer, offset, 0);

	  if (writeEndMarker) {
	    if (options && options.binary) {
	      // sending binary, not writing end marker
	    } else
	      buffer.write('\xff', offset + length, 'binary');
	    this.continuationFrame = false;
	  }
	  else this.continuationFrame = true;

	  try {
	    this.socket.write(buffer, 'binary', cb);
	  } catch (e) {
	    this.error(e.toString());
	  }
	};

	/**
	 * Sends a close instruction to the remote party.
	 *
	 * @api public
	 */

	Sender.prototype.close = function(code, data, mask, cb) {
	  if (this.isClosed) return;
	  this.isClosed = true;
	  try {
	    if (this.continuationFrame) this.socket.write(new Buffer([0xff], 'binary'));
	    this.socket.write(new Buffer([0xff, 0x00]), 'binary', cb);
	  } catch (e) {
	    this.error(e.toString());
	  }
	};

	/**
	 * Sends a ping message to the remote party. Not available for hixie.
	 *
	 * @api public
	 */

	Sender.prototype.ping = function(data, options) {};

	/**
	 * Sends a pong message to the remote party. Not available for hixie.
	 *
	 * @api public
	 */

	Sender.prototype.pong = function(data, options) {};

	/**
	 * Handles an error
	 *
	 * @api private
	 */

	Sender.prototype.error = function (reason) {
	  this.emit('error', reason);
	  return this;
	};


/***/ },
/* 124 */
/*!**************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/Receiver.hixie.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	var util = __webpack_require__(/*! util */ 90);

	/**
	 * State constants
	 */

	var EMPTY = 0
	  , BODY = 1;
	var BINARYLENGTH = 2
	  , BINARYBODY = 3;

	/**
	 * Hixie Receiver implementation
	 */

	function Receiver () {
	  if (this instanceof Receiver === false) {
	    throw new TypeError("Classes can't be function-called");
	  }

	  this.state = EMPTY;
	  this.buffers = [];
	  this.messageEnd = -1;
	  this.spanLength = 0;
	  this.dead = false;

	  this.onerror = function() {};
	  this.ontext = function() {};
	  this.onbinary = function() {};
	  this.onclose = function() {};
	  this.onping = function() {};
	  this.onpong = function() {};
	}

	module.exports = Receiver;

	/**
	 * Add new data to the parser.
	 *
	 * @api public
	 */

	Receiver.prototype.add = function(data) {
	  var self = this;
	  function doAdd() {
	    if (self.state === EMPTY) {
	      if (data.length == 2 && data[0] == 0xFF && data[1] == 0x00) {
	        self.reset();
	        self.onclose();
	        return;
	      }
	      if (data[0] === 0x80) {
	        self.messageEnd = 0;
	        self.state = BINARYLENGTH;
	        data = data.slice(1);
	      } else {

	      if (data[0] !== 0x00) {
	        self.error('payload must start with 0x00 byte', true);
	        return;
	      }
	      data = data.slice(1);
	      self.state = BODY;

	      }
	    }
	    if (self.state === BINARYLENGTH) {
	      var i = 0;
	      while ((i < data.length) && (data[i] & 0x80)) {
	        self.messageEnd = 128 * self.messageEnd + (data[i] & 0x7f);
	        ++i;
	      }
	      if (i < data.length) {
	        self.messageEnd = 128 * self.messageEnd + (data[i] & 0x7f);
	        self.state = BINARYBODY;
	        ++i;
	      }
	      if (i > 0)
	        data = data.slice(i);
	    }
	    if (self.state === BINARYBODY) {
	      var dataleft = self.messageEnd - self.spanLength;
	      if (data.length >= dataleft) {
	        // consume the whole buffer to finish the frame
	        self.buffers.push(data);
	        self.spanLength += dataleft;
	        self.messageEnd = dataleft;
	        return self.parse();
	      }
	      // frame's not done even if we consume it all
	      self.buffers.push(data);
	      self.spanLength += data.length;
	      return;
	    }
	    self.buffers.push(data);
	    if ((self.messageEnd = bufferIndex(data, 0xFF)) != -1) {
	      self.spanLength += self.messageEnd;
	      return self.parse();
	    }
	    else self.spanLength += data.length;
	  }
	  while(data) data = doAdd();
	};

	/**
	 * Releases all resources used by the receiver.
	 *
	 * @api public
	 */

	Receiver.prototype.cleanup = function() {
	  this.dead = true;
	  this.state = EMPTY;
	  this.buffers = [];
	};

	/**
	 * Process buffered data.
	 *
	 * @api public
	 */

	Receiver.prototype.parse = function() {
	  var output = new Buffer(this.spanLength);
	  var outputIndex = 0;
	  for (var bi = 0, bl = this.buffers.length; bi < bl - 1; ++bi) {
	    var buffer = this.buffers[bi];
	    buffer.copy(output, outputIndex);
	    outputIndex += buffer.length;
	  }
	  var lastBuffer = this.buffers[this.buffers.length - 1];
	  if (this.messageEnd > 0) lastBuffer.copy(output, outputIndex, 0, this.messageEnd);
	  if (this.state !== BODY) --this.messageEnd;
	  var tail = null;
	  if (this.messageEnd < lastBuffer.length - 1) {
	    tail = lastBuffer.slice(this.messageEnd + 1);
	  }
	  this.reset();
	  this.ontext(output.toString('utf8'));
	  return tail;
	};

	/**
	 * Handles an error
	 *
	 * @api private
	 */

	Receiver.prototype.error = function (reason, terminate) {
	  this.reset();
	  this.onerror(reason, terminate);
	  return this;
	};

	/**
	 * Reset parser state
	 *
	 * @api private
	 */

	Receiver.prototype.reset = function (reason) {
	  if (this.dead) return;
	  this.state = EMPTY;
	  this.buffers = [];
	  this.messageEnd = -1;
	  this.spanLength = 0;
	};

	/**
	 * Internal api
	 */

	function bufferIndex(buffer, byte) {
	  for (var i = 0, l = buffer.length; i < l; ++i) {
	    if (buffer[i] === byte) return i;
	  }
	  return -1;
	}


/***/ },
/* 125 */
/*!**********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/Extensions.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var util = __webpack_require__(/*! util */ 90);

	/**
	 * Module exports.
	 */

	exports.parse = parse;
	exports.format = format;

	/**
	 * Parse extensions header value
	 */

	function parse(value) {
	  value = value || '';

	  var extensions = {};

	  value.split(',').forEach(function(v) {
	    var params = v.split(';');
	    var token = params.shift().trim();
	    var paramsList = extensions[token] = extensions[token] || [];
	    var parsedParams = {};

	    params.forEach(function(param) {
	      var parts = param.trim().split('=');
	      var key = parts[0];
	      var value = parts[1];
	      if (typeof value === 'undefined') {
	        value = true;
	      } else {
	        // unquote value
	        if (value[0] === '"') {
	          value = value.slice(1);
	        }
	        if (value[value.length - 1] === '"') {
	          value = value.slice(0, value.length - 1);
	        }
	      }
	      (parsedParams[key] = parsedParams[key] || []).push(value);
	    });

	    paramsList.push(parsedParams);
	  });

	  return extensions;
	}

	/**
	 * Format extensions header value
	 */

	function format(value) {
	  return Object.keys(value).map(function(token) {
	    var paramsList = value[token];
	    if (!util.isArray(paramsList)) {
	      paramsList = [paramsList];
	    }
	    return paramsList.map(function(params) {
	      return [token].concat(Object.keys(params).map(function(k) {
	        var p = params[k];
	        if (!util.isArray(p)) p = [p];
	        return p.map(function(v) {
	          return v === true ? k : k + '=' + v;
	        }).join('; ');
	      })).join('; ');
	    }).join(', ');
	  }).join(', ');
	}


/***/ },
/* 126 */
/*!***************************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/ws/lib/WebSocketServer.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * ws: a node.js websocket client
	 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
	 * MIT Licensed
	 */

	var util = __webpack_require__(/*! util */ 90)
	  , events = __webpack_require__(/*! events */ 102)
	  , http = __webpack_require__(/*! http */ 76)
	  , crypto = __webpack_require__(/*! crypto */ 97)
	  , Options = __webpack_require__(/*! options */ 100)
	  , WebSocket = __webpack_require__(/*! ./WebSocket */ 96)
	  , Extensions = __webpack_require__(/*! ./Extensions */ 125)
	  , PerMessageDeflate = __webpack_require__(/*! ./PerMessageDeflate */ 112)
	  , tls = __webpack_require__(/*! tls */ 127)
	  , url = __webpack_require__(/*! url */ 74);

	/**
	 * WebSocket Server implementation
	 */

	function WebSocketServer(options, callback) {
	  if (this instanceof WebSocketServer === false) {
	    throw new TypeError("Classes can't be function-called");
	  }

	  events.EventEmitter.call(this);

	  options = new Options({
	    host: '0.0.0.0',
	    port: null,
	    server: null,
	    verifyClient: null,
	    handleProtocols: null,
	    path: null,
	    noServer: false,
	    disableHixie: false,
	    clientTracking: true,
	    perMessageDeflate: true
	  }).merge(options);

	  if (!options.isDefinedAndNonNull('port') && !options.isDefinedAndNonNull('server') && !options.value.noServer) {
	    throw new TypeError('`port` or a `server` must be provided');
	  }

	  var self = this;

	  if (options.isDefinedAndNonNull('port')) {
	    this._server = http.createServer(function (req, res) {
	      var body = http.STATUS_CODES[426];
	      res.writeHead(426, {
	        'Content-Length': body.length,
	        'Content-Type': 'text/plain'
	      });
	      res.end(body);
	    });
	    this._server.allowHalfOpen = false;
	    this._server.listen(options.value.port, options.value.host, callback);
	    this._closeServer = function() { if (self._server) self._server.close(); };
	  }
	  else if (options.value.server) {
	    this._server = options.value.server;
	    if (options.value.path) {
	      // take note of the path, to avoid collisions when multiple websocket servers are
	      // listening on the same http server
	      if (this._server._webSocketPaths && options.value.server._webSocketPaths[options.value.path]) {
	        throw new Error('two instances of WebSocketServer cannot listen on the same http server path');
	      }
	      if (typeof this._server._webSocketPaths !== 'object') {
	        this._server._webSocketPaths = {};
	      }
	      this._server._webSocketPaths[options.value.path] = 1;
	    }
	  }
	  if (this._server) this._server.once('listening', function() { self.emit('listening'); });

	  if (typeof this._server != 'undefined') {
	    this._server.on('error', function(error) {
	      self.emit('error', error)
	    });
	    this._server.on('upgrade', function(req, socket, upgradeHead) {
	      //copy upgradeHead to avoid retention of large slab buffers used in node core
	      var head = new Buffer(upgradeHead.length);
	      upgradeHead.copy(head);

	      self.handleUpgrade(req, socket, head, function(client) {
	        self.emit('connection'+req.url, client);
	        self.emit('connection', client);
	      });
	    });
	  }

	  this.options = options.value;
	  this.path = options.value.path;
	  this.clients = [];
	}

	/**
	 * Inherits from EventEmitter.
	 */

	util.inherits(WebSocketServer, events.EventEmitter);

	/**
	 * Immediately shuts down the connection.
	 *
	 * @api public
	 */

	WebSocketServer.prototype.close = function() {
	  // terminate all associated clients
	  var error = null;
	  try {
	    for (var i = 0, l = this.clients.length; i < l; ++i) {
	      this.clients[i].terminate();
	    }
	  }
	  catch (e) {
	    error = e;
	  }

	  // remove path descriptor, if any
	  if (this.path && this._server._webSocketPaths) {
	    delete this._server._webSocketPaths[this.path];
	    if (Object.keys(this._server._webSocketPaths).length == 0) {
	      delete this._server._webSocketPaths;
	    }
	  }

	  // close the http server if it was internally created
	  try {
	    if (typeof this._closeServer !== 'undefined') {
	      this._closeServer();
	    }
	  }
	  finally {
	    delete this._server;
	  }
	  if (error) throw error;
	}

	/**
	 * Handle a HTTP Upgrade request.
	 *
	 * @api public
	 */

	WebSocketServer.prototype.handleUpgrade = function(req, socket, upgradeHead, cb) {
	  // check for wrong path
	  if (this.options.path) {
	    var u = url.parse(req.url);
	    if (u && u.pathname !== this.options.path) return;
	  }

	  if (typeof req.headers.upgrade === 'undefined' || req.headers.upgrade.toLowerCase() !== 'websocket') {
	    abortConnection(socket, 400, 'Bad Request');
	    return;
	  }

	  if (req.headers['sec-websocket-key1']) handleHixieUpgrade.apply(this, arguments);
	  else handleHybiUpgrade.apply(this, arguments);
	}

	module.exports = WebSocketServer;

	/**
	 * Entirely private apis,
	 * which may or may not be bound to a sepcific WebSocket instance.
	 */

	function handleHybiUpgrade(req, socket, upgradeHead, cb) {
	  // handle premature socket errors
	  var errorHandler = function() {
	    try { socket.destroy(); } catch (e) {}
	  }
	  socket.on('error', errorHandler);

	  // verify key presence
	  if (!req.headers['sec-websocket-key']) {
	    abortConnection(socket, 400, 'Bad Request');
	    return;
	  }

	  // verify version
	  var version = parseInt(req.headers['sec-websocket-version']);
	  if ([8, 13].indexOf(version) === -1) {
	    abortConnection(socket, 400, 'Bad Request');
	    return;
	  }

	  // verify protocol
	  var protocols = req.headers['sec-websocket-protocol'];

	  // verify client
	  var origin = version < 13 ?
	    req.headers['sec-websocket-origin'] :
	    req.headers['origin'];

	  // handle extensions offer
	  var extensionsOffer = Extensions.parse(req.headers['sec-websocket-extensions']);

	  // handler to call when the connection sequence completes
	  var self = this;
	  var completeHybiUpgrade2 = function(protocol) {

	    // calc key
	    var key = req.headers['sec-websocket-key'];
	    var shasum = crypto.createHash('sha1');
	    shasum.update(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
	    key = shasum.digest('base64');

	    var headers = [
	        'HTTP/1.1 101 Switching Protocols'
	      , 'Upgrade: websocket'
	      , 'Connection: Upgrade'
	      , 'Sec-WebSocket-Accept: ' + key
	    ];

	    if (typeof protocol != 'undefined') {
	      headers.push('Sec-WebSocket-Protocol: ' + protocol);
	    }

	    var extensions = {};
	    try {
	      extensions = acceptExtensions.call(self, extensionsOffer);
	    } catch (err) {
	      abortConnection(socket, 400, 'Bad Request');
	      return;
	    }

	    if (Object.keys(extensions).length) {
	      var serverExtensions = {};
	      Object.keys(extensions).forEach(function(token) {
	        serverExtensions[token] = [extensions[token].params]
	      });
	      headers.push('Sec-WebSocket-Extensions: ' + Extensions.format(serverExtensions));
	    }

	    // allows external modification/inspection of handshake headers
	    self.emit('headers', headers);

	    socket.setTimeout(0);
	    socket.setNoDelay(true);
	    try {
	      socket.write(headers.concat('', '').join('\r\n'));
	    }
	    catch (e) {
	      // if the upgrade write fails, shut the connection down hard
	      try { socket.destroy(); } catch (e) {}
	      return;
	    }

	    var client = new WebSocket([req, socket, upgradeHead], {
	      protocolVersion: version,
	      protocol: protocol,
	      extensions: extensions
	    });

	    if (self.options.clientTracking) {
	      self.clients.push(client);
	      client.on('close', function() {
	        var index = self.clients.indexOf(client);
	        if (index != -1) {
	          self.clients.splice(index, 1);
	        }
	      });
	    }

	    // signal upgrade complete
	    socket.removeListener('error', errorHandler);
	    cb(client);
	  }

	  // optionally call external protocol selection handler before
	  // calling completeHybiUpgrade2
	  var completeHybiUpgrade1 = function() {
	    // choose from the sub-protocols
	    if (typeof self.options.handleProtocols == 'function') {
	        var protList = (protocols || "").split(/, */);
	        var callbackCalled = false;
	        var res = self.options.handleProtocols(protList, function(result, protocol) {
	          callbackCalled = true;
	          if (!result) abortConnection(socket, 401, 'Unauthorized');
	          else completeHybiUpgrade2(protocol);
	        });
	        if (!callbackCalled) {
	            // the handleProtocols handler never called our callback
	            abortConnection(socket, 501, 'Could not process protocols');
	        }
	        return;
	    } else {
	        if (typeof protocols !== 'undefined') {
	            completeHybiUpgrade2(protocols.split(/, */)[0]);
	        }
	        else {
	            completeHybiUpgrade2();
	        }
	    }
	  }

	  // optionally call external client verification handler
	  if (typeof this.options.verifyClient == 'function') {
	    var info = {
	      origin: origin,
	      secure: typeof req.connection.authorized !== 'undefined' || typeof req.connection.encrypted !== 'undefined',
	      req: req
	    };
	    if (this.options.verifyClient.length == 2) {
	      this.options.verifyClient(info, function(result, code, name) {
	        if (typeof code === 'undefined') code = 401;
	        if (typeof name === 'undefined') name = http.STATUS_CODES[code];

	        if (!result) abortConnection(socket, code, name);
	        else completeHybiUpgrade1();
	      });
	      return;
	    }
	    else if (!this.options.verifyClient(info)) {
	      abortConnection(socket, 401, 'Unauthorized');
	      return;
	    }
	  }

	  completeHybiUpgrade1();
	}

	function handleHixieUpgrade(req, socket, upgradeHead, cb) {
	  // handle premature socket errors
	  var errorHandler = function() {
	    try { socket.destroy(); } catch (e) {}
	  }
	  socket.on('error', errorHandler);

	  // bail if options prevent hixie
	  if (this.options.disableHixie) {
	    abortConnection(socket, 401, 'Hixie support disabled');
	    return;
	  }

	  // verify key presence
	  if (!req.headers['sec-websocket-key2']) {
	    abortConnection(socket, 400, 'Bad Request');
	    return;
	  }

	  var origin = req.headers['origin']
	    , self = this;

	  // setup handshake completion to run after client has been verified
	  var onClientVerified = function() {
	    var wshost;
	    if (!req.headers['x-forwarded-host'])
	        wshost = req.headers.host;
	    else
	        wshost = req.headers['x-forwarded-host'];
	    var location = ((req.headers['x-forwarded-proto'] === 'https' || socket.encrypted) ? 'wss' : 'ws') + '://' + wshost + req.url
	      , protocol = req.headers['sec-websocket-protocol'];

	    // handshake completion code to run once nonce has been successfully retrieved
	    var completeHandshake = function(nonce, rest) {
	      // calculate key
	      var k1 = req.headers['sec-websocket-key1']
	        , k2 = req.headers['sec-websocket-key2']
	        , md5 = crypto.createHash('md5');

	      [k1, k2].forEach(function (k) {
	        var n = parseInt(k.replace(/[^\d]/g, ''))
	          , spaces = k.replace(/[^ ]/g, '').length;
	        if (spaces === 0 || n % spaces !== 0){
	          abortConnection(socket, 400, 'Bad Request');
	          return;
	        }
	        n /= spaces;
	        md5.update(String.fromCharCode(
	          n >> 24 & 0xFF,
	          n >> 16 & 0xFF,
	          n >> 8  & 0xFF,
	          n       & 0xFF));
	      });
	      md5.update(nonce.toString('binary'));

	      var headers = [
	          'HTTP/1.1 101 Switching Protocols'
	        , 'Upgrade: WebSocket'
	        , 'Connection: Upgrade'
	        , 'Sec-WebSocket-Location: ' + location
	      ];
	      if (typeof protocol != 'undefined') headers.push('Sec-WebSocket-Protocol: ' + protocol);
	      if (typeof origin != 'undefined') headers.push('Sec-WebSocket-Origin: ' + origin);

	      socket.setTimeout(0);
	      socket.setNoDelay(true);
	      try {
	        // merge header and hash buffer
	        var headerBuffer = new Buffer(headers.concat('', '').join('\r\n'));
	        var hashBuffer = new Buffer(md5.digest('binary'), 'binary');
	        var handshakeBuffer = new Buffer(headerBuffer.length + hashBuffer.length);
	        headerBuffer.copy(handshakeBuffer, 0);
	        hashBuffer.copy(handshakeBuffer, headerBuffer.length);

	        // do a single write, which - upon success - causes a new client websocket to be setup
	        socket.write(handshakeBuffer, 'binary', function(err) {
	          if (err) return; // do not create client if an error happens
	          var client = new WebSocket([req, socket, rest], {
	            protocolVersion: 'hixie-76',
	            protocol: protocol
	          });
	          if (self.options.clientTracking) {
	            self.clients.push(client);
	            client.on('close', function() {
	              var index = self.clients.indexOf(client);
	              if (index != -1) {
	                self.clients.splice(index, 1);
	              }
	            });
	          }

	          // signal upgrade complete
	          socket.removeListener('error', errorHandler);
	          cb(client);
	        });
	      }
	      catch (e) {
	        try { socket.destroy(); } catch (e) {}
	        return;
	      }
	    }

	    // retrieve nonce
	    var nonceLength = 8;
	    if (upgradeHead && upgradeHead.length >= nonceLength) {
	      var nonce = upgradeHead.slice(0, nonceLength);
	      var rest = upgradeHead.length > nonceLength ? upgradeHead.slice(nonceLength) : null;
	      completeHandshake.call(self, nonce, rest);
	    }
	    else {
	      // nonce not present in upgradeHead, so we must wait for enough data
	      // data to arrive before continuing
	      var nonce = new Buffer(nonceLength);
	      upgradeHead.copy(nonce, 0);
	      var received = upgradeHead.length;
	      var rest = null;
	      var handler = function (data) {
	        var toRead = Math.min(data.length, nonceLength - received);
	        if (toRead === 0) return;
	        data.copy(nonce, received, 0, toRead);
	        received += toRead;
	        if (received == nonceLength) {
	          socket.removeListener('data', handler);
	          if (toRead < data.length) rest = data.slice(toRead);
	          completeHandshake.call(self, nonce, rest);
	        }
	      }
	      socket.on('data', handler);
	    }
	  }

	  // verify client
	  if (typeof this.options.verifyClient == 'function') {
	    var info = {
	      origin: origin,
	      secure: typeof req.connection.authorized !== 'undefined' || typeof req.connection.encrypted !== 'undefined',
	      req: req
	    };
	    if (this.options.verifyClient.length == 2) {
	      var self = this;
	      this.options.verifyClient(info, function(result, code, name) {
	        if (typeof code === 'undefined') code = 401;
	        if (typeof name === 'undefined') name = http.STATUS_CODES[code];

	        if (!result) abortConnection(socket, code, name);
	        else onClientVerified.apply(self);
	      });
	      return;
	    }
	    else if (!this.options.verifyClient(info)) {
	      abortConnection(socket, 401, 'Unauthorized');
	      return;
	    }
	  }

	  // no client verification required
	  onClientVerified();
	}

	function acceptExtensions(offer) {
	  var extensions = {};
	  var options = this.options.perMessageDeflate;
	  if (options && offer[PerMessageDeflate.extensionName]) {
	    var perMessageDeflate = new PerMessageDeflate(options !== true ? options : {}, true);
	    perMessageDeflate.accept(offer[PerMessageDeflate.extensionName]);
	    extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
	  }
	  return extensions;
	}

	function abortConnection(socket, code, name) {
	  try {
	    var response = [
	      'HTTP/1.1 ' + code + ' ' + name,
	      'Content-type: text/html'
	    ];
	    socket.write(response.concat('', '').join('\r\n'));
	  }
	  catch (e) { /* ignore errors - we've aborted this connection */ }
	  finally {
	    // ensure that an early aborted connection is shut down completely
	    try { socket.destroy(); } catch (e) {}
	  }
	}


/***/ },
/* 127 */
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = require("tls");

/***/ },
/* 128 */
/*!***********************************************!*\
  !*** ./~/socket.io-client/~/indexof/index.js ***!
  \***********************************************/
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;

	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 129 */
/*!*******************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/parseuri/index.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');

	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }

	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;

	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }

	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }

	    return uri;
	};


/***/ },
/* 130 */
/*!********************************************************************!*\
  !*** ./~/socket.io-client/~/engine.io-client/~/parsejson/index.js ***!
  \********************************************************************/
/***/ function(module, exports) {

	/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */

	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;

	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }

	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }

	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};

/***/ },
/* 131 */
/*!******************************************!*\
  !*** ./~/socket.io-client/lib/socket.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(/*! socket.io-parser */ 60);
	var Emitter = __webpack_require__(/*! component-emitter */ 64);
	var toArray = __webpack_require__(/*! to-array */ 132);
	var on = __webpack_require__(/*! ./on */ 133);
	var bind = __webpack_require__(/*! component-bind */ 134);
	var debug = __webpack_require__(/*! debug */ 58)('socket.io-client:socket');
	var hasBin = __webpack_require__(/*! has-binary */ 135);

	/**
	 * Module exports.
	 */

	module.exports = exports = Socket;

	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */

	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1
	};

	/**
	 * Shortcut to `Emitter#emit`.
	 */

	var emit = Emitter.prototype.emit;

	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */

	function Socket(io, nsp){
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  if (this.io.autoConnect) this.open();
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */

	Socket.prototype.subEvents = function() {
	  if (this.subs) return;

	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};

	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */

	Socket.prototype.open =
	Socket.prototype.connect = function(){
	  if (this.connected) return this;

	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' == this.io.readyState) this.onopen();
	  return this;
	};

	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.send = function(){
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};

	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.emit = function(ev){
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }

	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
	  var packet = { type: parserType, data: args };

	  // event ack callback
	  if ('function' == typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }

	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }

	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.packet = function(packet){
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};

	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */

	Socket.prototype.onopen = function(){
	  debug('transport is open - connecting');

	  // write connect packet if necessary
	  if ('/' != this.nsp) {
	    this.packet({ type: parser.CONNECT });
	  }
	};

	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */

	Socket.prototype.onclose = function(reason){
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};

	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onpacket = function(packet){
	  if (packet.nsp != this.nsp) return;

	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;

	    case parser.EVENT:
	      this.onevent(packet);
	      break;

	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;

	    case parser.ACK:
	      this.onack(packet);
	      break;

	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;

	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;

	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};

	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onevent = function(packet){
	  var args = packet.data || [];
	  debug('emitting event %j', args);

	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }

	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};

	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */

	Socket.prototype.ack = function(id){
	  var self = this;
	  var sent = false;
	  return function(){
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);

	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};

	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onack = function(packet){
	  debug('calling ack %s with %j', packet.id, packet.data);
	  var fn = this.acks[packet.id];
	  fn.apply(this, packet.data);
	  delete this.acks[packet.id];
	};

	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */

	Socket.prototype.onconnect = function(){
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};

	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */

	Socket.prototype.emitBuffered = function(){
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];

	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};

	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */

	Socket.prototype.ondisconnect = function(){
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};

	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */

	Socket.prototype.destroy = function(){
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }

	  this.io.destroy(this);
	};

	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.close =
	Socket.prototype.disconnect = function(){
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }

	  // remove socket from pool
	  this.destroy();

	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};


/***/ },
/* 132 */
/*!************************************************!*\
  !*** ./~/socket.io-client/~/to-array/index.js ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = toArray

	function toArray(list, index) {
	    var array = []

	    index = index || 0

	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }

	    return array
	}


/***/ },
/* 133 */
/*!**************************************!*\
  !*** ./~/socket.io-client/lib/on.js ***!
  \**************************************/
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */

	module.exports = on;

	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */

	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function(){
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ },
/* 134 */
/*!******************************************************!*\
  !*** ./~/socket.io-client/~/component-bind/index.js ***!
  \******************************************************/
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */

	var slice = [].slice;

	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */

	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 135 */
/*!**************************************************!*\
  !*** ./~/socket.io-client/~/has-binary/index.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(/*! isarray */ 136);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}


/***/ },
/* 136 */
/*!************************************************************!*\
  !*** ./~/socket.io-client/~/has-binary/~/isarray/index.js ***!
  \************************************************************/
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 137 */
/*!********************************************************!*\
  !*** ./~/socket.io-client/~/object-component/index.js ***!
  \********************************************************/
/***/ function(module, exports) {

	
	/**
	 * HOP ref.
	 */

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Return own keys in `obj`.
	 *
	 * @param {Object} obj
	 * @return {Array}
	 * @api public
	 */

	exports.keys = Object.keys || function(obj){
	  var keys = [];
	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      keys.push(key);
	    }
	  }
	  return keys;
	};

	/**
	 * Return own values in `obj`.
	 *
	 * @param {Object} obj
	 * @return {Array}
	 * @api public
	 */

	exports.values = function(obj){
	  var vals = [];
	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      vals.push(obj[key]);
	    }
	  }
	  return vals;
	};

	/**
	 * Merge `b` into `a`.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api public
	 */

	exports.merge = function(a, b){
	  for (var key in b) {
	    if (has.call(b, key)) {
	      a[key] = b[key];
	    }
	  }
	  return a;
	};

	/**
	 * Return length of `obj`.
	 *
	 * @param {Object} obj
	 * @return {Number}
	 * @api public
	 */

	exports.length = function(obj){
	  return exports.keys(obj).length;
	};

	/**
	 * Check if `obj` is empty.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api public
	 */

	exports.isEmpty = function(obj){
	  return 0 == exports.length(obj);
	};

/***/ },
/* 138 */
/*!**********************************************!*\
  !*** ./~/socket.io-client/~/backo2/index.js ***!
  \**********************************************/
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */

	module.exports = Backoff;

	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}

	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */

	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};

	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */

	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};

	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};

	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};

	/**
	 * Set the jitter
	 *
	 * @api public
	 */

	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};



/***/ },
/* 139 */
/*!*************************************!*\
  !*** ./app/components/Estimator.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var Overview = (function (_React$Component) {
		_inherits(Overview, _React$Component);

		function Overview(props) {
			_classCallCheck(this, Overview);

			_get(Object.getPrototypeOf(Overview.prototype), "constructor", this).call(this, props);

			this.state = {};
		}

		_createClass(Overview, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h1",
						null,
						"Estimator"
					)
				);
			}
		}]);

		return Overview;
	})(_react2["default"].Component);

	exports["default"] = Overview;
	module.exports = exports["default"];

/***/ },
/* 140 */
/*!***********************************!*\
  !*** ./app/components/History.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var History = (function (_React$Component) {
		_inherits(History, _React$Component);

		function History(props) {
			_classCallCheck(this, History);

			_get(Object.getPrototypeOf(History.prototype), "constructor", this).call(this, props);

			this.state = {};
		}

		_createClass(History, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h1",
						null,
						"History"
					)
				);
			}
		}]);

		return History;
	})(_react2["default"].Component);

	exports["default"] = History;
	module.exports = exports["default"];

/***/ },
/* 141 */
/*!************************************!*\
  !*** ./app/components/Settings.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var Overview = (function (_React$Component) {
		_inherits(Overview, _React$Component);

		function Overview(props) {
			_classCallCheck(this, Overview);

			_get(Object.getPrototypeOf(Overview.prototype), "constructor", this).call(this, props);

			this.state = {};
		}

		_createClass(Overview, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h1",
						null,
						"Settings"
					)
				);
			}
		}]);

		return Overview;
	})(_react2["default"].Component);

	exports["default"] = Overview;
	module.exports = exports["default"];

/***/ },
/* 142 */
/*!*******************************!*\
  !*** ./app/components/Map.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 2);

	var _react2 = _interopRequireDefault(_react);

	var Map = (function (_React$Component) {
		_inherits(Map, _React$Component);

		function Map(props) {
			_classCallCheck(this, Map);

			_get(Object.getPrototypeOf(Map.prototype), "constructor", this).call(this, props);

			this.state = {};
		}

		_createClass(Map, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h1",
						null,
						"Map"
					)
				);
			}
		}]);

		return Map;
	})(_react2["default"].Component);

	exports["default"] = Map;
	module.exports = exports["default"];

/***/ }
/******/ ]);