import React from 'react';

import { Link } from 'react-router';

import { Jumbotron, Grid, Row, Col, Panel } from 'react-bootstrap';

import StayCard from '../../modules/StayCard';
import BasicCard from '../../modules/BasicCard';
import SearchBar from '../SearchBar';

import './styles.css';

const Dashboard = () => (
  <div className="dashboard container">
    <Jumbotron className="text-center">
      <h1>COLLECT MOMENTS, NOT THINGS</h1>
      <p>Get bikes and places on rent, hassle-free.</p>
      <Link to="/rides" className="btn btn-lg btn-primary">Bikes</Link>
      <Link to="/stays" className="btn btn-lg btn-primary">Places</Link>
      <Link to="/experiences" className="btn btn-lg btn-primary">Moments</Link>
    </Jumbotron>
    <div className="travelling-to">
      <h3>Travelling To?</h3>
      <SearchBar />
    </div>
    <h4>Top cities to explore</h4>
    <div className="cities row">
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <BasicCard
          title="Los Angeles"
          imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <BasicCard
          title="Paris"
          imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <BasicCard
          title="Tokyo"
          imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <BasicCard
          title="London"
          imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
        />
      </div>
    </div>
    <h4>Places in Delhi</h4>
    <div className="places row">
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <BasicCard
          title="Los Angeles"
          imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <BasicCard
          title="Paris"
          imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <BasicCard
          title="Tokyo"
          imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
        />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <BasicCard
          title="London"
          imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
        />
      </div>
    </div>
    <h4>Stays in Delhi</h4>
    <div className="stays row">
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <StayCard
          id={1}
          imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
          title="House in countryside (20 min. sea)"
          capacity="2 beds"
          price="2,928"
          specification="Private Room"
          stars={5}
        />
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <StayCard
          id={2}
          imageURL="https://a0.muscache.com/im/pictures/6451545/08a2d47b_original.jpg?aki_policy=medium"
          title="Luxurious stone villa in Crete"
          capacity="1 beds"
          price="3,527"
          specification="Entire home/flat"
          stars={5}
        />
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <StayCard
          id={3}
          imageURL="https://a0.muscache.com/im/pictures/53851032/decfda84_original.jpg?aki_policy=medium"
          title="Serene powerful tower retreat"
          capacity="1 beds"
          price="11,307"
          specification="Entire home/flat"
          stars={5}
        />
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <StayCard
          id={4}
          imageURL="https://a0.muscache.com/im/pictures/52149945/33130c63_original.jpg?aki_policy=medium"
          title="Stunning All Bamboo house by River"
          capacity="3 beds"
          price="21,628"
          specification="Entire home/flat"
          stars={5}
        />
      </div>

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
