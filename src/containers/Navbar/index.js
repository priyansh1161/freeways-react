import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authAction';

class NavbarComponent extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      user : props.user || {},
      name : 'userName'
    };
    this.signOut = this.signOut.bind(this);
  }
  componentWillReceiveProps({user}){
    this.setState({user, name : user.local.name || user.google.name || user.facebook.name});
  }

  signOut(){
    this.props.actions.signOut();
  }

  render() {
    return (
      <Navbar fixedTop collapseOnSelect style={{zIndex : 1}}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" style={{ color: '#eb3812' }}>freeways</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/rides">
              <NavItem eventKey={1}>Rides</NavItem>
            </LinkContainer>
            <LinkContainer to="/stays">
              <NavItem eventKey={2}>Stays</NavItem>
            </LinkContainer>
            <LinkContainer to="/experiences">
              <NavItem eventKey={3}>Experiences</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1}>About Us</NavItem>
            <NavItem eventKey={2}>Contact Us</NavItem>
            {
              this.state.user._id ?
              <NavDropdown eventKey={3} title={this.state.name} id="basic-nav-dropdown">
                <LinkContainer to="/profile">
                  <MenuItem eventKey={3.1}>Profile</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Logout</MenuItem>
              </NavDropdown>
              :
              <LinkContainer to="/auth">
                <NavItem eventKey={3} onClick={this.signOut}>Sign Up</NavItem>
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    user : state.auth
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent);
