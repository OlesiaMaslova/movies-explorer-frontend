import React from "react";
import './NavTab.css';
import { Link } from "react-router-dom";
function NavTab(props) {
    return (
        <nav className={`navTab ${props.isLoggedIn? 'navTab_invisible': ''}`}>
                <Link to='/signup' className='navTab__link'>Регистрация</Link>
                <Link to='/signin' className='navTab__link navTab__link_login'>Войти</Link>
        </nav>
    );
}

export default NavTab;