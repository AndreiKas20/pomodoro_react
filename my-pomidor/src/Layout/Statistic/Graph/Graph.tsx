import React from 'react';
import styles from './graph.module.css';

export function Graph() {
    return (
        <div className={styles.block}>
            <div className={styles.graph}></div>
            <div className={styles.period}></div>
        </div>
    );
}
