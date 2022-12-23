import React from "react";
import './SavedMovies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { moviesCards } from '../../utils/config';
function SavedMovies() {

    const savedCrads = moviesCards.filter(card=>card.owner==='true');
    
    return (
        <section className="saved-movies">
        <Header onMainPage={false} component={Navigation} className='header'/>
        <SearchForm />
        <MoviesCardList cards={savedCrads} isSaved={true}/>
        <Footer/>
        </section> 
    );
}

export default SavedMovies;