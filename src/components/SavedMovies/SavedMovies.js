import React from "react";
import './SavedMovies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as filter from "../../utils/MovieFilter";


function SavedMovies(props) {
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [savedShortMovies, setSavedShortMovies] = React.useState([]);
    const [filterState, setFilterState] = React.useState(false);
    
    function handleFilterStateSet(state) {
        setFilterState(state)
    }

    function handleSavedMovieSearch(value) {
        if (!value) {
            value = '';
        }
       const results = filter.getFilterResults(props.movies, value, filterState);
            setSavedMovies(results)

    }

React.useEffect(() => {
  setSavedMovies(props.movies);
  if(filterState) {
    const shortMovies = filter.filterByDuration(savedMovies, filterState);
    setSavedShortMovies(shortMovies)
  }  
}, [props.movies, filterState, savedMovies])

    return (
        <section className="saved-movies">
        <Header onMainPage={false} component={Navigation} className='header'/>
        <SearchForm onFormSubmit={handleSavedMovieSearch} onFilterState={handleFilterStateSet} state={filterState}/>
        <MoviesCardList onDelete={props.onDelete} movies={filterState? savedShortMovies : savedMovies}/>
        <Footer/>
        </section> 
    );
}

export default SavedMovies;