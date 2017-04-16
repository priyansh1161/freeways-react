import initialState from './initialState';
import {STAY_DETAILS_LOAD_SUCCESS} from '../constants/actionTypes';

export default function staysReducer(state = initialState.stays, action) {
  if(action.type === STAY_DETAILS_LOAD_SUCCESS)
    return action.payload;
  else
    return state;
}
