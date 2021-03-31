import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import './Navbar.css';
import Logo from '../../images/logo/InQuizitiveLogo.svg';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Navbar = (props) => {

const [navbarOpen, setNavbarOpen] = useState(false);
const handleToggle = () => { setNavbarOpen(prev => !prev) };
const navbarClosed = () => { setNavbarOpen(false) };

return (
    <nav className='nav-container'>
        <div className='logo'>
            <a href = '/'>
            <img src={Logo} alt='logo' onClick='/' />
            </a>
        </div>
        <div className='loginStatusBtns'>
        {!props.user.userName ? <div className='loggedOutNav'>
                <a className='signUp' href='/signup'>Sign Up</a>
                <a className='loginBtn' href='/login'>Login</a>
                </div>
                : <>
                <a className='loginBtn' href='/logout'>Log Out
                </a><button className='userNameBtn'>{props.user.userName}</button>
                </>
            }
        </div>
        <div className='nav-menu'>
            <button id='nav-menuBtn' onClick={handleToggle}>{navbarOpen ? <AiOutlineCloseSquare className='navMenu-icon' /> : <FaBars className='navMenu-icon' />}</button>
            <div className={navbarOpen ? 'nav-menu showMenu' : 'nav-menu'}>
                <NavLink exact to='/' className='navMenu-button' activeClassName='navMenu-selected' onClick={navbarClosed}>Home</NavLink>
                <NavLink exact to='/profile' className='navMenu-button' activeClassName='navMenu-selected' onClick={navbarClosed}>Profile</NavLink>
                <NavLink exact to='/leaderboard' className='navMenu-button' activeClassName='navMenu-selected' onClick={navbarClosed}>Leaderboard</NavLink>
                <NavLink exact to='/about' className='navMenu-button' activeClassName='navMenu-selected' onClick={navbarClosed}>About</NavLink>
            </div>
        </div>
    </nav>
);
};

export default Navbar