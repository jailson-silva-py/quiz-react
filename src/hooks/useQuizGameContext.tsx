import { useContext } from "react";
import { QuizGameContext } from "../contexts/QuizGameContext";

const useQuizGameContext = () => {

    const {state, dispatch} = useContext(QuizGameContext)

    return {state, dispatch}

}

export default useQuizGameContext