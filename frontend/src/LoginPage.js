import {useEffect} from 'react';

import store from './store'

export default function LoginPage(props) {

    useEffect(() => {
        console.log(store.getState());
    })

    const handleClick = () => {
        store.dispatch({ type: 'LOGIN_SUCCEEDED' })

    }

    return (
        <div className="form">
            <h2 className="form-name">Вход</h2>
            <div className="form-contents">
                <input type="text" placeholder="Логин" className="login" />
                <input type="text" placeholder="Пароль" className="password" />
                <button onClick={handleClick}>Войти</button>
            </div>
        </div>
    )

}
