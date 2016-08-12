webpackHotUpdate(1,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(183);
	
	var _AppRoutes = __webpack_require__(171);
	
	var _AppRoutes2 = _interopRequireDefault(_AppRoutes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appEntry = document.querySelector('#container');
	
	var initRouter = function initRouter() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _AppRoutes2.default
	  );
	};
	
	// initRouter, appEntry
	
	window.onload = function () {
	  _reactDom2.default.render(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _AppRoutes2.default
	  ), document.querySelector('#container'));
	};

/***/ }
])
//# sourceMappingURL=1.5f771e2d2cffc0e78322.hot-update.js.map