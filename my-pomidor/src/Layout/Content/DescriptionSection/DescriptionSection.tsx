import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {TitleDescription} from "./TitleDescription";
import {ListDescription} from "./ListDescription";
import {Input} from "../../../UI/Input";
import styles from './descriptionsection.module.css'
import {Button} from "../../../UI/Button";
import {observer} from "mobx-react-lite";
import taskStore from "../../../store/taskStore";
import arrTaskStore from "../../../store/arrTaskStore";
import {generateRandomString} from "../../../utils/getRandomString";
import {styleBtn} from "../../../../types/colorTypes";
import settingTimerStore from "../../../store/settingTimerStore";
import {ItemTask} from "./ItemTask";

export const DescriptionSection = observer(() => {
    const btnDefaultStyle: styleBtn = {color: "var(--fullWhite)", backgroundColor: "var(--green4F)"}
    const hoverIn: styleBtn = {color: "var(--fullWhite)", backgroundColor: "var(--green41)"}
    const [isCountTime, setIsCountTime] = useState(false)
    const [countMinute, setCountMinute] = useState(0)
    const [hours, setHours] = useState(0)
    const [minute, setMinute] = useState(0)
    const [isActiveHours, setIsActiveHours] = useState(false)
    const arrTask = arrTaskStore.arrTask
    const lengthArr = arrTaskStore.arrTask.length
    const settingPomidor = settingTimerStore.onePomidor
    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        taskStore.updateValue(event.target.value)
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        arrTaskStore.addTask({
            countPomodoro: 1,
            textTask: taskStore.value,
            id: generateRandomString(),
        })
        taskStore.updateValue('')
    }

    useEffect(() => {
        if(arrTask.length !== 0) {
            let a = 0
            arrTask.map(value => a = value.countPomodoro * settingPomidor + a)
            setIsCountTime(true)
            setCountMinute(a)
        } else {
            setIsCountTime(false)
        }
    }, [arrTask, settingPomidor, lengthArr])

    useEffect(() => {
        if(countMinute > 60) {
            setHours(Math.floor(countMinute/60))
            setMinute(Math.round(((countMinute/60) - (Math.floor(countMinute/60))) * 60))
            setIsActiveHours(true)
        } else {
            setIsActiveHours(false)
            setMinute(countMinute)
        }
    }, [countMinute])


    return (
        <div>
            <div className={styles.title}>
                <TitleDescription/>
            </div>
            <div className={styles.list}>
                <ListDescription/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.input}>
                    <Input changeValue={changeValue} value={taskStore.value}/>
                </div>
                <div className={styles.btn}>
                    <Button hoverIn={hoverIn} hoverOut={btnDefaultStyle} onClick={handleSubmit} text={'Добавить'}
                            style={btnDefaultStyle}/>
                </div>
            </form>
            <ul className={styles.list}>
                {
                    arrTaskStore.arrTask.map(value => <ItemTask key={value.id} taskItem={value}/>)
                }
            </ul>
            <div className={styles.timeCount}>
                {
                    isActiveHours && <span>{hours} ч</span>
                }
                {
                    isCountTime && <span>{minute} мин</span>
                }
            </div>

        </div>

    );
})
