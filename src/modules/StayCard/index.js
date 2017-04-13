import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './styles.css';

class StayCard extends React.Component {
  renderStars(value) {
    let stars = [];
    for (let v = 0; v < Math.floor(value); v++) {
      stars.push(<Glyphicon glyph="star"/>);
    }
    if (value - Math.floor(value) >= 0.5) {
      stars.push(<Glyphicon glyph="star"/>)
    }
    const l = 5 - stars.length;
    for (let v = 0; v < l; v++) {
      stars.push(<Glyphicon glyph="star-empty"/>)
    }
    return stars;
  }
  render() {
    return (
      <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <img src={`data:image/png;base64,${this.props.imageURL}`} className="img-responsive" style={{borderRadius: '5%'}}/>
        <div className="card-info">
          <h6 className="text-center">{this.props.title} <small>{this.props.capacity}</small></h6>
          <h6 className="text-muted text-center">&#8377;{this.props.price}/day</h6>
          <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <h6 className="text-muted text-center">{this.props.specification}</h6>
            <div style={{flexGrow: 1}}/>
            <div className="stars">
              {this.renderStars(this.props.stars)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StayCard;
