import React from 'react';

import { PageHeader, Grid, Row, Col, Table, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Datetime from 'react-datetime';

import PanelPrimary from '../../modules/PanelPrimary';
import BikeCard from '../../modules/BikeCard';

import 'react-datetime/css/react-datetime.css';
import './styles.css';

const Rides = () => (
  <div>
    <PageHeader>Rides</PageHeader>
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={8}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <BikeCard name="Yamaha Fasino" model="STD" mileage="50" price="600" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478931420/wa1gj78s5fjtlsyzsqzi.jpg"/>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <BikeCard name="Yamaha FZS" model="F1" mileage="50" price="450" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478931906/decyfz9a7xvhynruyybj.jpg"/>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <BikeCard name="KTM Duke" model="200" mileage="22" price="1150" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478932015/e075tshgnzyawmjzdkky.jpg"/>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <BikeCard name="Honda Dio" model="110" mileage="40" price="350" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478934712/yzsy5twp7v7sffill0ec.jpg"/>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <BikeCard name="Bajaj Avenger" model="Cruise 220" mileage="40" price="450" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478933672/njxtmlex4xsex8xhztcs.jpg"/>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <BikeCard name="Royal Enfield Bullet" model="Classic 350" mileage="25" price="900" imageURL="http://res.cloudinary.com/freeways/image/upload/v1478933809/ya4vcit2rmbpnafheusn.jpg"/>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={6} md={4}>
          <PanelPrimary>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="map-marker"/>
                </InputGroup.Addon>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">Calangute</option>
                  <option value="other">Baga</option>
                  <option value="other">Arpora</option>
                </FormControl>
              </InputGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="calendar"/>
                </InputGroup.Addon>
                <Datetime/>
              </InputGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="calendar"/>
                </InputGroup.Addon>
                <Datetime/>
              </InputGroup>
            </FormGroup>
          </PanelPrimary>
          <PanelPrimary
            header={<h3 className="panel-flex"><span>Cart</span><span className="spacer"/><span>4 days</span></h3>}
            footer={<h4 className="panel-flex">Total: &#8377;1850<span className="spacer"/><span className="btn btn-primary">CHECKOUT</span></h4>}>
            <Table responsive>
              <thead>
                <tr>
                  <th>Bike</th>
                  <th>Qty</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Yamaha FZS</td>
                  <td>2</td>
                  <td>900</td>
                </tr>
                <tr>
                  <td>Yamaha Fasino STD</td>
                  <td>1</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>Honda Dio 110</td>
                  <td>1</td>
                  <td>350</td>
                </tr>
              </tbody>
            </Table>
          </PanelPrimary>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Rides;