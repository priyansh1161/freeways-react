import React from 'react';
import ListCards from '../../containers/ListCards';
import {connect} from 'react-redux';
import  { bindActionCreators } from 'redux';
import * as placesActions from '../../actions/placesAction';
class RegionComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      region : {
        region : {},
        city :[],
        state : [],
        places : []
      }
    };
  }
  componentWillMount(){
    this.props.actions.getRegions(this.props.params.id);
  }
  componentWillReceiveProps({region}){
    this.setState({region});
    console.log(region, 'sas');
  }
  //todo add description and photos
  render() {
    return (
      <div className="region">
        <h4>States in this region</h4>
        <ListCards
          type="state"
          data={this.state.region.state}
        />
        <h4>Cities in this region</h4>
        <ListCards
          type="city"
          data={this.state.region.city}
        />
        <h4>Places in this region</h4>
        <ListCards
          type="place"
          data={this.state.region.places}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    region : state.region
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(placesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionComponent);
