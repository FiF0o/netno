import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import AppRoutes from './components/AppRoutes';

const appEntry = document.getElementById('container');

ReactDOM.render(
  <Router history={ hashHistory }>
    { AppRoutes }
  </Router>,
  appEntry
);
