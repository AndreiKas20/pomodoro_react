import React from 'react';
import styles from './modalsetting.module.css';
import {Input} from "../Input";
import {Button} from "../Button";

interface IModalSetting {
  closeModal: () => void
}

export function ModalSetting(props: IModalSetting) {
  return (
      <div className={styles.settingBack}>
        <div className={styles.settingModal}>
          <button onClick={props.closeModal} className={styles.closeModal}>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9115 8.80583L2.84406 13.9567L0.961665 12.0433L6.02911 6.89245L1.0675 1.84914L2.85992 0.0272091L7.82153 5.07052L12.7673 0.0433371L14.6497 1.95672L9.70392 6.9839L14.6655 12.0272L12.8731 13.8491L7.9115 8.80583Z" fill="#C4C4C4"/>
            </svg>
          </button>
          <Input value={'Время одного помидора'}/>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <Button hoverIn={{color: "var(--fullWhite)", backgroundColor: "var(--green4F)"}}
                  style={{color: "var(--fullWhite)", backgroundColor: "var(--green4F)"}}
                  text={'Применить'}/>
        </div>
      </div>
  );
}
