import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  padding: 0.5rem calc((90vw - 1000px) / 2);
  z-index: 10;
`;

export const Logo = styled.img`
  width: 35%;
`;

export const NavLink = styled(Link)`
  color: var(--color-main);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: var(--color-main);
    opacity: 0.8;
    text-decoration: none;
  }
`;

export const NavDropdown = styled.div`
  color: var(--color-main);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: var(--color-main);
    opacity: 0.8;
    text-decoration: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--color-light);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: var(--text-lg);
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: var(--color-main);
  padding: 10px 22px;
  color: var(--color-light);
  outline: none;
  border: none;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    background: var(--color-light);
    color: var(--color-main);
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid teal;
  background-color: var(--color-light);
  top: 60px;
  margin-right: 50%;
  z-index: 5;
`;

export const ItemsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`;
