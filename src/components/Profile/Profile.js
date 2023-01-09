import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../utils/FormValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


function Profile(props) {
    const currentUserInfo = React.useContext(CurrentUserContext);

    const {values, handleChange, errors, isValid, setIsValid, resetForm} = useFormAndValidation();
    const [userMessage, setUserMessage] = React.useState('');
    
   
    function handleSubmitForm(event) {
        event.preventDefault();

        if(values.name !== currentUserInfo.name && values.email!== currentUserInfo.email) {
            props.onSubmit(values);
            resetForm();
            setUserMessage('');
        } else {
             setIsValid(false);
             setUserMessage('Введенные данные должны отличаться от текущих');
        }
        
    }

    function handleClick() {
        props.onLogout();
    }

    return ( 
<section className="profile">
            <Header onMainPage={false} component={Navigation} className='header'/>
            <p className="profile__title">Привет, {currentUserInfo.name}!</p>
            <form className="profile__form" onSubmit={handleSubmitForm}>
            <div className="profile__text-container">
                <p className="profile__field-tag">Имя</p>
                <input className="profile__field-value" type="text" name="name" minLength="2" maxLength="30" pattern="^[A-Za-zА-Яа-яЁё\s]+$" required placeholder={currentUserInfo.name} onChange={handleChange}/>
                <span className="profile__error">{errors.name}</span>    
            </div>
            <div className="profile__text-container">
                <p className="profile__field-tag">E-mail</p>
                <input className="profile__field-value" type="email" name="email" placeholder={currentUserInfo.email} onChange={handleChange}/>
                <span className="profile__error">{errors.email}</span>    
            </div>
            {
                <p>{userMessage}</p>
            }
            {props.submitSuccess? <p className="profile__submit-success">Данные пользователя успешно обновлены</p>: ''}
            { props.errorDisplay? <ErrorMessage error={props.serverError }/> : '' }
            <button className="profile__btn" type="submit" disabled={!isValid}>Редактировать</button>
            </form>
            <button className="profile__btn profile__btn-exit" onClick={handleClick}>Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;