webpackHotUpdate(0,{

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(171);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Component = _react2.default.createClass({
	  displayName: 'Component',
	
	  render: function render() {
	    if (this.props.onRender) {
	      this.props.onRender();
	    }
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Yo h1'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'Hello world'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'well' },
	        'well here'
	      )
	    );
	  },
	  propTypes: {
	    onRender: _react2.default.PropTypes.func
	  }
	});
	
	exports.default = Component;

/***/ }

})
//# sourceMappingURL=0.e721091a8649058d4d21.hot-update.js.map