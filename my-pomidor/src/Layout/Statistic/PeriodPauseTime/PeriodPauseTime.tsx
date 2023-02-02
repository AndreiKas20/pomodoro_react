import React, {useEffect, useState} from 'react';
import styles from './periodpausetime.module.css';
import {arrTimeGraph} from "../../../hooks/useGetStatistic";
import {observer} from "mobx-react-lite";
import stateDayTarget from "../../../store/stateDayTarget";
import {IconTimeBrake} from "../../../UI/Icons/IconTimeBrake";
import {Icon} from "../../../UI/Icon";

interface IPause {
    arrBrake: arrTimeGraph
}

export const PeriodPauseTime = observer((props: IPause) => {
    const dayTarget = stateDayTarget.dayTarget
    const [timeBrake, setTimeBrake] = useState(0)
    useEffect(() => {
        setTimeBrake(Math.round(props.arrBrake[dayTarget]?.time / 60))
        if (!props.arrBrake[dayTarget]) {
            setTimeBrake(0)
        }
    }, [props.arrBrake, dayTarget, timeBrake])
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
