import axios from 'axios';
import {BIKE_LOAD_SUCCESS, LOCATIONS_LOAD_SUCCESS, SELECTED_LOCATION_CHANGE } from '../constants/actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { devBaseURI as baseURI } from '../constants/resources';
function bikesLoadSuccess(payload) {
  return { type : BIKE_LOAD_SUCCESS , payload };
}
function loadLocations(payload) {
  return { type : LOCATIONS_LOAD_SUCCESS , payload };
}

export function getBikes(city, startDate, endDate, qty = 10) {
  return function (dispatch){
    dispatch(showLoading());
    axios.get(`${baseURI}/api/v1/results/${city}/${startDate}/${endDate}`)
      .then(({data }) => {
        // the current API i am dealing with sucks a big time, and since i don't know if that same
        // API is consumed by control and merchants access points i cant change it.
        let bikes = {};
        for(let i =0;i<data.bikes.length;i++){
          let id = data.bikes[i].bikeId;
          if(!bikes[id]) {
            bikes[id] = {
              _id : data.bikes[i]._id,
              bikeId : data.bikes[i].bikeId,
              vendors : {}
            };
            bikes[id].vendors[data.bikes[i].vendor._id] = data.bikes[i].vendor;
            for(let j=0;j<data.dictionary.length;j++){
              let dictionary = data.dictionary[j];
              if(dictionary._id === bikes[id].bikeId){
                bikes[id].dictionary = dictionary;
              }
            }
          }
          else {
            // add new vendor
            bikes[id].vendors[data.bikes[i].vendor._id] = data.bikes[i].vendor;
          }
          // console.log(data.prices[data.bikes[i].vendor._id][id],'r');
          // now add vendor details, as i told ya back end API sucks
          bikes[id].vendors[data.bikes[i].vendor._id].price = data.prices[data.bikes[i].vendor._id][id];
        }
        dispatch(bikesLoadSuccess(bikes));
        dispatch(hideLoading());
      })
      .catch((err) => {
        console.log(err);
        // dispatch(bikesLoadFailure(err));
        dispatch(hideLoading());
        throw(err); // catch it at dispatch point
      });
  }
}

export function getLocations(){
  return function(dispatch){
    axios.get(`${baseURI}/api/locations`)
      .then((locations) => {
        dispatch(loadLocations(locations.data));
        // dispatch(locations);
      })
      .catch((err) =>{
        throw err;
      })
  }
}

export function selectBikeLocation(payload){
  return {type: SELECTED_LOCATION_CHANGE, payload}
}
