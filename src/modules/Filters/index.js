import React from 'react';

import { DateRangePicker } from 'react-dates';

class Filters extends React.Component {
  render() {
    const smallDevice = window.matchMedia('(max-width: 768px)').matches;
    const orientation = smallDevice ? 'vertical' : 'horizontal';
    return (
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
    );
  }
}

export default Filters;