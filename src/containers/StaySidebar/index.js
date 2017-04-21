import React, {PropTypes} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as staysAction from '../../actions/checkOut';

import ModalPrimary from '../../modules/ModalPrimary';
import './styles.scss';

class StaySidebar extends React.Component {
  constructor(props, context){
    super(props, context);
    this.onCheckOut = this.onCheckOut.bind(this);
  }
  onCheckOut(e){
    let days = moment(this.props.endDate).diff(moment(this.props.startDate),'days');
    console.log(days);
    let largeAmount = days * this.props.price; // todo needs to be computed in backend
    this.props.actions.initCheckOut(
      this.props.user._id,
      this.props.startDate,
      this.props.endDate,
      largeAmount,
      this.props.stay._id
    );
  }
  render() {
    return (
      <div className="sidebar">
        <h4 className="price text-center">₹ { this.props.price } <small>per night</small></h4>
        <p><strong>Check in date:</strong> {moment(this.props.startDate).format('DD-MM-YY')}</p>
        <p><strong>Check out date:</strong> {moment(this.props.endDate).format('DD-MM-YY')}</p>
        <p><strong>Rooms:</strong> {this.props.rooms}</p>
        {/*<ModalPrimary*/}
          {/*bsClass="btn btn-danger btn-block"*/}
          {/*btnText="Request to Book"*/}
          {/*title="Please log in to continue">*/}
          {/*<button className="btn btn-danger">Continue with Google</button>*/}
          {/*<div className="text-center">OR</div>*/}
          {/*<button className="btn btn-danger">Sign up with Email</button>*/}
          {/*<hr/>*/}
          {/*<div className="wide">*/}
            {/*<h4 className="text-muted">Already have an account?</h4>*/}
            {/*<div className="spacer"/>*/}
            {/*<button className="btn btn-default">Log in</button>*/}
          {/*</div>*/}
        {/*</ModalPrimary>*/}
        <button onClick={this.onCheckOut} className="btn btn-danger">Book Now</button>
        <p className="text-muted text-center">You won't be charged yet</p>
      </div>
    );
  }
}
StaySidebar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
StaySidebar.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  rooms: PropTypes.integer,
  price : PropTypes.number
};

function mapStateToProps(state) {
  return {
    user : state.auth,
    stay : state.stay, // redundant todo needs to be changed in future, either this or this.props.*
    checkout : state.checkout
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(staysAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StaySidebar);
