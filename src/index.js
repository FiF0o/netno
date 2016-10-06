import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';
// import jQuery from 'jquery';
// console.log('$: ', jQuery)
// window.$ = window.jQuery = jQuery;

// executed `npm run eject` and added `npm install sass-loader
// node-sass --save-dev` to use sass in the app
import './sass/main.sass';

const appEntry = document.querySelector('#root');

window.onload = () => {
  console.log('store: ', store)
  ReactDOM.render(
    <App />,
    appEntry
  );
};
