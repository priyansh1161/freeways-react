import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DateRangePicker } from 'react-dates';
import * as stayActions from '../../actions/staysAction';
import StayCard from '../../modules/StayCard';

class Stays extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate : null,
      endDate : null,
      focusedInput : null,
      locations : [],
      stays : [],
      selectedLocation : '',
      rooms: 1
    };
    this.submit = this.submit.bind(this);
    this.generateCards = this.generateCards.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
  }

  componentWillMount(){
    this.props.actions.getLocations();
  }

  componentWillReceiveProps({stays, locations}){
    // console.log(stays,locations);
    this.setState({ stays, locations, selectedLocation : locations[0] });
  }

  submit(){
    if(!this.state.startDate || !this.state.endDate){
      // TODO: send some toast to select dates;
    }
    else {
      let state = this.state;
      this.props.actions.getAllStays(state.selectedLocation, state.startDate, state.endDate,state.rooms);
      this.props.actions.setDatesAndRooms(this.state.startDate, this.state.endDate, this.state.rooms);
    }
  }

  generateCards(){
    return this.state.stays.map(curr => {
      return (
        <StayCard title={curr.name}
                  specification={curr.stayType}
                  stars={curr.stars}
                  price={curr.price}
                  key={curr._id}
                  id={curr._id}
                  imageURL={curr.photos[0]}
        />
      );
    });

  }
  selectLocation(e){
    this.setState({ selectedLocation : e.target.value});
    // this.props.actions.selectStaysLocation(e.target.value);
  }
  setRooms(e) {
    this.setState({ rooms: e.target.value });
  }

  render() {
    const smallDevice = window.matchMedia('(max-width: 768px)').matches;
    const orientation = smallDevice ? 'vertical' : 'horizontal';
    return (
      <div>
        <div className="box-filters">
          <select className="select-place" onChange={this.selectLocation}>
            {this.state.locations.map(curr => <option value={curr} key={curr}>{curr}</option> )}
          </select>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            withFullScreenPortal={smallDevice}
            orientation={orientation}/>
          <input type="number" value={this.state.rooms} onChange={this.setRooms.bind(this)}/>
          <button className="btn btn-primary btn-place" onClick={this.submit}>Search</button>
        </div>
        <div className="container-fluid">
          <div className="row">
            { this.generateCards() }
          </div>
        </div>
      </div>
    );
  }
}

Stays.propTypes = {
  actions: PropTypes.object
};

function mapStaysToProps(state){
  let locations = state.staysLocations.sort(function(a, b) {
    let locationA = a.toUpperCase();
    let locationB = b.toUpperCase();
    return locationA < locationB ? -1 : 1;
  });
  return {
    locations,
    stays : state.stays
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(stayActions, dispatch)
  };
}
export default connect(mapStaysToProps, mapDispatchToProps)(Stays);
