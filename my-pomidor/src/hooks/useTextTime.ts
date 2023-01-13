import {useEffect, useState} from "react";

export const useTextTime = (time?: number) => {
    const [minute, setMinute] = useState(0)
    const [hours, setHours] = useState(0)
    const [fullText, setFullText] = useState(``)
    useEffect(() => {
     if(time)   setMinute(time / 60)
        if (minute < 60) {
            if (minute === 1) {
                setFullText(`${minute} минуты`)
            } else {
                setFullText(`${minute} минут`)
            }
        } else {
            let __minute
            setHours(minute / 60)
            __minute = hours.toString().split('.')[1][0]
            __minute = Number(__minute)
            setHours(Math.floor(hours))
            if (__minute !== 0) {
                if (hours === 1 || hours === 21) {
                    if (__minute === 1 || __minute === 21) {
                        setFullText(`${hours} часа и ${__minute} минуты`)
                    } else {
                        setFullText(`${hours} часа и ${__minute} минут`)
                    }
                } else {
                    if (__minute === 1 || __minute === 21) {
                        setFullText(`${hours} часов и ${__minute} минуты`)
                    } else {
                        setFullText(`${hours} часов и ${__minute} минут`)
                    }
                }
            } else {
                if (hours === 1 || hours === 21) {
                    setFullText(`${hours} часа`)
                } else {
                    setFullText(`${hours} часов`)
                }
            }
        }
        console.log('text time', fullText )
    }, [time])
    return fullText
}
