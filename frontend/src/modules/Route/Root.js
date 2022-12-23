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
    
    return (
        <div className="contents">
            <Router/>
            <Outlet/>
            <footer>
                Artem©
            </footer>
        </div>
    )
} 
