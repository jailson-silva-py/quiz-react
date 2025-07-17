import { createContext, useReducer, type ReactNode, type Dispatch } from "react";
import type { actionQuizGameContext, stateQuizGameContext } from "../types/contextsTypes";

const initialState = {

    questaoAtual: 0,
    alternativaSelecionada:null,
    alternativaCorreta:null,
    acertos:0,
    erros:0,

}



const reducer = (state:stateQuizGameContext, action:actionQuizGameContext) => {

    switch(action.type) {

        case 'PROXIMA_QUESTAO':
            const novaQuestao = state.questaoAtual + 1
            return {
                ...state, questaoAtual:novaQuestao, 
                alternativaSelecionada:null,
                alternativaCorreta:null

            }

        case 'SET_ALTERNATIVA':
           
            const alternativaSelecionada = action.payload
            return {...state, alternativaSelecionada}
        case 'SET_ALTERNATIVA_CORRETA':
            const alternativaCorreta = action.payload
            var subObj:any = {}

            if(alternativaCorreta === true) {

                subObj.acertos = state.acertos + 1

            } else {

                subObj.erros = state.erros + 1

            } 

            
            return {...state, alternativaCorreta, ...subObj}

    }

}

interface TypeQuizGameContext {

    state: stateQuizGameContext,
    dispatch: Dispatch<actionQuizGameContext>

}

export const QuizGameContext = createContext<TypeQuizGameContext>({state:initialState, dispatch:() => {}})

export const QuizGameContextProvider = ({children}:{children:ReactNode}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <QuizGameContext.Provider value={{state, dispatch}}>
            {children}
        </QuizGameContext.Provider>

    )

}
