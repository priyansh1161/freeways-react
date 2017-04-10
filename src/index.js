/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import { syncHistoryWithStore } from 'react-router-redux';
import 'bootswatch/paper/bootstrap.min.css';
import {getBikes} from  './actions/bikesAction'; //for testing only
const store = configureStore();
// setTimeout(()=> store.dispatch(getBikes('calangute',1491727803000,1491814203000)),5000);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);



render(
<Provider store={store}>
  <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
