import {React, useState, useRef} from "react";
import { fallDown as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

export default function Header (props) {
   
    const menu = 
        [
            <Link to="/" className="cabinet">Личный кабинет</Link>,
            <a href="#" className="basket">Корзина</a>,
            <a href="#" className="enter">Войти</a>,
            <a href="#" className="registration">Регистрация</a>,
            <a href="#" className="callback">Обратная связь</a>
        ]

    return (
        <header>
            <div className="header-content">
                <Link to="/" className="name">CheapGames</Link>
                <nav class="header-navigation">{menu}</nav>
            </div>
            <Menu widht={"100%"}>{menu}</Menu>
        </header>
    )

}
