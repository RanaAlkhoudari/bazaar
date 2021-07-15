import React, { useState, useEffect, useRef } from 'react';
import Search from '../search/search';
import products from '../mock-data';
import styles from './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef();

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
  const mobileMenuShow = () => {
    document.getElementById('nav_mobile').style.width = '100%';
    document.getElementById('nav_mobile').style.left = '0px';
    setTimeout(function () {
      document.getElementById('nav_mobile_link').style.display = 'block';
    }, 400);
  };
  const mobileMenuHide = () => {
    document.getElementById('nav_mobile').style.width = '0';
    document.getElementById('nav_mobile').style.left = '-30px';
    document.getElementById('nav_mobile_link').style.display = 'none';
  };

  return (
    <div>
      <div id="nav_mobile" className={styles.nav_mobile}>
        <div className={styles.timesButton_container} onClick={() => mobileMenuHide()}>
          <FontAwesomeIcon className={styles.timesButton} icon={faTimes} />
        </div>
        <div id="nav_mobile_link" className={styles.nav_mobile_link}>
          <a className={styles.nav_link} href="/sign-up">
            Sign Up | Register
          </a>
          <a className={styles.nav_link} href="/sign-in">
            Sign In
          </a>
          <hr />
          <strong>Categories</strong>
          {products.map((product) => {
            return (
              <div key={product.title}>
                <a className={styles.nav_link} href="./categoryId">
                  {product.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.logo_container}>
          <a href="/">
            <img src="https://i.ibb.co/VB0vCY6/bazaar1.png" className={styles.logo} alt="bazaar" />
          </a>
        </div>
        <div>
          <Search />
        </div>
        <div className={styles.nav_menu}>
          <div className={styles.nav_dropdown} onClick={() => setShowCategories(!showCategories)}>
            Categories
            <FontAwesomeIcon className={styles.nav_angel_down} icon={faAngleDown} />
          </div>
          {showCategories && (
            <div className={styles.dropdown_container} ref={dropdownRef}>
              {products.map((product) => {
                return (
                  <div className={styles.item_container} key={product.title}>
                    <div className={styles.nav_menu}>
                      <a className={styles.nav_link} href="./categoryId">
                        {product.title}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <a className={styles.nav_link} href="/sign-up">
            Sign Up | Register
          </a>
          <a className={styles.nav_link} href="/sign-in">
            Sign In
          </a>
        </div>
        <div className={styles.bars} onClick={() => mobileMenuShow()}>
          <FontAwesomeIcon className={styles.barsButton} icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Header;
