import {ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT_SUCCESS, CHECKOUT_FAILURE} from '../constants/actionTypes';
import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {devBaseURI as baseURI} from '../constants/resources';
function addBikeToCart(payload) {
  return { type : ADD_TO_CART , payload };
}
export function addToCart(newBike) {
  return function (dispatch) {
    dispatch(addBikeToCart(newBike));
  };
}
export function removeFromCart(toRemove){
  return function (dispatch) {
    dispatch({ type : REMOVE_FROM_CART, payload : toRemove });
  };
}
function checkoutSuccess(payload){
  return {type : CHECKOUT_SUCCESS, payload };
}
function checkoutFailure(payload) {
  return { type : CHECKOUT_FAILURE, payload };
}
export function checkOut(location, userId, startDate, endDate, items){
  // only call it when user is verified
  return function(dispatch){
    dispatch(showLoading());
    axios.post(`${baseURI}/api/v1/order`,{
      location,
      startDate,
      endDate,
      userId,
      items
    })
      .then(({data})=>{
        dispatch(hideLoading());
        console.log(data);
        if(data.success){
          dispatch(checkoutSuccess(data.itemId));
        }
      })
      .catch((err)=>{
        dispatch(hideLoading());
        console.log('err',err);
        throw err;
      });
  };

}
