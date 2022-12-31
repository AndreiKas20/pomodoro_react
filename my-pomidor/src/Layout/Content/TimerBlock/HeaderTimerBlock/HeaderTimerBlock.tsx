import React from 'react';
import {TaskName} from "./TaskName";
import {TaskCount} from "./TaskCount";
import styles from './headertimerblock.module.css'
export function HeaderTimerBlock() {
    return (
        <header className={styles.header}>
            <TaskName taskName={'1'}></TaskName>
            <TaskCount count={'2'}></TaskCount>
        </header>
    );
}
