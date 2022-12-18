import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'
function MoviesCardList(props) {
    return (   
        <section className="moviesCardList">
                <ul className="moviesCardList__list">
                   <MoviesCard />
                   <MoviesCard />
                   <MoviesCard />
                   <MoviesCard isSaved={true} />
                   <MoviesCard />
                   <MoviesCard isSaved={true}/>
                   <MoviesCard />
                   <MoviesCard isSaved={true}/>
                   <MoviesCard />
                   <MoviesCard />
                   <MoviesCard />
                   <MoviesCard />
                </ul>
            </section>
    );
}

export default MoviesCardList;