import {LOG_IN} from '../constants/actionTypes';
import {devBaseURI} from '../constants/resources';
import axios from 'axios';
export function logInSuccess(payload){
  return {type : LOG_IN, payload};
}
export function logIn(email, password){
  return function (dispatch){
    axios.post(`${devBaseURI}/auth/login`,{email,password})
      .then((info) => {
        if(info.success){
          dispatch(logInSuccess(info.user));
        }
        else {
          
        }
      });
  }
}
