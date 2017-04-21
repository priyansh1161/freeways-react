import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

const NavbarComponent = () => (
  <div>
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
          <LinkContainer to="/auth">
            <NavItem eventKey={3}>Sign Up</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

);

export default NavbarComponent;
