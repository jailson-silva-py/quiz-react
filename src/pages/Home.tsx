import { useNavigate } from 'react-router-dom'
import classes from '../styles/Home.module.css'
import { type ChangeEvent, type FormEvent } from 'react'
import useTypeQuizContext from '../hooks/useTypeQuizContext'
import { motion } from 'framer-motion'
import CustomSelect from '../components/CustomSelect/CustomSelect'

const Home = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useTypeQuizContext()

    const categoriaOptions = [{value:'',text:'Selecione a categoria...'},
        {value:'html', text:'HTML'}, 
        {value:'css', text:'CSS'}, {value:'js', text:'Javascript'}, 
        {value:'react', text:'React'}, {value:'ts', text:'Typescript'},
        {value:'python', text:'Python'}, {value:'java', text:'Java'}
    ]

    const nivelOptions = [{value:'',text:'Selecione o nível...'},
        {value:'facil', text:'Fácil'}, {value:'medio', text:'Médio'},
        {value:'dificil', text:'Difícil'}
    ]


    const handleNivelSeletor = (e:ChangeEvent<HTMLInputElement>) => {
       
        dispatch({type:'SET_NIVEL', payload: String(e.target.value)})

    }

    const handleCategoriaSeletor = (e:ChangeEvent<HTMLInputElement>) => {
      
        dispatch({type:'SET_CATEGORIA', payload: String(e.target.value)})

    }
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        if (!state.categoria || !state.nivel!) {

            return 

        }
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

        <CustomSelect options={nivelOptions} handleSelection={handleNivelSeletor}/>

        
        <CustomSelect options={categoriaOptions} handleSelection={handleCategoriaSeletor}/>
       
        
        <button type="submit" className={classes.btn}>Iniciar</button>
        </form>
        </motion.main>

    )

}

export default Home