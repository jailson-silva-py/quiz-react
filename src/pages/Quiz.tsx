import useTypeQuizContext from "../hooks/useTypeQuizContext"
import useQuizGameContext from "../hooks/useQuizGameContext"
import { fetchQuizNivel, QuestoesEmbraralhadas } from "../services/quizService"
import { type FormEvent, useMemo } from 'react'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import classes from '../styles/Quiz.module.css'
import { useNavigate } from "react-router-dom"

const Quiz =() => {

        const { state } = useTypeQuizContext()
        const dados = fetchQuizNivel(state.categoria, state.nivel)
        const {state:stateGame, dispatch:dispatchGame} = useQuizGameContext()
        const questoes = useMemo(() => QuestoesEmbraralhadas(dados), [dados])
        const navigate = useNavigate()
        
        const classeAlternativa = (index:number) => {

            const selecionada = index === stateGame.alternativaSelecionada
            const correta =  stateGame.alternativaCorreta

            return [

                selecionada && classes.selecionada,
                selecionada && correta === true && classes.correta,
                selecionada && correta === false && classes.incorreta,
                !selecionada && correta != null && classes.desabilitado

            ].filter(Boolean).join(' ')
            
        }
        
        const handleSubmit = (e:FormEvent) => {

            e.preventDefault();

            // Se está na última questão
            if (!questoes || stateGame.alternativaSelecionada === null) return

            const alternativaSelecionada = questoes[stateGame.questaoAtual].perguntas[stateGame.alternativaSelecionada].trim()
            const alternativaCorreta = questoes[stateGame.questaoAtual].respostaCorreta.trim()

            const estaCorreta = alternativaCorreta === alternativaSelecionada

            dispatchGame({type:'SET_ALTERNATIVA_CORRETA', payload:estaCorreta})

            const ultimaQuestao = stateGame.questaoAtual >= 19

            const time = setTimeout(() => {

                !ultimaQuestao ? dispatchGame({type:'PROXIMA_QUESTAO'})
                :
                navigate('/final_game')
            
            }, 1000)

            return () => clearTimeout(time)

        }

        const handleAlternativaSelecionada = (index:number) => () => {

            if(index >= 0 && index <= 3) {

                dispatchGame({type:'SET_ALTERNATIVA', payload:index as 0 | 1 | 2 | 3})

            }

        }


        return (
        <>
        <main className={classes.content}>

            { questoes &&

            <form className={classes.questaoContent} onSubmit={handleSubmit}>
                <h1>{stateGame.questaoAtual+1} de {questoes.length}</h1>
                <h1>{questoes[stateGame.questaoAtual]?.enunciado}</h1>

                <AnimatePresence mode='wait'>
                <motion.ul 
                key={stateGame.questaoAtual}
                initial={{translateY:'-100%', opacity:0.2}}
                animate={{translateY:[0, -50, 0, -10, 0], opacity:1}}
                transition={{duration:1, ease:easeInOut}}
                className={classes.alternativas}>

                    {questoes[stateGame.questaoAtual]?.perguntas?.map((alternativa, index) => (

                        <motion.li key={index}
                        className={classeAlternativa(index)}
                        whileHover={{translateY:-5}}
                        whileTap={{scale:0.95}}
                        onClick={handleAlternativaSelecionada(index)}>
                            {alternativa}
                        </motion.li>

                    ))}

                </motion.ul>
                </AnimatePresence>

                <motion.button whileHover={{opacity:1, scale:1.02}}
                whileTap={{scale:0.95}}
                type="submit" className={classes.submit}>
                        Responder
                </motion.button>

            </form>
            }

        </main>
        </>
        )

    }

    export default Quiz