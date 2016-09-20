import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';

const appEntry = document.querySelector('#root');

window.onload = () => {
  console.log('store: ', store)
  ReactDOM.render(
    <App />,
    appEntry
  );
};
