import React from 'react';
import styles from './dropdownmenu.module.css';
import {Icon} from "../Icon";

interface IDropChange {
    clickPlus: any
    clickMinus: any
    deleteTask: any
    noActive: boolean
    clickEdit: () => void
}

export function DropdownMenu({clickPlus, clickMinus, deleteTask, noActive, clickEdit}: IDropChange) {

    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <button onClick={
                    clickPlus
                } className={styles.btn}>
                    <div className={styles.icon}>
                        <Icon nameIcon={'IconPlus'}/>
                    </div>
                    <p className={styles.text}>Увеличить</p>
                </button>
            </li>
            <li className={styles.item}>
                <button disabled={noActive} onClick={clickMinus} className={styles.btn}
                        style={noActive ? {cursor: 'default', transform: 'none'} : {}}>
                    <div className={styles.icon}>
                        <Icon noActive={noActive} nameIcon={'IconMinus'}/>
                    </div>
                    <p className={styles.text}>Уменьшить</p>
                </button>
            </li>
            <li className={styles.item}>
                <button onClick={clickEdit} className={styles.btn}>
                    <div className={styles.icon}>
                        <Icon nameIcon={'IconRedactor'}/>
                    </div>
                    <p className={styles.text}>Редактировать</p>
                </button>
            </li>
            <li className={styles.item}>
                <button onClick={deleteTask} className={styles.btn}>
                    <div className={styles.icon}>
                        <Icon nameIcon={'IconDelete'}/>
                    </div>
                    <p className={styles.text}>Удалить</p>
                </button>
            </li>
        </ul>
    );
}
