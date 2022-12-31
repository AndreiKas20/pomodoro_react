import React from 'react';
import styles from './taskcount.module.css';
interface ITask {
  count: string
}

export function TaskCount(props: ITask) {
  //Пропсами передаю количество помидоров
  return (
    <span className={styles.count}>{props.count}Заглушка</span>
  );
}
