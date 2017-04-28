import React from 'react';
import {Carousel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as placesActions from '../../actions/placesAction';
 class Place extends React.Component {
  constructor(props){
    super(props);
    this.state = {place : props.place};
  }

  componentWillMount(){
    this.props.actions.getPlace(this.props.params.id);
  }
  componentWillReceiveProps({place}){
    this.setState({place});
  }

  generateCarouselItems(){
    console.log(this.state.place,'ghfghj');
    return this.state.place.photos.map((curr, i) => <Carousel.Item key={i}>
      <div style={{
        height: '300px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${curr})`
      }}/>
    </Carousel.Item> );
  }

  render() {
    return this.state.place ?
      <div>
        <Carousel>
          {this.generateCarouselItems()}
        </Carousel>
        <h2 className="text-center">
          { this.state.place.name } <br/>
          <small>{  this.state.place.location && this.state.place.location.addr }</small>
        </h2>
        { this.state.place.description && this.state.place.description.split(/((\/n)|\n|\r|\f)/g).map((curr, i) => <p key={i}>{curr}</p>)}
      </div> : null;
  }
}

function mapStateToProps(state) {
  return {
    place : state.place
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(placesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);
