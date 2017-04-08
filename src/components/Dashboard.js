import React from 'react';

import { Link } from 'react-router';

import { Jumbotron, Grid, Row, Col, Panel } from 'react-bootstrap';

import './Dashboard.css';

const Dashboard = () => (
  <div>
    <Jumbotron className="text-center">
      <h1>COLLECT MOMENTS, NOT THINGS</h1>
      <p>Get bikes and places on rent, hassle-free.</p>
      <Link to="/rides/" className="btn btn-lg btn-primary">Bikes</Link>
      <Link to="/stays/" className="btn btn-lg btn-primary">Places</Link>
      <Link to="/experiences/" className="btn btn-lg btn-primary">Moments</Link>
    </Jumbotron>
    <Grid>
      <Row className="show-grid text-center">
        <Col sm={4}>
          <Panel>
            <h4>Call Us<br/><small><a href="tel:+919855764054">+91 9855 764 054</a></small></h4>
          </Panel>
        </Col>
        <Col sm={4}>
          <Panel>
            <h4>Email Us<br/><small><a href="mailto:support@freeways.in">support@freeways.in</a></small></h4>
          </Panel>
        </Col>
        <Col sm={4}>
          <Panel>
            <h4>Chat With Us<br/><small><a href="javascript:void(Tawk_API.toggle())">Click here to chat</a></small></h4>
          </Panel>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Dashboard;