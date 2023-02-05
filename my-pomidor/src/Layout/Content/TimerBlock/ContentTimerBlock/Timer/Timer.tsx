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
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    })
    const [zeroSec, setZeroSec] = useState('')
    const [zeroMin, setZeroMin] = useState('')
    const [newSecond, setNewSecond] = useState(0)
    const [newMinute, setNewMinute] = useState(0)
    useEffect(() => {
        setNewMinute(minute)
        setNewSecond(second)
    }, [second, minute])
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
        <span style={style} className={styles.span}>
            {zeroMin}{newMinute}:{zeroSec}{newSecond}
        </span>
    );
}
