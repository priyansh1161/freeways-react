import initialState from './initialState';
import {CITY_ARRAY_LOAD_SUCCESS, PLACES_ARRAY_LOAD_SUCCESS} from '../constants/actionTypes';

export default function dashboardReducer(state = initialState.dashboard, action) {
  let newState = JSON.parse(JSON.stringify(state));
  if(action.type === CITY_ARRAY_LOAD_SUCCESS){
    newState['cities'] = [...action.payload];
    return newState;
  }
  else if(action.type === PLACES_ARRAY_LOAD_SUCCESS){
    newState['places'] = [...action.payload];
    return newState;
  }
  else
    return state;
}
