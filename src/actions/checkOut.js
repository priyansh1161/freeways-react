import { STAY_CHECKOUT_INIT, STAY_CHECKOUT_FAILURE } from '../constants/actionTypes';
import axios from 'axios';
import {devBaseURI as baseURI} from '../constants/resources';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

function stayCheckout (payload){
  return {type : STAY_CHECKOUT_INIT, payload};
}
export function initCheckOut(userId, stayId, bookingType, startDate, endDate, largeAmount){
  return function (dispatch) {
    showLoading();
    axios.post(`${baseURI}/txn`,{
      userId,
      startDate,
      endDate,
      largeAmount,
      stayId,
      bookingType
    })
      .then(({data}) => {
        hideLoading();
        console.log(data);
        dispatch(stayCheckout(data));
      })
      .catch((err) => {
        hideLoading();
        console.log(err);
        throw err;
      });
  };
}
