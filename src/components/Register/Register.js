import React from "react";
import { Link } from "react-router-dom";
import './Register.css';
import { useFormAndValidation } from "../../utils/FormValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Register(props) {

    const[showMessage, setShowMessage] = React.useState(false);
    const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();

    function handleSubmit(event) {
        event.preventDefault();
        resetForm();
        props.onRegister(values);
        
    }

    React.useEffect(() =>{
        if(props.errorDisplay) {
            setShowMessage(!props.errorDisplay);
        }
    },[props.errorDisplay])

    return (
        <div className="access-form" onSubmit={handleSubmit}>
            <div className='access-form__logo'></div>
            <p className="access-form__title">Добро пожаловать!</p>
            <form className="access-form__form">
                <div className="access-form__wrap">
                <label className="access-form__label" htmlFor='name'>Имя</label>
                <input className="access-form__input" id="name" type="text" name="name" minLength="2" maxLength="30" pattern="^[A-Za-zА-Яа-яЁё\s]+$" required onChange={handleChange} />
                <span className="access-form__form-error">{errors.name}</span>
                </div>
                <div className="access-form__wrap">
                <label className="access-form__label" htmlFor='email'>E-mail</label>
                <input className="access-form__input" id="email" type="email" name="email" required onChange={handleChange}/>
                <span className="access-form__form-error">{errors.email}</span>
                </div>
                <div className="access-form__wrap">
                <label className="access-form__label" htmlFor='password'>Пароль</label>
                <input className="access-form__input" id="password" type="password" name="password"  required onChange={handleChange}/>
                <span className="access-form__form-error">{errors.password}</span>
                </div>
            { showMessage? <ErrorMessage error={props.serverError }/> : '' }
                <button className="access-form__button access-form__button_place_register" type="submit" disabled={!isValid}>Зарегистрироваться</button>
            </form>
            <div className="access-form__register-message">
                <p className="access-form__register-messagetext">Уже зарегистрированы?</p>
                <Link className="access-form__register-link" to="signin">Войти</Link>
            </div>
        </div>
    )
}

export default Register;