import initialState from './initialState';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants/actionTypes';

export default function cartReducer( state = initialState.cart, action ){
  let newState = JSON.parse(JSON.stringify(state)); // deep copy
  if(action.type === ADD_TO_CART ){
    // add new item to cart
    let alreadyExists = false;

    for(let i = 0; i<newState.length; i++){
      if(newState[i].id === action.payload.id ){
         newState[i].qty++;
         alreadyExists = true;
      }
    }
    return alreadyExists ? newState : [...state, Object.assign({},action.payload)];
  }
  else if (action.type === REMOVE_FROM_CART ){
    for(let i = 0; i<newState.length; i++){
      if(newState[i].id === action.payload ){
        if(newState[i].qty === 1 )
          newState.splice(1,i);
        else
          newState[i].qty--;
      }
    }
    return newState;
  }

  return state;
}
