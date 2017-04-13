import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import Dashboard from './components/Dashboard';
import Rides from './containers/Rides';
import Stays from './containers/Stays';
import Stay from './containers/Stay';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="rides" component={Rides}/>
    <Route path="stays">
      <IndexRoute component={Stays}/>
      <Route path=":id" component={Stay}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
