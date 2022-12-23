import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';

export default function Catalog(props) {

    const [games, setGames] = useState(),
        data = props.games;

    useEffect(() => {
        let result = [];    
    
        for(let row in data) {
            result.push(
                <div className="game">
                    <Link to={`/game/${props.games[row][0].id}`}>
                        <img src={props.games[row][0].img} key={props.games[row][0].id}/>
                    </Link>
                </div>
            ) 
        }
        
        setGames(result)
    }, []) 

    return (
        <div className={`catalog ${props}`}>
            <h2>Каталог</h2>
            <div className="catalog-contents">
                {games}
            </div>
        </div>
    )
}
