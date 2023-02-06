import React, {useEffect, useState} from 'react';
import styles from './graph.module.css';
import {arrTimeGraph} from "../../../hooks/useGetStatistic";
import {Column} from "./Column";
import {generateRandomString} from "../../../utils/getRandomString";
import {observer} from "mobx-react-lite";

interface IGraph {
    arr: arrTimeGraph
    dailyInterval: number
    maxIntervalTime: number
    arrText: Array<any>
}

export const Graph = observer((props: IGraph) => {
    const [arr, setArr] = useState<arrTimeGraph>([])
    const [stateArrText, setStateArrText] = useState<Array<any>>([])
    const [onePercent, setOnePercent] = useState(0)

    useEffect(() => {
        setArr(props.arr)
        setStateArrText(props.arrText)
        setOnePercent(props.maxIntervalTime / 100)
        if (props.maxIntervalTime) {
            setOnePercent(props.maxIntervalTime / 100)
        } else {
            setOnePercent(1)
        }
    }, [props.arr, props.arrText, props.maxIntervalTime])

    return (
        <div className={styles.block}>
                <span className={`${styles.sectionInGraph} ${styles.sectionInGraph1}`}>{stateArrText[0]}</span>
                <span className={`${styles.sectionInGraph} ${styles.sectionInGraph2}`}>{stateArrText[1]}</span>
                <span className={`${styles.sectionInGraph} ${styles.sectionInGraph3}`}>{stateArrText[2]}</span>
                <span className={`${styles.sectionInGraph} ${styles.sectionInGraph4}`}>{stateArrText[3]}</span>
                <div className={styles.graph}>
                    {
                        arr.map(value => <Column key={generateRandomString()} timeOnePercent={onePercent}
                                                 value={value}/>)
                    }
                </div>
                <div className={styles.dailyBlock}>
                </div>
        </div>
    );
})
