webpackHotUpdate(1,{

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Main = _react2.default.createClass({
	  displayName: 'Main',
	
	  render: function render() {
	    console.log('MAIN this:', this);
	    if (this.props.onRender) {
	      this.props.onRender();
	    }
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        null,
	        'NAV will be in this bloc',
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
	        ),
	        'NAV will be in this bloc'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        this.props.children
	      )
	    );
	  },
	  propTypes: {
	    onRender: _react2.default.PropTypes.func,
	    children: _react2.default.PropTypes.element.isRequired
	  }
	});
	exports.default = Main;

/***/ }

})
//# sourceMappingURL=1.87d2d8c655eec0f614e6.hot-update.js.map