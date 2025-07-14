import { useNavigate } from 'react-router-dom'
import classes from '../styles/Home.module.css'
import { type ChangeEvent, type FormEvent } from 'react'
import useTypeQuizContext from '../hooks/useTypeQuizContext'
import { motion } from 'framer-motion'

const Home = () => {

    const navigate = useNavigate()
    const { dispatch } = useTypeQuizContext()



    const handleNivelSeletor = (e:ChangeEvent<HTMLSelectElement>) => {
       
        dispatch({type:'SET_NIVEL', payload: String(e.target.value)})

    }

    const handleCategoriaSeletor = (e:ChangeEvent<HTMLSelectElement>) => {
      
        dispatch({type:'SET_CATEGORIA', payload: String(e.target.value)})

    }
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        navigate('/quiz')

    }

    return (

        <motion.main initial={{opacity:0, translateY:"-100%"}}
        animate={{opacity:1, translateY:"0"}}
        transition={{duration:1}}
        className={classes.content}>
        <h1>Bem-vindo ao Infinity Quiz</h1>
        <p>Por favor, selecione o nível de dificuldade e a categoria para continuar.</p>

        <form onSubmit={handleSubmit} className={classes.formulario}>


        <motion.select onChange={handleNivelSeletor} className={classes.seletor}
        required>

            <option value="">-- Selecione o nível --</option>
            <option value="facil">Fácil</option>
            <option value="medio">Médio</option>
            <option value="dificil">Difícil</option>
          
        </motion.select>


        <select onChange={handleCategoriaSeletor} className={classes.seletor} required>

            <option value="" className={classes.nivelSeletorOp}>-- Selecione a categoria --</option>
            <option value="js">Javascript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="react">React</option>
            <option value="ts">Typescript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          
        </select>

        
        <button type="submit" className={classes.btn}>Iniciar</button>
        </form>
        </motion.main>

    )

}

export default Home