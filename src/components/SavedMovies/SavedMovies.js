import React from "react";
import './SavedMovies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function SavedMovies() {
    
    return (
        <section className="saved-movies">
        <Header onMainPage={false} component={Navigation} className='header'/>
        <SearchForm />
        <MoviesCardList />
        <Footer/>
        </section> 
    );
}

export default SavedMovies;