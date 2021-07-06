import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, DropdownLink } from './Header.styles';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div>
      <Nav>
        <NavLink to="/">LOGO</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="categories" onClick={handleClick}>
            Categories
          </NavLink>
          {showCategories && (
            <div>
              <ul>
                <NavLink to="categoryId"> category 1</NavLink>
                <NavLink
                  to="
                  categoryId"
                >
                  category 3
                </NavLink>
                <NavLink to="categoryId"> category 2</NavLink>
              </ul>
            </div>
          )}
          <NavLink to="/sign-up">Sign Up | Register</NavLink>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Header;
