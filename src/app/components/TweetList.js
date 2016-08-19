/**
 * Created by jonlazarini on 16/08/16.
 */
import React from 'react';

export default class TweetList extends React.Component {
  render() {
    const tweetList = this.props.tweets.map((tweet, index) => {
      // must use => <Object> instead of { } if we are returning one object
      // only.
      return (
        <li key={ index }>
          { tweet }
        </li>
      );
    });

    const statuses = this.props.statuses.map((status, index) =>
      <li key={ index }>
        { status.id_str }
        { status.created_at }
        { status.retweet_count }
        { status.text }
      </li>
      );

    return (
      <div>
        <ul>
          { tweetList }
        </ul>
        <ul>
          { statuses }
        </ul>
      </div>

    );
  }
}

/*
* user.
* */
