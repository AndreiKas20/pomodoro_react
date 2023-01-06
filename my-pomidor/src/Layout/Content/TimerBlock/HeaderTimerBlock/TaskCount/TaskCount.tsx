import React from 'react';
import styles from './taskcount.module.css';
interface ITask {
  count: number
}

export function TaskCount(props: ITask) {
  //Пропсами передаю количество помидоров
  return (
    <span className={styles.count}>Помидор {props.count}</span>
  );
}
