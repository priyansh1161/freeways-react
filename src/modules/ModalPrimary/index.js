import React, {PropTypes} from 'react';

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
        {
          // TODO: Improve variable naming
          !this.props.doesNotHaveButton && <Button onClick={this.open.bind(this)} bsClass={this.props.bsClass}>{this.props.btnText}</Button>
        }
        <Modal
          show={this.props.doesNotHaveButton ? this.props.show: this.state.isOpen}
          onHide={this.close.bind(this)}
          backdrop={this.props.doesNotHaveButton ? 'static': true}>
          <Modal.Header closeButton={!this.props.doesNotHaveButton}>
            <Modal.Title>
              <div className="text-center">{this.props.title}</div>
            </Modal.Title>
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

ModalPrimary.propTypes = {
  bsClass: PropTypes.string,
  btnText: PropTypes.element,
  title: PropTypes.string,
  children: PropTypes.element,
  footer: PropTypes.element
};

export default ModalPrimary;
