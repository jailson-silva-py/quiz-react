import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom"
import App from "./App";
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import { TypeQuizContextProvider } from "./contexts/TypeQuizContext";
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import { QuizGameContextProvider } from "./contexts/QuizGameContext";
import FinalGame from "./pages/FinalGame";
import { MessageContextProvider } from "./contexts/MessageContext";

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
                element:<QuizGameContextProvider><Quiz/></QuizGameContextProvider>

            },
            {

                path:'/sobre',
                element:<Sobre/>

            }, 
            {

                path:'/contato',
                element:<Contato/>

            }, 

            {

                path:'/final_game',
                element:<FinalGame/>

            }
            
        ]

    }

]

const criadorRotas = createBrowserRouter(rotasArray)

export default () => {

    return(
    <MessageContextProvider>
    <TypeQuizContextProvider>
    <RouterProvider router={criadorRotas}/>
    </TypeQuizContextProvider>
    </MessageContextProvider>
)

}