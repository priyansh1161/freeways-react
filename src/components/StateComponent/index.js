import React from 'react';
import ListCards from '../../containers/ListCards';
import {connect} from 'react-redux';
import  { bindActionCreators } from 'redux';
import * as placesActions from '../../actions/placesAction';
class StateComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      state : {
        state : {},
        city :[],
        places : []
      }
    };
  }
  componentWillMount(){
    this.props.actions.getState(this.props.params.id);
  }
  componentWillReceiveProps({state}){
    this.setState({state});
  }
  //todo add description and photos
  render() {
    return (
      <div className="region">
        <h4>Cities in this state</h4>
        <ListCards
          type="city"
          data={this.state.state.city}
        />
        <h4>Places in this state</h4>
        <ListCards
          type="place"
          data={this.state.state.places}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state : state.state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(placesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StateComponent);
