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
    const [textCount, setTextCount] = useState('')
    const arrStore = arrTaskStore.arrTask[0]
    useEffect(() => {
        arrTaskStore.arrTask[0] ? setTask(arrTaskStore.arrTask[0].textTask) : setTask('Нет задачи')
    }, [arrStore])
    const stateTimer = stateTimerStore.stateTimer
    useEffect(() => {
        if (stateTimer === 'start') {
            setStyleHeader({backgroundColor: 'var(--red22)'})
            setTextCount("Помидор")
            setCount(count + 1)
        }
        if (stateTimer === 'stop') {
            setTextCount('Помидор')
            setStyleHeader({backgroundColor: 'var(--greyC4)'})
        }
        if (stateTimer === 'break') {
            setStyleHeader({backgroundColor: "var(--green4F)"})
            setTextCount('Перерыв')
        }
    }, [stateTimer])
    return (
        <header style={styleHeader} className={styles.header}>
            <TaskName taskName={task}/>
            <TaskCount text={textCount} count={count}/>
        </header>
    );
})
