webpackHotUpdate(1,{

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(183);
	
	var _Main = __webpack_require__(172);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Home = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Home\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Home2 = _interopRequireDefault(_Home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by jonlazarini on 12/08/16.
	 */
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _Main2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default })
	);
	/*
	 Importing components here to be rendered depending on the route we are at
	 in - App.js -
	 */

/***/ }

})
//# sourceMappingURL=1.a75e6d560ebb6c7507d7.hot-update.js.map