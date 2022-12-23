import {React} from "react"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./modules/Route/Root";
import RouteError from "./modules/Route/RouteError";
import Homepage from "./modules/Pages/Homepage"
import Game from "./modules/Game"

import "./style/index.scss"
import 'swiper/css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <RouteError/>,
        children: 
            [
                {
                    path: "/",
                    element: <Homepage/>
                },
                {
                    path: "/game/:id",
                    element: <Game/>, 
                    loader: async ({params}) => {
                        return fetch("http://localhost:3000/games/" + params.id);  
                    },
                }
            ]
    }
]);


export default function App() {

  return (
            <div>
                <RouterProvider router={router}/> 
            </div>
          );
}

