import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, redirect } from "react-router-dom";

export default function RegisterPage(props) {

    const [mail, setMail] = useState(null),
        [login, setLogin] = useState(null),
        [password, setPassword] = useState(null),
        reduxState = useSelector(state => state),
        dispatch = useDispatch(),
        navigate = useNavigate(),
        handleChange = (e, func) => {
            func(e.currentTarget.value)
        },
        handleClick = () => {
            if (mail === null || login === null || password === null) {
                alert("Введите пожалуйста все данные!");
                return;
            }

            fetch("http://localhost:3000/users/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: login,
                    email: mail,
                    password: password
                })
            }).then((response) => response.text())
                .then((response) => {
                    switch (response) {
                        case "404":
                            alert("Пожалуйста, ввердите все данные!");
                            break;
                        case "501":
                            alert("Пользователь с такими данными уже существует!");
                            break;
                        default:
                            alert("Вы вошли!")
                            localStorage.setItem("token", response)
                            dispatch({
                                type: "user:auth",
                                payload: response
                            })
                            window.location = "/profile"
                            break;
                    }

                })
        }

    useEffect(() => {
        if(reduxState.user.token !== "token") navigate("/profile");
    }, [])

    return (
        <div className="form">
            <h2 className="form-name">Регистрация</h2>
            <div className="form-contents">
                <input onChange={(e) => { handleChange(e, setMail) }} type="text" placeholder="E-Mail" id="login" />
                <input onChange={(e) => { handleChange(e, setLogin) }} type="text" placeholder="Логин" id="login" />
                <input onChange={(e) => { handleChange(e, setPassword) }} type="text" placeholder="Пароль" id="password" />
                <button onClick={handleClick}>Войти</button>
            </div>
        </div>
    )

}
