import React, {PropTypes} from 'react';

import ModalPrimary from '../../modules/ModalPrimary';
import './styles.scss';

class StaySidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h4 className="price text-center">₹ 2,391 <small>per night</small></h4>
        <p><strong>Check in date:</strong> {this.props.startDate}</p>
        <p><strong>Check out date:</strong> {this.props.endDate}</p>
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

StaySidebar.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  rooms: PropTypes.integer
};

export default StaySidebar;
