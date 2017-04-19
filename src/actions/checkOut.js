import { STAY_CHECKOUT_INIT, STAY_CHECKOUT_FAILURE } from '../constants/actionTypes';
import axios from 'axios';
import {devBaseURI as baseURI} from '../constants/resources';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

function stayCheckout (payload){
  return {type : STAY_CHECKOUT_INIT, payload};
}
function stayCheckOutFailure (payload){
  return {type : STAY_CHECKOUT_FAILURE, payload };
}
export function initCheckOut(userId,
                             startDate,
                             endDate,
                             largeAmount,
                             stayId,
                             bookingType){
  return function (dispatch) {
    dispatch(showLoading());
    axios.post(`${baseURI}/txn`,{
      userId,
      startDate,
      endDate,
      largeAmount,
      stayId,
      bookingType
    })
      .then(({data}) => {
        dispatch(hideLoading());
        console.log(data);
        dispatch(stayCheckout(data));
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch(stayCheckOutFailure(err.message));
      });
  };
}
