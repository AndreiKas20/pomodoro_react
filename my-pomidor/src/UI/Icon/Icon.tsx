import React from 'react';
import {IconMinus} from "../Icons/IconMinus";
import {IconDelete} from "../Icons/IconDelete";
import {IconPlus} from "../Icons/IconPlus";
import {IconPomidor} from "../Icons/IconPomidor";
import {IconRedactor} from "../Icons/IconRedactor";
import {IconStatistic} from "../Icons/IconStatistic";

type nameIcon = 'IconMinus' | 'IconDelete' | 'IconPlus' | 'IconPomidor' | 'IconRedactor' | 'IconStatistic'

interface IIcon {
    nameIcon: nameIcon
    width?: string
    height?: string
}

export function Icon({nameIcon, height, width}: IIcon) {
    if (nameIcon === 'IconMinus') {
        return (
            <IconMinus width={width} hidth={height}/>
        )
    }
    if (nameIcon === 'IconDelete') {
        return (
            <IconDelete width={width} hidth={height}/>
        )
    }
    if (nameIcon === 'IconPlus') {
        return (
            <IconPlus width={width} hidth={height}/>
        )
    }

    if (nameIcon === 'IconPomidor') {
        return (
            <IconPomidor width={width} hidth={height}/>
        )
    }

    if (nameIcon === 'IconRedactor') {
        return (
            <IconRedactor width={width} hidth={height}/>
        )
    }

    if (nameIcon === 'IconStatistic') {
        return (
            <IconStatistic width={width} hidth={height}/>
        )
    }
    return (
        <div></div>
    );
}
