import React from 'react';
import {Timer} from "./Timer";
import {TaskName} from "../HeaderTimerBlock/TaskName";
import styles from './contenttimerblock.module.css';
import {Button} from "../../../../UI/Button";
import {ButtonEllipse} from "../../../../UI/ButtonEllipse";

export function ContentTimerBlock() {
    return (
        <div className={styles.block}>
            <Timer/>
            <div className={styles.blockTask}>
                <TaskName taskName={''}/>
            </div>
            <div className={styles.blockBtn}>
                <div className={styles.btnLeft}>
                    <Button text={'Старт'} colorText={'var(--fullWhite)'}
                            colorBack={'var(--green4F)'}/>
                </div>
                <div
                    className={styles.btnRight}>
                    <Button text={'Стоп'} colorText={'var(--greyC4)'} colorBack={'none'}
                            border={'2px solid'}/>
                </div>
            </div>
            <div className={styles.btnPlus}>
                <ButtonEllipse/>
            </div>
        </div>
    );
}
