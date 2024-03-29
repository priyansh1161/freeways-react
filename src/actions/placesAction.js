import {
  CITY_LOAD_FAILURE,
  CITY_LOAD_SUCCESS,
  STATES_LOAD_FAILURE,
  STATES_LOAD_SUCCESS,
  PLACES_LOAD_SUCCESS,
  PLACES_LOAD_FAILURE,
  REGION_LOAD_FAILURE,
  REGION_LOAD_SUCCESS,
  CITY_ARRAY_LOAD_SUCCESS,
  PLACES_ARRAY_LOAD_SUCCESS
} from '../constants/actionTypes';
import {devBaseURI as baseURI} from '../constants/resources';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from 'axios';
export function getRegions(id){
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/places/region?id=${id}`)
      .then(({data}) => {
        console.log(data);
        dispatch(hideLoading());
        dispatch({
          type : REGION_LOAD_SUCCESS,
          payload : data
        });
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type : REGION_LOAD_FAILURE,
          payload : err.message || 'Something Went wrong'
        });
      });
  };
}

export function getStates(id){
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/places/state?id=${id}`)
      .then(({data}) => {
        dispatch(hideLoading());
        dispatch({
          type : STATES_LOAD_SUCCESS,
          payload : data
        });
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type : STATES_LOAD_FAILURE,
          payload : err.message || 'Something Went wrong'
        });
      });
  };
}

export function getCity(id){
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/places/city?id=${id}`)
      .then(({data}) => {
      console.log(data,'city');
        dispatch(hideLoading());
        dispatch({
          type : CITY_LOAD_SUCCESS,
          payload : data
        });
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type : CITY_LOAD_FAILURE,
          payload : err.message || 'Something Went wrong'
        });
      });
  };
}

export function getPlace(id){
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/places/${id}`)
      .then(({data}) => {
        console.log(data);
        dispatch(hideLoading());
        dispatch({
          type : PLACES_LOAD_SUCCESS,
          payload : data
        })
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type : PLACES_LOAD_FAILURE,
          payload : err.message
        });
      });
  }
}

export function getTopCities(){
  return function (dispatch) {
    axios.get(`${baseURI}/api/city/?limit=4`)
      .then(({data}) => {
        console.log(data);
        dispatch(hideLoading());
        dispatch({
          type : CITY_ARRAY_LOAD_SUCCESS,
          payload : data
        })
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type : CITY_LOAD_FAILURE,
          payload : err.message
        });
      });
  }
}

export function getTopPlaces(){
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/places/?limit=4&skip=1`)
      .then(({data}) => {
        console.log(data);
        dispatch(hideLoading());
        dispatch({
          type : PLACES_ARRAY_LOAD_SUCCESS,
          payload : data
        })
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type : PLACES_LOAD_FAILURE,
          payload : err.message
        });
      });
  }
}
