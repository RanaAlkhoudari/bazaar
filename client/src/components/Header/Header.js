import React, { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import Search from '../search/search';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Header.css';
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CategoryProducts from './categories';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setShowCategories(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

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

  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.logo_container}>
          <a href="/">
            <img src="https://i.ibb.co/VB0vCY6/bazaar1.png" className={styles.logo} alt="bazaar" />
          </a>
        </div>
        <div>
          <Route render={({ history }) => <Search history={history} />} />
        </div>
        <div className={styles.nav_menu}>
          <div className={styles.nav_dropdown} onClick={() => setShowCategories(!showCategories)}>
            Categories
            <FontAwesomeIcon className={styles.nav_angel_down} icon={faAngleDown} />
          </div>
          {showCategories && (
            <div className={styles.dropdown_container} ref={dropdownRef}>
              {categories.map((category) => {
                return (
                  <div className={styles.item_container} key={category._id}>
                    <div className={styles.nav_menu}>
                      <Link className={styles.nav_link} to={`/categories/${category._id}`}>
                        {category.name}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {user ? (
            <Link className={styles.nav_link} to="/myprofile">
              My Profile
            </Link>
          ) : (
            <a className={styles.nav_link} href="/signup">
              Sign Up | Register
            </a>
          )}
          {user ? (
            <p className={styles.nav_link} onClick={handleLogout}>
              Sign Out
            </p>
          ) : (
            <a className={styles.nav_link} href="/signin">
              Sign In
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
