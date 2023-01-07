import React, {ChangeEvent, FormEvent} from 'react';
import {TitleDescription} from "./TitleDescription";
import {ListDescription} from "./ListDescription";
import {Input} from "../../../UI/Input";
import styles from './descriptionsection.module.css'
import {Button} from "../../../UI/Button";
import {ListTask} from "./ListTask";
import {observer} from "mobx-react-lite";
import taskStore from "../../../store/taskStore";
import arrTaskStore from "../../../store/arrTaskStore";
import {generateRandomString} from "../../../utils/getRandomString";
import {styleBtn} from "../../../../types/colorTypes";

export const DescriptionSection = observer(() => {

    function changeValue(event: ChangeEvent<HTMLInputElement>) {
        taskStore.updateValue(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        arrTaskStore.addTask({countPomodoro: 1, textTask: taskStore.value, id: generateRandomString()})
        taskStore.updateValue('')
    }

    const btnDefaultStyle: styleBtn = {color: "var(--fullWhite)", backgroundColor: "var(--green4F)"}
    const hoverIn: styleBtn = {color: "var(--fullWhite)", backgroundColor: "var(--green41)"}

    return (
        <div>
            <div className={styles.title}>
                <TitleDescription/>
            </div>
            <div className={styles.list}>
                <ListDescription/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.input}>
                    <Input changeValue={changeValue} value={taskStore.value}/>
                </div>
                <div className={styles.btn}>
                    <Button hoverIn={hoverIn} hoverOut={btnDefaultStyle} onClick={handleSubmit} text={'Добавить'}
                            style={btnDefaultStyle}/>
                </div>
            </form>
            <div>
                <ListTask/>
            </div>
        </div>
    );
})
