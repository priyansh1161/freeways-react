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
      city : props.city.city,
      place : props.city.place
    };
    // this.generateCarouselItems = this.generateCarouselItems.bind(this);

  }
  componentWillMount(){
    this.props.actions.getCity(this.props.params.id);
  }
  componentWillReceiveProps({city, place}){
    this.setState({city, place});
  }
  render() {
    return this.state.city ? <div>
        <Carousel>
          <Carousel.Item key={0}>
            <div style={{
              height: '300px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${this.state.city.photo})`
            }}/>
          </Carousel.Item>
        </Carousel>
        <div className="city-container">
          <div className="main">
            <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Places">
                <ListCards
                  type="place"
                  data={this.state.place}
                />
              </Tab>
              <Tab eventKey={2} title="Todos">
                {this.state.city.todo && this.state.city.todo.map((curr) => {
                  console.log(curr,curr.photo,'todo');
                  return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <AdvancedCard
                      title={curr.title}
                      imageURL={curr.photo}
                      description={curr.text || ''}
                    />
                  </div>
                })}
              </Tab>
              <Tab eventKey={3} title="Food and Drinks">
                <ListCards
                  type="basic"
                  data={this.state.city.drinks}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div> : null;

  }
}
function mapStateToProps(state){
  console.log(state.city,'dsf');
  return {
    city : state.city.city,
    place : state.city.place
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(placesActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(City);
