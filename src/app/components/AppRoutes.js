/**
 * Created by jonlazarini on 12/08/16.
 */
import React from 'react';

import { Route, IndexRoute } from 'react-router';

import Main from './Main';
import Home from './Home';
import Login from './Login';
import Project from './Project';

export default (
  <Route path='/' component={ Main }>
    <IndexRoute component={ Home } />
    <Route path='login' component={ Login }/>
    <Route path='profile/:username' component={ Project } />
  </Route>
);
