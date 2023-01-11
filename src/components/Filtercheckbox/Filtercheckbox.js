import React from "react";
import './Filtercheckbox.css'
function Filtercheckbox(props) {
const [state, setState] = React.useState(false)

    function handleFilterState(event) {
        props.onFilterState(event.target.checked);
        console.log(`в хэндлере чекбокса ${event.target.checked}`)
    }


    React.useEffect(() => {
        setState(props.state);
    }, [props.state])
    console.log(`в чекбокс возвращается ${props.state}`)

    return (
        <div className="filtercheckbox">
            <label className="checkbox">
                <input type="checkbox" onChange={handleFilterState} defaultChecked={state}/>
                <div className="checkbox__text"></div>
            </label>
            

            <p className="filtercheckbox__label">Короткометражки</p>
        </div>
    );
}

export default Filtercheckbox;