import React from "react";
import './Filtercheckbox.css'
function Filtercheckbox(props) {
const [state, setState] = React.useState(false)

    function handleFilterState(event) {
        props.onFilterState(event.target.checked);
        
    }


    return (
        <div className="filtercheckbox">
            <label className="checkbox">
                <input type="checkbox" onChange={handleFilterState} сhecked={props.state? 1 : 0}/>
                <div className="checkbox__text"></div>
            </label>
            

            <p className="filtercheckbox__label">Короткометражки</p>
        </div>
    );
}

export default Filtercheckbox;