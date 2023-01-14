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
import { LARGESIZEDSCREEN, MEDIUMSIZEDSCREEN, STEPFORLARGESCREEN, STEPFORMEDIUMSCREEN, MOVIESTODISPLAYLARGESCREEN, MOVIESTODISPLAYMEDIUMSCREEN, MOVIESTODISPLAYSMALLSCREEN } from "../../utils/config";

function Movies(props) {
    const [moviesResults, setMoviesResults] = React.useState([]);
    const [shortMovies, setShortMovies] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [step, setStep] = React.useState(0);
    const [totalMovies, setTotalMovies] = React.useState(0);
    const [totalShortMovies, setTotalShortMovies] = React.useState(0);
    const [moreBtnInvisible, setMoreBtnStyleInvisible] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(false);
    const [messageDisplay, setMessageDisplay] = React.useState(false);
    const [shortMovieslength, setShortMovieslength] = React.useState(0);
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
                        i.x = true;
                    }
                })
            })

           
            const finalResults = await filter.getFilterResults(results, value, props.state);
            if (finalResults.length === 0) {
                setMessageDisplay(true);
            }
            const finalResultsToRender = await filter.render(finalResults, count);

            setMoviesResults(finalResultsToRender);

            if (finalResultsToRender.length === finalResults.length) {
                  setMoreBtnStyleInvisible({ display: 'none' })
            } else {
                setMoreBtnStyleInvisible({});
            }


            localStorage.setItem('state', props.state);
            localStorage.setItem('moviesResults', JSON.stringify(finalResults));
            localStorage.setItem('searchValue', value);
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

    function handleMoreBtnClick() {
        if (window.innerWidth >= LARGESIZEDSCREEN) {
            setStep(STEPFORLARGESCREEN);
            setCount(count + step);
        } else if (window.innerWidth < LARGESIZEDSCREEN && window.innerWidth > MEDIUMSIZEDSCREEN) {
            setStep(STEPFORMEDIUMSCREEN);
            setCount(count + step);
        } else {
            setStep(STEPFORMEDIUMSCREEN)
            setCount(count + step);
        }
        const moviesToRender = filter.render(moviesResults, count);

        // if (moviesToRender.length === totalMovies) {
        //     setMoreBtnStyleInvisible({ display: 'none' });
        // } else {
        //     setMoreBtnStyleInvisible({});
        // }

        setMoviesResults(moviesToRender)

    }


    function setInitialCounter() {
        if (window.innerWidth >= LARGESIZEDSCREEN) {
            setStep(STEPFORLARGESCREEN)
            setCount(MOVIESTODISPLAYLARGESCREEN);
        } else if (window.innerWidth < LARGESIZEDSCREEN && window.innerWidth > MEDIUMSIZEDSCREEN) {
            setStep(STEPFORMEDIUMSCREEN);
            setCount(MOVIESTODISPLAYMEDIUMSCREEN);
        } else {
            setStep(STEPFORMEDIUMSCREEN);
            setCount(MOVIESTODISPLAYSMALLSCREEN);
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
                    i.x = true;

                }
            })
        });
        setTotalMovies(results.length);
        const moviesToRender = filter.render(results, count);
        setMoviesResults(moviesToRender);
        if (props.state) {
            const shortResults = filter.filterByDuration(results, props.state);
            const shortMoviesToRender = filter.render(shortResults, count);
            setShortMovies(shortMoviesToRender);
            setShortMovieslength(shortMoviesToRender.length)
            setTotalShortMovies(shortResults.length);      
            if (shortMovieslength  === totalShortMovies) {
                setMoreBtnStyleInvisible({display: 'none'});
            } else {
                setMoreBtnStyleInvisible({});
            }
        } else {
            if (moviesToRender.length === totalMovies) {
                   setMoreBtnStyleInvisible({ display: 'none' });
               } else {
                   setMoreBtnStyleInvisible({});
               }
        }


    }, [count, currentUserInfo._id, props.userMovies, searchValue, totalMovies, props.state, shortMovies.length, totalShortMovies, shortMovieslength]);
   
    React.useEffect(() => {

        setTimeout(setInitialCounter, 1000);
        window.addEventListener('resize', setInitialCounter);
        return () => window.removeEventListener('resize', setInitialCounter);

    }, [])

    React.useEffect(() => {
        if (moviesResults.length === 0) {
            // setMoreBtnStyleInvisible({ display: 'none' });
        } else {
            setMessageDisplay(false);
        }
    }, [moviesResults.length]);
    
    return (
        <section className="movies">
            <Header onMainPage={false} component={Navigation} className='header' isLoggedIn={props.isLoggedIn}/>
            <SearchForm onFormSubmit={onMoviesSubmit} valueState={searchValue} onFilterState={props.onFilterState} state={props.state} />
            {
                isLoading ? <Preloader /> : <MoviesCardList movies={props.state ? shortMovies : moviesResults} onSave={props.onSave} onDelete={props.onDelete}  />
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