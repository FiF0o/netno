import React from 'react';
import Nav from './shell/Nav'

/**
 * Main component is the shell of the app and will load Nav component as
 * well as rendering pages using Routes and passed down using
 * this.props.children
 */

class Main extends React.Component {
  render() {
    return (
      <div className='container-fluid'>

        <div className="col-md-12">
          <Nav />
        </div>

        <div className='container'>
          <div className="col-md-12">
            { this.props.children }
          </div>
        </div>

      </div>
    )
  }
}

React.propTypes = {
  // children: React.PropTypes.element.isRequired
}

export default Main;