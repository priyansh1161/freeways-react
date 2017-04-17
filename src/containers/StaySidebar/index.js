import React, {PropTypes} from 'react';
import moment from 'moment';
// import * as staysAction from ''
import ModalPrimary from '../../modules/ModalPrimary';
import './styles.scss';

class StaySidebar extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render() {
    return (
      <div className="sidebar">
        <h4 className="price text-center">₹ { this.props.price } <small>per night</small></h4>
        <p><strong>Check in date:</strong> {moment(this.props.startDate).format('DD-MM-YY')}</p>
        <p><strong>Check out date:</strong> {moment(this.props.startDate).format('DD-MM-YY')}</p>
        <p><strong>Rooms:</strong> {this.props.rooms}</p>
        <ModalPrimary
          bsClass="btn btn-danger btn-block"
          btnText="Request to Book"
          title="Please log in to continue">
          <button className="btn btn-danger">Continue with Google</button>
          <div className="text-center">OR</div>
          <button className="btn btn-danger">Sign up with Email</button>
          <hr/>
          <div className="wide">
            <h4 className="text-muted">Already have an account?</h4>
            <div className="spacer"/>
            <button className="btn btn-default">Log in</button>
          </div>
        </ModalPrimary>
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

export default StaySidebar;
