import React from 'react';
import Logo from '../../images/logo/inQuizitive.svg';
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
          <NavLink className='navLink' to='/about' activeStyle>
            About
          </NavLink>
          <NavLink className='navLink' to='/profile' activeStyle>
            Profile
          </NavLink>
          <NavLink className='navLink' to='/signup' activeStyle>
            Sign Up
          </NavLink>
          <NavBtnLink className='navbtnlink' to='/login'>Sign In</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;