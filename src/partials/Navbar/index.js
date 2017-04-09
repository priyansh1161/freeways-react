import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import LoadingBar from 'react-redux-loading-bar'

const NavbarComponent = () => (
  <div>
    <Navbar inverse collapseOnSelect style={{zIndex : 1}}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">freeways</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Rides</NavItem>
          <NavItem eventKey={2} href="#">Stays</NavItem>
          <NavItem eventKey={3} href="#">Experiences</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">About Us</NavItem>
          <NavItem eventKey={2} href="#">Contact Us</NavItem>
          <NavItem eventKey={3} href="#">FAQ</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

);

export default NavbarComponent;
