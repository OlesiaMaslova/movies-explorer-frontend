import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';


function MoviesCardList(props) {
    return (   
        <section className="moviesCardList">
                <ul className="moviesCardList__list">

                {props.cards.map((card) => {
                        return (
                            <MoviesCard moviesName={card.name} moviesLink={card.link} key={card.id} owner={card.owner} isOnSaved={props.isSaved}/>
                        )
                    })}
                                  
                </ul>
            </section>
    );
}

export default MoviesCardList;