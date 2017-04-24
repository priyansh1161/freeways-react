import initialState from './initialState';
import {ORDERS_LOAD_SUCCESS} from '../constants/actionTypes';

export default function ordersReducer(state = initialState.orders, action) {
  if(action.type === ORDERS_LOAD_SUCCESS)
    return action.payload;
  else
    return state;
}
