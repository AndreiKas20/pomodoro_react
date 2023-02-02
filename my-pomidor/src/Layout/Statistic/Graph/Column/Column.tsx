import React, {useEffect, useState} from 'react';
import styles from './column.module.css';
import {timeGraph} from "../../../../hooks/useGetStatistic";
import {colorVar} from "../../../../../types/colorTypes";
import stateDayTarget from "../../../../store/stateDayTarget";
import {observer} from "mobx-react-lite";

interface IColumn {
    value: timeGraph
    timeOnePercent: number
}

export const Column = observer(({value, timeOnePercent}: IColumn) => {
    const [heightColumn, setHeightColumn] = useState<number>(0)
    const [colorBack, setColorBack] = useState<colorVar>()
    const column = Math.ceil(value.time / timeOnePercent)
    const [onTarget, setOnTarget] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [colorT, setColorT] = useState('')
    const arrDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const day = stateDayTarget.dayTarget
    const func = (id: any) => {
        stateDayTarget.changeDayTarget(id)
        setOnTarget(!onTarget)
    }
    useEffect(() => {
        if(day !== value.countDay) {
            setOnTarget(false)
        } else {
            setOnTarget(true)
        }
        if(onTarget) {
            setColorT('var(--red22)')
            if (column !== 0) {
                setColorBack('var(--red22)')
            }
        } else {
            setColorBack('var(--pinc79)')
            setColorT('var(--greyC4)')
        }
        if (column === 0) {
            setHeightColumn(1)
            setColorBack('var(--greyC4)')
            setDisabled(true)
        } else {
            setHeightColumn(column)
        }
    }, [column, onTarget, value.countDay, day])
    return (
        <div className={styles.btn} style={{height: `${heightColumn}%`, backgroundColor: `${colorBack}`}}>
            <button disabled={disabled}></button>
            <button onClick={() => func(value.countDay)} style={{color: colorT}} className={styles.dailyPeriod}>{arrDay[value.countDay]}</button>
        </div>
    );
})
