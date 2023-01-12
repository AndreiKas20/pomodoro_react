import {useEffect, useState} from "react";

export const useHoursMinute = (minute: number) => {
    let arrText: Array<any> = []
    const [getMinute, setGetMinute] = useState(0)
    const [highMinute, setHighMinute] = useState(0)

    useEffect(() => {
        setGetMinute(minute)
        setHighMinute(minute)
        if (getMinute < 60) {
            arrText.push(`${getMinute} мин`)
            arrText.push(`${Math.round(getMinute * .75)} мин`)
            arrText.push(`${Math.round(getMinute * .5)} мин`)
            arrText.push(`${Math.round(getMinute * .25)} мин`)
        } else {

            let factor = 1
            for (let i = 0; i < 4; i++) {
                //----Как это сделать на состояниях ??? ----- Это вообще нужно делать с помощью useState???------//
                let factorMinute = highMinute * factor
                let hour
                let minute
                hour = factorMinute / 60
                minute = hour.toString().split('.')[1][0]
                minute = Number(minute)
                hour = Math.floor(hour)
                if (minute && minute !== 0) {
                    arrText.push(`${hour}ч  ${minute}мин`)
                } else {
                    arrText.push(`${hour}ч 0 мин`)
                }
                factor = factor - 0.25
            }
        }
    }, [minute, highMinute, getMinute, arrText])
    return arrText
}