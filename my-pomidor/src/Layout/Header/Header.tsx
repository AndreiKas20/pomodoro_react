import React from 'react';
import {Icon} from "../../UI/Icon";
import styles from './header.module.css'
import {observer} from "mobx-react-lite";

export const Header = observer(() => {

    console.log('render Header')

    function click() {
    }

    return (
        <div className={styles.block}>
            <div className={styles.iconBlock}>
                <div className={styles.iconPomidor}>
                    <Icon nameIcon={'IconPomidor'}></Icon>
                </div>
                <h1 className={styles.title}>pomodoro_box</h1>
            </div>
            <button onClick={click} className={styles.linkBlock}>
                <div className={styles.iconStatistic}>
                    <Icon nameIcon={'IconStatistic'}></Icon>
                </div>
                <span className={styles.textBtn}>
                    Статистика
                </span>

            </button>
        </div>
    );
})
