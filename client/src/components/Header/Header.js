import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  DropdownLink,
  ItemsContainer,
  DropdownContainer,
} from './Header.styles';

const items = [
  {
    id: 1,
    name: 'Clothing',
  },
  {
    id: 2,
    name: 'Gardening',
  },
  {
    id: 3,
    name: 'Training',
  },
];

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div>
      <Nav>
        <NavLink to="/">
          <img src="https://i.ibb.co/VB0vCY6/bazaar1.png" alt="bazaar1" width="35%" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="categories" onClick={handleClick}>
            Categories <FaAngleDown />
          </NavLink>
          {showCategories && (
            <DropdownContainer>
              {items.map((item) => {
                return (
                  <ItemsContainer>
                    <NavMenu key={item.id}>
                      <Link to="./categoryId">{item.name}</Link>
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
