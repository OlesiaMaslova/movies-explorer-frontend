import React from "react";
import './Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__container">
                <p className="footer__copyright">&copy;2022</p>
                <div className="footer__nav">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/OlesiaMaslova" target="blank">GitHub</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;