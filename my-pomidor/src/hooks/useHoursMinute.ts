import {useEffect, useState} from "react";

export const useHoursMinute = (minute: number) => {
    let arrText: Array<any> = []
    const [getMinute, setGetMinute] = useState(0)
    const [highMinute, setHighMinute] = useState(0)
    useEffect(() => {
        setGetMinute(minute / 60)
        setHighMinute(minute / 60)
        if (getMinute < 60) {
            arrText.push(`${Math.round(getMinute)} мин`)
            arrText.push(`${Math.round(getMinute * .75)} мин`)
            arrText.push(`${Math.round(getMinute * .5)} мин`)
            arrText.push(`${Math.round(getMinute * .25)} мин`)
        } else {
            let factor = 1
            for (let i = 0; i < 4; i++) {
                let factorMinute = highMinute * factor
                let hour
                let minute
                let hourF
                let minuteF
                hour = factorMinute / 60
                hourF = Math.floor(hour)
                minuteF = hour - hourF
                minute = Math.round(minuteF * 60)
                hour = Math.floor(hour)
                if (minute && minute !== 0) {
                    arrText.push(`${hour}ч  ${minute}мин`)
                } else {
                    arrText.push(`${hour}ч 0 мин`)
                }
                factor = factor - 0.25
            }
        }
    }, [minute, highMinute, getMinute])
    return arrText
}