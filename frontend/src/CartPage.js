import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function CartPage(props) {

    const [cart, setCart] = useOutletContext(),
        [items, setItems] = useState([]),
        [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            let result = [];

            console.log(cart);

            for (let item in cart) {
                let data = await fetch("http://localhost:3000/games/" + cart[item]).then(response => response.json())
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

    if (loading) return true;

    return (
        <div className="cart">
            <h2 className="cart-name">Корзина</h2>
            <div className="cart-contents">
                {items}
            </div>
        </div>
    )

}
