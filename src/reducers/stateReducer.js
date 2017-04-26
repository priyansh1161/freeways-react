import initialState from './initialState';
import {STATE_LOAD_SUCCESS} from '../constants/actionTypes';

export default function regionReducer(state = initialState.state, action) {
  if(action.type === STATE_LOAD_SUCCESS)
    return action.payload;
  else
    return state;
}
