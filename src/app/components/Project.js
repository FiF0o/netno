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
      tweetRequest: {
        q:"o2",
        count: 10,
      },
      user: {},
      project: {},
      /*
      stores tweets from twitter API to firebase DB, can't be encapsulated
       when using re-base
      */
      tweetsFromServer: [],
      // renders tweets from twitterAPI
      statuses: [
        {
          id_str: "766320531608002560",
          created_at: "Thu Aug 18 17:07:06 +0000 2016",
          retweet_count: 0,
          text: "@O2 issue is I can't buy a fing phone from u!!",
          user: {
          }
        },
        {
          id_str: "766320531608002561",
          created_at: "Thu Aug 18 17:07:06 +0000 2017",
          retweet_count: 1,
          text: "@O2 issue is I can't buy a fing phone from u!!",
          user: {
          }
        }
      ],

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
      <div className="container">
        <div className="col-md-12">
          <Tweets
            tweets={ this.state.tweetsFromServer }
            statuses={ this.state.statuses }
            searchTweets={ (tweetQuery) => this._getTweets(tweetQuery) }
          />
        </div>
      </div>
    );
  }
  _getTweets(tweetQuery = this.state.tweetRequest) {
    console.log('tweetQuery', tweetQuery);
    console.log('this.state.tweetRequest', this.state.tweetRequest);
    const { args } = tweetQuery;
    console.log('args', args);
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
  }
}


// 1 - function to pass down query
// 2 - function to update <Project /> component state
// 3 - pass down props to <TweetList />

/*
 pass down props of statues in <TweetList /> component map
 */

// id
// id_str (stringified id)
// created_at (date)
// favorite_count
// retweet_count
// source (NOT SURE)
// text
//