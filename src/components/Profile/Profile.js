import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Profile() {
    return ( 
<section className="profile">
            <Header onMainPage={false} component={Navigation} className='header'/>
            <p className="profile__title">Привет, Виталий!</p>
            <div className="profile__text-container">
                <p className="profile__field-tag">Имя</p>
                <p className="profile__field-value">Виталий</p>
            </div>
            <div className="profile__text-container">
                <p className="profile__field-tag">E-mail</p>
                <p className="profile__field-value">pochta@yandex.ru</p>
            </div>
            <button className="profile__btn">Редактировать</button>
            <button className="profile__btn profile__btn-exit">Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;