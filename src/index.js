import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';


// import jQuery from 'jquery';
// console.log('$: ', jQuery)
// window.$ = window.jQuery = jQuery;
//
// import Bootstrap from '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
// console.log('Bootstrap: ', Bootstrap)
// window.Bootstrap = Bootstrap
// Bootstrap.$ = jQuery;

// executed `npm run eject` and added `npm install sass-loader
// node-sass --save-dev` to use sass in the app
import './sass/main.sass';

// import codebirdAPI from './helpers/codebirdAPI'
//
// const tweetQ =  { q: "toto", count: 15 };
// // loads Twatter API GET request to fetch tweets
// codebirdAPI(tweetQ);

const appEntry = document.querySelector('#root');

window.onload = () => {
  console.log('store: ', store)
  ReactDOM.render(
    <App />,
    appEntry
  );
};
