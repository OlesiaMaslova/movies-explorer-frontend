import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {


    return (   
        <li className="moviesCard">
            <img className="moviesCard__pic" src={props.moviesLink} alt="movie illustration"></img>
            <div className="moviesCard__wrap">
                <h3 className="moviesCard__title">{props.moviesName}</h3>
                <div className="moviesCard__container">
                    <p className="moviesCard__duration">1ч 17м</p>
                </div>
            </div>
            {
                props.isOnSaved?
                <button className="moviesCard__btn-delete"></button>
                :
                <button className={`${props.owner==='true'? 'moviesCard__btn-saved':'moviesCard__btn'}`}></button>
            }
            </li>
    );
}

export default MoviesCard;