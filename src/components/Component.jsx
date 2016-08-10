import React from 'react';
import '../sass/main.sass';

var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div>
        <h1>Yo h1</h1>
        <p>Hello world blabla yo yfgsgfdgfdfgdoyoyo</p>
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
