import React from 'react';

import { InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import { DateRangePicker } from 'react-dates';

import BikeCard from '../../modules/BikeCard';

import 'react-dates/lib/css/_datepicker.css';
import './styles.css';

const Rides = () => (
  <div>
    <div className="box-filters">
      <select className="select-place">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>  
      <DateRangePicker/>
      <button className="btn btn-primary btn-place">Search</button>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <BikeCard name="Yamaha Fasino" model="STD" mileage="50" price="600" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478931420/wa1gj78s5fjtlsyzsqzi.jpg"/>
              </div>
              <div className="col-sm-6 col-md-4">
                <BikeCard name="Yamaha FZS" model="F1" mileage="50" price="450" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478931906/decyfz9a7xvhynruyybj.jpg"/>
              </div>
              <div className="col-sm-6 col-md-4">
                <BikeCard name="KTM Duke" model="200" mileage="22" price="1150" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478932015/e075tshgnzyawmjzdkky.jpg"/>
              </div>
              <div className="col-sm-6 col-md-4">
                <BikeCard name="Honda Dio" model="110" mileage="40" price="350" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478934712/yzsy5twp7v7sffill0ec.jpg"/>
              </div>
              <div className="col-sm-6 col-md-4">
                <BikeCard name="Bajaj Avenger" model="Cruise 220" mileage="40" price="450" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478933672/njxtmlex4xsex8xhztcs.jpg"/>
              </div>
              <div className="col-sm-6 col-md-4">
                <BikeCard name="Royal Enfield Bullet" model="Classic 350" mileage="25" price="900" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478933809/ya4vcit2rmbpnafheusn.jpg"/>
              </div>
            </div>
          </div>
  </div>
);

export default Rides;