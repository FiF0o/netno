webpackHotUpdate(0,{

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(170);
	
	var _Main = __webpack_require__(234);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Home = __webpack_require__(244);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _Project = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Project\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Project2 = _interopRequireDefault(_Project);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 Importing components here to be rendered depending on the route we are at
	 in - App.js -
	 */
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _Main2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.IndexRoute, { path: 'project/:username', component: _Project2.default })
	); /**
	    * Created by jonlazarini on 12/08/16.
	    */

/***/ }

})
//# sourceMappingURL=0.88470a5cfd9035fa718f.hot-update.js.map