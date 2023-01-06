import React from 'react';
import {TaskName} from "./TaskName";
import {TaskCount} from "./TaskCount";
import styles from './headertimerblock.module.css'
import {observer} from "mobx-react-lite";
import arrTaskStore from "../../../../store/arrTaskStore";

export const HeaderTimerBlock = observer (() => {
    const task = arrTaskStore.arrTask[0]
    return (
        <header className={styles.header}>
            <TaskName taskName={task.textTask}></TaskName>
            <TaskCount count={task.countPomodoro}></TaskCount>
        </header>
    );
})
