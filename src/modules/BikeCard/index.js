import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartAction';
import './styles.css';

class BikeCard extends React.Component {
  constructor(props){
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      count : '+'
    }
  }
  addToCart(){
    this.props.actions.addToCart(this.props);
    if(this.state.count === '+')
      this.setState({count : 1 });
    else if (this.state.count < 2)
      this.setState({count : this.state.count + 1})
  }
  render (){
    return (
      <div className="card">
        <img src={this.props.imageURL} className="img-responsive"/>
        <div className="card-info">
          <button className="btn-add" onClick={this.addToCart} >{this.state.count}</button>
          <h6 className="text-center">{this.props.name} <small>{this.props.model}</small></h6>
          <h6 className="text-muted text-center">&#8377;{this.props.price}/day</h6>
          <h6 className="text-muted text-center">{this.props.mileage} Km/L</h6>
        </div>
      </div>
    )
  }
}

BikeCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  mileage: PropTypes.number,
  price: PropTypes.number,
  imageURL: PropTypes.string,
  vendors: PropTypes.object,
  id : PropTypes.string,
  location : PropTypes.string
};

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(cartActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(BikeCard);
