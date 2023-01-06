import React, {useEffect, useState} from 'react';
import styles from './timer.module.css';

interface ITimer {
    second: number;
    minute: number;
}

export function Timer({second, minute}: ITimer) {
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
        <span className={styles.span}>{zeroMin}{minute}:{zeroSec}{second}</span>
    );
}
