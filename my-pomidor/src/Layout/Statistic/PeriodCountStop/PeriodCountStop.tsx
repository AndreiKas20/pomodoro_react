import React, {useEffect, useState} from 'react';
import styles from './periodcountstop.module.css';
import {arrTimeGraph} from "../../../hooks/useGetStatistic";
import {observer} from "mobx-react-lite";
import stateDayTarget from "../../../store/stateDayTarget";
import {Icon} from "../../../UI/Icon";

interface ICountBrake {
  arrCountBrake: arrTimeGraph
}

export const PeriodCountStop = observer((props: ICountBrake) => {
  const dayTarget = stateDayTarget.dayTarget
  const [contBrake, setCountBrake] = useState<number>(0)
  useEffect(() => {
    setCountBrake(props.arrCountBrake[dayTarget]?.time)
      if (!props.arrCountBrake[dayTarget]) {
          setCountBrake(0)
      }
  }, [dayTarget, props.arrCountBrake])
  return (
        <div className={styles.block}>
          <div className={styles.leftSide}>
            <h3 className={styles.titleBlock}>Остановки</h3>
            <span className={styles.countBrake}>{contBrake}</span>
          </div>
          <div>
            <Icon nameIcon={"IconStops"}/>
          </div>
        </div>
  );
})
