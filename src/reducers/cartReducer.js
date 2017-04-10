import initialState from './initialState';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants/actionTypes';

export default function cartReducer( state = initialState.cart, action ){
  if(action.type === ADD_TO_CART ){
    // add new item to cart
    return [...state, Object.assign({},action.payload)];
  }
  else if (action.type === REMOVE_FROM_CART ){
    return [...state].filter(curr => curr._id === action.payload );
  }

  return state;
}
