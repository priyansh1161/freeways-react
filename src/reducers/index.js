// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import cart from './cartReducer';
import bikes from './bikesReducer';
import auth from './authReducer';
import stays from './staysReducer';
import BikeLocations from './bikeLocationsReducer';
import selectedLocation from './bikeLocationSelectReducer';
import staysLocations from './stayLocationReducer';
export default combineReducers({
  bikes,
  cart,
  auth,
  stays,
  BikeLocations,
  staysLocations,
  selectedLocation,
  routing: routerReducer,
  loadingBar : loadingBarReducer,
});
