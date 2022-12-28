import React from 'react';
import {Icon} from "../../UI/Icon";
import styles from './header.module.css'

export function Header() {
    console.log('render Header')
    return (
        <div className={styles.block}>
            <div className={styles.iconPomidor}>
                <Icon nameIcon={'IconPomidor'}></Icon>
                <h1 className={styles.title}>pomodoro_box</h1>
            </div>
            <button className={styles.linkBlock}>
                <Icon nameIcon={'IconStatistic'}></Icon>
                Статистика
            </button>
        </div>
    );
}
