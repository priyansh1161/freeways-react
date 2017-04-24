import React from 'react';
import {Jumbotron, Grid, Row, Col} from 'react-bootstrap';

import './styles.scss';

export default class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-center">USERNAME's Profile</h1>
        </Jumbotron>
        <div className="box-transactions">
          <Grid>
            <Row className="show-grid">
              <Col sm={6} md={4} lg={3}>
                <div className="card-transaction text-center">
                  <h4>2888483</h4>
                  <p className="text-muted">Ordered on 22-09-2017</p>
                  <h4>Yamaha FZS1 <small>F1</small></h4>
                  <h5 className="text-right">₹ 1000</h5>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="card-transaction text-center">
                  <h4>2888483</h4>
                  <p className="text-muted">Ordered on 22-09-2017</p>
                  <h4>Yamaha FZS1 <small>F1</small></h4>
                  <h5 className="text-right">₹ 1000</h5>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="card-transaction text-center">
                  <h4>2888483</h4>
                  <p className="text-muted">Ordered on 22-09-2017</p>
                  <h4>Yamaha FZS1 <small>F1</small></h4>
                  <h5 className="text-right">₹ 1000</h5>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="card-transaction text-center">
                  <h4>2888483</h4>
                  <p className="text-muted">Ordered on 22-09-2017</p>
                  <h4>Yamaha FZS1 <small>F1</small></h4>
                  <h5 className="text-right">₹ 1000</h5>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="card-transaction text-center">
                  <h4>2888483</h4>
                  <p className="text-muted">Ordered on 22-09-2017</p>
                  <h4>Yamaha FZS1 <small>F1</small></h4>
                  <h5 className="text-right">₹ 1000</h5>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="card-transaction text-center">
                  <h4>2888483</h4>
                  <p className="text-muted">Ordered on 22-09-2017</p>
                  <h4>Yamaha FZS1 <small>F1</small></h4>
                  <h5 className="text-right">₹ 1000</h5>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
