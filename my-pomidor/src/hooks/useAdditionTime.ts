import {typesArrTaskComplete, typeTaskAdditionName} from "../../types/typesArrTask";
import {useEffect, useState} from "react";

export const useAdditionTime = (arr: typesArrTaskComplete, property: typeTaskAdditionName) => {
    const [timeWork, setTimeWork] = useState(0)
    useEffect(() => {
        let __plus: number = 0
        arr.forEach((value) => {
            console.log('in foreach', value[property])
            if (value[property]) {
                // @ts-ignore ------------- Как убрать ??? Как проверить на наличие переменной?
                __plus = __plus + value[property]
            }
        })
        setTimeWork(__plus)
    }, [timeWork, arr, property])
    return timeWork
}