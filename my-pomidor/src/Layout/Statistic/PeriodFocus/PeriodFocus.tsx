import React, {useEffect, useState} from 'react';
import styles from './periodfocus.module.css';
import {observer} from "mobx-react-lite";
import stateDayTarget from "../../../store/stateDayTarget";
import {arrTimeGraph} from "../../../hooks/useGetStatistic";
import {Icon} from "../../../UI/Icon";

interface IFocus {
    arrBrake: arrTimeGraph
    arrWork: arrTimeGraph
}

export const PeriodFocus = observer((props: IFocus) => {
    const [arrBrake, setArrBrake] = useState<arrTimeGraph>([])
    const [arrWork, setArrWork] = useState<arrTimeGraph>([])
    const [timeWork, setTimeWork] = useState<number>(0)
    const [timeBrake, setTimeBrake] = useState<number>(0)
    const [focus, setFocus] = useState(0)
    const targetDay = stateDayTarget.dayTarget
    useEffect(() => {
        setArrBrake(props.arrBrake)
        setArrWork(props.arrWork)
        setTimeBrake(arrBrake[targetDay]?.time)
        setTimeWork(arrWork[targetDay]?.time)
        if (!timeBrake && timeWork) {
            setFocus(100)
        } else {
            setFocus(Math.round((100 / (timeWork + timeBrake)) * timeWork))
        }
        if (!timeWork && !timeBrake) {
            setFocus(0)
        }

    }, [props.arrWork, props.arrBrake, targetDay, focus, arrBrake,arrWork, timeBrake, timeWork])
    return (
        <div className={styles.block}>
            <div className={styles.leftSide}>
                <h3 className={styles.titleBlock}>
                    Фокус
                </h3>
                <span className={styles.focus}>{focus} %</span>
            </div>
            <div className={styles.rightSide}>
                <Icon nameIcon={"IconFocus"}/>
            </div>
        </div>
    );
})
