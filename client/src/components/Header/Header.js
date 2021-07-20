import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import Search from '../search/search';
import axios from 'axios';
import { Route } from 'react-router-dom';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/categories`);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/" style={{ width: '120px' }}>
            <img src="https://i.ibb.co/VB0vCY6/bazaar1.png" alt="bazaar" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ color: 'teal' }}>
              <NavDropdown
                title={<span style={{ color: 'teal' }}>Categories</span>}
                id="nav-dropdown"
              >
                {categories.map((category) => {
                  return (
                    <div key={category._id}>
                      <NavDropdown.Item
                        href={`/categories/${category._id}`}
                        style={{ color: 'teal' }}
                      >
                        {' '}
                        {category.name}
                      </NavDropdown.Item>
                    </div>
                  );
                })}
              </NavDropdown>
              <Nav.Link href="/Info" style={{ color: 'teal' }}>
                Info
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="/sign-up" style={{ color: 'teal' }}>
                Sign Up
              </Nav.Link>
              <Nav.Link href="/sign-in" style={{ color: 'teal' }}>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Route render={({ history }) => <Search history={history} />} />
    </>
  );
};

export default Header;
