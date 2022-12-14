import React from "react";
import './Movies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { moviesCards } from '../../utils/config';

function Movies() {

    return (
        <section className="movies">
        <Header onMainPage={false} component={Navigation} className='header'/>
        <SearchForm />
        <MoviesCardList cards = {moviesCards}/>
        <button className="movies__more-btn">Ещё</button>
        <Footer/>
        </section> 
    );
}

export default Movies;