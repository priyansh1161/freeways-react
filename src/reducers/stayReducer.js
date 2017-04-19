import initialState from './initialState';
import {STAY_DETAILS_LOAD_SUCCESS, HOST_LOAD_SUCCESS} from '../constants/actionTypes';

export default function staysReducer(state = initialState.stays, action) {
  if(action.type === STAY_DETAILS_LOAD_SUCCESS)
    return action.payload;
  else if (action.type === HOST_LOAD_SUCCESS){
    let newState = JSON.parse(JSON.stringify(state));
    newState['host'] = action.payload;
    console.log(newState);
    return newState;
  }
  else
    return state;
}
