import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

import './styles.scss';

const Footer = () => (
  <div className="footer">
    <Grid className="text-center footer-appendix">
      <Row className="show-grid">
        <Col md={4}>
          <strong>Why Us?</strong>
          <div>Value for Money</div>
          <div>Live like a local</div>
          <div>24/7 customer support</div>
        </Col>
        <Col md={4}>
          <strong>Need help?</strong>
          <div>Call Us <a href="tel:+919855764054">+91 9855 764 054</a></div>
          <div>Email Us <a href="mailto:support@freeways.in">support@freeways.in</a></div>
          <div>Chat With Us <a href="javascript:void(Tawk_API.toggle())">Click here to chat</a></div>
        </Col>
        <Col md={4}>
          <div><a href="#">Facebook</a></div>
          <div><a href="#">Twitter</a></div>
          <div><a href="#">Linkedin</a></div>
        </Col>
      </Row>
    </Grid>
    <Grid>
      <Row className="show-grid">
        <Col md={4} className="text-left">All Rights Reserved</Col>
        <Col md={4} className="text-center"><strong>&copy; Copyright 2016 Hyperdriven Services Pvt. Ltd.</strong></Col>
        <Col md={4} className="text-right"><a href="#">FAQ</a> &middot; <a href="#">Terms</a> &middot; <a href="#">Privacy</a></Col>
      </Row>
    </Grid>
  </div>
);

export default Footer;
