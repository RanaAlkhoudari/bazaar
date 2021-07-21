import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Search from '../search/search';
import axios from 'axios';
import { Route } from 'react-router-dom';
import styles from './header.css';

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
          <Navbar.Brand href="/" style={{ width: '140px' }}>
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
              <Link role="button" to="/products/add" id="add-product-link" className={styles.link}>
                Add product
              </Link>
            )}

            <Nav>
              {user ? (
                <Link to="/myprofile">My Profile</Link>
              ) : (
                <Nav.Link href="/signup" style={{ color: 'teal' }}>
                  Sign Up
                </Nav.Link>
              )}
              {user ? (
                <p onClick={handleLogout}>Sign Out</p>
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
