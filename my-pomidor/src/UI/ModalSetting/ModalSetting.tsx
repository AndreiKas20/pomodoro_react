import React, {FormEvent, useRef} from 'react';
import styles from './modalsetting.module.css';

import {Button} from "../Button";
import {observer} from "mobx-react-lite";
import settingTimerStore from "../../store/settingTimerStore";


interface IModalSetting {
    closeModal: () => void
}

export const ModalSetting = observer((props: IModalSetting) => {
    const onePomidorRef = useRef<HTMLInputElement>(null)
    const oneBrakeRef = useRef<HTMLInputElement>(null)
    const oneLongBrake = useRef<HTMLInputElement>(null)
    const countLongBrake = useRef<HTMLInputElement>(null)
    const countShortBrake = useRef<HTMLInputElement>(null)

    const confirmSettings = (event: FormEvent) => {
        console.log('inpute ',onePomidorRef.current?.value === '', typeof onePomidorRef.current?.value )
        if (onePomidorRef.current?.value === '') {
            settingTimerStore.updateOnePomidor(Number(settingTimerStore.onePomidor))
        } else {
            settingTimerStore.updateOnePomidor(Number(onePomidorRef.current?.value) * 60)
        }
        if (oneBrakeRef.current?.value === '') {
            settingTimerStore.updateOneBrake(Number(settingTimerStore.oneBrake))
        } else {
            settingTimerStore.updateOneBrake(Number(onePomidorRef.current?.value) * 60)
        }
        if (oneLongBrake.current?.value === '') {
            settingTimerStore.updateOneLongBrake(Number(settingTimerStore.oneLongBrake))
        } else {
            settingTimerStore.updateOneLongBrake(Number(onePomidorRef.current?.value) * 60)
        }
        if (countLongBrake.current?.value === '') {
            settingTimerStore.updateCountLongBrake(Number(settingTimerStore.countLongBrake))
        } else {
            settingTimerStore.updateCountLongBrake(Number(onePomidorRef.current?.value))
        }
        if (countShortBrake.current?.value === '') {
            settingTimerStore.updateCountShortBrake(Number(settingTimerStore.countShortBrake))
        } else {
            settingTimerStore.updateCountShortBrake(Number(onePomidorRef.current?.value))
        }
        event.preventDefault()
    }

    return (
        <div className={styles.settingBack}>
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
                        <input placeholder={String(settingTimerStore.onePomidor / 60)} min={'1'} type={'number'} ref={onePomidorRef} className={styles.input}/>
                    </div>
                    <div className={styles.blockInput}>
                        <span className={styles.descriptionInput}>Время короткого перерыва*</span>
                        <input placeholder={String(settingTimerStore.oneBrake / 60)} min={'1'} type={'number'} ref={oneBrakeRef} className={styles.input}/>
                    </div>
                    <div className={styles.blockInput}>
                        <span className={styles.descriptionInput}>Время длинного перерыва*</span>
                        <input placeholder={String(settingTimerStore.oneLongBrake / 60)} min={'1'} type={'number'} ref={oneLongBrake} className={styles.input}/>
                    </div>
                    <div className={styles.blockInput}>
                        <span className={styles.descriptionInput}>Коротких перерывов</span>
                        <input placeholder={String(settingTimerStore.countLongBrake)} min={'0'} type={'number'} ref={countLongBrake} className={styles.input}/>
                    </div>
                    <div className={styles.blockInput}>
                        <span className={styles.descriptionInput}>Длинных перерывов</span>
                        <input placeholder={String(settingTimerStore.countShortBrake)} min={'0'} type={'number'} ref={countShortBrake} className={styles.input}/>
                    </div>
                    <div>ОТКЛЮЧИТЬ ОПОВЕЩЕНИЯ</div>
                    <span className={styles.footnote}>*время указано в минутах</span>
                    <Button onClick={confirmSettings} hoverIn={{color: "var(--fullWhite)", backgroundColor: "var(--green4F)"}}
                            style={{color: "var(--fullWhite)", backgroundColor: "var(--green4F)"}}
                            text={'Применить'}/>
                </form>
        </div>
    );
})
