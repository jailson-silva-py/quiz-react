import { useEffect } from "react"
import useTypeQuizContext from "../hooks/useTypeQuizContext"

const Quiz = () => {

    const {state} = useTypeQuizContext()

    return (
    <>
    
    <h1>Quiz page</h1>
    </>
    )

}

export default Quiz