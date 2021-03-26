import React from 'react'
import './Navbar.css';
import Logo from '../../images/logo/inQuizitive.svg';
import NavBtn from './NavBtn';


const NewNavbar = () => {
    
    return (
        <div className='nav-container'>
            <div className='logo'>
                <img src={Logo} alt='logo image' />
            </div>
            <div className='nav-menu'>
                <NavBtn />
                <NavBtn />
                <NavBtn />
            </div>
        </div>
    )
}

export default NewNavbar
