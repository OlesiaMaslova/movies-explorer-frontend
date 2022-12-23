import React from "react";
import './Portfolio.css'
import imgpath from '../../images/text__COLOR_font-mainlinkicon.svg';
function Portfolio() {
    return (   
        <section className="portfolio">
            <h2 className="portfolio__title">Студент</h2>
            <div className="portfolio__wrap">
            <div className="portfolio__image"></div>
            <div className="portfolio__text-fragment">
                <h3 className="portfolio__text-title">Виталий</h3>
                <p className="portfolio__text-subtitle">Фронтенд-разработчик, 30 лет</p>
                <p className="portfolio__text-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как
 прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a className="portfolio__link portfolio__link_git" href="https://github.com/OlesiaMaslova" target="blank">GitHub</a>
                </div>
                </div>
            <p className="portfolio__heading">Портфолио</p>
            <ul className="portfolio__list">
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/OlesiaMaslova/how-to-learn.git" target="blank">Статичный сайт<img className='portfolio__icon' src={imgpath} alt="link_icon"/></a></li>
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/OlesiaMaslova/russian-travel.git" target="blank">Адаптивный сайт<img className='portfolio__icon' src={imgpath} alt="link_icon"/></a></li>
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/OlesiaMaslova/react-mesto-api-full.git" target="blank">Одностраничное приложение<img className='portfolio__icon' src={imgpath} alt="link_icon"/></a></li>
            </ul>
            </section>
    );
}

export default Portfolio;
