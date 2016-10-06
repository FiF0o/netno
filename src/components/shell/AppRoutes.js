/**
 * Created by jonlazarini on 12/08/16.
 */
import React from 'react';
/*
 Importing components here to be rendered depending on the route we are at
 in - App.js -
 */
import { Route, IndexRoute } from 'react-router';

import Main from '../Main';
import Home from '../pages/Home';
import Login from '../pages/Login'
import Search from '../pages/Search'

export default (
  <Route path='/' component={ Main }>
    <IndexRoute component={ Home } />
    <Route path='login' component={ Login }/>
    <Route path='search' component={ Search }/>
  </Route>
)
