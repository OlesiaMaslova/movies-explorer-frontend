import React from "react";
import './AboutProject.css';
function AboutProject() {
    return (   
        <div className="about">
            <h2 className="about__title">О проекте</h2>
            <div className="about__text-container">
            <div className="about__text-fragment">
                <h3 className="about__text-title">Дипломный проект включал 5 этапов</h3>
                <p className="about__text-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about__text-fragment">
                <h3 className="about__text-title">На выполнение диплома ушло 5 недель</h3>
                <p className="about__text-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            </div>
            <div className="about__illustration">
                <p className="about__illustration-item about__illustration-item_green">1 неделя</p>
                <p className="about__illustration-item about__illustration-item_gray">4 недели</p>
                <p className="about__illustration-item">Back-end</p>
                <p className="about__illustration-item">Front-end</p>
            </div>
        </div>
    );
}

export default AboutProject;
