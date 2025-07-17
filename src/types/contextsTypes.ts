export interface stateTypeQuizContext {

    nivel:string,
    categoria:string

}

export interface actionTypeQuizContext {

    type: 'SET_NIVEL' | 'SET_CATEGORIA',
    payload: string

}

export interface stateQuizGameContext {

    questaoAtual: number,
    alternativaSelecionada:null | 0 | 1 | 2 | 3,
    alternativaCorreta:boolean | null,
    acertos:number,
    erros:number,

}

export type actionQuizGameContext  =  {type:'PROXIMA_QUESTAO'} | 
{type:'SET_ALTERNATIVA', payload:0 | 1 | 2 | 3} | 
{type:'SET_ALTERNATIVA_CORRETA', payload:boolean}

export interface stateMessageContext {

    mostrarMensagem:boolean

}

export type actionMessageContext  = {type:'MOSTRAR'} | {type:'ESCONDER'}

