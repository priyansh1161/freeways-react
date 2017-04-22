import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
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
          <NavItem eventKey={1}><Link to="/rides">Rides</Link></NavItem>
          <NavItem eventKey={2}><Link to="/stays">Stays</Link></NavItem>
          <NavItem eventKey={3}>Experiences</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1}>About Us</NavItem>
          <NavItem eventKey={2}>Contact Us</NavItem>
          <NavItem eventKey={3}><Link to="/auth">Sign Up</Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

);

export default NavbarComponent;
