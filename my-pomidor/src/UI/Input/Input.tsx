import React from 'react';
import styles from './input.module.css'

export function Input() {
    return (
        <input placeholder={'Название задачи'} className={styles.input}></input>
    );
}
