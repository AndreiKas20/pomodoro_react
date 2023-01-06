import React, {useEffect, useState} from 'react';
import {Timer} from "./Timer";
import {TaskName} from "../HeaderTimerBlock/TaskName";
import styles from './contenttimerblock.module.css';
import {Button} from "../../../../UI/Button";
import {ButtonEllipse} from "../../../../UI/ButtonEllipse";
import {observer} from "mobx-react-lite";
import stateTimerStore from "../../../../store/stateTimerStore";

export const ContentTimerBlock = observer (() => {
    const [second, setSecond] = useState(3)
    const [minute, setMinute] = useState(1)
    const [start, setStart] = useState(false)
    const [btnLeftName, setBtnLeftName] = useState('Старт')
    const [btnRightName, setBtnRightName] = useState('Стоп')
    const [btnLeftStyle, setBtnLeftStyle] = useState({backgroundColor: 'var(--green4F)', color: 'var(--fullWhite)'})
    const [btnRightStyle, setBtnRightStyle] = useState({color: 'var(--greyC4)', border: '2px solid'})

    const clickStart = () => {
        setStart(true)
        stateTimerStore.changeSate("start")
        setBtnLeftName('Пауза')
        setBtnRightStyle({color: 'var(--red22)', border: '2px solid'})
    }
    useEffect(() => {
        if (second === 0 && minute === 0) {
            setStart(false)
        }
        if (start) {
            const timer = setInterval(() => {
                if (second > 0) {
                    setSecond(second - 1);
                }
                if (second === 0 && minute > 0) {
                    setSecond(59)
                    setMinute(minute - 1)
                }
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [start, second, minute]);

    return (
        <div className={styles.block}>
            <Timer second={second} minute={minute}/>
            <div className={styles.blockTask}>
                <TaskName taskName={''}/>
            </div>
            <div className={styles.blockBtn}>
                <div className={styles.btnLeft}>
                    <Button onClick={clickStart} text={btnLeftName} style={btnLeftStyle}/>
                </div>
                <div className={styles.btnRight}>
                    <Button text={btnRightName} style={btnRightStyle} />
                </div>
            </div>
            <div className={styles.btnPlus}>
                <ButtonEllipse/>
            </div>
        </div>
    );
})
