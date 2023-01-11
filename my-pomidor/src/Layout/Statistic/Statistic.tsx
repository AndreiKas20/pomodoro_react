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
import {useAdditionTime} from "../../hooks/useAdditionTime";
import {useGetStatistic} from "../../hooks/useGetStatistic";

export const Statistic = observer(() => {
    const nowDate = new Date()
    const nowDayWeek = nowDate.getDay()
    const nowDayDate = nowDate.getDate()
    const nowMonth = nowDate.getMonth() + 1
    const nowYear = nowDate.getFullYear()
    const dayStartInterval = nowDayDate - nowDayWeek + 1
    const dayStart = new Date(`${nowYear}-${nowMonth}-${dayStartInterval}`)
    const [arrMond, setArrMond] = useState<number>(0)
    const arr = arrTaskStore.acceptArr.filter(value => value.dateCompletion?.Date > dayStart)
    const dayOne = arrTaskStore.acceptArr.filter(value => value.dateCompletion?.Date >= new Date("2023-01-04") && value.dateCompletion.Date <= new Date("2023-01-04"))

    // console.log('sd', arr)
    const arrTime = useGetStatistic(arr, 7, dayStartInterval, 'timeWorkTask')
    const monday = useAdditionTime(dayOne, 'timeWorkTask')
    useEffect(() => {
        console.log('store arr', arrTime)
    }, [arrTime])
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
                    <PeriodActive/>
                    <PeriodCountPomodor/>
                </div>
                <div className={styles.blockTopRight}>
                    <Graph/>
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
