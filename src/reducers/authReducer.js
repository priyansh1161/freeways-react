import initialState from './initialState';
import {LOG_IN_SUCCESS} from '../constants/actionTypes';

export default function authReducer(state = initialState.user, action) {
  if(action.type === LOG_IN_SUCCESS) {
    return action.payload;
  }
  return state;
}
