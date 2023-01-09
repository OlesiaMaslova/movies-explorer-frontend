import React from "react";
import './Filtercheckbox.css'
function Filtercheckbox(props) {

    const [isChecked, setIsChecked] = React.useState(false);
    
    

    function handleFilterState(event) {
        props.onFilterState(!isChecked);
        setIsChecked(!isChecked);
    }
    

    return (
        <div className="filtercheckbox">
            <label className="checkbox">
                <input type="checkbox" onChange={handleFilterState} checked={isChecked} />
                <div className="checkbox__text"></div>
            </label>
            

            <p className="filtercheckbox__label">Короткометражки</p>
        </div>
    );
}

export default Filtercheckbox;