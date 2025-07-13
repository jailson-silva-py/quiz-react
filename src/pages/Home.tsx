import { useNavigate } from 'react-router-dom'
import classes from '../styles/Home.module.css'
import { type ChangeEvent, type FormEvent } from 'react'
import useTypeQuizContext from '../hooks/useTypeQuizContext'

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

        <main className={classes.content}>
        <h1>Bem-vindo ao Infinity Quiz</h1>
        <p>Por favor, selecione o nível de dificuldade e a categoria para continuar.</p>

        <form onSubmit={handleSubmit} className={classes.formulario}>


        <select onChange={handleNivelSeletor} className={classes.seletor}>

            <option value="">-- Selecione o nível --</option>
            <option value="facil">Fácil</option>
            <option value="medio">Médio</option>
            <option value="dificil">Difícil</option>
          
        </select>


        <select onChange={handleCategoriaSeletor} className={classes.seletor}>

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
        </main>

    )

}

export default Home