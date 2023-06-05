import React from 'react';
import styles from './itemdescription.module.css';
interface IItemDesc {
  item: string;
}
export function ItemDescription(props: IItemDesc) {
  return (
  <li className={styles.item}>{props.item}</li>
  );
}
