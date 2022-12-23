import {
    React, 
    useState, 
    useRef
} from "react";

import {
    Outlet
} from "react-router-dom";

import Router from "./Router";

export default function Root (props) {
    const [cart, setCart] = useState([]);
    
    return (
        <div className="contents">
            <Router/>
            <Outlet context={[cart, setCart]}/>
            <footer>
                Artem©
            </footer>
        </div>
    )
} 
