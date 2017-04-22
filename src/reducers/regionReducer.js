import initialState from './initialState';
import {STAY_SELECT_SUCCESS} from '../constants/actionTypes';

export default function staysReducer(state = initialState.selectedStayDetails, action) {
  if(action.type === STAY_SELECT_SUCCESS)
    return action.payload;
  else
    return state;
}
