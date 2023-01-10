import React from "react";
import './Movies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import * as filter from "../../utils/MovieFilter";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function Movies(props) {
    const [moviesResults, setMoviesResults] = React.useState([]);
    const [shortMovies, setShortMovies] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [filterState, setFilterState] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [step, setStep] = React.useState(0);
    const [totalMovies, setTotalMovies] = React.useState(0);
    const [moreBtnInvisible, setMoreBtnStyleInvisible] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(false);
    const [messageDisplay, setMessageDisplay] = React.useState(false);

    const currentUserInfo = React.useContext(CurrentUserContext);


    async function onMoviesSubmit(value) {
        setIsLoading(true)
        try {
            if (!value) {
                value = searchValue;
            }
            setSearchValue(value);
            const results = props.movies.map((item) => item);
            await results.map((i) => {
                return props.userMovies.forEach((el) => {
                    if (el.movieId === i.id) {
                        i.owner = currentUserInfo._id;
                        i._id = el._id;
                    }
                })
            })


            const finalResults = await filter.getFilterResults(results, value, filterState);
            if (finalResults.length === 0) {
                setMessageDisplay(true);
            }
            setTotalMovies(finalResults.length);
            const finalResultsToRender = await filter.render(finalResults, count);


            setMoviesResults(finalResultsToRender);
            localStorage.setItem('moviesResults', JSON.stringify(finalResults));
            localStorage.setItem('searchValue', value);
            const state = localStorage.getItem('state');
            localStorage.setItem('stateSubmited', state);
        }
        catch (err) {
            console.log(err)
            setIsLoading(false);
            setMessageDisplay(true);
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }

    function settleFilterState(state) {
        setFilterState(state);

        localStorage.setItem('state', state);
    }


    function handleMoreBtnClick() {
        if (window.innerWidth >= 1280) {
            setStep(3);
            setCount(count + step);
        } else if (window.innerWidth < 1280 && window.innerWidth > 767) {
            setStep(2);
            setCount(count + step);
        } else {
            setStep(2)
            setCount(count + step);
        }
        const moviesToRender = filter.render(moviesResults, count);

        if (moviesToRender.length === totalMovies) {
            setMoreBtnStyleInvisible({ display: 'none' });
        } else {
            setMoreBtnStyleInvisible({});
        }

        setMoviesResults(moviesToRender)

    }


    function setInitialCounter() {
        if (window.innerWidth >= 1280) {
            setStep(3)
            setCount(12);
        } else if (window.innerWidth < 1280 && window.innerWidth > 767) {
            setStep(2);
            setCount(8);
        } else {
            setStep(2);
            setCount(5);
        }
    }

    React.useEffect(() => {
        const value = localStorage.getItem('searchValue');
        setSearchValue(value);
        const results = JSON.parse(localStorage.getItem('moviesResults')) || [];

        results.map((i) => {
            return props.userMovies.forEach((el) => {
                if (el.movieId === i.id) {
                    i.owner = currentUserInfo._id
                    i._id = el._id;
                }
            })
        });

        const moviesToRender = filter.render(results, count);
        if (moviesToRender.length === totalMovies) {
            setMoreBtnStyleInvisible({ display: 'none' });
        } else {
            setMoreBtnStyleInvisible({});
        }

        setMoviesResults(moviesToRender);
        const newState = localStorage.getItem('stateSubmited');
        
        if (filterState) {
            const shortResults = filter.filterByDuration(results, filterState);
            setShortMovies(shortResults);
        }

    }, [count, currentUserInfo._id, props.userMovies, searchValue, totalMovies, filterState]);


    React.useEffect(() => {

        setTimeout(setInitialCounter, 1000);
        window.addEventListener('resize', setInitialCounter);
        return () => window.removeEventListener('resize', setInitialCounter);

    }, [])

    React.useEffect(() => {
        if (moviesResults.length !== 0) {
            setMessageDisplay(false);
            setMoreBtnStyleInvisible({});
        } else {
            setMoreBtnStyleInvisible({ display: 'none' });
        }
    }, [moviesResults.length]);


    return (
        <section className="movies">
            <Header onMainPage={false} component={Navigation} className='header' />
            <SearchForm onFormSubmit={onMoviesSubmit} valueState={searchValue} onFilterState={settleFilterState} state={filterState} />
            {
                isLoading ? <Preloader /> : <MoviesCardList movies={filterState ? shortMovies : moviesResults} onSave={props.onSave} onDelete={props.onDelete} />
            }
            {
                messageDisplay ? <span className="movies__message">{props.searchMessage}</span> : ''
            }
            <button className="movies__more-btn" onClick={handleMoreBtnClick} style={moreBtnInvisible}>Ещё</button>
            <Footer />
        </section>
    );
}

export default Movies;