/**
 * Created by jonlazarini on 16/08/16.
 */

import React from 'react';
import TweetList from './TweetList';

export default class Tweets extends React.Component {
  render() {
    console.log('this.props.tweets', this.props.tweets);
    return (
      <div>
        <TweetList tweets={ this.props.tweets } />
      </div>
    );
  }
}
