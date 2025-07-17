import { useEffect, type ReactNode } from "react"
import useMessageContext from "../../hooks/useMessageContext"
import classes from './Toast.module.css'
import { HiCheckCircle, HiXCircle, HiInformationCircle } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'

interface Iprops {

    children:ReactNode,
    tipo: 'erro' | 'sucesso' | 'info',
    right?:number,
    top?:number,
    duracao?:number

}

const iconMap = {

    erro:HiXCircle,
    sucesso:HiCheckCircle,
    info:HiInformationCircle,

}

const Toast = ({children, tipo, right=10, top=10, duracao=3000}:Iprops) => {

    const { state, dispatch } = useMessageContext()
    const Icone = iconMap[tipo]
    const variants = {  
        default:{opacity:0, top:0},
        entrada:{opacity:1, top:top},

        saida:{opacity:0, top:[top, -top]}

    }

    useEffect(() => {
        
        if (!state.mostrarMensagem) return

        const timer = setTimeout(() => {
                  
            dispatch({type:'ESCONDER'})
            
        }, duracao)

        return () => clearTimeout(timer)

    }, [state.mostrarMensagem])

    return (
        <>
        <AnimatePresence>
        {state.mostrarMensagem && <motion.div className={classes.toastContent} 
        style={{right:right}}
        transition={{duration:.4}}
        initial='default' animate='entrada' exit='saida' variants={variants}>

        <div className={`${classes.tempoToast} ${classes[tipo]}`}
        style={{animationDuration:`${duracao/1000}s`}}>
        </div>
        <Icone className={`${classes[tipo]} ${classes.toastIcone}`}/>
        <div className={classes.toast}>
            <div className={classes.textContent}>
            {children}
            </div>
        </div> 

        </motion.div>}
        </AnimatePresence>
        </>

    )

}

export default Toast