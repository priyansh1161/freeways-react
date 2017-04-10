import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="container text-center">
      <Row className="show-grid">
        <Col md={4} className="text-left">All Rights Reserved</Col>
        <Col md={4}><strong>&copy; Copyright 2016 Hyperdriven Services Pvt. Ltd.</strong></Col>
        <Col md={4} className="text-right"><a href="#">FAQ</a> &middot; <a href="#">Terms</a> &middot; <a href="#">Privacy</a></Col>
      </Row>
    </div>
  </div>
);

export default Footer;
