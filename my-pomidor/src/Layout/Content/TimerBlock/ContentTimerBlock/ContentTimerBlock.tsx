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
import arrTaskStore from "../../../../store/arrTaskStore";
import {generateRandomString} from "../../../../utils/getRandomString";
import addNotification from 'react-push-notification';
import settingTimerStore from "../../../../store/settingTimerStore";

export const ContentTimerBlock = observer(() => {
    const timeOnePomidor = settingTimerStore.onePomidor
    const timeOneShortBrake = settingTimerStore.oneBrake
    const timeOneLongBrake = settingTimerStore.oneLongBrake
    const countShortBrake = settingTimerStore.countShortBrake
    const isAlert = settingTimerStore.alert
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(timeOnePomidor)
    const [target, setTarget] = useState(true)
    const [countBreak, setCountBreak] = useState(1)
    const [colorTimer, setColorTimer] = useState<styleBtn>({color: "var(--black)"})
    const [targetBreak, setTargetBreak] = useState(false)
    const [breakTime, setBreakTime] = useState(false)
    const [stateTimer, setStateTimer] = useState<typeStateTimer>('stop')
    const [clickLeftBtn, setClickLeftBtn] = useState(false)
    const [btnLeftName, setBtnLeftName] = useState('Старт')
    const [btnRightName, setBtnRightName] = useState('Стоп')
    const [btnRightStyle, setBtnRightStyle] = useState<styleBtn>({color: 'var(--greyC4)', border: '2px solid'})
    const [btnRightHover, setBtnRightHover] = useState<styleBtn>(btnRightStyle)
    const [idTask, setIdTask] = useState<string>('')
    const [statisticBreak, setStatisticBreak] = useState(0)
    const [statisticWork, setStatisticWork] = useState(0)
    const [statItemWork, setStatItemWork] = useState(0)
    const [statItemBreak, setStatItemBreak] = useState(0)
    const arrStore = arrTaskStore.arrTask[0]
    const acceptArr = arrTaskStore.acceptArr
    const btnLeftStyle: styleBtn = {backgroundColor: 'var(--green4F)', color: 'var(--fullWhite)'}
    const btnLeftHover: styleBtn = {backgroundColor: "var(--green41)", color: "var(--fullWhite)"}
    const [count, setCount] = useState(0)
    const saveLocal = () => {
        localStorage.acceptArr = JSON.stringify(acceptArr)
        console.log('save', JSON.parse(localStorage.acceptArr))
    }
    useEffect(() => {
        saveLocal()
    }, [acceptArr])

    useEffect(() => {
        setMinute(timeOnePomidor)
    }, [timeOnePomidor])
    const workTimeout = () => {
        if (isAlert) {
            addNotification({
                title: 'Таймер',
                subtitle: 'Рабочее время таймера закончилось',
                message: 'Рабочее время таймера закончилось, начался перерыв',
                duration: 5000,
                native: true
            });
        } else {
            return
        }
    };

    const brakeTimeout = () => {
        if (isAlert) {
            addNotification({
                title: 'Таймер',
                subtitle: 'Время перерыва закончилось',
                message: 'Время перерыва закончилось, пора приступать к работе',
                duration: 5000,
                native: true
            });
        } else {
            return
        }
    };
    const clickStart = () => {
        if (!arrStore) {
            alert('Добавьте задачу')
        } else {
            if (stateTimer === 'stop') setStateTimer("start")
            if (stateTimer === "start") setStateTimer("pause")
            if (stateTimer === "pause") setStateTimer("start")
            if (stateTimer === "break") setStateTimer("pauseInBreak")
            if (stateTimer === "pauseInBreak") setStateTimer("break")
            setClickLeftBtn(!clickLeftBtn)
        }
    }
    const clickBtnAdd = () => {
        setMinute(minute + 1)
    }
    const clickRight = () => {
        if (stateTimer === 'start') {
            setClickLeftBtn(false)
            setStateTimer('stop')
        }
        if (stateTimer === 'pauseInBreak' || stateTimer === 'break') {
            setStateTimer("start")
            setClickLeftBtn(true)
            setSecond(timeOnePomidor)
            setMinute(0)
        }
        if (stateTimer === "pause") {
            setStateTimer("stop")
            setClickLeftBtn(false)
            //----Добавление таски в массив сделанных (Всегда выше удаления!!)

            arrTaskStore.acceptTask(idTask, {
                    ...arrStore,
                    timeBreakTask: statItemBreak,
                    timeWorkTask: statItemWork,
                    id: generateRandomString(),
                },
                {UTC: Date.now(), Date: new Date()}, arrStore.id, 0, 0)
            saveLocal()
            //----Удаление таски из массива задач при ее выполнении(Всегда ниже добавления таски в массив выполненного)
            setStatItemBreak(0)
            setStatItemWork(0)
            arrTaskStore.deleteTask(idTask)
        }
    }
    useEffect(() => {
        if (second === 0 && minute === 0) {
            setTargetBreak(true)
            if (breakTime) setTarget(true)
        }
        if (clickLeftBtn) {
            const timer = setInterval(() => {
                if (stateTimer === "start") {
                    setStatisticWork(statisticWork + 1)
                    setStatItemWork(statItemWork + 1)
                }
                if (stateTimer === "break") {
                    setStatisticBreak(statisticBreak + 1)
                    setStatItemBreak(statItemBreak + 1)
                }
                if (second > 0) {
                    setSecond(second - 1);
                }
                if (second === 0 && minute > 0) {
                    setSecond(59)
                    setMinute(minute - 1)
                }
            }, 993);
            return () => clearInterval(timer);
        }
    }, [clickLeftBtn, second, minute, breakTime, arrStore])

    useEffect(() => {
        if (arrStore) setIdTask(arrStore.id)
        if (targetBreak && breakTime) {
            setStateTimer('break')
            setTargetBreak(false)
        }
        if (!breakTime && targetBreak) {
            setStateTimer("start")
            brakeTimeout()
            setMinute(timeOnePomidor)
            setSecond(0)
            setTargetBreak(false)
        }
        if (stateTimer === 'pause') {
            arrTaskStore.acceptTask(idTask, {
                ...arrStore,
                timeBreakTask: 0,
                timeWorkTask: 0,
                id: generateRandomString()
            }, {UTC: Date.now(), Date: new Date()}, arrStore.id, 0, 1)
            saveLocal()
            setColorTimer({color: "var(--black)"})
            setBtnLeftName('Продолжить')
            setBtnRightName('Сделано')
        }
        if (stateTimer === 'start') {
            if (!arrStore) {

                setStateTimer('stop')
                setClickLeftBtn(false)
                alert('Задачи кончились')
            } else {

                setBreakTime(true)
                setBtnLeftName('Пауза')
                setBtnRightName('Стоп')
                setColorTimer({color: "var(--red22)"})
                setBtnRightHover({color: "var(--fullWhite)", backgroundColor: "var(--red22)", border: '2px solid'})
                setBtnRightStyle({color: 'var(--red22)', border: '2px solid'})
            }
        }
        if (stateTimer === 'break') {
            if (target) {
                setCount(count + 1)
                arrTaskStore.editAccept(arrStore.id, count)
                console.log('count timer', count)
                arrTaskStore.countEditMinus(arrStore.id, arrStore.countPomodoro)
                arrTaskStore.acceptTask(idTask, {
                    ...arrStore,
                    timeBreakTask: statItemBreak,
                    timeWorkTask: statItemWork,
                    id: generateRandomString()
                }, {UTC: Date.now(), Date: new Date()}, arrStore.id, 1, 1)
                workTimeout()
                saveLocal()
                setStatItemBreak(0)
                setStatItemWork(0)
                if (arrStore.countPomodoro === 1) {
                    arrTaskStore.deleteTask(idTask)
                }
                if (countBreak === countShortBrake + 1) {
                    setMinute(timeOneLongBrake)
                    setSecond(0)
                    setCountBreak(1)
                } else {
                    setCountBreak(countBreak + 1)
                    setMinute(timeOneShortBrake)
                    setSecond(0)
                }
                setTarget(false)
            }
            setBreakTime(false)
            setColorTimer({color: "var(--green4F)"})
            setBtnLeftName('Пауза')
            setBtnRightName('Пропустить')
            setBtnRightStyle({color: 'var(--red22)', border: '2px solid'})
        }
        if (stateTimer === "stop") {
            setClickLeftBtn(false)
            setSecond(0)
            setMinute(timeOnePomidor)
            setBtnLeftName('Старт')
            setBtnRightName('Стоп')
            setColorTimer({color: 'var(--black)'})
            setBtnRightHover({color: 'var(--greyC4)', border: '2px solid'})
            setBtnRightStyle({color: 'var(--greyC4)', border: '2px solid'})
        }
        if (stateTimer === 'pauseInBreak') {
            setColorTimer({color: 'var(--black)'})
            setBtnLeftName('Продолжить')
            setBtnRightName('Пропустить')
        }
        //-----Прокидываю состояние приложения в MobX
        stateTimerStore.changeState(stateTimer)
    }, [stateTimer, targetBreak, breakTime, target, countBreak, count, countShortBrake])
    return (
        <div className={styles.block}>
            <Timer style={colorTimer} second={second} minute={minute}/>
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
                <ButtonEllipse onClick={clickBtnAdd}/>
            </div>
        </div>

    );
})
