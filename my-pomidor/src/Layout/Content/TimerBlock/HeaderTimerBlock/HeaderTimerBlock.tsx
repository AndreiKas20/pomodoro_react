import React, {useEffect, useState} from 'react';
import {TaskName} from "./TaskName";
import {TaskCount} from "./TaskCount";
import styles from './headertimerblock.module.css'
import {observer} from "mobx-react-lite";
import arrTaskStore from "../../../../store/arrTaskStore";
import stateTimerStore from "../../../../store/stateTimerStore";
import {styleBtn} from "../../../../../types/colorTypes";

export const HeaderTimerBlock = observer(() => {
    const [styleHeader, setStyleHeader] = useState<styleBtn>({})
    const [task, setTask] = useState('')
    const [count, setCount] = useState(0)
    const arrStore = arrTaskStore.arrTask[0]
    useEffect(() => {
        if (arrTaskStore.arrTask[0]) {
            setTask(arrTaskStore.arrTask[0].textTask)
            setCount(arrTaskStore.arrTask[0].countPomodoro)
        } else {
            setTask('Нет задачи')
        }
    }, [arrStore])
    const stateTimer = stateTimerStore.stateTimer
    useEffect(() => {
        if (stateTimer === 'start') {
            setStyleHeader({backgroundColor: 'var(--red22)'})
        }
        if (stateTimer === 'stop') {
            setStyleHeader({backgroundColor: 'var(--greyC4)'})
        }
        if (stateTimer === 'break') {
            setStyleHeader({backgroundColor: "var(--green4F)"})
        }
    }, [stateTimer])
    return (
        <header style={styleHeader} className={styles.header}>
            <TaskName taskName={task}/>
            <TaskCount count={count}/>
        </header>
    );
})
