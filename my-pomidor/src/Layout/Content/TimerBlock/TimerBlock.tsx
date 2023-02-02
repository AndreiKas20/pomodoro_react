import React from 'react';
import {HeaderTimerBlock} from "./HeaderTimerBlock";
import {ContentTimerBlock} from "./ContentTimerBlock";
import styles from './timerblock.module.css'

export function TimerBlock() {
    return (
        <div>
            <HeaderTimerBlock/>
            <div className={styles.content}>
                <ContentTimerBlock/>
            </div>
        </div>
    );
}
