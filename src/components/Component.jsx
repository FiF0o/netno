import React from 'react';

var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <p>Hello world blabla yo yoyoyo</p>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
