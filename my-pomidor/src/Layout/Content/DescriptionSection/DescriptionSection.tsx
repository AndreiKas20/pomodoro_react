import React from 'react';
import {TitleDescription} from "./TitleDescription";
import {ListDescription} from "./ListDescription";
import {Input} from "../../../UI/Input";
import styles from './descriptionsection.module.css'
import {Button} from "../../../UI/Button";

export function DescriptionSection() {
    console.log('render Description')
    return (
        <div>
            <div className={styles.title}>
                <TitleDescription/>
            </div>
            <div className={styles.list}>
                <ListDescription/>
            </div>
            <div className={styles.input}>
                <Input/>
            </div>
            <div className={styles.btn}>
                <Button text={'Добавить'} colorText={'var(--fullWhite)'} colorBack={'var(--green4F)'}/>
            </div>
        </div>
    );
}
