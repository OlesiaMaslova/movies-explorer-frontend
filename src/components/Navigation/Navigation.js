import React from "react";
import './Navigation.css';
import { Link } from "react-router-dom";
function Navigation(props) {
    return (
        <nav className={`navigation ${props.isMenuActive? 'navigation__is-active':''}`}>
            <div className='navigation__menu'>
                <Link to='/' className='navigation__link navigation__link_main'>Главная</Link>
                <Link to='/movies' className='navigation__link'>Фильмы</Link>
                <Link to='/saved-movies' className='navigation__link'>Сохранённые фильмы</Link>
            </div>
            <Link to= '/profile' className='navigation__btn'>Аккаунт</Link>
            <button className="navigation__close-btn" onClick={props.onClose}></button>
        </nav>
    ); 
}

export default Navigation;