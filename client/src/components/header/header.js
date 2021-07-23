import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import Search from '../search/search';
import axios from 'axios';
import { Route } from 'react-router-dom';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { user } = useContext(AuthContext);
  const history = useHistory();

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
  const handleLogout = async () => {
    localStorage.removeItem(`user`);
    window.location.href = `/`;
  };

  const handleDropdownItem = (e) => {
    const keyword = e.target.innerText;
    history.replace(`/products/${keyword}`, `/${keyword}`);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://i.ibb.co/VB0vCY6/bazaar1.png"
              style={{ width: '120px' }}
              alt="bazaar"
            />
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
                        onClick={(e) => handleDropdownItem(e)}
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

            {user && (
              <Nav.Link href="/products/add" id="add-product-link" style={{ color: 'teal' }}>
                Add product
              </Nav.Link>
            )}

            <Nav>
              {user ? (
                <Nav.Link href={`/account`} style={{ color: 'teal' }}>
                  My Account
                </Nav.Link>
              ) : (
                <Nav.Link href="/signup" style={{ color: 'teal' }}>
                  Sign Up
                </Nav.Link>
              )}
              {user ? (
                <Nav.Link onClick={handleLogout} style={{ color: 'teal' }}>
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link href="/signin" style={{ color: 'teal' }}>
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Route render={({ history }) => <Search history={history} />} />
    </>
  );
};

export default Header;
