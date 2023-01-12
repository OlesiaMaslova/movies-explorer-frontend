import React from "react";
import './SearchForm.css'
import Filtercheckbox from "../Filtercheckbox/Filtercheckbox";
function SearchForm(props) {

    const [inputValue, setInputValue] = React.useState('');

    
        function handleChange(event) {
           setInputValue(event.target.value);
        }
        function handleSubmit(event) {
            event.preventDefault();
            props.onFormSubmit(inputValue);
        }

        React.useEffect(() => {
            setInputValue(props.valueState);
           
        }, [props.valueState])

    return (   
        <div className="searchForm">
        <form className="searchForm__form" onSubmit={handleSubmit}>
            <input className="searchForm__input" type="text" placeholder='Фильм' name="" required onChange={handleChange} value={inputValue || ''}></input>
            <button className="searchForm__submit-btn" type="submit"></button>
        </form>
        <Filtercheckbox onFilterState={props.onFilterState} state={props.state}/>
        </div>
    );
}

export default SearchForm;