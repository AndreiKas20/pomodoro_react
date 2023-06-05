import React, {FormEvent, useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './modalsetting.module.css';

import {Button} from "../Button";
import {observer} from "mobx-react-lite";
import settingTimerStore from "../../store/settingTimerStore";
import {useSpring, animated} from "@react-spring/web";


interface IModalSetting {
    closeModal: () => void
}

export const ModalSetting = observer((props: IModalSetting) => {
    const stylesAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    })
    const onePomidorRef = useRef<HTMLInputElement>(null)
    const oneBrakeRef = useRef<HTMLInputElement>(null)
    const oneLongBrake = useRef<HTMLInputElement>(null)
    const countLongBrake = useRef<HTMLInputElement>(null)
    const countShortBrake = useRef<HTMLInputElement>(null)
    const alertRef = useRef<HTMLInputElement>(null)
    const [isSave, setIsSave] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const confirmSettings = (event: FormEvent) => {
        console.log('input ',alertRef.current?.checked)
        if (onePomidorRef.current?.value === '') {
            settingTimerStore.updateOnePomidor(Number(settingTimerStore.onePomidor))
        } else {
            settingTimerStore.updateOnePomidor(Number(onePomidorRef.current?.value))
        }
        if (oneBrakeRef.current?.value === '') {
            settingTimerStore.updateOneBrake(Number(settingTimerStore.oneBrake))
        } else {
            settingTimerStore.updateOneBrake(Number(oneBrakeRef.current?.value))
        }
        if (oneLongBrake.current?.value === '') {
            settingTimerStore.updateOneLongBrake(Number(settingTimerStore.oneLongBrake))
        } else {
            settingTimerStore.updateOneLongBrake(Number(oneLongBrake.current?.value))
        }
        if (countLongBrake.current?.value === '') {
            settingTimerStore.updateCountLongBrake(Number(settingTimerStore.countLongBrake))
        } else {
            settingTimerStore.updateCountLongBrake(Number(countLongBrake.current?.value))
        }
        if (countShortBrake.current?.value === '') {
            settingTimerStore.updateCountShortBrake(Number(settingTimerStore.countShortBrake))
        } else {
            settingTimerStore.updateCountShortBrake(Number(countShortBrake.current?.value))
        }
        if (alertRef.current?.checked === false) {
            settingTimerStore.updateAlert(true)
        } else {
            settingTimerStore.updateAlert(false)
        }
        event.preventDefault()
        setIsSave(true)
    }

    const onChange = () => {
        setIsChecked(!isChecked)
    }
    useLayoutEffect(() => {
        if (settingTimerStore.alert) {
            setIsChecked(false)
        } else {
            setIsChecked(true)
        }
    }, [])

    useEffect(() => {
        const timerSave = setInterval(() => {
            setIsSave(false)
        }, 3500);
        return () => clearInterval(timerSave);
        },[isSave])
    return (
        <div className={styles.settingBack}>
            <animated.div style={stylesAnimation}>
                <form className={styles.settingModal} onSubmit={confirmSettings}>
                <h3 className={styles.title}> Настройка таймера</h3>
                <button onClick={props.closeModal} className={styles.closeModal}>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.9115 8.80583L2.84406 13.9567L0.961665 12.0433L6.02911 6.89245L1.0675 1.84914L2.85992 0.0272091L7.82153 5.07052L12.7673 0.0433371L14.6497 1.95672L9.70392 6.9839L14.6655 12.0272L12.8731 13.8491L7.9115 8.80583Z"
                            fill="#C4C4C4"/>
                    </svg>
                </button>
                <div className={styles.blockInput}>
                    <span className={styles.descriptionInput}>Время одного помидора*</span>
                    <input placeholder={String(settingTimerStore.onePomidor)} min={'1'} type={'number'}
                           ref={onePomidorRef} className={styles.input}/>
                </div>
                <div className={styles.blockInput}>
                    <span className={styles.descriptionInput}>Время короткого перерыва*</span>
                    <input placeholder={String(settingTimerStore.oneBrake)} min={'1'} type={'number'}
                           ref={oneBrakeRef} className={styles.input}/>
                </div>
                <div className={styles.blockInput}>
                    <span className={styles.descriptionInput}>Время длинного перерыва*</span>
                    <input placeholder={String(settingTimerStore.oneLongBrake)} min={'1'} type={'number'}
                           ref={oneLongBrake} className={styles.input}/>
                </div>
                <div className={styles.blockInput}>
                    <span className={styles.descriptionInput}>Количество коротких перерывов</span>
                    <input placeholder={String(settingTimerStore.countShortBrake)} min={'0'} type={'number'}
                           ref={countShortBrake} className={styles.input}/>
                    <span className={styles.descriptionInputBottom}>Перед одним длинным</span>
                </div>
                <div className={styles.blockCheckbox}>
                    <span className={styles.textAlert}>Оповещения</span>
                    <div className={`${styles.button} ${styles.r}`} id="button-1">
                        <input ref={alertRef} checked={isChecked} onChange={onChange} type="checkbox" className={styles.checkbox}/>
                        <div className={styles.knobs}></div>
                        <div className={styles.layer}></div>
                    </div>
                </div>
                {
                    isSave &&
                    <span className={styles.saveText}>Настройки сохранены</span>
                }
                <span className={styles.footnote}>*время указано в минутах</span>
                <Button onClick={confirmSettings}
                        hoverIn={{color: "var(--fullWhite)", backgroundColor: "var(--green4F)"}}
                        style={{color: "var(--fullWhite)", backgroundColor: "var(--green4F)"}}
                        text={'Применить'}/>
            </form>
            </animated.div>

        </div>
    );
})
