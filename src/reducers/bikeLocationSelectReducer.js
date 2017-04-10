import initialState from './initialState';
import {SELECTED_LOCATION_CHANGE} from '../constants/actionTypes';

export default function (state = initialState.selectedLocation, action) {
  if(action.type === SELECTED_LOCATION_CHANGE)
    return action.payload;
  return state;
}
