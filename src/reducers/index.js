// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import bikes from './bikesReducer';
export default combineReducers({
  routing: routerReducer,
  loadingBar : loadingBarReducer,
  bikes
});
