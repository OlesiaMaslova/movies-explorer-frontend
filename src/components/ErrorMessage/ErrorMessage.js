import React from "react";
import './ErrorMessage.css';

function ErrorMessage(props) {
 
    return (
        <div className="errorMessage">
            { 
             <p className="errorMessage__text">Что-то пошло не так: {props.error.message}</p>
             }
        </div>
    )
}

export default ErrorMessage;