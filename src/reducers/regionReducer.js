import initialState from './initialState';
import {REGION_LOAD_SUCCESS} from '../constants/actionTypes';

export default function regionReducer(state = initialState.region, action) {
  if(action.type === REGION_LOAD_SUCCESS)
    return action.payload;
  else
    return state;
}
