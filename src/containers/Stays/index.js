import React from 'react';

import { DateRangePicker } from 'react-dates';

import StayCard from '../../modules/StayCard';

class Stays extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate : null,
      endDate : null,
      focusedInput : null,
      locations : [],
      stays : {},
      selectedLocation : '',
      rooms: 1
    };
    this.submit = this.submit.bind(this);
    this.generateCards = this.generateCards.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
  }

  componentWillMount(){
    // this.props.actions.getLocations();
  }

  componentWillReceiveProps({stays, locations}){
    this.setState({ stays, locations, selectedLocation : locations[0].__id });
  }

  submit(){
    if(!this.state.startDate || !this.state.endDate){
      // send some toast to select dates;
    }
    else {
      let state = this.state;
      this.props.actions.getAllStays(state.selectedLocation, state.startDate, state.endDate);

    }
  }

  generateCards(){
    return <StayCard title="Malibu Dream Airstream" specification="Entire home/apt" stars={2.7} price={32256} imageURL="https://a0.muscache.com/im/pictures/307a5575-c3a4-4b21-8127-a37875ec1239.jpg?aki_policy=large"/>;
  }
  selectLocation(e){
    this.setState({ selectedLocation : e.target.value});
    this.props.actions.selectStaysLocation(e.target.value);
  }

  render() {
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
            orientation={orientation}/>
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

export default Stays;