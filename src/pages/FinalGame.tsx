import { useEffect } from 'react'
import Toast from '../components/Toast/Toast'
import useMessageContext from '../hooks/useMessageContext'

const FinalGame = () => {
    const {dispatch} = useMessageContext()
    useEffect(() => dispatch({type:'MOSTRAR'}), [])
    return (
        <>
        <h1>Oi</h1>
        <Toast tipo="info">tur voluptas obcaecati alias illo quisquam ipsam omnis</Toast>
        </>

    )

}

export default FinalGame