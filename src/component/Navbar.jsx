import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar_header">TODO LIST</div>
            <div className="navbar_login"><NavLink to='/login'>Авторизация</NavLink></div>
            <div className="navbar_register"><NavLink to='/register'>Регистрация</NavLink></div>
        </div>
    );
};

export default Navbar;