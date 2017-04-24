import React from 'react';
import {Carousel} from 'react-bootstrap';

export default class Place extends React.Component {
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
        <h2 className="text-center">
          { "NAME OF PLACE" } <br/>
          <small>{ "ADDRESS OF PLACE" }</small>
        </h2>
        {this.props.description.split(/(\n|\r|\f)/g).map((curr, i) => <p key={i}>{curr}</p>)}
      </div>
    );
  }
}
