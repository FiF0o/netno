/**
 * Created by jonlazarini on 12/08/16.
 */

import React from 'react';

import firebase from 'firebase';
import Rebase from 're-base';
import Codebird from 'Codebird';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0thHB-lYhF-1_ZbPIXzg1XeoD5Ktx7HM",
  authDomain: "netnographr.firebaseapp.com",
  databaseURL: "https://netnographr.firebaseio.com",
  storageBucket: "netnographr.appspot.com",
};
firebase.initializeApp(config);

const base = Rebase.createClass(config.databaseURL);

import { token } from '../utils/tweeterToken.js'
const cb = new Codebird;
// authentications
cb.setConsumerKey(token.key, token.secret);


const args = {q: "o2", count: 10};

cb.__call(
  "search_tweets", //Pick twitter API endpoint
  args,
  function (reply) {
    console.log(reply)
  },
  true // this parameter required by codebird
);


import Tweets from './Tweets';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      project: {},
      tweets: [1, 2, 3, 4]
    };
  }
  componentDidMount() {
    this._base = base.bindToState(`${this.props.params.username}/tweets`, {
      context: this,
      asArray: true,
      state: 'tweets'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this._base);
  }
  render() {
    console.log("PROJECT: this:", this);
    return (
      <div>
        <Tweets tweets={ this.state.tweets }/>
        Project placeholder here
      </div>
    );
  }
};
