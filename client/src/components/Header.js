import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import Search from './Search';
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
              style={{ width: '140px' }}
              alt="bazaar"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ color: 'var(--color-main)' }}>
              <NavDropdown
                title={<span style={{ color: 'var(--color-main)' }}>Categories</span>}
                id="nav-dropdown"
              >
                {categories.map((category) => {
                  return (
                    <div key={category._id}>
                      <NavDropdown.Item
                        onClick={(e) => handleDropdownItem(e)}
                        style={{ color: 'var(--color-main)' }}
                      >
                        {' '}
                        {category.name}
                      </NavDropdown.Item>
                    </div>
                  );
                })}
              </NavDropdown>
              <Nav.Link href="/Info" style={{ color: 'var(--color-main)' }}>
                Info
              </Nav.Link>
            </Nav>

            {user && (
              <Nav.Link
                href="/products/add"
                id="add-product-link"
                style={{ color: 'var(--color-main)' }}
              >
                Add product
              </Nav.Link>
            )}

            <Nav>
              {user ? (
                <Nav.Link href={`/account`} style={{ color: 'var(--color-main)' }}>
                  My Account
                </Nav.Link>
              ) : (
                <Nav.Link href="/signup" style={{ color: 'var(--color-main)' }}>
                  Sign Up
                </Nav.Link>
              )}
              {user ? (
                <Nav.Link href="/" onClick={handleLogout} style={{ color: 'var(--color-main)' }}>
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link href="/signin" style={{ color: 'var(--color-main)' }}>
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
