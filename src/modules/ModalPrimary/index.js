import React from 'react';

import { Button, Modal } from 'react-bootstrap';

class ModalPrimary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  close() {
    this.setState({ isOpen: false });
  }

  open() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle={this.props.bsStyle || 'primary'} onClick={this.open.bind(this)}>{this.props.btnText}</Button>
        <Modal show={this.state.isOpen} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            {this.props.footer}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalPrimary;