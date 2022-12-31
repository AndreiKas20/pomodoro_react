import React from 'react';
import {Icon} from "../../UI/Icon";
import styles from './header.module.css'

export function Header() {
    console.log('render Header')
    return (
        <div className={styles.block}>
            <div className={styles.iconBlock}>
                <div className={styles.iconPomidor}>
                    <Icon nameIcon={'IconPomidor'}></Icon>
                </div>
                <h1 className={styles.title}>pomodoro_box</h1>
            </div>
            <button className={styles.linkBlock}>
                <div className={styles.iconStatistic}>
                    <Icon nameIcon={'IconStatistic'}></Icon>
                </div>
                <span className={styles.textBtn}>
                    Статистика
                </span>

            </button>
        </div>
    );
}
