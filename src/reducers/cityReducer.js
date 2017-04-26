import initialState from './initialState';
import {CITY_LOAD_SUCCESS} from '../constants/actionTypes';

export default function regionReducer(state = initialState.city, action) {
  if(action.type === CITY_LOAD_SUCCESS)
    return action.payload;
  else
    return state;
}
