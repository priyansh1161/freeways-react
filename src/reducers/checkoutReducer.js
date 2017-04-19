import initialState from './initialState';
import {STAY_CHECKOUT_INIT} from '../constants/actionTypes';

export default function staysReducer(state = initialState.stayCheckout, action) {
  console.log(action);
  if(action.type === STAY_CHECKOUT_INIT)
    return action.payload;
  else
    return state;
}
