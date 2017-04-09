import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import Dashboard from './components/Dashboard';
import Rides from './components/Rides';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="rides" component={Rides}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
