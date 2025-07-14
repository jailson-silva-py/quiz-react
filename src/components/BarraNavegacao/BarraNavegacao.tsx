import classes from './BarraNavegacao.module.css'
import { HiOutlineHome, HiOutlineMenu, HiOutlineQuestionMarkCircle, HiOutlineMail } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'
import useViewportSmallerThan from '../../hooks/useViewportSmallerThan'
import useOutClickElement from '../../hooks/useOutClickElement'
import { motion, AnimatePresence } from 'framer-motion'
 
const BarraNavegacao = () => {

    const [mostrarMenuSuspenso, setMostrarMenuSuspenso] = useState(false)
    const quebraViewport = useViewportSmallerThan(720)
    const menuRef = useRef<HTMLUListElement>(null)

    const abrirMenu = () => {

        setMostrarMenuSuspenso(true)
        console.log(mostrarMenuSuspenso)

    }

    useOutClickElement(() => setMostrarMenuSuspenso(false), menuRef)
    const classesMenuLista = useMemo(() =>
        `${classes.menuLista} ${mostrarMenuSuspenso ? classes.mostrar: quebraViewport ? classes.esconder: classes.mostrar}`, 
    [quebraViewport, mostrarMenuSuspenso])
    
    

    return (

        <nav className={classes.menuContainer} ref={menuRef}>
            {quebraViewport && <button className={classes.menuSuspensoBtn} onClick={abrirMenu}>

                <HiOutlineMenu className={classes.menuSuspensoIcon}/>

            </button>}
            <AnimatePresence>
            {(mostrarMenuSuspenso || !quebraViewport) && (<motion.ul className={classesMenuLista} 
            key="menu"
            exit={{translateX:"-100%"}}
            initial={{scaleX:0, translateX:"-40%"}} animate={{scaleX:1, translateX:"0"}}
            transition={{duration:.4}}>

                <li className={classes.menuListaItem}>
                    <HiOutlineHome size={32} className={classes.icon}/>
                    <NavLink to="/" className={classes.link}>Home</NavLink>
                </li>
                <li className={classes.menuListaItem}>
                    <HiOutlineQuestionMarkCircle size={32} className={classes.icon}/>
                    <NavLink to="/sobre" className={classes.link}>Sobre</NavLink>
                </li>
                <li className={classes.menuListaItem}>
                    <HiOutlineMail size={32} className={classes.icon}/>
                    <NavLink to="/contato" className={classes.link}>Contato</NavLink>
                </li>

            </motion.ul>)}
            </AnimatePresence>

        </nav>
    )
}

export default BarraNavegacao