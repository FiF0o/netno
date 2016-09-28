import React from 'react';
import TweetsContainer from '../containers/TweetsContainer'
import SearchTweetContainer from '../containers/SearchTweetContainer'
// import '../../sass/main.sass';

class Main extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
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
        <div>
          <SearchTweetContainer />
        </div>
        <div>
          <br/>
          TweetsContainer
          <br/>
          <TweetsContainer />
          <br/>
        </div>
      </div>
    );
  };
};

React.propTypes = {
  // children: React.PropTypes.element.isRequired
};

export default Main;
