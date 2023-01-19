import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../utils/FormValidation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


function Profile(props) {
    const currentUserInfo = React.useContext(CurrentUserContext);

    const {handleChange, errors, isValid, setIsValid, resetForm} = useFormAndValidation();
    const [userMessage, setUserMessage] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    
   
    function handleNameChange(event) {
        handleChange(event);
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        handleChange(event);
        setEmail(event.target.value);
    }

    function handleSubmitForm(event) {
        event.preventDefault();
        if(name !== currentUserInfo.name || email!== currentUserInfo.email )  {
            props.onSubmit({name:name, email:email});
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

    React.useEffect(() => {
        setName(currentUserInfo.name);
        setEmail(currentUserInfo.email);
    }, [currentUserInfo])

    return ( 
<section className="profile">
            <Header onMainPage={false} component={Navigation} className='header'  isLoggedIn={props.isLoggedIn}/>
            <p className="profile__title">Привет, {currentUserInfo.name}!</p>
            <form className="profile__form" onSubmit={handleSubmitForm}>
            <div className="profile__text-container">
                <p className="profile__field-tag">Имя</p>
                <input className="profile__field-value" type="text" name="name" minLength="2" maxLength="30" pattern="^[A-Za-zА-Яа-яЁё\s]+$" value={name || ''} onChange={handleNameChange}/>
                <span className="profile__error">{errors.name}</span>    
            </div>
            <div className="profile__text-container">
                <p className="profile__field-tag">E-mail</p>
                <input className="profile__field-value" type="email" name="email" value={email || ''} onChange={handleEmailChange}/>
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