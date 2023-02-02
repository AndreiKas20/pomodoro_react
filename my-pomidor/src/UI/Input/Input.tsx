import React, {ChangeEvent, useEffect, useRef} from 'react';
import styles from './input.module.css'

interface IInput {
    value?: string | number
    placeholder?: string
    changeValue?: (event: ChangeEvent<HTMLInputElement>) => void;
    typeInput ?: string
}

export function Input(props: IInput) {
    const refInput = useRef<HTMLInputElement>(null);
    useEffect(() => {
        refInput.current?.focus()
    }, [])
    return (
        <input type={props.typeInput} ref={refInput} onChange={props.changeValue} value={props.value}
               placeholder={props.placeholder} className={styles.input}></input>
    );
}
