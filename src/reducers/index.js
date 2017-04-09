// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import cart from './cartReducer';
import bikes from './bikesReducer';
export default combineReducers({
  bikes,
  cart,
  routing: routerReducer,
  loadingBar : loadingBarReducer,
});
