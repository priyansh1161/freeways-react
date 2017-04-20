import React from 'react';
import ListCards from '../../containers/ListCards';

class CityComponent extends React.Component {
  render() {
    return (
      <div className="city">
        <h4>Places in this city</h4>
        <ListCards/>
      </div>
    );
  }
}

export default CityComponent;
