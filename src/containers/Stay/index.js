import React from 'react';

import { Carousel, Tabs, Tab, Glyphicon } from 'react-bootstrap';

import './styles.scss';
import 'font-awesome/css/font-awesome.css';

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
                <div className="amenities">
                  <div>
                    <i className="fa fa-home"/>
                    <span className="text-muted">Entire Home/Apt</span>
                  </div>
                  <div>
                    <i className="fa fa-users"/>
                    <span className="text-muted">4 Guests</span>
                  </div>
                  <div>
                    <i className="fa fa-bed"/>
                    <span className="text-muted">2 Beds</span>
                  </div>
                </div>
                <h3>About this listing</h3>
                <p>Apartment situated below the fortress Spanjola with the central position and view on the beautiful Hvar harbour and Pakleni islands.</p>
                <a href="#">Contact Host</a>
                <div className="info">
                  <div>
                    <strong>The space</strong>
                    <div>
                      Accomodates: 4<br/>
                      Bathrooms: 1<br/>
                      Bedrooms: 2<br/>
                      Beds: 2<br/>
                      <a href="#">House Rules</a>
                    </div>
                    <div>
                      Check In: Anytime after 1PM<br/>
                      Check Out: 11AM<br/>
                      Property type: Apartment<br/>
                      Room type: Entire home/apt<br/>
                    </div>
                  </div>
                  <div>
                    <strong>Amenities</strong>
                    <div>
                      <i className="fa fa-cutlery"/>
                      <span>Kitchen</span>
                      <br/>
                      <i className="fa fa-wifi"/>
                      <span>Wireless Internet</span>
                      <br/>
                      <a href="#">+ More</a>
                    </div>
                    <div>
                      <i className="fa fa-snowflake-o"/>
                      <span>Air Conditioning</span>
                      <br/>
                      <i className="fa fa-television"/>
                      <span>TV</span>
                    </div>
                  </div>
                  <div>
                    <strong>Prices</strong>
                    <div className="fuller"><span>Extra People: No Charge</span></div>
                  </div>
                  <div>
                    <strong>Description</strong>
                    <div className="fuller">
                      <strong>The space</strong>
                      <br/>
                      <p>Our house is situated in the old part of the town Hvar, in a very peaceful area with beautiful sea view on the harbour and Pakleni Islands archipelago.</p>
                      <p>It takes few minutes walking to get to the main square, markets, restaurants, as well as other town facilities.</p>
                      <p>The distance from sea is 100m. You can reach the nearest beach in five minutes by foot and also taxi boats for beaches on Pakleni Islands.</p>
                      <a href="#">+ More</a>
                    </div>
                  </div>
                  <div>
                    <strong>House Rules</strong>
                    <div className="fuller">
                      <p>Check in anytime after 1PM</p>
                      <hr/>
                      <p>Since it is a private house in a quiet part of town, we kindly ask not to make noise after midnight and during the night. It will create an enjoyable experience for all guests.</p>
                    </div>
                  </div>
                  <div>
                    <strong>Cancellations</strong>
                    <div className="fuller">
                      <strong>Strict</strong>
                      <br/>
                      <p>Cancel up to 7 days before your trip and get a 50% refund plus service fees back.</p>
                      <a href="#">View Details</a>
                    </div>
                  </div>
                  <div>
                    <strong>Availability</strong>
                    <div>The minimum night stay for this listing <strong>varies</strong>.</div>
                    <div><a href="#">Add your travel dates</a> to see more details</div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey={2} title="Reviews">
                <div className="box-reviews">
                  <h4>210 Reviews</h4>
                  <div className="stars">
                    {[
                      <Glyphicon glyph="star"/>,
                      <Glyphicon glyph="star"/>,
                      <Glyphicon glyph="star"/>,
                      <Glyphicon glyph="star"/>,
                      <Glyphicon glyph="star-empty"/>
                    ]}
                  </div>
                  <div className="spacer"/>
                  <input type="text" placeholder="Search reviews"/>
                </div>
                <table>
                  <tr>
                    <td>Accuracy</td>
                    <td>
                      <div className="stars">
                        {[
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star-empty"/>
                        ]}
                      </div>
                    </td>
                    <td>Location</td>
                    <td>
                      <div className="stars">
                        {[
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star-empty"/>
                        ]}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Communication</td>
                    <td>
                      <div className="stars">
                        {[
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star-empty"/>
                        ]}
                      </div>
                    </td>
                    <td>Check In</td>
                    <td>
                      <div className="stars">
                        {[
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star-empty"/>
                        ]}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Cleanliness</td>
                    <td>
                      <div className="stars">
                        {[
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star-empty"/>
                        ]}
                      </div>
                    </td>
                    <td>Value</td>
                    <td>
                      <div className="stars">
                        {[
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star"/>,
                          <Glyphicon glyph="star-empty"/>
                        ]}
                      </div>
                    </td>
                  </tr>
                </table>
                <div className="reviews">
                  <div className="review">
                    <div className="review-head">
                      <img className="img-display" src="https://a0.muscache.com/im/users/26522933/profile_pic/1433314721/original.jpg?aki_policy=profile_x_medium"/>
                      <div>
                        <strong>Jenny</strong>
                        <div className="text-muted">April 2017</div>
                      </div>
                    </div>
                    <p>
                      A great apartment, exactly as described. The views over Hvar are wonderful. We loved having our breakfast in the garden. The apartment was very cleanand tidy and had everything we needed. Would definitely stay here again!
                    </p>
                    <div className="review-buttons">
                      <div className="spacer"/>
                      <button className="btn btn-danger">
                        <i className="fa fa-flag"></i><span>Report</span>
                      </button>
                      <button className="btn btn-danger">
                        <i className="fa fa-thumbs-up"></i><span className="border-right">Helpful</span><span>4</span>
                      </button>
                    </div>
                  </div>
                  <div className="review">
                    <div className="review-head">
                      <img className="img-display" src="https://a0.muscache.com/im/pictures/ab8bafbc-5eef-480a-a3ea-66f89b48fd79.jpg?aki_policy=profile_x_medium"/>
                      <div>
                        <strong>Jason</strong>
                        <div className="text-muted">March 2017</div>
                      </div>
                    </div>
                    <p>
                      My wife and I stayed in this apartment, which has one of the best views in all of Hvar Town! We enjoyed wine from the picnic table overlooking the City, and the location is an easy walk down some stairs to the center. The apartment has been updated, and made for a great stay. Thanks!
                    </p>
                    <div className="review-buttons">
                      <div className="spacer"/>
                      <button className="btn btn-danger">
                        <i className="fa fa-flag"></i><span>Report</span>
                      </button>
                      <button className="btn btn-danger">
                        <i className="fa fa-thumbs-up"></i><span className="border-right">Helpful</span><span>2</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Tab>
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