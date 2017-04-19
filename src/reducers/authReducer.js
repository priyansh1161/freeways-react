import initialState from './initialState';
import {LOG_IN_SUCCESS, VERIFICATION_SUCCESS} from '../constants/actionTypes';

export default function authReducer(state = initialState.user, action) {
  if(action.type === LOG_IN_SUCCESS) {
    return action.payload;
  }
  if(action.type === VERIFICATION_SUCCESS){
    let newState = JSON.parse(JSON.stringify(state));
    newState.verified = true;
    return newState;
  }
  return state;
}
