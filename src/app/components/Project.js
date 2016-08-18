/**
 * Created by jonlazarini on 12/08/16.
 */

import React from 'react';

import firebase from 'firebase';
import Rebase from 're-base';
import Codebird from 'codebird';
import Tweets from './Tweets';

import { token } from '../utils/tweeterToken.js';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC0thHB-lYhF-1_ZbPIXzg1XeoD5Ktx7HM",
  authDomain: "netnographr.firebaseapp.com",
  databaseURL: "https://netnographr.firebaseio.com",
  storageBucket: "netnographr.appspot.com",
};
firebase.initializeApp(config);
const base = Rebase.createClass(config.databaseURL);


const cb = new Codebird();
// authentications
cb.setConsumerKey(token.key, token.secret);


const args = { q: "o2", count: 10 };

cb.__call(
  // Pick twitter API endpoint
  "search_tweets",
  args,
  (reply) => {
    console.log(reply);
  },
  // this parameter required by codebird
  true
);

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      project: {},
      /*
      stores tweets from twitter API to firebase DB, can't be encapsulated
       when using re-base
      */
      tweetsFromServer: [],
      // renders tweets from twitterAPI
      statuses: ["status1","status2"],

    };
  }
  componentDidMount() {
    this._base = base.bindToState(`${this.props.params.username}/tweets`, {
      context: this,
      asArray: true,
      state: 'tweetsFromServer',
    });
  }
  componentWillUnmount() {
    base.removeBinding(this._base);
  }
  render() {
    console.log("PROJECT: this:", this);
    return (
      <div>
        <Tweets
          tweets={ this.state.tweetsFromServer }
          statuses={ this.state.statuses }
        />
        Project placeholder here
      </div>
    );
  }
}
