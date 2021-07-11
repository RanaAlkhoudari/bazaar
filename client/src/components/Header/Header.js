import React, { useState, useEffect, useRef } from 'react';
import products from '../mock-data';
import { FaAngleDown } from 'react-icons/fa';
import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavDropdown,
  ItemsContainer,
  DropdownContainer,
} from './Header.styles';

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

  return (
    <div>
      <Nav>
        <NavLink to="/">
          <Logo src="https://i.ibb.co/VB0vCY6/bazaar1.png" alt="bazaar1" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavDropdown onClick={() => setShowCategories(!showCategories)}>
            Categories <FaAngleDown />
          </NavDropdown>
          {showCategories && (
            <DropdownContainer ref={dropdownRef}>
              {products.map((product) => {
                return (
                  <ItemsContainer key={product.title}>
                    <NavMenu>
                      <NavLink className="subLinks" to="./categoryId">
                        {product.title}
                      </NavLink>
                    </NavMenu>
                  </ItemsContainer>
                );
              })}
            </DropdownContainer>
          )}
          <NavLink to="/sign-up">Sign Up | Register</NavLink>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Header;
