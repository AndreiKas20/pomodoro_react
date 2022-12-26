import React from 'react';
import {Icon} from "../../UI/Icon";
import styles from './header.css'

export function Header() {
  console.log('render Header')
    return (
        <div className={styles.head}>
          <Icon nameIcon={'IconStatistic'}></Icon>
        </div>
    );
}
