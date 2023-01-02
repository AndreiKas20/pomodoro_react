import React, {useState} from 'react';
import styles from './itemtask.module.css'
import {ButtonDropdown} from "../../../../../UI/ButtonDropdown";
import {DropdownMenu} from "../../../../../UI/DropdownMenu";

interface IItemTask {
    textItem: string
}

export function ItemTask(props: IItemTask) {
    const [dropdown, setDropdown] = useState(false)
    const onClick = () => {
        setDropdown(!dropdown)
    }
    return (
        <li className={styles.item}>
            <div className={styles.leftSide}>
                <span className={styles.count}>1</span>
                {props.textItem}
            </div>
            <div onClick={onClick}>
                <ButtonDropdown/>
            </div>
            {
                dropdown && <DropdownMenu/>
            }
        </li>
    );
}
