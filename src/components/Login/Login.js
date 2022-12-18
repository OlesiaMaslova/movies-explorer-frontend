import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="access-form">
            <div className='access-form__logo'></div>
            <p className="access-form__title">Рады видеть!</p>
            <form className="access-form__form">
                <label className="access-form__label" htmlFor='email'>E-mail</label>
                <input className="access-form__input" id="email" type="email" name="email" />      
                <label className="access-form__label" htmlFor='password'>Пароль</label>
                <input className="access-form__input" id="password" type="password" name="password"/>     
                <button className="access-form__button access-form__button_place_login" type="submit">Войти</button>
            </form>
            <div className="access-form__register-message">
                <p className="access-form__register-messagetext">Еще не зарегистрированы?</p>
                <Link className="access-form__register-link" to="signup">Регистрация</Link>
            </div>
        </div>
    )
}

export default Login;