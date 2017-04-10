import initialState from './initialState';
import {LOCATIONS_LOAD_SUCCESS} from '../constants/actionTypes';

export default function (state = initialState.locations, action) {
  if(action.type === LOCATIONS_LOAD_SUCCESS)
    return action.payload;
  return state;
}
