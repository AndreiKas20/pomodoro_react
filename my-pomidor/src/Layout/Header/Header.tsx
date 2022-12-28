import React from 'react';
import {Icon} from "../../UI/Icon";
import './header.css'

export function Header() {
    console.log('render Header')
    return (
        <div className='block'>
            <div className='iconPomidor'>
                <Icon nameIcon={'IconPomidor'}></Icon>
            </div>
            <button className='linkStatistic'>
                <Icon nameIcon={'IconStatistic'}></Icon>
                Статистика
            </button>
        </div>
    );
}
