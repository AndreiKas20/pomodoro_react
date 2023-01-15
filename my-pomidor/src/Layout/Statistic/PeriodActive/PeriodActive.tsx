import React, {useEffect, useState} from 'react';
import styles from './periodactive.module.css';
import {arrTimeGraph} from "../../../hooks/useGetStatistic";
import {observer} from "mobx-react-lite";
import stateDayTarget from "../../../store/stateDayTarget";

interface IPeriod {
    arr: arrTimeGraph
}

export const PeriodActive = observer((props: IPeriod) => {
    const targetDay = stateDayTarget.dayTarget
    const [moreMinute, setMoreMinute] = useState(true)
    const [triger, setTriger] = useState(true)
    const [timeTask, setTimeTask] = useState<number>(0)
    const [arr, setArr] = useState<arrTimeGraph>([])
    const [text, setText] = useState('')
    const [infoDataText, setInfoDataText] = useState('')
    const dayArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    const [textDay, setTextDay] = useState('')
    useEffect(() => {
        setMoreMinute(true)
        setArr(props.arr)
        console.log(arr)
        setTextDay(dayArr[targetDay])
        setTimeTask(arr[targetDay]?.time / 60)
        if (arr[targetDay]?.time === 0) {
            setInfoDataText('Нет данных')
            setMoreMinute(false)
            setTriger(false)
        } else {
            setTriger(true)
            setMoreMinute(true)
            setInfoDataText('Вы работали над задачами')
        }
        if (timeTask < 60 && timeTask !== 0) {
            if (Math.round(timeTask) < 2) {
                if (Math.round(timeTask) === 1) {
                    setText(`${Math.round(timeTask)} минуты`)
                } else {
                    setMoreMinute(false)
                    setText('менее оной минуты')
                }
            } else {
                setText(`${Math.round(timeTask)} минут`)
            }
        } else {
            let __minute
            let __hour
            let __hourFloor
            let __minuteF
            __hour = timeTask / 60
            __hourFloor = Math.floor(__hour)
            __minuteF = __hour - __hourFloor
            __minute = Math.round(__minuteF * 60)
            console.log(__minute)
            if (__hourFloor === 1 || __hourFloor === 21) {
                if (__minute === 1 || __minute === 21) {
                    setText(`${__hourFloor} часа и ${__minute} минуты`)
                } else {
                    setText(`${__hourFloor} часа и ${__minute} минут`)
                }
            } else {
                if (__minute === 1 || __minute === 21) {
                    setText(`${__hourFloor} часов и ${__minute} минуты`)
                } else {
                    setText(`${__hourFloor} часов и ${__minute} минут`)
                }
            }
        }
    }, [props.arr, targetDay, text, timeTask, arr])
    return (
        <div className={styles.block}>
            <h2 className={styles.title}>{textDay}</h2>
            <p className={styles.dayWeek}>{infoDataText}
                {
                    moreMinute && <span>в течение </span>
                }
                {
                    triger && <span style={{color: 'var(--red22)'}}>{text}</span>
                }
            </p>
        </div>
    );
})
