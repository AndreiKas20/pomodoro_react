import React from 'react';
import styles from './iconnoalert.module.css';

interface IIcon {
    width?: string
    height?: string
    noActive?: boolean
}
export function IconNoAlert(props: IIcon) {
    return (
        <svg style={{width: `${props.width}`, height: `${props.height}`}} data-name="Layer 1" id="Layer_1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title/>
            <path
                d="M40.62,28.34l-.87-.7A2,2,0,0,1,39,26.08V18a14.9,14.9,0,0,0-1-5.22l5.37-5.37a2,2,0,0,0-2.83-2.83L36.06,9.11a15,15,0,0,0-9.15-5.83,3,3,0,0,0-5.81,0A15,15,0,0,0,9,18v8.08a2,2,0,0,1-.75,1.56l-.87.7a9,9,0,0,0-3.38,7V37a4,4,0,0,0,1.27,2.9L2.59,42.59a2,2,0,1,0,2.83,2.83L9.83,41h6.44a8,8,0,0,0,15.47,0H40a4,4,0,0,0,4-4V35.36A9,9,0,0,0,40.62,28.34ZM8,37V35.36a5,5,0,0,1,1.88-3.9l.87-.7A6,6,0,0,0,13,26.08V18a11,11,0,0,1,20.19-6l-25,25Zm16,6a4,4,0,0,1-3.44-2h6.89A4,4,0,0,1,24,43Zm16-6H13.83l21-21A11,11,0,0,1,35,18v8.08a6,6,0,0,0,2.25,4.69l.87.7A5,5,0,0,1,40,35.36Z"/>
        </svg>
    );
}
