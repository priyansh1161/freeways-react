import React from 'react';

import { DateRangePicker } from 'react-dates';

import BikeCard from '../../modules/BikeCard';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bikesActions from '../../actions/bikesAction';
import NothingToShow from '../../modules/NothingToShow';
import Cart from '../Cart';
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
    this.selectLocation = this.selectLocation.bind(this);
  }

  componentWillMount(){
    // fetch locations
    this.props.actions.getLocations()
  }

  componentWillReceiveProps({bikes, locations}){
    this.setState({ bikes, locations, selectedLocation : locations[0].__id });
  }

  submit(){
    if(!this.state.startDate || !this.state.endDate){
      // send some toast to select dates;
    }
    else {
      let state = this.state;
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
  selectLocation(e){
    this.setState({ selectedLocation : e.target.value});
    this.props.actions.selectBikeLocation(e.target.value);
  }
  render(){
    const smallDevice = window.matchMedia('(max-width: 768px)').matches;
    const orientation = smallDevice ? 'vertical' : 'horizontal';
    return (
      <div>
        <div className="box-filters">
          <select className="select-place" onChange={this.selectLocation}>
            {this.state.locations.map(curr => <option value={curr.__id} key={curr.__id}>{curr.name}</option> )}
          </select>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            withFullScreenPortal={smallDevice}
            orientation={orientation}
          />
          <button className="btn btn-primary btn-place" onClick={this.submit} >Search</button>
        </div>
        <div className="container-fluid">
          <div className="row">
            { Object.keys(this.state.bikes).length ? this.generateCards() : <NothingToShow />}
          </div>
          <Cart location={this.state.selectedLocation}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
          />
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
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Rides);
