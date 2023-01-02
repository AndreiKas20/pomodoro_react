import React from 'react';
import styles from './dropdownmenu.module.css';
import {Icon} from "../Icon";

export function DropdownMenu() {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <button className={styles.btn}>
                    <div className={styles.icon}>
                        <Icon nameIcon={'IconPlus'}/>
                    </div>
                    <p className={styles.text}>Увеличить</p>
                </button>
            </li>
            <li className={styles.item}>
                <button className={styles.btn}>
                    <div className={styles.icon}>
                        <Icon nameIcon={'IconMinus'}/>
                    </div>
                    <p className={styles.text}>Уменьшить</p>
                </button>
            </li>
            <li className={styles.item}>
                <button className={styles.btn}>
                    <div className={styles.icon}>
                        <Icon nameIcon={'IconRedactor'}/>
                    </div>
                    <p className={styles.text}>Редактировать</p>
                </button>
            </li>
            <li className={styles.item}>
                <button className={styles.btn}>
                    <div className={styles.icon}>
                        <Icon nameIcon={'IconDelete'}/>
                    </div>
                    <p className={styles.text}>Удалить</p>
                </button>
            </li>
        </ul>
    );
}
