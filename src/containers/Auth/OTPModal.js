import React from 'react';
import ModalPrimary from '../../modules/ModalPrimary';

class OTPModal extends React.Component {
  render() {
    return (
      <ModalPrimary doesNotHaveButton={true} show={this.props.show}>
        <form>
          <input type="tel" placeholder="Phone Number"/>
          <input type="submit" value="Send OTP" className="btn btn-danger"/>
        </form>
        <form>
          <input type="number" placeholder="OTP"/>
          <input type="submit" value="Submit OTP" className="btn btn-danger"/>
        </form>
      </ModalPrimary>
    );
  }
}

export default OTPModal;
