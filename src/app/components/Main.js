import React from 'react';
// import '../../../bower_components/font-awesome/scss/font-awesome.scss';
import '../../sass/main.sass';
import SearchTweets from './SearchTweets';

class Main extends React.Component {
  render() {
    console.log('MAIN this:', this);
    return (
      <div className='container-fluid'>
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchTweets
              history={ this.props.history }
              routes={ this.props.params }
            />
          </div>
        </nav>
        <div className='container'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

React.propTypes = {
  // children: React.PropTypes.element.isRequired
};

export default Main;
