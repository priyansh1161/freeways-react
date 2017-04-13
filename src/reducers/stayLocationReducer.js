import initialState from './initialState';
import {STAY_LOCATION_LOAD_SUCCESS} from '../constants/actionTypes';

export default function (state = initialState.locations, action) {
  if(action.type === STAY_LOCATION_LOAD_SUCCESS)
    return action.payload;
  return state;
}
