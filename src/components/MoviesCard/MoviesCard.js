import React from "react";
import './MoviesCard.css'


function MoviesCard(props) {

    const [saveState, setSaveState] = React.useState(false);
  
        function handleClickSave() {
            props.onSave(props.movie)
            setSaveState(true);
        }
        function handleClickDelete() {
            props.onDelete(props.movie);
            setSaveState(false);

        }

        React.useEffect(() => {
       
            props.owner===props.user? setSaveState(true) : setSaveState(false);
                  
        },[props.moviesName, props.owner, props.user, props.visible, saveState])
    return (   
        <li className={`moviesCard ${!true? 'moviesCard_rendered':'moviesCard_rendered_is-visible'}`}>
            <a className="moviesCard__link" href={props.trailerLink} target='blank'>
            <img className="moviesCard__pic" src={props.moviesLink} alt="movie illustration"></img>
            <div className="moviesCard__wrap">
                <h3 className="moviesCard__title">{props.moviesName}</h3>
                <div className="moviesCard__container">
                    <p className="moviesCard__duration">{`${Math.floor(props.movieDuration / 60)}ч ${props.movieDuration % 60}м`}</p>
                </div>
            </div>
            </a>

            {
                saveState? <button className={!props.x? "moviesCard__btn-saved": "moviesCard__btntosave"} onClick={handleClickDelete}></button> : <button className='moviesCard__btn' onClick={handleClickSave}></button>
            }

            </li>
    );
}

export default MoviesCard;