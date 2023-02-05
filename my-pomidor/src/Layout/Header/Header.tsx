import React, {useLayoutEffect, useRef, useState} from 'react';
import {Icon} from "../../UI/Icon";
import styles from './header.module.css'
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {useTheme} from "../../hooks/useTheme";
import {ModalSetting} from "../../UI/ModalSetting";
import {Setting} from "../../UI/Icons/Setting";

export const Header = observer(() => {
    const setTheme = useTheme()
    const check = useRef<HTMLInputElement>(null)
    const [startChecked, setStartChecked] = useState(false)
    const stateTheme = localStorage.getItem('theme')
    const [openSetting, setOpenSetting] = useState(false)
    const setDark = () => {
        console.log('check', check.current?.checked)
        if (!check.current?.checked) {
            setTheme('dark')
            setStartChecked(false)
        } else {
            setTheme('light')
            setStartChecked(true)
        }
    }
    const closeModal = () => {
        setOpenSetting(false)
    }
    const clickSetting = () => {
        setOpenSetting(!openSetting)
    }
    useLayoutEffect(() => {
        if (stateTheme === 'dark') {
            setStartChecked(false)
        } else {
            setStartChecked(true)
        }
    }, [stateTheme])
    return (
        <div className={styles.block}>
            <Link className={styles.iconBlock} to={'/'}>
                <div className={styles.iconPomidor}>
                    <Icon nameIcon={'IconPomidor'}></Icon>
                </div>
                <h1 className={styles.title}>pomodoro_box</h1>
            </Link>
            <div className={styles.toggleSwitch} style={{transform: 'scale(.20)'}}>
                <label>
                    <span className={styles.advTextCheck}>Выбор темы</span>
                    <input className={styles.input} ref={check} onChange={setDark} checked={startChecked}
                           type='checkbox'></input>
                    <span className={styles.slider}></span>
                </label>
            </div>
            <button className={styles.linkBlock}>
                <Link to={'statistic'}>
                    <span className={styles.iconStatistic}></span>
                    <span className={styles.textBtn}>
                    Статистика
                    </span>
                </Link>
            </button>
            <button className={styles.btnSetting} onClick={clickSetting}>
                <Setting width={'40px'} height={'40px'}/>
            </button>
            {
                openSetting &&
                <ModalSetting closeModal={closeModal}/>
            }
        </div>
    );
})
