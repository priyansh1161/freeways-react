import React from 'react';
import ModalPrimary from '../../modules/ModalPrimary';

class OTPModal extends React.Component {
  render() {
    return (
      <ModalPrimary doesNotHaveButton={true} show={this.props.show}>
        <h1>Hello World</h1>
      </ModalPrimary>
    );
  }
}

export default OTPModal;
