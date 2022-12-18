import { Link } from "react-router-dom";
import './Register.css';

function Register() {
    return (
        <div className="access-form">
            <div className='access-form__logo'></div>
            <p className="access-form__title">Добро пожаловать!</p>
            <form className="access-form__form">
                <div className="access-form__wrap">
                <label className="access-form__label" htmlFor='name'>Имя</label>
                <input className="access-form__input" id="name" type="text" name="name" minlength="2" maxlength="30" required />
                <span class="access-form__error">В имени должно быть от 2 до 30 символов</span>
                </div>
                <div className="access-form__wrap">
                <label className="access-form__label" htmlFor='email'>E-mail</label>
                <input className="access-form__input" id="email" type="email" name="email" />
                <span class="access-form__error">Здесь должен быть email</span>
                </div>
                <div className="access-form__wrap">
                <label className="access-form__label" htmlFor='password'>Пароль</label>
                <input className="access-form__input" id="password" type="password" name="password"/>
                <span class="access-form__error">Что-то пошло не так</span>  
                </div>   
                <button className="access-form__button access-form__button_place_register" type="submit">Зарегистрироваться</button>
            </form>
            <div className="access-form__register-message">
                <p className="access-form__register-messagetext">Уже зарегистрированы?</p>
                <Link className="access-form__register-link" to="signin">Войти</Link>
            </div>
        </div>
    )
}

export default Register;