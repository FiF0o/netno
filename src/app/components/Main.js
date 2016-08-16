import React from 'react';
// import '../../../bower_components/font-awesome/scss/font-awesome.scss';
import '../../sass/main.sass';

class Main extends React.Component {
  render() {
    console.log('MAIN this:', this);
    return (
      <div className='container-fluid'>
        <div>
          NAV will be in this bloc
          <h1>Yo h1</h1>
          <span className='glyphicon glyphicon-search' aria-hidden='true'></span>
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
  // children: React.PropTypes.element.isRequired
};

export default Main;
