import './Promo.css';
import { Link } from 'react-router-dom';
function Promo() {
    return (
       <div className="promo">
        <div className="promo__image"></div>
        <div className="promo__text-container">
        <h1 className="promo__header">Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
        <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link to="/" className="promo__btn">Узнать больше</Link>
        </div>
        </div>
    );
}

export default Promo;
