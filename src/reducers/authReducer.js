import initialState from './initialState';
import {LOG_IN_SUCCESS, VERIFICATION_SUCCESS, SIGN_OUT} from '../constants/actionTypes';

export default function authReducer(state = initialState.user, action) {
  if(action.type === LOG_IN_SUCCESS) {
    return action.payload;
  }
  else if(action.type === VERIFICATION_SUCCESS){
    let newState = JSON.parse(JSON.stringify(state));
    newState.verified = true;
    return newState;
  }
  else if(action.type === SIGN_OUT )
    return initialState.user;

  return state;
}
