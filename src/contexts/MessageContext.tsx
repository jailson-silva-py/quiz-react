import { createContext, useReducer, type ReactNode } from "react"
import type { actionMessageContext, stateMessageContext } from "../types/contextsTypes"

const initialState = {

    mostrarMensagem:false,

}

const reducer = (state:stateMessageContext, action:actionMessageContext) => {

    switch(action.type) {

        case 'MOSTRAR':
            return {...state, mostrarMensagem:true}
        case 'ESCONDER':
            return {...state, mostrarMensagem:false}

    }

}

interface TypeMessageContext {

    state:stateMessageContext,
    dispatch: React.Dispatch<actionMessageContext>

}

export const MessageContext = createContext<TypeMessageContext>({state:initialState, dispatch:() => {}})

export const MessageContextProvider = ({ children }:{children:ReactNode}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <MessageContext.Provider value={{state, dispatch}}>
            {children}
        </MessageContext.Provider>

    )

}

