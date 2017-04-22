import {
  CITY_LOAD_FAILURE,
  CITY_LOAD_SUCCESS,
  STATES_LOAD_FAILURE,
  STATES_LOAD_SUCCESS,
  PLACES_LOAD_SUCCESS,
  PLACES_LOAD_FAILURE,
  REGION_LOAD_FAILURE,
  REGION_LOAD_SUCCESS
} from '../constants/actionTypes';
import {devBaseURI as baseURI} from '../constants/resources';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from 'axios';
export function getRegions(id){
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/places/region?id=${id}`)
      .then(({data}) => {
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
