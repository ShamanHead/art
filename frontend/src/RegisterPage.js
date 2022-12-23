export default function RegisterPage(props) {

    return (
        <div className="form">
            <h2 className="form-name">Регистрация</h2>
            <div className="form-contents">
                <input type="text" placeholder="E-Mail" id="login" />
                <input type="text" placeholder="Логин" id="login" />
                <input type="text" placeholder="Пароль" id="password" />
                <button>Войти</button>   
            </div>
        </div>
    )

}
