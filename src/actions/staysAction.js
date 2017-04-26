import axios from 'axios';
import { STAY_DETAILS_LOAD_SUCCESS, STAYS_LOAD_SUCCESS, STAY_LOCATION_LOAD_SUCCESS, STAY_SELECT_SUCCESS, HOST_LOAD_SUCCESS, HOST_LOAD_FAILURE } from '../constants/actionTypes';
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
      });
  };
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

export function setDatesAndRooms (startDate, endDate, rooms){
  return { type : STAY_SELECT_SUCCESS, payload : {
    startDate,
    endDate,
    rooms
  }
  };
}

export function getStayDetails(id){
  return function(dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/stays/custom/${id}`)
      .then(({data}) =>{
        dispatch(hideLoading());
        dispatch(stayDetailsLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type : '_FAILURE',
          payload : err.message || "Can't load the required details"
        })
      });
  };
}

export function getHostDetails(id) {
  return function (dispatch) {
    dispatch(showLoading());
    axios.get(`${baseURI}/api/host/${id}`)
      .then(({data}) => {
        console.log(data);
        dispatch(hideLoading());
        dispatch({
          type : HOST_LOAD_SUCCESS,
          payload : data
        });
      })
      .catch(err => dispatch({type : HOST_LOAD_FAILURE, payload : err.message}));
  }
}

export function getTopStays(city, startDate, endDate,rooms, limit, offset) {
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/stays/?limit=4`)
      .then(({data}) => {
        dispatch(hideLoading());
        dispatch(allStaysLoadSuccess(data));
      })
      .catch((err) => {
        dispatch(hideLoading());
        throw err;
      });
  };
}
