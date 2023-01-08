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

export const ContentTimerBlock = observer(() => {
    const [second, setSecond] = useState(5)
    const [minute, setMinute] = useState(0)
    const [target, setTarget] = useState(true)
    const [targetBreak, setTargetBreak] = useState(false)
    const [breakTime, setBreakTime] = useState(false)
    const [stateTimer, setStateTimer] = useState<typeStateTimer>('stop')
    const [clickLeftBtn, setClickLeftBtn] = useState(false)
    const [btnLeftName, setBtnLeftName] = useState('Старт')
    const [btnRightName, setBtnRightName] = useState('Стоп')
    const btnLeftStyle: styleBtn = {backgroundColor: 'var(--green4F)', color: 'var(--fullWhite)'}
    const [btnRightStyle, setBtnRightStyle] = useState<styleBtn>({color: 'var(--greyC4)', border: '2px solid'})
    const btnLeftHover: styleBtn = {backgroundColor: "var(--green41)", color: "var(--fullWhite)"}
    const [btnRightHover, setBtnRightHover] = useState<styleBtn>(btnRightStyle)
    const clickStart = () => {
        if (stateTimer === 'stop') setStateTimer("start")
        if (stateTimer === "start") setStateTimer("pause")
        if (stateTimer === "pause") setStateTimer("start")
        if (stateTimer === "break") setStateTimer("pauseInBreak")
        if (stateTimer === "pauseInBreak") setStateTimer("break")
        setClickLeftBtn(!clickLeftBtn)
    }
    const clickRight = () => {
        if (stateTimer === 'start') {
            setClickLeftBtn(false)
            setStateTimer('stop')
        }
        if (stateTimer === 'pauseInBreak'|| stateTimer==='break') {
            setStateTimer("start")
            setClickLeftBtn(true)
            setSecond(0)
            setMinute(25)
        }
        if (stateTimer==="pause") {
            setStateTimer("stop")
            setClickLeftBtn(false)
        }
    }
    useEffect(() => {
        if (second === 0 && minute === 0) {
            setTargetBreak(true)
            if (breakTime) setTarget(true)
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
            }, 900);
            return () => clearInterval(timer);
        }
    }, [clickLeftBtn, second, minute, breakTime])

    useEffect(() => {
        if (targetBreak && breakTime) {
            setStateTimer('break')
            setTargetBreak(false)
        }
        if (!breakTime && targetBreak) {
            setStateTimer("start")
            setMinute(25)
            setSecond(0)
            setTargetBreak(false)
        }
        if (stateTimer === 'pause') {
            setBtnLeftName('Продолжить')
            setBtnRightName('Сделано')
        }
        if (stateTimer === 'start') {
            setBreakTime(true)
            setBtnLeftName('Пауза')
            setBtnRightName('Стоп')
            setBtnRightHover({color: "var(--fullWhite)", backgroundColor: "var(--red22)", border: '2px solid'})
            setBtnRightStyle({color: 'var(--red22)', border: '2px solid'})
        }
        if (stateTimer === 'break') {
            if (target) {
                setMinute(0)
                setSecond(5)
                setTarget(false)
            }
            setBreakTime(false)
            setBtnLeftName('Пауза')
            setBtnRightName('Пропустить')
            setBtnRightStyle({color: 'var(--red22)', border: '2px solid'})
        }
        if (stateTimer === "stop") {
            setSecond(6)
            setMinute(0)
            setBtnLeftName('Старт')
            setBtnRightName('Стоп')
            setBtnRightHover({color: 'var(--greyC4)', border: '2px solid'})
            setBtnRightStyle({color: 'var(--greyC4)', border: '2px solid'})
        }
        if (stateTimer === 'pauseInBreak') {
            setBtnLeftName('Продолжить')
            setBtnRightName('Пропустить')
        }
        stateTimerStore.changeSate(stateTimer)
    }, [stateTimer, targetBreak, breakTime, target])

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
                    <Button onClick={clickRight} hoverIn={btnRightHover} text={btnRightName} style={btnRightStyle}/>
                </div>
            </div>
            <div className={styles.btnPlus}>
                <ButtonEllipse/>
            </div>
        </div>
    );
})
