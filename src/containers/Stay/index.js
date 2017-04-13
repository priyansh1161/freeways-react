import React from 'react';

import { Carousel, Tabs, Tab, Glyphicon } from 'react-bootstrap';

import './styles.scss';

class Stay extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <div style={{
              height: '300px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: "url('https://a0.muscache.com/im/pictures/17588525/94250ea3_original.jpg?aki_policy=x_large')"
            }}/>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{
              height: '300px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: "url('https://a0.muscache.com/im/pictures/75756707/5d76182c_original.jpg?aki_policy=x_large')"
            }}/>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{
              height: '300px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: "url('https://a0.muscache.com/im/pictures/10833886/1edf8559_original.jpg?aki_policy=x_large')"
            }}/>
          </Carousel.Item>
        </Carousel>
        <div className="stay-container">
          <div className="sidebar">SIDEBAR</div>
          <div className="main">
            <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Overview">
                <h2>The best position in Hvar!</h2>
                <div className="box-support">
                  <p className="text-muted">Hvar, Dalmatia, Croatia</p>
                  <div className="stars">
                    {[
                      <Glyphicon glyph="star"/>,
                      <Glyphicon glyph="star"/>,
                      <Glyphicon glyph="star"/>,
                      <Glyphicon glyph="star"/>,
                      <Glyphicon glyph="star-empty"/>
                    ]}
                  </div>
                  <p>210 reviews</p>
                </div>
              </Tab>
              <Tab eventKey={2} title="Reviews">Tab 2 content</Tab>
              <Tab eventKey={3} title="The Host">Tab 3 content</Tab>
              <Tab eventKey={4} title="Location">Tab 3 content</Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Stay;