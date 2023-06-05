import React from 'react';
import {ItemDescription} from "./ItemDescription";
import {generateRandomString} from "../../../../utils/getRandomString";
import styles from './listdescription.module.css'
export function ListDescription() {
    const listArr: Array<string> = [
        'Выберите категорию и напишите название текущей задачи',
        'Запустите таймер («помидор»)',
        'Работайте пока «помидор» не прозвонит',
        'Сделайте короткий перерыв (3-5 минут)',
        'Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут)'
    ]
    return (
        <ul className={styles.list}>
          {
            listArr.map(value => <ItemDescription item={value} key={generateRandomString()} />)
          }
        </ul>
    );
}
