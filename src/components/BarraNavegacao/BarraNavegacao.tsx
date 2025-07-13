import classes from './BarraNavegacao.module.css'
import { HiHome, HiMenu } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'
import useViewportSmallerThan from '../../hooks/useViewportSmallerThan'
import useOutClickElement from '../../hooks/useOutClickElement'
 
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

                <HiMenu className={classes.menuSuspensoIcon}/>

            </button>}
           
            <ul className={classesMenuLista}>

                <li className={classes.menuListaItem}>
                    <HiHome size={32} className={classes.homeIcon}/>
                    <NavLink to="/" className={classes.link}>Home</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default BarraNavegacao