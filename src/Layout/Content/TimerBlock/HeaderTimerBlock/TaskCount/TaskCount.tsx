import React from 'react';
import styles from './taskcount.module.css';
interface ITask {
  count: number
  text: string
}

export function TaskCount(props: ITask) {
  return (
    <span className={styles.count}>{props.text} {props.count}</span>
  );
}
