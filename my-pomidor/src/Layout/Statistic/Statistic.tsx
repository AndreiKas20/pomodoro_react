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
import {typesTaskComplete} from "../../../types/typesArrTask";

export const Statistic = observer (() => {
    const [arrMond, setArrMond] = useState(0)
    const arr = arrTaskStore.acceptArr.filter(value => value.dateCompletion?.Date > new Date("2023-01-04"))
    const dayOne = arrTaskStore.acceptArr.filter(value => value.dateCompletion?.Date >= new Date("2023-01-04") && value.dateCompletion.Date <= new Date("2023-01-04"))
    const fun = (value: typesTaskComplete) => {
        if (value.timeWorkTask) {
            setArrMond(value.timeWorkTask + arrMond)
        }
    }
    console.log('sd', new Date("2023-01-03") === new Date("2023-01-03"))
    useEffect(() => {

        console.log('store arr', arrMond)
    }, [arrMond])
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
