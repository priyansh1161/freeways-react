import {LOG_IN_SUCCESS, LOG_IN_FAILURE} from '../constants/actionTypes';
import {devBaseURI as baseURI} from '../constants/resources';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
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
      .then((info) => {
        dispatch(hideLoading());
        if(info.success){
          dispatch(logInSuccess(info.user));
        }
        else {
          // dispatch(logInFailure(info));
          throw new Error(info.message);
        }
      })
      .catch((err) => {
        dispatch(hideLoading());
        throw(err);
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
          throw new Error(data.message);
        }
      })
      .catch((err) => {
        dispatch(hideLoading());
        console.log(err,'gcv');
        throw(err);
      });
  };
}
