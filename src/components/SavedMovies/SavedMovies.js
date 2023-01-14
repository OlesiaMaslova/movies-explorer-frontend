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
    const [searhValue, setSearhValue]=React.useState('');

    
    function handleFilterStateSet(state) {
        setFilterState(state)
    }

    async function handleSavedMovieSearch(value) {
        setSearhValue(value);
        const results = props.movies.map((item) => item);
        const savedResults = await filter.getFilterResults(results, value, filterState);
            setSavedMovies(savedResults);
    }

React.useEffect(() => {
    setSavedMovies(props.movies);
    if(filterState) {
      const shortMovies = filter.getFilterResults(props.movies, searhValue, filterState);
      setSavedShortMovies(shortMovies)
  
    }  
  }, [props.movies, filterState, searhValue])


    return (
        <section className="saved-movies">
        <Header onMainPage={false} component={Navigation} className='header' isLoggedIn={props.isLoggedIn}/>
        <SearchForm onFormSubmit={handleSavedMovieSearch} onFilterState={handleFilterStateSet} state={filterState}/>
        <MoviesCardList onDelete={props.onDelete} movies={filterState? savedShortMovies : savedMovies} />
        <Footer/>
        </section> 
    );
}

export default SavedMovies;