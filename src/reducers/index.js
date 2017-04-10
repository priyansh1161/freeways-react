// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import cart from './cartReducer';
import bikes from './bikesReducer';
import auth from './authReducer';
import stays from './staysReducer';
import BikeLocations from './locationsReducer';
import selectedLocation from './bikeLocationSelectReducer';
export default combineReducers({
  bikes,
  cart,
  auth,
  stays,
  BikeLocations,
  selectedLocation,
  routing: routerReducer,
  loadingBar : loadingBarReducer,
});
