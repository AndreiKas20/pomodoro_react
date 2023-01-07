import {useEffect, useState} from "react";
import {styleBtn} from "../../types/colorTypes";

export const useStyleBtn = (startState: styleBtn, newState?: styleBtn) => {
    const [state, setState] = useState<styleBtn>(startState)
    useEffect(() => {
        if (!newState) return
        setState(newState)
    }, [newState])
    return state
}