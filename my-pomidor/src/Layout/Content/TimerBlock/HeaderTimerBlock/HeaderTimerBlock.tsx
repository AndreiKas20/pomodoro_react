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
    const task = arrTaskStore.arrTask[0]
    const stateTimer = stateTimerStore.stateTimer
    useEffect(() => {
        if (stateTimer === 'start') {
            setStyleHeader({backgroundColor: 'var(--red22)'})
        }
        if (stateTimer === 'stop') {
            setStyleHeader({backgroundColor: 'var(--greyC4)'})
        }
    }, [stateTimer])
    return (
        <header style={styleHeader} className={styles.header}>
            <TaskName taskName={task.textTask}></TaskName>
            <TaskCount count={task.countPomodoro}></TaskCount>
        </header>
    );
})
