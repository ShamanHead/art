import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, redirect } from "react-router-dom";

export default function LoginPage(props) {

    const [mail, setMail] = useState(null),
        [password, setPassword] = useState(null),
        reduxState = useSelector(state => state),
        dispatch = useDispatch(),
        navigate = useNavigate(),
        handleChange = (e, func) => {
            func(e.currentTarget.value)
        },
        handleClick = () => {
            if (mail === null || password === null) {
                alert("Введите пожалуйста все данные!");
                return;
            }

            fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
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
                            alert("Мы не нашли такого пользователя. Попробуйте еще раз");
                            break;
                        default:
                            alert("Вы вошли!")
                            localStorage.setItem("token", response)
                            dispatch({
                                type: "user:auth",
                                payload: response
                            })
                            window.location = "/profile"
                    }})
        }

    useEffect(() => {
        if(reduxState.user.token !== "token") navigate("/profile");
    }, [])

    return (
        <div className="form">
            <h2 className="form-name">Вход</h2>
            <div className="form-contents">
                <input onChange={(e) => { handleChange(e, setMail) }} type="text" placeholder="Почта" className="login" />
                <input onChange={(e) => { handleChange(e, setPassword) }} type="text" placeholder="Пароль" className="password" />
                <button onClick={handleClick}>Войти</button>
            </div>
        </div>
    )

}
