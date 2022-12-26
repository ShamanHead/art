import { React, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

export default function GameSlider(props) {

    const type = props.type ? props.type : "horizontal",
        breakpoints = type === "horizontal"
            ? {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                720: {
                    slidesPerView: 2,
                    spaceBetween: 50
                }
            }
            : {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                560: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                720: {
                    slidesPerView: 4,
                    spaceBetween: 50
                }
            },
        [games, setGames] = useState(0);

    useEffect(() => {
        let data = props.games,
            sort = props.sort,
            result = [];

        for (let row in data) {
            switch (sort) {
                case "sale_price":
                    if (data[row][0].sale_price === undefined) continue;
                    break;
                case "genre":
                    if (data[row][0].genre !== "Шутер") continue;
                    break;
            }

            let price = [];

            if (data[row][0].sale_price !== undefined) {
                price = [
                    <>
                        <div className="cross-price">
                            {data[row][0].sale_price}$
                        </div>
                        <div className="real-price">
                            {data[row][0].price}$
                        </div>
                    </>
                ]
            } else {
                price = [
                    <div className="cross-price">
                        {data[row][0].price}$
                    </div>
                ]
            }

            result.push(
                <SwiperSlide className={`slide ${type}`}>
                    <img src={data[row][0].img} className="GameIMG" />
                    <div className="info">
                        <h3 className="name">{data[row][0].name}</h3>
                        <div className="info-piece">Жанр: {data[row][0].genre}</div>
                        <div className="info-piece">Платформы: {data[row][0].platform}</div>
                        <div className="info-piece price">
                            {price} 
                        </div>
                        <div className="buttons">
                            <Link to={`/game/${data[row][0].id}`}>
                                Подробнее
                            </Link>
                            <a className="cart-button" href="#">
                                <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            )
        }

        setGames(result);
    }, [])

    return (
        <div className="game-slider">
            <h2>{props.name}</h2>
            <Swiper
                className="slides"
                breakpoints={breakpoints}
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {games}
            </Swiper>
        </div>)
}
