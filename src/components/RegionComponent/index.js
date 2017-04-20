import React from 'react';
import ListCards from '../../containers/ListCards';

class RegionComponent extends React.Component {
  render() {
    return (
      <div className="region">
        <h4>States in this region</h4>
        <ListCards/>
        <h4>Cities in this region</h4>
        <ListCards/>
        <h4>Places in this region</h4>
        <ListCards/>
      </div>
    );
  }
}

export default RegionComponent;
