import initialState from './initialState';
import {BIKE_LOAD_SUCCESS, BIKE_LOAD_FAILURE} from '../constants/actionTypes';

export default function bikesReducer( state = initialState.bikes, action ){
  if(action.type === BIKE_LOAD_SUCCESS ){
    return action.payload;
  }
  else if (action.type === BIKE_LOAD_FAILURE){
      // failed to load new bikes not in use as of now.
    return state;
  }
  return state;
}
