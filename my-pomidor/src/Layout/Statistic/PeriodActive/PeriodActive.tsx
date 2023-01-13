import React, {useEffect, useState} from 'react';
import styles from './periodactive.module.css';
import {arrTimeGraph, timeGraph} from "../../../hooks/useGetStatistic";
import {observer} from "mobx-react-lite";
import stateDayTarget from "../../../store/stateDayTarget";

interface IPeriod {
    arr: arrTimeGraph
}

export const PeriodActive = observer((props: IPeriod) => {
    const targetDay = stateDayTarget.dayTarget
    const [moreMinute, setMoreMinute] = useState(true)
    const [timeTask, setTimeTask] = useState<number>(0)
    const [arr, setArr] = useState<arrTimeGraph>([])
    const [text, setText] = useState('')
    useEffect(() => {
        setMoreMinute(true)
        setArr(props.arr)
        console.log(arr)
        setTimeTask(arr[targetDay]?.time / 60)
        if (timeTask < 60 && timeTask !== 0) {
            if (timeTask <= 1) {
                if (timeTask === 1) {
                    setText(`${timeTask} минуты`)
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
            <h2 className={styles.dayWeek}>Вы работали над задачами {moreMinute &&
                <span>в течение</span>
            } <span
                style={{color: 'var(--red22)'}}>{text}</span></h2>
        </div>
    );
})
