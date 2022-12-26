import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, redirect } from "react-router-dom";

export default function CartPage(props) {

    const [items, setItems] = useState([]),
        [loading, setLoading] = useState(true),
        navigate = useNavigate(),
        reduxState = useSelector(state => state)

    useEffect(() => {
        if (reduxState.user.token === "token") navigate("/login");

        async function fetchData() {
            let result = [];
            let cart = await fetch("http://localhost:3000/cart/get", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: reduxState.user.token
                })
            }).then(response => response.json());            
            console.log(cart);

            for (let item in cart) {
                let data = await fetch("http://localhost:3000/games/" + cart[item].game_id).then(response => response.json())
                let price = [];

                if (data[0].sale_price !== undefined) {
                    price = [
                        <div className="price">
                            <div className="cross-price">
                                {data[0].sale_price}$
                            </div>
                            <div className="real-price">
                                {data[0].price}$
                            </div>
                        </div>
                    ]
                } else {
                    price = [
                        <div className="cross-price">
                            {data[0].price}$
                        </div>
                    ]
                }
                result.push([
                    <div className="game">
                        <img src={data[0].img} />
                        {price}
                    </div>
                ])
            }

            console.log(result)
            setItems(result);
            setLoading(false);
        }

        fetchData();
    }, [])

    return (
        <div className="cart">
            <h2 className="cart-name">Корзина</h2>
            <div className="cart-contents">
                {items}
            </div>
        </div>
    )

}
