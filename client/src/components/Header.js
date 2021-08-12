import axios from 'axios';
import Search from './Search';
import logo from '../images/bzar1.png';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useState, useEffect, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  const history = useHistory();

  const { user, searchBar } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);

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
      <Navbar collapseOnSelect expand="lg" variant="light" style={{ background: 'teal' }}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              style={{ width: '140px', objectFit: 'cover', height: '60px' }}
              alt="bazaar"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ color: 'var(--color-main)' }}>
              <NavDropdown
                title={<span style={{ color: 'var(--color-light)' }}>Categories</span>}
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
              <Nav.Link href="/Info" style={{ color: 'var(--color-light)' }}>
                Info
              </Nav.Link>
            </Nav>

            {user && (
              <Nav.Link
                href="/products/add"
                id="add-product-link"
                style={{ color: 'var(--color-light)' }}
              >
                Add product
              </Nav.Link>
            )}

            <Nav>
              {user ? (
                <Nav.Link href={`/account`} style={{ color: 'var(--color-light)' }}>
                  My Account
                </Nav.Link>
              ) : (
                <Nav.Link href="/signup" style={{ color: 'var(--color-light)' }}>
                  Sign Up
                </Nav.Link>
              )}
              {user ? (
                <Nav.Link href="/" onClick={handleLogout} style={{ color: 'var(--color-light)' }}>
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link href="/signin" style={{ color: 'var(--color-light)' }}>
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {searchBar && <Route render={({ history }) => <Search history={history} />} />}
    </>
  );
};

export default Header;
