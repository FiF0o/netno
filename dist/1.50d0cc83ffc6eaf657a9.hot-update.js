webpackHotUpdate(1,{

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Created by jonlazarini on 12/08/16.
	 */
	
	var React = __webpack_require__(2);
	
	module.exports = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
	  }
	
	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      console.log('HOME: this', this);
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h2',
	          { className: 'text-center' },
	          this.props.title,
	          'Search section here'
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(React.Component);

/***/ }

})
//# sourceMappingURL=1.50d0cc83ffc6eaf657a9.hot-update.js.map