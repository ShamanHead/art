import {useEffect} from 'react';

export default function LoginPage(props) {

    return (
        <div className="form">
            <h2 className="form-name">Вход</h2>
            <div className="form-contents">
                <input type="text" placeholder="Логин" className="login" />
                <input type="text" placeholder="Пароль" className="password" />
                <button>Войти</button>
            </div>
        </div>
    )

}
