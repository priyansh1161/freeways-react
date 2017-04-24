import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

class NavbarComponent extends React.Component {
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
              false ?
              <NavDropdown eventKey={3} title="username" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Profile</MenuItem>
                <MenuItem eventKey={3.2}>Settings</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Logout</MenuItem>
              </NavDropdown>
              :
              <LinkContainer to="/auth">
                <NavItem eventKey={3}>Sign Up</NavItem>
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
