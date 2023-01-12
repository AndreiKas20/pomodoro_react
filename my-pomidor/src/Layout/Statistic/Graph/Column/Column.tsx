import React, {useEffect, useState} from 'react';
import styles from './column.module.css';
import {timeGraph} from "../../../../hooks/useGetStatistic";
import {colorVar} from "../../../../../types/colorTypes";

interface IColumn {
    value: timeGraph
    timeOnePercent: number
}

export function Column({value, timeOnePercent}: IColumn) {
    // const heightColumn = Math.round(value.time / timeOnePercent)
    const [heightColumn, setHeightColumn] = useState<number>(0)
    const [colorBack, setColorBack] = useState<colorVar>()
    const column = Math.round(value.time / timeOnePercent)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (column === 0) {
            setHeightColumn(1)
            setColorBack('var(--greyC4)')
            setDisabled(true)
        } else {
            setHeightColumn(column)
            setColorBack('var(--pinc79)')
        }
    }, [column])
    return (
        <button disabled={disabled} style={{height: `${heightColumn}%`, backgroundColor: colorBack}} className={styles.btn}></button>
    );
}
