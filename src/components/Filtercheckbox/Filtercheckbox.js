import React from "react";
import './Filtercheckbox.css';

function Filtercheckbox(props) {

    function handleFilterState(event) {
        props.onFilterState(event.target.checked);
        
    }

    return (
        <div className="filtercheckbox">
            <label className="checkbox">
                <input type="checkbox" onChange={handleFilterState} checked={props.state}/>
                <div className="checkbox__text"></div>
            </label>
            

            <p className="filtercheckbox__label">Короткометражки</p>
        </div>
    );
}

export default Filtercheckbox;