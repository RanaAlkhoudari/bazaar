import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../bazaar1.svg';

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" style={{ width: '170px' }}>
          <img src={logo} className="img-fluid" alt="logo" />
        </Navbar.Brand>
        <NavDropdown title="Categories" id="nav-dropdown">
          <NavDropdown.Item>category</NavDropdown.Item>
          <NavDropdown.Item>category</NavDropdown.Item>
          <NavDropdown.Item>category</NavDropdown.Item>
          <NavDropdown.Item>category</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <a href="#login">Register | Login</a>
        </Nav.Item>
      </Container>
    </Navbar>
  );
};

export default Header;
