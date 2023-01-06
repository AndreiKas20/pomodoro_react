import React, {useEffect, useState} from 'react';
import {Timer} from "./Timer";
import {TaskName} from "../HeaderTimerBlock/TaskName";
import styles from './contenttimerblock.module.css';
import {Button} from "../../../../UI/Button";
import {ButtonEllipse} from "../../../../UI/ButtonEllipse";

export function ContentTimerBlock() {
    const [second, setSecond] = useState(3)
    const [minute, setMinute] = useState(25)
    const [start, setStart] = useState(false)

    const clickStart = () => {
        setStart(true)
    }
    useEffect(() => {
        if (start) {
            const timer = setInterval(() => {
                setSecond(second - 1);
                if (second === 0) {
                    setSecond(3)
                    setMinute(minute - 1)
                }
            }, 1000);
            return () => clearInterval(timer);
        }

    },[start,second, minute]);

    return (
        <div className={styles.block}>
            <Timer second={second} minute={minute}/>
            <div className={styles.blockTask}>
                <TaskName taskName={''}/>
            </div>
            <div className={styles.blockBtn}>
                <div className={styles.btnLeft} >
                    <Button onClick={clickStart} text={'Старт'} colorText={'var(--fullWhite)'}
                            colorBack={'var(--green4F)'}/>
                </div>
                <div className={styles.btnRight}>
                    <Button text={'Стоп'} colorText={'var(--greyC4)'} colorBack={'none'}
                            border={'2px solid'}/>
                </div>
            </div>
            <div className={styles.btnPlus}>
                <ButtonEllipse/>
            </div>
        </div>
    );
}
