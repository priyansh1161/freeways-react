import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as staysActions from '../../actions/staysAction';
import moment from 'moment';
class HostDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      host : {
        local : {},
        description : ''
      }
    };
  }
  componentDidMount(){
    this.props.actions.getHostDetails(this.props.stay.stay.hostId);
  }
  componentWillReceiveProps(nextProps){
    this.setState({host : nextProps.stay.host || this.state.host});
  }
  render() {
    // todo provide phone number and email in contact host
    return (
      <div>
        <h3>Hosted by {this.state.host.local.name}</h3>
        <p>Split, Croatia &middot; Joined in {moment(this.state.host.joinedOn).format('MM-YYYY')}</p>
        <span className="larger"><i className="fa fa-check"></i> Verified</span>
        {this.state.host.description.split(/(\n|\r|\f)/g).map(curr => <p>{curr}</p>)}
        <button className="btn btn-primary">Contact Host</button><br/>
        Response rate: <strong>100%</strong><br/>
        Response time: <strong>within an hour</strong>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.stay,'asd');
  return {
    stay : state.stay
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(staysActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HostDetails);
