import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';

// executed `npm run eject` and added `npm install sass-loader
// node-sass --save-dev` to use sass in the app
import './sass/main.sass';

// requires codebird API for twatter API OAuth
import Codebird from 'codebird'
const cb = new Codebird();

// instantiate codebird to access twatter API
import { key, secret } from '../keys'
cb.setConsumerKey(key, secret);
/*
 Token management
 https://apps.twitter.com/
 */

/*
Twatter API GET request
 https://api.twitter.com/1.1/search/tweets.json?q=
  */

const appEntry = document.querySelector('#root');

window.onload = () => {
  console.log('store: ', store)
  ReactDOM.render(
    <App />,
    appEntry
  );
};
