import React from 'react';
import {Icon} from "../../UI/Icon";
import styles from './header.module.css'
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

export const Header = observer(() => {

    console.log('render Header')
    return (
        <div className={styles.block}>
                <Link className={styles.iconBlock} to={'/'}>
                    <div className={styles.iconPomidor}>
                        <Icon nameIcon={'IconPomidor'}></Icon>
                    </div>
                    <h1 className={styles.title}>pomodoro_box</h1>
                </Link>
            <button className={styles.linkBlock}>
                <Link to={'statistic'}>
                    <div className={styles.iconStatistic}>
                        <Icon nameIcon={'IconStatistic'}></Icon>
                    </div>
                    <span className={styles.textBtn}>
                    Статистика
                </span>
                </Link>
            </button>
        </div>
    );
})
