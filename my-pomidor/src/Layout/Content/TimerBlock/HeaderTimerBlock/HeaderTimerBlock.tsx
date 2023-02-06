import React, {useEffect, useState} from 'react';
import {TaskName} from "./TaskName";
import styles from './headertimerblock.module.css'
import {observer} from "mobx-react-lite";
import arrTaskStore from "../../../../store/arrTaskStore";
import stateTimerStore from "../../../../store/stateTimerStore";
import {styleBtn} from "../../../../../types/colorTypes";
import {Icon} from "../../../../UI/Icon";
import settingTimerStore from "../../../../store/settingTimerStore";

export const HeaderTimerBlock = observer(() => {
    const [styleHeader, setStyleHeader] = useState<styleBtn>({})
    const [task, setTask] = useState('')
    const [count, setCount] = useState(0)
    const [isCount, setIsCount] = useState(true)
    const [textCount, setTextCount] = useState('')
    const [isAlert, setIsAlert] = useState(true)
    const arrStore = arrTaskStore.arrTask[0]
    const idTask = arrTaskStore.arrTask[0]?.id
    const storeAlert = settingTimerStore.alert
    const acceptArr = arrTaskStore.acceptArr
    const stateTimer = stateTimerStore.stateTimer
    useEffect(() => {
        arrTaskStore.arrTask[0] ? setTask(arrTaskStore.arrTask[0].textTask) : setTask('Нет задачи')
    }, [arrStore])
    useEffect(() => {
        let a = 0
        let arr = acceptArr.filter(value => value?.idArrTasks === arrStore?.id)
        if (arr.length > 0) {
            arr.map(value => a = value.acceptedPomodoro + a)
            setCount(a + 1)
        } else {
            setCount(1)
        }
    }, [acceptArr, arrStore])
    useEffect(() => {
        if (stateTimer === 'start') {
            setStyleHeader({backgroundColor: 'var(--red22)'})
            setTextCount("Помидор")
            setIsCount(true)
        }
        if (stateTimer === 'stop') {
            setTextCount('Помидор')
            setStyleHeader({backgroundColor: 'var(--greyC4)'})
            setIsCount(false)
        }
        if (stateTimer === 'break') {
            setStyleHeader({backgroundColor: "var(--green4F)"})
            setTextCount('Перерыв')
            setIsCount(false)
        }

    }, [stateTimer, arrStore])

    useEffect(() => {
        if (storeAlert) {
            setIsAlert(true)
        } else {
            setIsAlert(false)
        }
    }, [storeAlert])
    return (
        <header style={styleHeader} className={styles.header}>
            <TaskName taskName={task}/>
            {
                isAlert &&
                <Icon nameIcon={"IconAlert"} width={'30'} height={'30'}/>
            }
            {
                !isAlert &&
                <Icon nameIcon={"IconNoAlert"} width={'30'} height={'30'}/>
            }
            <span className={styles.count}>{textCount} {
                isCount &&
                count
            }

            </span>
        </header>
    );
})
