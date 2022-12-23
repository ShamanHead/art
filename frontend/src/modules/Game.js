import {
    React,
    useState,
    useEffect,
    useRef
} from "react";
import {useLoaderData} from "react-router-dom";

export default function Game (props) {
    const data = useLoaderData(),
        [table, setTable] = useState(0);

    useEffect(() => {
        let tableTemp = [];

        for(let row in data[1]) {
            tableTemp.push(
                <tr>
		        	<td>{data[1][row].name}</td>
		        	<td>{data[1][row].value}</td>
		        </tr>
            )
        }

        setTable(tableTemp);

        console.log(data);

    }, [])

    return (
        <div className="game">
            <h2 className="game-name">{data[0].name}</h2>
            <div className="game-contents">
                <div className="game-contents-buy-image">
                    <img src={data[0].img} className="game-contents__image"/>
                    <div className="buy-section">
                        В корзину 
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> 
                    </div>
                </div>
                <div className="game-contents__description">
                    <span>Жанр: {data[0].genre}</span>
                    <span>Платформа: {data[0].platform}</span>
                    {data[0].description} 
                    <table className="game-contents-requirements">
                        <thead>
		                	<tr>
		                		<th>Название</th>
		                		<th>Характеристика</th>
		                	</tr>
		                </thead>
		                <tbody>
		                    {table}	
                        </tbody>
                    </table>
                </div>
             </div>
        </div>
    )
}
