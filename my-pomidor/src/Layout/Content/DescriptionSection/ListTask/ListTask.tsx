import React from 'react';
import {ItemTask} from "./ItemTask";
import {generateRandomString} from "../../../../utils/getRandomString";

export function ListTask() {
    const arrItem: Array<string> = ['Купить пса', 'Продать пса', 'Купить кота']
    return (
        <ul>
            {
                arrItem.map(value => <ItemTask key={generateRandomString()} textItem={value}/>)
            }
        </ul>
    );
}
