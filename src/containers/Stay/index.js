import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as staysActions from '../../actions/staysAction';
import { Carousel, Tabs, Tab } from 'react-bootstrap';

import StaySidebar from '../StaySidebar';
import Overview from './Overview';
import HostDetails from './HostDetails';
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import Reviews from './Reviews';
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
      data : false,
      bookings : []
    };
    this.generateCarouselItems = this.generateCarouselItems.bind(this);

  }
  componentWillMount(){
    this.props.actions.getStayDetails(this.props.params.id);
  }
  componentWillReceiveProps({stay, bookings}){
    console.log(stay, bookings);
    this.setState({stay, data : true, bookings});
  }
  generateCarouselItems(){
    console.log(this.state.stay);
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
                <Reviews />
              </Tab>
              {this.state.stay.hostId &&
              <Tab eventKey={3} title="The Host">
                <HostDetails id={this.state.stay.hostId}/>
              </Tab> }
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log(state.stay.stay,'sdff');
  return {
    stay : state.stay.stay,
    bookings : state.stay.bookings,
    selectedStayDetails : state.selectedStayDetails
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(staysActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Stay);
