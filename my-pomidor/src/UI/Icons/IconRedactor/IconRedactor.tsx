import React from 'react';

interface IIcon {
    width?: string
    hidth?: string
    noActive?: boolean
}

export function IconRedactor(props: IIcon) {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_35_156)">
                <path style={props.noActive ? {fill: 'var(--grayC4)'} : {fill: '#A8B64F'}}
                    d="M10.545 6.765L11.235 7.455L4.44 14.25H3.75V13.56L10.545 6.765ZM13.245 2.25C13.0575 2.25 12.8625 2.325 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.6275 2.3175 13.44 2.25 13.245 2.25ZM10.545 4.6425L2.25 12.9375V15.75H5.0625L13.3575 7.455L10.545 4.6425Z"
                    fill="#A8B64F"/>
            </g>
            <defs>
                <clipPath id="clip0_35_156">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
}
