// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import cart from './cartReducer';
import bikes from './bikesReducer';
import auth from './authReducer';
import stays from './staysReducer';
import BikeLocations from './bikeLocationsReducer';
import selectedLocation from './bikeLocationSelectReducer';
import staysLocations from './stayLocationReducer';
import stay from './stayReducer';
import selectedStayDetails from './selectedStayDetailsReducer';
import checkout from './checkoutReducer';
import error from './errorHandler';
export default combineReducers({
  error,
  bikes,
  cart,
  auth,
  stays,
  stay,
  checkout,
  BikeLocations,
  staysLocations,
  selectedLocation,
  selectedStayDetails,
  routing: routerReducer,
  loadingBar : loadingBarReducer,
});
