import React from 'react';
import {Jumbotron, Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/authAction';
import './styles.scss';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user : {},
      orders : [],
      name : ''
    };
    this.generateOrdersCard = this.generateOrdersCard.bind(this);
  }
  componentWillMount(){
    this.props.actions.getOrders(user._id);
  }
  componentWillReceiveProps({user, orders}){
    this.setState({user, orders})
  }
  findName(){
    let user =  this.props.user;
    return user.local.name || user.facebook.name || user.google.name;
  }
  generateOrdersCard(){
    return this.state.orders.map((curr) => {
      return <Col sm={6} md={4} lg={3}>
        <div className="card-transaction text-center">
          <h4>{curr.bookingId}</h4>
          <p className="text-muted">Ordered on {curr.bookedAt}</p>
          <h4>{curr.name}</h4>
          <h5 className="text-right">₹ {curr.largeAmount}</h5>
        </div>
      </Col>
    })
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-center">{this.findName.bind(this)}'s Profile</h1>
        </Jumbotron>
        <div className="box-transactions">
          <Grid>
            <Row className="show-grid">
              {this.generateOrdersCard()}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user : state.auth,
    orders : state.orders, // redundant todo needs to be changed in future, either this or this.props.*
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
