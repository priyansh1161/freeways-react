import React from 'react';

import { InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import { DateRangePicker } from 'react-dates';

import BikeCard from '../../modules/BikeCard';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bikesActions from '../../actions/bikesAction';
import 'react-dates/lib/css/_datepicker.css';
import './styles.scss';

class Rides extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate : null,
      endDate : null,
      focusedInput : null,
      locations : [],
      bikes : {},
      selectedLocation : ''
    };
    this.submit = this.submit.bind(this);
    this.generateCards = this.generateCards.bind(this);
  }
  componentWillReceiveProps({bikes, locations}){
    this.setState({ bikes, locations, selectedLocation : locations[0].__id });
  }
  componentWillMount(){
    // fetch locations
    this.props.actions.getLocations()
  }
  submit(e){
    if(!this.state.startDate || !this.state.endDate){
      // send some toast to select dates;
    }
    else {
      let state = this.state;
      console.log(state.selectedLocation);
      this.props.actions.getBikes(state.selectedLocation, state.startDate, state.endDate);
    }
  }
  generateCards(){
    let toReturn =[];

    for (let id in this.state.bikes){
      let curr = this.state.bikes[id];
      let name = `${curr.dictionary.manufacturer} ${curr.dictionary.name}`;
      let model = curr.dictionary.model;
      let imgURL = curr.dictionary.img;
      let mileage = curr.dictionary.mileage;
      let bikeId = curr.bikeId;
      let id = curr._id;
      // find min price
      let price = 99999;
      let vendor = {};
      for(let vId in curr.vendors){
        let CurrVendor = curr.vendors[vId];
        if(CurrVendor && price > CurrVendor.price.dRate ){
          price = CurrVendor.price.dRate;
          vendor = CurrVendor;
        }
      }
      toReturn.push(
        <div className="col-sm-6 col-md-4" key={bikeId}>
          <BikeCard name={name}
                    model={model}
                    mileage={mileage}
                    price={price}
                    imageURL={imgURL}
                    id ={id}
                    vendor={vendor}
          />
        </div>
      )
    }
    return toReturn;
  }
  render(){
    return (
      <div>
        <div className="box-filters">
          <select className="select-place" onChange={e => this.setState({ selectedLocation : e.target.value})}>
            {this.state.locations.map(curr => <option value={curr.__id} key={curr.__id}>{curr.name}</option> )}
          </select>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            withFullScreenPortal={true}
            orientation="vertical"
          />
          <button className="btn btn-primary btn-place" onClick={this.submit} >Search</button>
        </div>
        <div className="container-fluid">
          <div className="row">
            {this.generateCards()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let locations = state.BikeLocations.sort(function(a, b) {
    let locationA = a.name.toUpperCase();
    let locationB = b.name.toUpperCase();
    return locationA < locationB ? -1 : 1;
  });
  return {
    bikes : state.bikes,
    locations
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(bikesActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Rides);
