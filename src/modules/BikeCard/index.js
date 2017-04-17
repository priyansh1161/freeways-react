import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import 'animate.css/animate.css';
import 'toastr/build/toastr.css';

import * as cartActions from '../../actions/cartAction';
import './styles.css';

import {ToastContainer, ToastMessage} from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class BikeCard extends React.Component {
  constructor(props){
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      count : '+'
    };
  }
  addToCardAndDisplayMessage() {
    let props = this.props;
    this.props.actions.addToCart({
      id : props.id,
      name : props.name,
      location : props.location,
      model : props.model,
      price : props.price,
      vendor : props.vendor._id,
      qty : 1
    });
    this.addSuccessAlert();
  }
  addToCart(){
    if(this.state.count === '+') {
      this.setState({count : 1 });
      this.addToCardAndDisplayMessage();
    } else if (this.state.count < 2) {
      this.setState({count : this.state.count + 1});
      this.addToCardAndDisplayMessage();
    } else {
      this.addErrorAlert();
    }
  }
  addSuccessAlert () {
    this.refs.container.success(
      "Bike added successfully to cart",
      "Success", {
      timeOut: 3000,
      extendedTimeOut: 1000
    });
  }
  addErrorAlert () {
    this.refs.container.error(
      "You cannot add more than 2 bikes of the same kind",
      "There was an error", {
      timeOut: 30000,
      extendedTimeOut: 10000
    });
  }
  render (){
    return (
      <div className="card">
        <ToastContainer ref="container"
                        toastMessageFactory={ToastMessageFactory}
                        className="toast-top-right" />
        <img src={this.props.imageURL} className="img-responsive"/>
        <div className="card-info">
          <button className="btn-add" onClick={this.addToCart} >{this.state.count}</button>
          <h6 className="text-center">{this.props.name} <small>{this.props.model}</small></h6>
          <h6 className="text-muted text-center">&#8377;{this.props.price}/day</h6>
          <h6 className="text-muted text-center">{this.props.mileage} Km/L</h6>
        </div>
      </div>
    );
  }
}

BikeCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  mileage: PropTypes.number,
  price: PropTypes.number,
  imageURL: PropTypes.string,
  vendor: PropTypes.object,
  id : PropTypes.string,
  location : PropTypes.string,
  actions: PropTypes.object
};

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(cartActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(BikeCard);
