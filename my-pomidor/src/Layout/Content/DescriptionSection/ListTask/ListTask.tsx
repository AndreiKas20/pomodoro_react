import React from 'react';
import {ItemTask} from "./ItemTask";
import {observer} from "mobx-react-lite";
import arrTaskStore from "../../../../store/arrTaskStore";

export const ListTask = observer(() => {
    return (
        <ul>
            {
                arrTaskStore.arrTask.map(value => <ItemTask key={value.id} taskItem={value}/>)
            }
        </ul>
    );
})
