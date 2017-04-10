import initialState from './initialState';
import {STAYS_LOAD_SUCCESS} from '../constants/actionTypes';

export default function staysReducer(state = initialState.stays, action) {
  if(action.type === STAYS_LOAD_SUCCESS)
    return action.payload;
  else
    return state;
}
