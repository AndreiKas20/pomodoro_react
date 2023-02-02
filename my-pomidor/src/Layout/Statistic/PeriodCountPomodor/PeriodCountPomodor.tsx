import React, {useEffect, useState} from 'react';
import styles from './periodcountpomodor.module.css';
import {arrTimeGraph} from "../../../hooks/useGetStatistic";
import stateDayTarget from "../../../store/stateDayTarget";
import {observer} from "mobx-react-lite";
import {Icon} from "../../../UI/Icon";

interface IPeriod {
    arr: arrTimeGraph
}

export const PeriodCountPomodor = observer((props: IPeriod) => {
    const targetDay = stateDayTarget.dayTarget
    const [arr, setArr] = useState<arrTimeGraph>([])
    const [noData, setNoData] = useState(false)
    const [count, setCount] = useState(0)
    const [textPomodor, setTextPomodor] = useState('')
    useEffect(() => {
        setArr(props.arr)
        if (arr[targetDay]?.time === 0) {
            setNoData(true)
        } else {
            setCount(arr[targetDay]?.time)
            let __Num
            let __textNum
            let __lastNum
            __Num = arr[targetDay]?.time
            __textNum = String(__Num)
            __lastNum = __textNum.at(-1)
            __lastNum = Number(__lastNum)
            setNoData(false)
            if (__lastNum === 1 && count !== 11) {
                setTextPomodor('Помидор')
            } else if (count === 10 || count === 11 || count === 12 || count === 13 || count === 14) {
                setTextPomodor('Помидоров')
            } else if (__lastNum >= 2 && __lastNum <= 4) {
                setTextPomodor('Помидора')
            } else {
                setTextPomodor('Помидоров')
            }
        }
    }, [props.arr, noData, arr, targetDay])
    return (
        <div className={styles.content}>
            <div className={styles.block}>
                {
                    noData &&
                    <div>
                        <Icon nameIcon={'PomodorNoData'}/>
                    </div>
                }
                {
                    !noData &&
                    <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                        <Icon nameIcon={'IconPomidor'} width={'81'} height={'81'}/>
                        <span className={styles.count}>x {count}</span>
                    </div>
                }
            </div>
            {
                !noData &&
                <span className={styles.textCount}> {count} {textPomodor} </span>
            }
        </div>

    );
})
