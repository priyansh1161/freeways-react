import React from 'react';

import StayCard from '../../modules/StayCard';
import SearchBar from '../SearchBar';
import ListCards from '../../containers/ListCards';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as placesAction from '../../actions/placesAction';
import * as staysAction from '../../actions/staysAction';
import './styles.css';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cities : [],
      places : [],
      stays : []
    }
  }

  componentWillMount(){
    this.props.placesAction.getTopCities();
    this.props.placesAction.getTopPlaces();
    this.props.staysAction.getTopStays();
  }
  componentWillReceiveProps({cities, places, stays}){
    this.setState({cities, places, stays});
  }

  render(){
    return (
      <div className="dashboard container">
        <div className="travelling-to">
          <h3>Travelling To?</h3>
          <SearchBar/>
        </div>
        <h4>Top cities to explore</h4>
        <ListCards
          className="cities"
          type="city"
          data={this.state.cities}
        />
        <h4>Top Places to explore</h4>
        <ListCards
          type='place'
          data={this.state.places}
          className="places"
        />
        <h4>Most Famous Home Stays</h4>
        <div className="stays row">
          {this.state.stays.map((curr, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <StayCard
                id={curr._id}
                imageURL={curr.photos[0]}
                title={curr.name}
                capacity={`${curr.space.beds} beds`}
                price={curr.price}
                specification={curr.stayType}
                stars={curr.stars}
              />
            </div>
          ))}


        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(state.dashboard,'nuni 2');
  return {
    cities : state.dashboard.cities,
    places : state.dashboard.places,
    stays : state.stays
  };
}
function mapDispatchToProps(dispatch) {
  return {
    placesAction : bindActionCreators(placesAction, dispatch),
    staysAction : bindActionCreators(staysAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
