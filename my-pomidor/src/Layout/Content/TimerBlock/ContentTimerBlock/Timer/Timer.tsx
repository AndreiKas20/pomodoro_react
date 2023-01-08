import React, {useEffect, useState} from 'react';
import styles from './timer.module.css';
import {styleBtn} from "../../../../../../types/colorTypes";

interface ITimer {
    second: number;
    minute: number;
    style: styleBtn
}

export function Timer({second, minute, style}: ITimer) {
    const [zeroSec, setZeroSec] = useState('')
    const [zeroMin, setZeroMin] = useState('')
    useEffect(() => {
        if (second < 10) {
            setZeroSec('0')
        } else {
            setZeroSec('')
        }
        if (minute < 10) {
            setZeroMin('0')
        } else {
            setZeroMin('')
        }
    }, [second, minute])
    return (
        <span style={style} className={styles.span}>{zeroMin}{minute}:{zeroSec}{second}</span>
    );
}
