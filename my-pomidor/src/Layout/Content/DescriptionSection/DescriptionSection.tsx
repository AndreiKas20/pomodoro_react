import React, {ChangeEvent} from 'react';
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

export const DescriptionSection = observer(() => {

    function changeValue(event: ChangeEvent<HTMLInputElement>) {
        taskStore.updateValue(event.target.value)
    }

    function handleSubmit() {
        arrTaskStore.addTask({countPomodoro: 1, textTask: taskStore.value, id: generateRandomString()})
    }

    return (
        <div>
            <div className={styles.title}>
                <TitleDescription/>
            </div>
            <div className={styles.list}>
                <ListDescription/>
            </div>
            <div className={styles.input}>
                <Input changeValue={changeValue} value={taskStore.value}/>
            </div>
            <div className={styles.btn}>
                <Button onClick={handleSubmit} text={'Добавить'} colorText={'var(--fullWhite)'}
                        colorBack={'var(--green4F)'}/>
            </div>
            <div>
                <ListTask/>
            </div>
        </div>
    );
})
