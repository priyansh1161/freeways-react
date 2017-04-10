import axios from 'axios';
import { STAY_DETAILS_LOAD_SUCCESS, STAYS_LOAD_SUCCESS } from '../constants/actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { devBaseURI as baseURI } from '../constants/resources';

function stayDetailsLoadSuccess(payload){
  return {type : STAYS_LOAD_SUCCESS, payload};
}

export function getAllStays(city, startDate, endDate,rooms, limit, offset) {
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/stays/custom/available?city=${city}&start=${startDate}&end=${endDate}&rooms=${rooms}`)
      .then((allStays) => {
        dispatch(hideLoading());
        dispatch(stayDetailsLoadSuccess(allStays));
      })
      .catch((err) => {
        dispatch(hideLoading());
        throw err;
      })
  }
}

