import { RESET_ERRORS } from '../constants/actionTypes';
export function resetError(){
  return {
    type : RESET_ERRORS,
    payload : null
  };
}
