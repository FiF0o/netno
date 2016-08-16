/**
 * Created by jonlazarini on 16/08/16.
 */
import React from 'react';

export default class TweetList extends React.Component {
  render() {
    console.log('this.props', this.props);
    const tweetList = this.props.tweets.map((tweet, index) => {

      return (
        <li key={ index }>
          { tweet }
        </li>
      );
    });
    return (
      <ul>
        { tweetList }
      </ul>
    );
  }
}
