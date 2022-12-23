import React from "react";
import NavTab from "../NavTab/NavTab";
import './Header.css';
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
            <a href="http://localhost:3000/"><div className='header__logo'></div></a>
            {
                props.onMainPage? <NavTab /> : <Component isMenuActive={isMenuActive} onClose={handleMenuClose}/>
            }
            <button className={`header__menu-btn ${props.onMainPage? 'header__menu-btn_state_invisible':''}`} onClick={handleMenuClick}></button>
        </header>
    );
}

export default Header;
