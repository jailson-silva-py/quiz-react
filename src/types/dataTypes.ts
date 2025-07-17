export interface QuestaoQuiz {
    id:number, 
    titulo:string,
    enunciado:string,
    perguntas:[string, string, string, string],
    respostaCorreta: string
}