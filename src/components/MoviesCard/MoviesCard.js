import React from "react";
import './MoviesCard.css'
import picpath from '../../images/pic__COLOR_picpic1.jpg';
function MoviesCard(props) {
    return (   
        <li className="moviesCard">
            <img className="moviesCard__pic" src={picpath} alt="movie illustration"></img>
            <div className="moviesCard__wrap">
                <h3 className="moviesCard__title">Киноальманах «100 лет дизайна»</h3>
                <div className="moviesCard__container">
                    <p className="moviesCard__duration">00.13</p>
                </div>
            </div>
            <button className={`moviesCard__btn ${props.isSaved? 'moviesCard__btn_state_saved':''}`}>Сохранить</button>
            </li>
    );
}

export default MoviesCard;