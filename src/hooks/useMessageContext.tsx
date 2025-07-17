import { useContext } from "react"
import { MessageContext } from "../contexts/MessageContext"

const useMessageContext = () => {

    const {state, dispatch} = useContext(MessageContext)

    return {state, dispatch}

}

export default useMessageContext