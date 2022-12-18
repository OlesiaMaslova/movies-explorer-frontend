import React from "react";
import './Filtercheckbox.css'
function Filtercheckbox() {
    return (
        <div className="filtercheckbox">
            <label className="checkbox">
                <input type="checkbox" />
                <div className="checkbox__text"></div>
            </label>
            <p className="filtercheckbox__label">Короткометражки</p>
        </div>
    );
}

export default Filtercheckbox;