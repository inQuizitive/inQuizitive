import React from 'react';
import Logo from '../images/logo/inQuizitive.svg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <Nav className='nav'>
        <NavLink to='/'>
          <img src={Logo} alt='logo' className='logo' />
        </NavLink>
        <Bars className='bars' />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;