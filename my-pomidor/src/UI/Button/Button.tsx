import React from 'react';

interface IButton {
    colorText: string;
    colorBack: string;
    text: string;
}

export function Button(props: IButton) {
    //Пропсами передаю фон, цвет и текст кнопки
    return (
        <button style={{color: props.colorText, backgroundColor: props.colorBack}}>
            {props.text}
        </button>
    );
}
