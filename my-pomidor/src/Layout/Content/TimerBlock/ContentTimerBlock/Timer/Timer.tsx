import React, {useEffect, useState} from 'react';
import styles from './timer.module.css';
import {styleBtn} from "../../../../../../types/colorTypes";
import { useSpring, animated } from '@react-spring/web'

interface ITimer {
    second: number;
    minute: number;
    style: styleBtn
}

export function Timer({second, minute, style}: ITimer) {
    const [zeroSec, setZeroSec] = useState('')
    const [zeroMin, setZeroMin] = useState('')
    const [newSecond, setNewSecond] = useState(0)
    const [newMinute, setNewMinute] = useState(0)

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
        setNewMinute(minute)
        setNewSecond(second)
    }, [second, minute])
    return (
        <span style={style} className={styles.span}>
            {zeroMin}{newMinute}:{zeroSec}{newSecond}
        </span>
    );
}
