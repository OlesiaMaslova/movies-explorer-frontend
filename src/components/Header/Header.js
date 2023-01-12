import React from "react";
import NavTab from "../NavTab/NavTab";
import './Header.css';
import { Link } from "react-router-dom";

function Header({component:Component, ...props}) {

    const [isMenuActive, setisMenuActive] = React.useState(false);
    
    
    function handleMenuClick() {
        setisMenuActive(true);
    }
    
    function handleMenuClose() {
        setisMenuActive(false);
    }

    return (
        <header className={props.className}>
            <Link to='/'><div className='header__logo'></div></Link>
            {
                props.isLoggedIn? <Component isMenuActive={isMenuActive} onClose={handleMenuClose}/>: <NavTab />
            }
            <button className={`header__menu-btn ${!props.isLoggedIn? 'header__menu-btn_state_invisible':''}`} onClick={handleMenuClick}></button>
        </header>
    );
}

export default Header;
