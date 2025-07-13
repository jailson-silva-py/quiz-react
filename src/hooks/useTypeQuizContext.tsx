import { useContext } from "react";
import { TypeQuizContext } from "../contexts/TypeQuizContext";

const useTypeQuizContext = () => {

    const {state, dispatch} = useContext(TypeQuizContext) 

    return {state, dispatch}

}

export default useTypeQuizContext