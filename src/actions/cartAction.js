import {ADD_TO_CART} from '../constants/actionTypes';

export function addBikeToCart(payload) {
  return { type : ADD_TO_CART , payload };
}
export function addToCart(newBike) {
  return function (dispatch) {
    dispatch(addBikeToCart(newBike));
  }
}