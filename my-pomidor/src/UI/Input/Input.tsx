import React, {ChangeEvent, useEffect, useRef} from 'react';
import styles from './input.module.css'

interface IInput {
   value?: string
   changeValue?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: IInput) {
    const refInput = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        refInput.current?.focus()
    },[])
    return (
        <input ref={refInput} onChange={props.changeValue} value={props.value} placeholder={'Название задачи'} className={styles.input}></input>
    );
}
