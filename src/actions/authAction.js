import {LOG_IN_SUCCESS, LOG_IN_FAILURE, VERIFICATION_SUCCESS, VERIFICATION_FAILURE, ORDERS_LOAD_SUCCESS, SIGN_OUT} from '../constants/actionTypes';
import {devBaseURI as baseURI} from '../constants/resources';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from 'axios';
function logInSuccess(payload){
  return {type : LOG_IN_SUCCESS, payload};
}
 function logInFailure(payload){
  return {type : LOG_IN_FAILURE, payload };
}

export function bootUp(){
   return function(dispatch){
     axios.get(`${baseURI}/api/v1/profile`)
       .then(({data}) => {
          if(data.success){
            console.log(data,'dxcfgvbhjnm');
            dispatch(logInSuccess(data.user));
          }
       })
       .catch((err) => logInFailure(err.message));
   }
}

export function localLogIn(email, password){
  return function (dispatch){
    dispatch(showLoading());
    axios.post(`${baseURI}/auth/login`,{email,password})
      .then(({data}) => {
        dispatch(hideLoading());
        if(data.success){
          dispatch(logInSuccess(data.user));
        }
        else {
          dispatch(hideLoading());
          dispatch(logInFailure(data.message || 'Wrong Email id or Password'));
          // throw new Error(data.message);
        }
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch(logInFailure(err.message || 'Wrong Email id or Password'));
      });
  };
}
export function localSignUp(email, name, password) {
  return function(dispatch) {
    dispatch(showLoading());
    axios.post(`${baseURI}/auth/signup`,{email, username : name, password})
      .then(({data}) => {
        dispatch(hideLoading());
        if(data.success){
          dispatch(logInSuccess(data.user));
        }
        else {
          dispatch(logInFailure(data.message || 'Something Went Wrong..'));
        }
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch(logInFailure(err.message || 'Something Went Wrong'));
      });
  };
}
export function phoneVerification(status, msg) {
    return status ? {
      type : VERIFICATION_SUCCESS,
      payload : true
    } : {
        type : VERIFICATION_FAILURE,
        payload : msg || 'Failed to Verify your Phone number, please Try again'
    };
}

export function getOrders(id) {
  return function (dispatch) {
    dispatch(showLoading());
    axios.get(`${baseURI}/api/custom/orders?id=${id}`)
      .then(({data}) => {
        console.log(data);
        dispatch({
          type : ORDERS_LOAD_SUCCESS,
          payload : data
        });
        dispatch(hideLoading());
    })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type : '_FAILURE',
          payload : err.message
        })
      })
  }
}

export function signOut() {
  return {
    type : SIGN_OUT
  }
}
