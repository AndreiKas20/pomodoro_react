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
import stateObservedWeek from "../../store/stateObservedWeek";

export const Statistic = observer(() => {
    const weekTarget = stateObservedWeek.weekTarget
    const [dateHandicap, setDateHandicap] = useState(0)
    const nowDate = new Date()
    const [maxIntervalTime, setMaxIntervalTime] = useState(0)
    const nowDayWeek = nowDate.getDay()
    const [day, setDay] = useState<number>(0)
    const [arr,setArr] = useState<Array<any>>([])
    const arrTime = useGetStatistic(arr, 7, new Date(new Date().setDate(new Date().getDate() - day + 1 - dateHandicap)), 'timeWorkTask', new Date(new Date().setDate(new Date().getDate() - day + 7 - dateHandicap)))
    const arrCountPomodor = useGetStatistic(arr, 7, new Date(new Date().setDate(new Date().getDate() - day + 1 - dateHandicap)), 'acceptedPomodoro', new Date(new Date().setDate(new Date().getDate() - day + 7 - dateHandicap)))
    const arrTimeBrake = useGetStatistic(arr, 7, new Date(new Date().setDate(new Date().getDate() - day + 1 - dateHandicap)), 'timeBreakTask', new Date(new Date().setDate(new Date().getDate() - day + 7 - dateHandicap)))
    const arrCountBrake = useGetStatistic(arr, 7, new Date(new Date().setDate(new Date().getDate() - day + 1 - dateHandicap)), 'countBrake', new Date(new Date().setDate(new Date().getDate() - day + 7 - dateHandicap)))
    const arrText = useHoursMinute(maxIntervalTime)
    const acceptArr = arrTaskStore.acceptArr
    useEffect(() => {
        arrTaskStore.addLocalStorage(JSON.parse( localStorage.acceptArr))
    },[])
    useEffect(() => {
        if (weekTarget === 0) {
            setDateHandicap(0)
        } else if (weekTarget === 1) {
            setDateHandicap(7)
        } else if (weekTarget === 2) {
            setDateHandicap(14)
        }

    }, [weekTarget])
    useEffect(() => {
        setArr(acceptArr.filter(value => new Date(value.dateCompletion?.Date) > new Date(new Date().setDate(new Date().getDate() - day - dateHandicap))))
    },[acceptArr])

    useEffect(() => {
        setArr(arrTaskStore.acceptArr.filter(value => new Date(value.dateCompletion?.Date) > new Date(new Date().setDate(new Date().getDate() - day - dateHandicap))))
    }, [dateHandicap])
    useEffect(() => {
        setMaxIntervalTime(Math.max(...arrTime.map(value => value.time)))
    }, [arrTime, maxIntervalTime])
    useEffect(() => {
        if (nowDayWeek === 0) {
            setDay(7)
        } else {
            setDay(nowDayWeek)
        }
    }, [nowDayWeek, day])

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
                    <PeriodCountPomodor arr={arrCountPomodor}/>
                </div>
                <div className={styles.blockTopRight}>
                    <Graph arrText={arrText} arr={arrTime} dailyInterval={7} maxIntervalTime={maxIntervalTime}/>
                </div>
            </div>
            <div className={styles.blockBottom}>
                <PeriodFocus arrBrake={arrTimeBrake} arrWork={arrTime}/>
                <PeriodPauseTime arrBrake={arrTimeBrake}/>
                <PeriodCountStop arrCountBrake={arrCountBrake}/>
            </div>
        </div>
    );
})
