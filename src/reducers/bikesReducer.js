import initialState from './initialState';
import {BIKE_LOAD_SUCCESS} from '../constants/actionTypes';

export default function bikesReducer( state = initialState.bikes, action ){
  if(action.type === BIKE_LOAD_SUCCESS ){
    return action.payload;
  }
  return state;
}
