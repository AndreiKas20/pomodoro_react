import React, {ChangeEvent, FormEvent} from 'react';
import styles from './addtaskform.css';
import {Button} from "../../../../UI/Button";

interface ITaskForm {
    value: string
    changeValue: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent) => void
}

export function AddTaskForm(props: ITaskForm) {
    return (
        <div>
            <div className={styles.input}>
                <input onChange={props.changeValue} value={props.value} placeholder={'Название задачи'}
                       className={styles.input}></input>
            </div>
            <div className={styles.btn}>
                {/*<Button hoverIn={} onClick={props.handleSubmit} text={'Добавить'}/>*/}
            </div>
        </div>
    );
}
