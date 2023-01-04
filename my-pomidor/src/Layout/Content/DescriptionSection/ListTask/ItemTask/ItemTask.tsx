import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './itemtask.module.css'
import {ButtonDropdown} from "../../../../../UI/ButtonDropdown";
import {DropdownMenu} from "../../../../../UI/DropdownMenu";
import {typesTask} from "../../../../../../types/typesArrTask";
import arrTaskStore from "../../../../../store/arrTaskStore";
import {Input} from "../../../../../UI/Input";

interface IItemTask {
    taskItem: typesTask
}

export function ItemTask({taskItem}: IItemTask) {
    const [dropdown, setDropdown] = useState(false)
    const [disabledMin, setDisabledMin] = useState(false)
    const [editInput, setEditInput] = useState(false)
    const onClick = () => {
        setDropdown(!dropdown)
    }
    useEffect(() => {
        if (taskItem.countPomodoro === 1) {
            setDisabledMin(true)
        } else {
            setDisabledMin(false)
        }
    }, [taskItem.countPomodoro])

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        arrTaskStore.editTask(taskItem.id, event.target.value)
    }

    const clickEdit = () => {
        setEditInput(!editInput)
    }

    const clickPlus = () => {
        arrTaskStore.countEditPlus(taskItem.id, taskItem.countPomodoro)
    }

    const clickMinus = () => {
        arrTaskStore.countEditMinus(taskItem.id, taskItem.countPomodoro)
    }

    const deleteTask = () => {
        arrTaskStore.deleteTask(taskItem.id)
    }

    console.log('item task', taskItem.countPomodoro)
    return (
        <li className={styles.item}>
            <div className={styles.leftSide}>
                <span className={styles.count}>{taskItem.countPomodoro}</span>
                {taskItem.textTask}
                {
                    editInput &&
                    <div className={styles.editInput}>
                        <Input value={taskItem.textTask} changeValue={changeValue}/>
                    </div>
                }
            </div>
            <ButtonDropdown onClick={onClick}/>
            {
                dropdown && <DropdownMenu clickEdit={clickEdit} noActive={disabledMin} deleteTask={deleteTask} clickMinus={clickMinus}
                                          clickPlus={clickPlus}/>
            }
        </li>
    );
}
