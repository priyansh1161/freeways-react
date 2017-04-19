import React from 'react';
import './styles.css';
import {Link} from 'react-router';
import Stars from '../../partials/Stars';
class StayCard extends React.Component {
  render() {
    return (
      <Link to={`/stays/${this.props.id}`}>
        <div className="card">
          <img src={this.props.imageURL}/>
          <div className="card-info">
            <h6 className="text-center">{this.props.title} <small>{this.props.capacity}</small></h6>
            <h6 className="text-muted text-center">&#8377;{this.props.price}/day</h6>
            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
              <h6 className="text-muted text-center">{this.props.specification}</h6>
              <div style={{flexGrow: 1}}/>
              <Stars stars={this.props.stars}/>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default StayCard;
