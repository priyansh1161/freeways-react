import initialState from './initialState';
import {ADD_TO_CART} from '../constants/actionTypes';

export default function cartReducer( state = initialState.cart, action ){
  if(action.type === ADD_TO_CART ){
    // add new item to cart
    return [...state, Object.assign({},action.payload)];
  }

  return state;
}
