import React, {useEffect, useState} from 'react';
import {IStateButton} from "../../../types/colorTypes";
import styles from './button.module.css'

export function Button(props: IStateButton) {
    //Пропсами передаю фон, цвет и текст кнопки
    const startStyle = {color: props.colorText, backgroundColor: props.colorBack,  outline: props.border }
    // const [style, setStyle] = useState<object>(startStyle)
    // useEffect(()=>{
    //     if(props.hover) {
    //         setStyle(props.styleHover)
    //     } else {
    //         setStyle(startStyle)
    //     }
    //     console.log('hover',style)
    // },[props.hover])
    return (
        <button className={styles.btn}  style={startStyle}>
            {props.text}
        </button>
    );
}
