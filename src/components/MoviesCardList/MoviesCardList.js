import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function MoviesCardList(props) {
    const currentUserInfo = React.useContext(CurrentUserContext);

    return (   
        <section className="moviesCardList">
                <ul className="moviesCardList__list">

                {props.movies.map((movie) => {
                       
                        return (
                            <MoviesCard 
                            moviesName={movie.nameRU} 
                            movieDuration={movie.duration} 
                            moviesLink={`https://api.nomoreparties.co${movie.image.url || movie.image}`} 
                            movie={movie} 
                            key={movie.id || movie._id}
                            onSave={props.onSave} 
                            onDelete={props.onDelete} 
                            owner={movie.owner}
                            user={currentUserInfo._id}
                            visible={props.state}
                            trailerLink={movie.trailerLink}
                            x={movie.x}
                            />
                        )
                    })}
                                  
                </ul>
            </section>
    );
}

export default MoviesCardList;