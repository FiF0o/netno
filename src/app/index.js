import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import AppRoutes from './components/AppRoutes';
import store from './store';
import { Provider } from 'react-redux';

const appEntry = document.querySelector('#container');

window.onload = () => {
  console.log('store: ', store)
  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        { AppRoutes }
      </Router>
    </Provider>,
    appEntry
  );
};
