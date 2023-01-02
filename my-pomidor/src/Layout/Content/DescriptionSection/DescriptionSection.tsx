import React, {ChangeEvent, FormEvent} from 'react';
import {TitleDescription} from "./TitleDescription";
import {ListDescription} from "./ListDescription";
import {Input} from "../../../UI/Input";
import styles from './descriptionsection.module.css'
import {Button} from "../../../UI/Button";
import {ListTask} from "./ListTask";
import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react-lite";
class Task {
    value = 'MobX is work'

    constructor() {
        makeAutoObservable(this)
    }

    updateValue(newValue: string) {
        this.value = newValue
    }
}
const myTask = new Task()

export const DescriptionSection = observer(()=>{



    console.log('render Description')
    function changeValue(event: ChangeEvent<HTMLInputElement>) {
        myTask.updateValue(event.target.value)
        console.log('change', myTask.value)
    }
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(myTask.value)
        alert(myTask.value)
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
                <Input changeValue={changeValue} value={myTask.value}/>
            </div>
            <div className={styles.btn}>
                <Button onClick={handleSubmit} text={'Добавить'} colorText={'var(--fullWhite)'} colorBack={'var(--green4F)'}/>
            </div>
            <div>
                <ListTask/>
            </div>
        </div>
    );
})
