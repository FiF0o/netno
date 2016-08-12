import React from 'react';
import '../sass/main.sass';

class Main extends React.Component {
  render() {
    console.log('MAIN this:', this);
    // if (this.props.onRender) {
    //   this.props.onRender();
    // }
    return (
      <div>
        <div>
          NAV will be in this bloc
          <h1>Yo h1</h1>
          <p>Hello world</p>
          <div className='well'>
            well here
          </div>
          NAV will be in this bloc
        </div>
        <div className='container'>
          { this.props.children }
        </div>
      </div>
    );
  };
};

React.propTypes = {
  // onRender: React.PropTypes.func.isRequired,
  // children: React.PropTypes.element.isRequired
};

export default Main;
