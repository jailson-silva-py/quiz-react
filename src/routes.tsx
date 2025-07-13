import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom"
import App from "./App";
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import { TypeQuizContextProvider } from "./contexts/TypeQuizContext";

const rotasArray:RouteObject[] = [

    {

        path: '/',
        element: <App/>,
        children:[

            {

                path:'/',
                element:<Home/>

            },
            {

                path:'/quiz',
                element:<Quiz/>

            },
            

        ]

    }

]

const criadorRotas = createBrowserRouter(rotasArray)

export default () => {

    return(
    <TypeQuizContextProvider>
    <RouterProvider router={criadorRotas}/>
    </TypeQuizContextProvider>
)

}