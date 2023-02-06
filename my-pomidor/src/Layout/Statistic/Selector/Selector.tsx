import React, {useEffect, useState} from 'react';
import styles from './selector.module.css';
import {observer} from "mobx-react-lite";
import stateObservedWeek from "../../../store/stateObservedWeek";

export const Selector = observer(() => {
    const weekTarget = stateObservedWeek.weekTarget
    const [isOpen, setIsOpen] = useState(false)
    const [firstChoice, setFirstChoice] = useState(false)
    const [secondChoice, setSecondChoice] = useState(false)
    const [thirdChoice, setThirdChoice] = useState(false)
    const firstText = 'Эта неделя'
    const secondText = 'Прошлая неделя'
    const thirdText = '2 Недели назад'
    const [textDefault, setTextDefault] = useState(firstText)
    useEffect(() => {
        if (weekTarget === 0) {
            setTextDefault(firstText)
            setFirstChoice(false)
            setSecondChoice(true)
            setThirdChoice(true)
        } else if (weekTarget === 1) {
            setTextDefault(secondText)
            setFirstChoice(true)
            setSecondChoice(false)
            setThirdChoice(true)
        } else if (weekTarget === 2) {
            setTextDefault(thirdText)
            setFirstChoice(true)
            setSecondChoice(true)
            setThirdChoice(false)
        }
    }, [weekTarget])
    const onClickOpen = () => {
        setIsOpen(!isOpen)
    }


    const onClickFirst = () => {
        setIsOpen(false)
        stateObservedWeek.changeWeekTarget(0)
    }

    const onClickSecond = () => {
        setIsOpen(false)
        stateObservedWeek.changeWeekTarget(1)
    }

    const onClickThird = () => {
        setIsOpen(false)
        stateObservedWeek.changeWeekTarget(2)
    }


    return (
        <div className={styles.block}>
            <button style={isOpen ? {transform: 'scale(1)'} : {}} className={styles.headStyle} onClick={onClickOpen}>
                <span className={styles.text}>{textDefault}</span>
                <span style={isOpen ? {transform: 'rotate(180deg)'} : {}}>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L8 2L15 9" stroke="#B7280F" strokeWidth="2"/>
                </svg>
            </span>
            </button>
            {
                isOpen &&
                <ul className={styles.list}>
                    {
                        firstChoice &&
                        <li className={styles.item}>
                            <button className={styles.btn} onClick={onClickFirst}><span
                                className={styles.text}>{firstText}</span></button>
                        </li>
                    }
                    {
                        secondChoice &&
                        <li className={styles.item}>
                            <button className={styles.btn} onClick={onClickSecond}><span
                                className={styles.text}>{secondText}</span></button>
                        </li>
                    }
                    {
                        thirdChoice &&
                        <li className={styles.item}>
                            <button className={styles.btn} onClick={onClickThird}><span
                                className={styles.text}>{thirdText}</span></button>
                        </li>
                    }
                </ul>
            }
        </div>
    );
})
