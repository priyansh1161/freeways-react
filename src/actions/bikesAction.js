import axios from 'axios';
import {BIKE_LOAD_SUCCESS, BIKE_LOAD_FAILURE } from '../constants/actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { prodBaseURI } from '../constants/resources';
export function bikesLoadSuccess(payload) {
  return { type : BIKE_LOAD_SUCCESS , payload };
}
export function bikesLoadFailure(payload) {
  return { type : BIKE_LOAD_FAILURE , payload };
}

export function getBikes(city, startDate, endDate, qty = 10) {
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${prodBaseURI}/api/v1/results/${city}/${startDate}/${endDate}`)
      .then((bikes) => {
        console.log(bikes);
        dispatch(bikesLoadSuccess(bikes));
        dispatch(hideLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(bikesLoadFailure(err));
        dispatch(hideLoading());
      });
  }
}
