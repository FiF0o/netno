/**
 * Created by jonlazarini on 12/08/16.
 */

import React from 'react';

import firebase from 'firebase';
import Rebase from 're-base';
import Codebird from 'Codebird';
console.log('Codebird:', Codebird);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0thHB-lYhF-1_ZbPIXzg1XeoD5Ktx7HM",
  authDomain: "netnographr.firebaseapp.com",
  databaseURL: "https://netnographr.firebaseio.com",
  storageBucket: "netnographr.appspot.com",
};
firebase.initializeApp(config);

const base = Rebase.createClass(config.databaseURL);
console.log("base", base);
const cb = new Codebird;
console.log("cb:", cb);
// cb.setConsumerKey("YOURKEY", "YOURSECRET");



import Tweets from './Tweets'

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      project: {},
      tweets: ["tweet1", "tweet2", "tweet3"]
    };
  }
  componentDidMount() {
    this._base = base.bindToState(this.props.params.username, {
      context: this,
      asArray: true,
      state: 'tweets'
    });
    console.log("this._base: ", this._base);
  }
  componentWillUnmount() {
    base.removeBinding(this._base);
  }
  render() {
    console.log("url", `${config.databaseURL}/${this.props.params.username}`);
    console.log("tweets:", this.state.tweets);
    console.log("PROJECT: this:", this);
    return (
      <div>
        <Tweets tweets={ this.state.tweets }/>
        Project placeholder here
      </div>
    );
  }
};
