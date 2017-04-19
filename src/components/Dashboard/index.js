import React from 'react';

import { Link } from 'react-router';

import { Jumbotron, Grid, Row, Col, Panel } from 'react-bootstrap';

import './styles.css';

const Dashboard = () => (
  <div>
    <Jumbotron className="text-center">
      <h1>COLLECT MOMENTS, NOT THINGS</h1>
      <p>Get bikes and places on rent, hassle-free.</p>
      <Link to="/rides" className="btn btn-lg btn-primary">Bikes</Link>
      <Link to="/stays" className="btn btn-lg btn-primary">Places</Link>
      <Link to="/experiences" className="btn btn-lg btn-primary">Moments</Link>
    </Jumbotron>
    <div className="travelling-to">
      <h3>Travelling To?</h3>
      <input type="text"/>
    </div>
    <h2 className="text-center">Top cities to explore</h2>
    <div className="cities">
      {/* TODO: Loop over the array of cities and make cards */}
    </div>
    <h2 className="text-center">Places in Delhi</h2>
    <div className="places">
      {/* TODO: Loop over array of places and make cards */}
    </div>
    <h2 className="text-center">Stays in Delhi</h2>
    <div className="stays">
      {/* TODO: Loop over array of stays and make cards */}
    </div>
    <div className="why-us">
      <h3 className="text-center">Why Us?</h3>
      <Grid>
        <Row className="show-grid text-center">
          <Col sm={4}>
            <Panel>
              <h4>Value for Money</h4>
            </Panel>
          </Col>
          <Col sm={4}>
            <Panel>
              <h4>Live like a local</h4>
            </Panel>
          </Col>
          <Col sm={4}>
            <Panel>
              <h4>24/7 customer support</h4>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </div>
    <h3 className="text-center">Need Help?</h3>
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
