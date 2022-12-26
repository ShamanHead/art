import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import { useNavigate, redirect } from "react-router-dom";

export default function ProfilePage(props) {

    const reduxState = useSelector(state => state),
        navigate = useNavigate(),
        dispatch = useDispatch(),
        [name, setName] = useState(0),
        [mail, setMail] = useState(0),
        handleClick = () => {
            alert("Вы вышли!")
            localStorage.removeItem("token");
            dispatch({type: "user:remove"});
            window.location = "/"
        }

    useEffect(() => {
        if(reduxState.user.token !== "token") {
            fetch("http://localhost:3000/users/get", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: reduxState.user.token    
                })
            }).then((response) => response.json())
            .then((response) => {
                setName(response.name);
                setMail(response.email)
            })
        } else navigate("/login") 

    }, [])

    return (
        <div className="profile">
            <h2 className="profile-name">Профиль</h2>
            <div className="profile-contents">
                <span>Логин: {name}</span>
                <span>Почта: {mail}</span>
                <button onClick={handleClick}>Выйти</button>
            </div>
        </div>
    )

}
