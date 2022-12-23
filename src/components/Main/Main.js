import React from "react";
import './Main.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main() {
    return (
        <main className='main'>
            <Header onMainPage={true} component={Navigation} className='headerMain' />
            <Promo />
            <AboutProject />
            <Techs />
            <Portfolio />
            <Footer />
        </main>
    );
}

export default Main;