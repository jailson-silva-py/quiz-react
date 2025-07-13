import { createContext, useReducer, type ReactNode } from 'react'
import type { actionTypeQuizContext, stateTypeQuizContext } from '../types/contextsTypes'

type ContextValues = { 

    state: stateTypeQuizContext,
    dispatch: React.ActionDispatch<[action: actionTypeQuizContext]>

}

const initialContext:ContextValues = {
    state:{categoria:'', nivel:''}, 
    dispatch:() => {}
}


export const TypeQuizContext = createContext<ContextValues>(initialContext)

const initialState = {

    nivel:null,
    categoria:null

}


const reducer = (prevState:stateTypeQuizContext, action:actionTypeQuizContext) => {

    switch (action.type) {

        case 'SET_NIVEL':
            return {...prevState, nivel:action.payload}
        case 'SET_CATEGORIA':
            return {...prevState, categoria:action.payload}

    }

}

export const TypeQuizContextProvider = ({children}: {children:ReactNode}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <TypeQuizContext.Provider value={{state, dispatch}}>
            {children}
        </TypeQuizContext.Provider>

    )

}