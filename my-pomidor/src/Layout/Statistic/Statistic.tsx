import React, {useEffect, useState} from 'react';
import {PeriodActive} from "./PeriodActive";
import {PeriodCountPomodor} from "./PeriodCountPomodor";
import {Graph} from "./Graph";
import {PeriodFocus} from "./PeriodFocus";
import {PeriodPauseTime} from "./PeriodPauseTime";
import {PeriodCountStop} from "./PeriodCountStop";
import styles from './statistic.module.css'
import {Selector} from "./Selector";
import arrTaskStore from "../../store/arrTaskStore";
import {observer} from "mobx-react-lite";
import {useGetStatistic} from "../../hooks/useGetStatistic";
import {useHoursMinute} from "../../hooks/useHoursMinute";

export const Statistic = observer(() => {
    const nowDate = new Date()
    const [maxIntervalTime, setMaxIntervalTime] = useState(0)
    const nowDayWeek = nowDate.getDay()
    const nowDayDate = nowDate.getDate()
    const nowMonth = nowDate.getMonth() + 1
    const nowYear = nowDate.getFullYear()
    const dayStartInterval = nowDayDate - nowDayWeek + 1
    const dayStart = new Date(`${nowYear}-${nowMonth}-${dayStartInterval}`)
    const arr = arrTaskStore.acceptArr.filter(value => value.dateCompletion?.Date > dayStart)
    const arrTime = useGetStatistic(arr, 7, dayStartInterval, 'timeWorkTask')
    const arrText = useHoursMinute(maxIntervalTime)
    useEffect(() => {
        setMaxIntervalTime(Math.max(...arrTime.map(value => value.time)))
    }, [arrTime, maxIntervalTime])

    return (
        <div className={styles.container}>
            <div className={styles.blockTitleAndSelect}>
                <h1 className={styles.title}>
                    Ваша активность
                </h1>
                <Selector/>
            </div>
            <div className={styles.blockTop}>
                <div className={styles.blockTopLeft}>
                    <PeriodActive arr={arrTime}/>
                    <PeriodCountPomodor/>
                </div>
                <div className={styles.blockTopRight}>
                    <Graph arrText={arrText} arr={arrTime} dailyInterval={7} maxIntervalTime={maxIntervalTime}/>
                </div>
            </div>
            <div className={styles.blockBottom}>
                <PeriodFocus/>
                <PeriodPauseTime/>
                <PeriodCountStop/>
            </div>
        </div>
    );
})
