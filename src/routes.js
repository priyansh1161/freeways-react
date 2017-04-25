import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import Dashboard from './components/Dashboard';
import Rides from './containers/Rides';
import Stays from './containers/Stays';
import Stay from './containers/Stay';
import City from './containers/City';
import Auth from './containers/Auth';
import UserProfile from './containers/UserProfile';
import NotFoundPage from './components/NotFoundPage';
import RegionComponent from './components/RegionComponent';
import StateComponent from './components/StateComponent';
import CityComponent from './components/CityComponent';
import Checkout from './components/Checkout';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="rides" component={Rides}/>
    <Route path="stays">
      <IndexRoute component={Stays}/>
      <Route path=":id" component={Stay}/>
    </Route>
    <Route path="place/:id" component={City}/>
    <Route path="auth" component={Auth}/>
    <Route path="profile" component={UserProfile}/>
    <Route path="region/:id" component={RegionComponent}/>
    <Route path="state/:id" component={StateComponent}/>
    <Route path="city/:id" component={CityComponent}/>
    <Route path="checkout/:id" component={Checkout}/>
    {/*<Route path="*" component={NotFoundPage}/>*/}
  </Route>
);
