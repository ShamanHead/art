import { React, useState, useEffect, useRef } from "react";
import { fallDown as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

export default function Header(props) {

    const reduxState = useSelector(state => state),
        [menu, setMenu] = useState(0);

    useEffect(() => {
        if (reduxState.user.token !== "token") {
            setMenu([
                <Link to="/profile" className="cabinet">Личный кабинет</Link>,
                <Link to="/cart" className="cabinet">Корзина</Link>,
                <a href="https://google.com?s=Обратная+связь" className="callback">Обратная связь</a>
            ])
        } else {
            setMenu([
                <Link to="/login" className="cabinet">Войти</Link>,
                <Link to="/register" className="cabinet">Регистрация</Link>,
                <a href="https://google.com?s=Обратная+связь" className="callback">Обратная связь</a>
            ])
        }
    }, [])
    
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
