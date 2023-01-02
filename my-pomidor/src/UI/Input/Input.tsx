import React, {ChangeEvent} from 'react';
import styles from './input.module.css'

interface IInput {
   value?: string
   changeValue?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: IInput) {
    return (
        <input  onChange={props.changeValue} value={props.value} placeholder={'Название задачи'} className={styles.input}></input>
    );
}
