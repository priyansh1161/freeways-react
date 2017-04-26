import initialState from './initialState';
import {PLACES_LOAD_SUCCESS} from '../constants/actionTypes';

export default function regionReducer(state = initialState.place, action) {
  if(action.type === PLACES_LOAD_SUCCESS)
    return action.payload;
  else
    return state;
}
