import './Login.css';
import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Link } from 'react-router-dom';
import { useFormAndValidation } from "../../utils/FormValidation";


function Login(props) {

    const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();

   
    function handleSumbit(event) {
        event.preventDefault();
        props.onLogin(values); 
        resetForm();
    }


    return (
        <div className="access-form">
            <div className='access-form__logo'></div>
            <p className="access-form__title">Рады видеть!</p>
            <form className="access-form__form" onSubmit={handleSumbit}>
            <div className="access-form__wrap">
                <label className="access-form__label" htmlFor='email'>E-mail</label>
                <input className="access-form__input" id="email" type="email" name="email" required onChange={handleChange} />
                <span className="access-form__form-error">{errors.email}</span>    
                </div>
                <div className="access-form__wrap">  
                <label className="access-form__label" htmlFor='password'>Пароль</label>
                <input className="access-form__input" id="password" type="password" name="password" required onChange={handleChange}/>
                <span className="access-form__form-error">{errors.password}</span>     
                </div>
                { props.errorDisplay? <ErrorMessage error={props.serverError }/> : '' }
                <button className="access-form__button access-form__button_place_login" type="submit" disabled={!isValid}>Войти</button>
            </form>
            <div className="access-form__register-message">
                <p className="access-form__register-messagetext">Еще не зарегистрированы?</p>
                <Link className="access-form__register-link" to="signup">Регистрация</Link>
            </div>
        </div>
    )
}

export default Login;