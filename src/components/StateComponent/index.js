import React from 'react';
import ListCards from '../../containers/ListCards';

class StateComponent extends React.Component {
  render() {
    return (
      <div className="state">
        <h4>Cities in this state</h4>
        <ListCards/>
        <h4>Places in this state</h4>
        <ListCards/>
      </div>
    );
  }
}

export default StateComponent;
