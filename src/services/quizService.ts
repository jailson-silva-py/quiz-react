import type { QuestaoQuiz } from "../types/dataTypes"
import { useEffect, useState } from "react"

export const fetchQuizNivel = (categoria:string, nivel:string) => {

    const [dados, setDados] = useState<QuestaoQuiz[]>()
    

    useEffect(() => {

        const getDados = async () => {
           
            const res = await fetch(`/data/${categoria}.json`)
            const dados = await res.json()

            setDados(dados[nivel] as QuestaoQuiz[])
            

        }

       getDados()

    }, [])

    return dados as QuestaoQuiz[]

}


export const QuestoesEmbraralhadas =  (questoes:QuestaoQuiz[]) => {

    const a = [...questoes]
    for (let i = a.length - 1; i > 0;--i) {

        const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
        [a[j], a[i]] = [a[i], a[j]]

    }

    return a

}