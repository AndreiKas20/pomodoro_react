import React, {useEffect, useState} from 'react';
import {Timer} from "./Timer";
import {TaskName} from "../HeaderTimerBlock/TaskName";
import styles from './contenttimerblock.module.css';
import {Button} from "../../../../UI/Button";
import {ButtonEllipse} from "../../../../UI/ButtonEllipse";
import {observer} from "mobx-react-lite";
import stateTimerStore from "../../../../store/stateTimerStore";
import {styleBtn} from "../../../../../types/colorTypes";
import {typeStateTimer} from "../../../../../types/typeStateTimer";

export const ContentTimerBlock = observer (() => {
    const [second, setSecond] = useState(5)
    const [minute, setMinute] = useState(0)
    const [target, setTarget] = useState(true)
    const [timeOut, setTimeOut] = useState(false)
    const [breakTime, setBreakTime] =useState(false)
    const [stateTimer, setStateTimer] = useState<typeStateTimer>('')
    const [firstStart, setFirstStart] = useState(false)
    const [clickLeftBtn, setClickLeftBtn] = useState(false)
    const [btnLeftName, setBtnLeftName] = useState('Старт')
    const [btnRightName, setBtnRightName] = useState('Стоп')
    const btnLeftStyle: styleBtn = {backgroundColor: 'var(--green4F)', color: 'var(--fullWhite)'}
    const [btnRightStyle, setBtnRightStyle] = useState<styleBtn>({color: 'var(--greyC4)', border: '2px solid'})
    const btnLeftHover: styleBtn = {backgroundColor: "var(--green41)", color: "var(--fullWhite)"}
    const [btnRightHover, setBtnRightHover] = useState<styleBtn>(btnRightStyle)
    const clickStart = () => {
        setStateTimer('start')
        if (stateTimer === "start") {
            setStateTimer('pause')
        }
        setClickLeftBtn(!clickLeftBtn)
        setFirstStart(true)
    }

    const clickRight = () => {
        if (stateTimer === 'start') {
            setClickLeftBtn(false)
            setStateTimer('stop')
        }
    }

    useEffect(() => {
        if (second === 0 && minute === 0) {
            setBreakTime(!breakTime)
            setTimeOut(true)
            setClickLeftBtn(false)
        }
        if (clickLeftBtn) {
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
    }, [clickLeftBtn, second, minute, firstStart, stateTimer, breakTime])
    useEffect(()=>{
        if (timeOut) {
            setStateTimer('break')
        }
        if(stateTimer === 'pause') {
            setBtnLeftName('Продолжить')
            setBtnRightName('Сделано')
        }
        if(stateTimer === 'start') {
            setBtnLeftName('Пауза')
            setBtnRightName('Стоп')
            setBtnRightHover({color: "var(--fullWhite)", backgroundColor: "var(--red22)", border: '2px solid'})
            setBtnRightStyle({color: 'var(--red22)', border: '2px solid'})
        }
        if(stateTimer === 'break'&& breakTime) {
            if (target) {
                setMinute(5)
                setTarget(false)
            }
            setClickLeftBtn(true)
            setBtnLeftName('Пауза')
            setBtnRightName('Пропустить')
            setBtnRightStyle({color: 'var(--red22)', border: '2px solid'})
        }

        if (stateTimer === "stop") {
            setSecond(0)
            setMinute(25)
            setBtnLeftName('Старт')
            setBtnRightName('Стоп')
            setBtnRightStyle({color: 'var(--greyC4)', border: '2px solid'})
        }
        stateTimerStore.changeSate(stateTimer)
    }, [stateTimer,timeOut, minute, breakTime, target])

    return (
        <div className={styles.block}>
            <Timer second={second} minute={minute}/>
            <div className={styles.blockTask}>
                <TaskName taskName={''}/>
            </div>
            <div className={styles.blockBtn}>
                <div className={styles.btnLeft}>
                    <Button hoverIn={btnLeftHover} onClick={clickStart} text={btnLeftName} style={btnLeftStyle}/>
                </div>
                <div className={styles.btnRight}>
                    <Button onClick={clickRight} hoverIn={btnRightHover} text={btnRightName} style={btnRightStyle} />
                </div>
            </div>
            <div className={styles.btnPlus}>
                <ButtonEllipse/>
            </div>
        </div>
    );
})
