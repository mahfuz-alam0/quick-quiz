import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_container container'>
                <div className='img_name'>
                    <img src='/logo.png' alt=""/>
                    <h3>Quick <span className='deff'>Quiz</span></h3>
                </div>
                <nav className='navbar'>
                    <NavLink className={(isActive) => isActive ? 'active' : 'border_none'} to='/'>home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;