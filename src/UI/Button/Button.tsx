import React, {useEffect, useState} from 'react';
import {IStateButton, styleBtn} from "../../../types/colorTypes";
import styles from './button.module.css'

export function Button(props: IStateButton) {
    //Пропсами передаю фон, цвет и текст кнопки
    const [style, setStyle] = useState<styleBtn>(props.style)
    const [hover, setHover] = useState<boolean>(false)
    useEffect(() => {
        if (hover) {
            setStyle(props.hoverIn)
        } else {
            setStyle(props.style)
        }
    }, [hover, props.style, props.hoverIn])
    return (
        <button onMouseEnter={() => {
            setHover(true)
        }} onMouseOut={() => {
            setHover(false)
        }} onClick={props.onClick} className={styles.btn} style={style}>
            {props.text}
        </button>
    );
}
