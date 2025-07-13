import useTypeQuizContext from "../hooks/useTypeQuizContext"

const Quiz = () => {

    const {state} = useTypeQuizContext()
    console.log(state.categoria, state.nivel)
    return (
    <>
    
    <h1>Quiz page</h1>
    </>
    )

}

export default Quiz