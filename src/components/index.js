import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import AppRoutes from './AppRoutes';

// const appEntry = document.querySelector('#container');
//
// const initRouter = () => {
//   return (
//     <Router history={ hashHistory }>
//       { AppRoutes }
//     </Router>
//   );
// };

// initRouter, appEntry

window.onload = () => {
  ReactDOM.render(
    <Router history={ hashHistory }>
      { AppRoutes }
    </Router>,
    document.querySelector('#container')
  );

};
