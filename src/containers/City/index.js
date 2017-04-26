import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as placesActions from '../../actions/placesAction';
import { Carousel, Tabs, Tab } from 'react-bootstrap';

import ListCards from '../../containers/ListCards';
import AdvancedCard from '../../modules/AdvancedCard';

class City extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city : props.city
    };
    this.generateCarouselItems = this.generateCarouselItems.bind(this);

  }
  componentWillMount(){
    // this.props.actions.getStayDetails(this.props.params.id);
  }
  componentWillReceiveProps({city}){
    this.setState({city});
  }
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item key={i}>
            <div style={{
              height: '300px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${this.city.photo})`
            }}/>
          </Carousel.Item>
        </Carousel>
        <div className="city-container">
          <div className="main">
            <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Places">
                <ListCards
                  type="place"
                  data={this.state.city.place}
                />
              </Tab>
              <Tab eventKey={2} title="Todos">
                {this.state.todos.map(curr => (
                  <AdvancedCard
                    title={curr.title}
                    imgURL={curr.photo}
                    description={curr.text}
                  />
                ))}
              </Tab>
              <Tab eventKey={3} title="Drinks">
                <ListCards
                  type="basic"
                  data={this.state.drinks}
                />
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
    city : state.city
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(placesActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(City);
