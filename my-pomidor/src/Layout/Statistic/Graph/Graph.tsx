import React, {useEffect, useState} from 'react';
import styles from './graph.module.css';
import {arrTimeGraph} from "../../../hooks/useGetStatistic";
import {Column} from "./Column";
import {generateRandomString} from "../../../utils/getRandomString";
import {observer} from "mobx-react-lite";
import {useSpring, animated} from "@react-spring/web";

interface IGraph {
    arr: arrTimeGraph
    dailyInterval: number
    maxIntervalTime: number
    arrText: Array<any>
}

export const Graph = observer((props: IGraph) => {
    const stylesAnimation = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
    })
    const timeOnePercent = props.maxIntervalTime / 100
    const [arr, setArr] = useState<arrTimeGraph>([])
    const [stateArrText, setStateArrText] = useState<Array<any>>([])

    useEffect(() => {
        setArr(props.arr)
        setStateArrText(props.arrText)
    }, [props.arr, props.arrText])

    return (
        <div className={styles.block}>
            <animated.div style={stylesAnimation}>
                <span className={`${styles.sectionInGraph} ${styles.sectionInGraph1}`}>{stateArrText[0]}</span>
                <span className={`${styles.sectionInGraph} ${styles.sectionInGraph2}`}>{stateArrText[1]}</span>
                <span className={`${styles.sectionInGraph} ${styles.sectionInGraph3}`}>{stateArrText[2]}</span>
                <span className={`${styles.sectionInGraph} ${styles.sectionInGraph4}`}>{stateArrText[3]}</span>
                <div className={styles.graph}>
                    {
                        arr.map(value => <Column key={generateRandomString()} timeOnePercent={timeOnePercent}
                                                 value={value}/>)
                    }
                </div>
                <div className={styles.dailyBlock}>
                </div>
            </animated.div>
        </div>
    );
})
