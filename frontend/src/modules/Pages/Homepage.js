import { React, useEffect, useState } from "react"

import GameSlider from "../GameSlider"
import Catalog from "../Catalog"

export default function Homepage() {

    const [data, setData] = useState(0),
          [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:3000/games"
                )
            ).json();

            setData(data);
            setLoading(false)
        };
       
        dataFetch();
    }, [setData])

    if(isLoading) return 'loading...';

    return (
        <div className="games">
            <GameSlider games={data} sort="sale_price" name="Скидки" type="vertical" />
            <Catalog games={data} />
            <GameSlider games={data} sort="genre" name="Шутеры" />
        </div>
    )
}
