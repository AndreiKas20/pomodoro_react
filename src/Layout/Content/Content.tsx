import React from 'react';
import {DescriptionSection} from "./DescriptionSection";
import {TimerBlock} from "./TimerBlock";
import styles from './content.module.css'

export function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.leftBlock}>
                <DescriptionSection/>
            </div>
            <div className={styles.rightBlock}>
                <TimerBlock/>
            </div>
        </div>
    );
}
