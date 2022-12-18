import React from "react";
import './SearchForm.css'
import Filtercheckbox from "../Filtercheckbox/Filtercheckbox";
function SearchForm() {
    return (   
        <div className="searchForm">
        <form className="searchForm__form">
            <input className="searchForm__input" type="text" placeholder="Фильм" name=""></input>
            <button className="searchForm__submit-btn" type="submit"></button>
        </form>
        <Filtercheckbox />
        </div>
    );
}

export default SearchForm;