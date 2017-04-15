import axios from 'axios';
import { STAY_DETAILS_LOAD_SUCCESS, STAYS_LOAD_SUCCESS, STAY_LOCATION_LOAD_SUCCESS } from '../constants/actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { devBaseURI as baseURI } from '../constants/resources';

function allStaysLoadSuccess(payload){
  return {type : STAYS_LOAD_SUCCESS, payload};
}
function stayLocationLoadSuccess(payload){
  return {type : STAY_LOCATION_LOAD_SUCCESS, payload};
}
function stayDetailsLoadSuccess(payload){
  return {type : STAY_DETAILS_LOAD_SUCCESS, payload};
}
export function getAllStays(city, startDate, endDate,rooms, limit, offset) {
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/stays/custom/available?city=${city}&start=${startDate}&end=${endDate}&rooms=${rooms}`)
      .then(({data}) => {
        dispatch(hideLoading());
        dispatch(allStaysLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(hideLoading());
        throw err;
      })
  }
}
export function getLocations(){
  return function(dispatch){
    axios.get(`${baseURI}/api/stays/custom/locations`)
      .then(({data}) => dispatch(stayLocationLoadSuccess(data)))
      .catch((err) => {
        throw err;
      });
  };
}

export function getStayDetails(id){
  return function(dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/stays/${id}`)
      .then(({data}) =>{
        dispatch(hideLoading());
        dispatch(stayDetailsLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(hideLoading());
        throw err;
      });
  };
}
