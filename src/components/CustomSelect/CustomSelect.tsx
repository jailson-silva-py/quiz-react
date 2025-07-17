import { useEffect, useState, type ChangeEvent, type ChangeEventHandler, type ReactEventHandler } from 'react'
import classes from './CustomSelect.module.css'
import { HiChevronDown } from 'react-icons/hi'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

interface Iprops {

    options:{text:string, value:string}[],
    handleSelection:ChangeEventHandler<HTMLInputElement>,


}

const CustomSelect = ({options, handleSelection}:Iprops) => {

    const [mostrarDropdown, setMostrarDropdown] = useState(false)
    const controls = useAnimation()
    const [valor, setValor] = useState('')
    const [nullOption] = options.filter((prev) => {

        return prev.value === ''

    })

    const changeCheckBox = () => {

        
        setMostrarDropdown(prev => !prev)
        

    }

    const handleSelecao = (obj:{value:string, text:string}) => (e:ChangeEvent<HTMLInputElement>) => {

        handleSelection(e)
        setValor(obj.text)
        setMostrarDropdown(false)

    }

    useEffect(() => {

        if (mostrarDropdown) {
            
            (async () => {
 
                await controls.start({ visibility:'visible',opacity:1, translateY:0})

            })()

        }  else {

            (async () => {

                await controls.start({visibility:'hidden', opacity:0, translateY:-20})
            
            })()

        }

    }, [mostrarDropdown])

    return (

        <div className={classes.contentSelect}>

                  
            <input type="checkbox" name="open" 
            className={classes.checkbox} 
            onChange={changeCheckBox}/>

            <div className={classes.selectHandle}>

                <div>{ valor ? valor:nullOption.text}</div>
                <HiChevronDown size={32} className={`${classes.iconSelect} 
                ${mostrarDropdown ? classes.inverter: classes.origem}`}/>
              

            </div>
            <AnimatePresence>
            <motion.div 
            animate={controls}
            initial={{opacity:0, translateY:-20}}
            transition={{duration:.4}}
            exit={{visibility:'hidden'}}
            className={classes.dropdownSelect}>
                

                
                {options.map((objAtual) => (<label className={classes.optionContent}>
                    <input type="radio" name="op1"  value={objAtual.value}
                    onChange={handleSelecao(objAtual)}
                    className={classes.radioOption}/>
                    <span>{objAtual.text}</span>
                </label>))}


            </motion.div>
            </AnimatePresence>

        </div>

    )

}

export default CustomSelect