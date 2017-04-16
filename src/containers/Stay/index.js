import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as staysActions from '../../actions/staysAction';
import { Carousel, Tabs, Tab, Glyphicon } from 'react-bootstrap';

import StaySidebar from '../StaySidebar';
import Overview from './Overview';
import './styles.scss';
import 'font-awesome/css/font-awesome.css';

class Stay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stay : {
        photos : [],
        reviews : [],
        space : {
          rules : ''
        },
        facilities : []
      },
      data : false
    };
    this.generateCarouselItems = this.generateCarouselItems.bind(this);

  }
  componentWillMount(){
    this.props.actions.getStayDetails(this.props.params.id);
  }
  componentWillReceiveProps({stay}){
    this.setState({stay, data : true});
  }
  generateCarouselItems(){
    return this.state.stay.photos.map(curr => <Carousel.Item>
      <div style={{
        height: '300px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${curr})`
      }}/>
    </Carousel.Item> );
  }

  render() {
    return (
      <div>
        <Carousel>
          {this.generateCarouselItems()}
        </Carousel>
        <div className="stay-container">
          <StaySidebar startDate={this.props.selectedStayDetails.startDate}
                       endDate={this.props.selectedStayDetails.endDate}
                       rooms={this.props.selectedStayDetails.rooms}
                       price={this.state.stay.price}
          />
          <div className="main">
            <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Overview">
                { this.state.data && <Overview stay={this.state.stay} />}
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
              <Tab eventKey={3} title="The Host">
                <h3>Hosted by Ivana & Lorenzo</h3>
                <p>Split, Croatia &middot; Joined in September 2012</p>
                <span className="larger"><span className="label label-warning">692</span> Reviews <i className="fa fa-check"></i> Verified</span>
                <p>My husband Lorenzo and I are always looking for the new ways to present Hvar and our apartments, so the guests can be satisfied and want to come back. I am running my own business and Lorenco is the director in the parking office. </p>
                <p>Our life motto is: "Per aspera ad astra" or "Through hardships to the stars", which very well reflects all of our life efforts.</p>
                <p>If you have questions or need any informations, do not hesitate to contact us.</p>
                <button className="btn btn-primary">Contact Host</button><br/>
                Response rate: <strong>100%</strong><br/>
                Response time: <strong>within an hour</strong>
              </Tab>
              <Tab eventKey={4} title="Location">Tab 3 content</Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    stay : state.stay,
    selectedStayDetails : state.selectedStayDetails
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(staysActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Stay);
