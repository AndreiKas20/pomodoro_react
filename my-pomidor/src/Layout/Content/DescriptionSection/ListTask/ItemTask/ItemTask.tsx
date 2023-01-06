import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
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
    const listRef = useRef<HTMLLIElement>(null)
    const inputEditRef = useRef<HTMLDivElement>(null)
    const listDropRef = useRef<HTMLDivElement>(null)
    const onClick = () => {
        setDropdown(!dropdown)
    }
    const handleClick = (event: MouseEvent) => {
        if (event.target instanceof Node && !listRef.current?.contains(event.target)) {
            closeDrop()
        }
        if (event.target instanceof Node && !listDropRef.current?.contains(event.target)) {
            setEditInput(false)
        }
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
        // setDropdown(false)
    }
    const keyPressEnter = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            setEditInput(false)
        }
    }
    const closeDrop = () => {
        setDropdown(false)
    }
    useEffect(() => {
        if (editInput) {
            document.addEventListener('keypress', keyPressEnter)
            return () => {
                document.removeEventListener('keypress', keyPressEnter)
            }
        }
    }, [editInput])
    const clickPlus = () => {
        arrTaskStore.countEditPlus(taskItem.id, taskItem.countPomodoro)
    }
    const clickMinus = () => {
        arrTaskStore.countEditMinus(taskItem.id, taskItem.countPomodoro)
    }
    const deleteTask = () => {
        arrTaskStore.deleteTask(taskItem.id)
    }
    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    })

    return (
        <li ref={listRef} className={styles.item}>
            <div className={styles.leftSide}>
                <span className={styles.count}>{taskItem.countPomodoro}</span>
                {taskItem.textTask}
                {
                    editInput &&
                    <div ref={inputEditRef} className={styles.editInput}>
                        <Input value={taskItem.textTask} changeValue={changeValue}/>
                    </div>
                }
            </div>
            <ButtonDropdown onClick={onClick}/>
            {
                dropdown &&
                <div className={styles.dropPosition} ref={listDropRef}>
                    <DropdownMenu clickEdit={clickEdit} noActive={disabledMin} deleteTask={deleteTask}
                                  clickMinus={clickMinus}
                                  clickPlus={clickPlus}/>
                </div>
            }
        </li>
    );
}
