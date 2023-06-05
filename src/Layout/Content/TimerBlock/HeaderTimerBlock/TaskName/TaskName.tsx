import React from 'react';
import styles from './taskname.module.css'
interface ITask {
  taskName: string
}
export function TaskName(props: ITask) {
    return (
        <span className={styles.task}>{props.taskName}</span>
    );
}
