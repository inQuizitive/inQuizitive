import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import './Navbar.css';
import Logo from '../../images/logo/InQuizitiveLogo.svg';
// import MenuBtn from './NavBtn';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Navbar = (props) => {

const [navbarOpen, setNavbarOpen] = useState(false);
const handleToggle = () => { setNavbarOpen(prev => !prev) };
const navbarClosed = () => { setNavbarOpen(false) };

// const status = () => {showUserName(false)};

return (
    <nav className='nav-container'>
        <div className='logo'>
            <a href = '/'>
            <img src={Logo} alt='logo' onClick='/' />
            </a>
        </div>
        {/* Button shows log in text and takes you to log in page - if logged in it shows username */}
        <div className='nav-menu'>
            <button onClick={handleToggle}>{navbarOpen ? <AiOutlineCloseSquare className='navMenu-icon' /> : <FaBars className='navMenu-icon' />}</button>
            {!props.user.userName ? 
                <button className='loginBtn' onClick='/login'>Login</button>
                : <>
                <button className='loginBtn'>{props.user.userName}
                </button><button>Logout</button>
                </>
            }
            <div className={navbarOpen ? 'nav-menu showMenu' : 'nav-menu'}>
                <NavLink exact to='/login' className='navMenu-button' activeClassName='navMenu-selected' onClick={navbarClosed}>Login</NavLink>
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