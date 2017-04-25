import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as staysActions from '../../actions/staysAction';
import { Carousel, Tabs, Tab } from 'react-bootstrap';

class City extends React.Component {
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
    return this.state.stay.photos.map((curr, i) => <Carousel.Item key={i}>
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
        <div className="city-container">
          <div className="main">
            <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Places">
              </Tab>
              <Tab eventKey={2} title="Todos">
              </Tab>
              <Tab eventKey={3} title="Drinks">
              </Tab>
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
export default connect(mapStateToProps, mapDispatchToProps)(City);
