export interface stateTypeQuizContext {

    nivel:string | null,
    categoria:string | null

}

export interface actionTypeQuizContext {

    type: 'SET_NIVEL' | 'SET_CATEGORIA',
    payload: string

}