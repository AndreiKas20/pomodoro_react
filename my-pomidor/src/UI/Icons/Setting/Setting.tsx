import React from 'react';
import styles from './setting.module.css';

interface IIcon {
  width?: string
  height?: string
}

export function Setting(props: IIcon) {
  return (
      <svg className={styles.svg} style={{width: `${props.width}`, height: `${props.height}`}} id="cog" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <path className={styles.viPrimary}
              d="M19.08,12.122L21,6h6l1.92,6.122H19.08ZM18.986,36l1.938,6h6.153l1.938-6H18.986ZM35.878,19.08L42,21v6l-6.122,1.92V19.08ZM12,18.986L6,20.924v6.153l6,1.938V18.986ZM28.92,12.122l5.686-2.971,4.243,4.243L35.878,19.08ZM11.967,28.942L9.1,34.553,13.447,38.9l5.611-2.87Zm23.911-.022,2.971,5.686-4.243,4.243L28.92,35.878ZM19.058,11.967L13.447,9.1,9.1,13.447l2.87,5.611Z"/>
        <path className={styles.viAccent}
              d="M24,37A13,13,0,1,1,37,24,13,13,0,0,1,24,37Zm0-17.875A4.875,4.875,0,1,0,28.875,24,4.875,4.875,0,0,0,24,19.125Z"/>
        <path className={styles.viPrimary}
              d="M24,31a7,7,0,1,1,7-7A7,7,0,0,1,24,31Zm0-10a3,3,0,1,0,3,3A3,3,0,0,0,24,21Z"/>
      </svg>
  );
}
