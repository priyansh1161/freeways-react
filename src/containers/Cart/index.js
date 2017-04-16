import React from 'react';
import  ModalPrimary from '../../modules/ModalPrimary';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartAction';
import { Glyphicon } from 'react-bootstrap';


class Cart extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      cart : [],
      total : 0
    };
    this.generateTable = this.generateTable.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
  }
  componentWillReceiveProps({cart}){
    let newCart = JSON.parse(JSON.stringify(cart)); //deep copy
    let total = 0;
    for(let i =0;i<newCart.length;i++) {
      newCart[i].tprice = newCart[i].price * newCart[i].qty;
      total += newCart[i].tprice;
    }
    this.setState({cart : newCart, total});

  }
  generateTable(){
    return this.state.cart.map(curr => <tr key={curr.id}>
      <td>{`${curr.name} ${curr.model}`}</td>
      <td className="tr-qty">
        <div className="container-qty">
          <button className="btn-qty" itemID={curr.id} onClick={this.onValueChange}>-</button>
          <div className="text-qty">{curr.qty}</div>
          <button className="btn-qty" itemID={curr.id} onClick={this.onValueChange}>+</button>
        </div>
      </td>
      <td>&#8377; {curr.tprice}</td>
    </tr>);
  }
  onValueChange(e){
    if(e.target.innerHTML === '-'){
      console.log(e.target.getAttribute('itemid'));
      this.props.actions.removeFromCart(e.target.getAttribute('itemid'));
    }
    else
      this.props.actions.addToCart({id : e.target.getAttribute('itemid')});
  }
  handleCheckOut(){
    if(this.props.user && !this.props.user._id){
      this.context.router.push('/auth');
    }
    else {
      let {location, startDate, endDate, user } = this.props;
      let items = {}; // make items as per backend req
      let cart = this.state.cart;
      for(let i =0 ;i<cart.length;i++){
        if(!items[cart[i].vendor])
          items[cart[i].vendor] = [{ bikeId : cart[i].id, qty : cart[i].qty }];
        else
          items[cart[i].vendor].push({ bikeId : cart[i].id, qty : cart[i].qty });
      }
      console.log(items);
      this.props.actions.checkOut(location, '58091524fb0eb31100ccb267', startDate, endDate, items);
    }
    // console.log(this.state.cart);
  }
  render() {
    return (
      <ModalPrimary
        btnText={<Glyphicon glyph="shopping-cart"/>}
        bsClass="fab-left"
        title="Cart"
        footer={
          <div style={{display: 'flex'}}>
            <h4>Total: &#8377;{this.state.total}</h4><div style={{flexGrow: 1}}/>
            <button className="btn btn-danger" onClick={this.handleCheckOut}>Checkout</button>
          </div>
        }>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Bike</th>
            <th>Qty</th>
            <th>Cost</th>
          </tr>
          </thead>
          <tbody>
            {this.generateTable()}
          </tbody>
        </table>
      </ModalPrimary>
    );
  }
}
Cart.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    cart : state.cart,
    user : state.auth
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
