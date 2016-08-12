import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import AppRoutes from './components/AppRoutes';

const appEntry = document.querySelector('#container');

window.onload = () => {
  ReactDOM.render(
    <Router history={ hashHistory }>
      { AppRoutes }
    </Router>,
    appEntry
  );

};
