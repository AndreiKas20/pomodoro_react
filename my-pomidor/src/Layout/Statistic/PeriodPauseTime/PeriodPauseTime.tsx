import React, {useLayoutEffect, useState} from 'react';
import styles from './periodpausetime.module.css';
import {arrTimeGraph} from "../../../hooks/useGetStatistic";
import {observer} from "mobx-react-lite";
import stateDayTarget from "../../../store/stateDayTarget";
import {Icon} from "../../../UI/Icon";

interface IPause {
    arrBrake: arrTimeGraph
}

export const PeriodPauseTime = observer((props: IPause) => {
    const dayTarget = stateDayTarget.dayTarget
    const [timeBrake, setTimeBrake] = useState(0)
    const [arrBrake, setArrBrake] = useState<arrTimeGraph>([])
    useLayoutEffect(() => {
        setArrBrake(props.arrBrake)
        if (!props.arrBrake[dayTarget]) {
            setTimeBrake(0)
        } else {
            setTimeBrake(Math.round(arrBrake[dayTarget]?.time / 60))
        }
    }, [props.arrBrake, dayTarget, timeBrake, arrBrake])
    return (
        <div className={styles.block}>
        <div className={styles.leftSide}>
            <h3 className={styles.titleBlock}>Время на паузе</h3>
            <span className={styles.timeBrake}>{timeBrake}м</span>
        </div>
            <div>
                <Icon nameIcon={"IconTimeBrake"}/>
            </div>
        </div>
    );
})
