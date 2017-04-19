import {LOG_IN_SUCCESS, LOG_IN_FAILURE, VERIFICATION_SUCCESS, VERIFICATION_FAILURE} from '../constants/actionTypes';
import {devBaseURI as baseURI} from '../constants/resources';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from 'axios';
function logInSuccess(payload){
  return {type : LOG_IN_SUCCESS, payload};
}
 function logInFailure(payload){
  return {type : LOG_IN_FAILURE, payload };
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
