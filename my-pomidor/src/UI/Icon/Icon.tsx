import React from 'react';
import {IconMinus} from "../Icons/IconMinus";
import {IconDelete} from "../Icons/IconDelete";
import {IconPlus} from "../Icons/IconPlus";
import {IconPomidor} from "../Icons/IconPomidor";
import {IconRedactor} from "../Icons/IconRedactor";
import {IconStatistic} from "../Icons/IconStatistic";
import {PomodorNoData} from "../Icons/PomodorNoData";

type nameIcon = 'IconMinus' | 'IconDelete' | 'IconPlus' | 'IconPomidor' | 'IconRedactor' | 'IconStatistic' | 'PomodorNoData'

interface IIcon {
    nameIcon: nameIcon
    width?: string
    height?: string
    noActive?: boolean
}

export function Icon({nameIcon, height, width, noActive}: IIcon) {
    if (nameIcon === 'IconMinus') {
        return (
            <IconMinus width={width} hidth={height} noActive={noActive}/>
        )
    }
    if (nameIcon === 'IconDelete') {
        return (
            <IconDelete width={width} hidth={height} noActive={noActive}/>
        )
    }
    if (nameIcon === 'IconPlus') {
        return (
            <IconPlus width={width} hidth={height} noActive={noActive}/>
        )
    }

    if (nameIcon === 'IconPomidor') {
        return (
            <IconPomidor width={width} hidth={height} noActive={noActive}/>
        )
    }

    if (nameIcon === 'IconRedactor') {
        return (
            <IconRedactor width={width} hidth={height} noActive={noActive}/>
        )
    }

    if (nameIcon === 'IconStatistic') {
        return (
            <IconStatistic width={width} hidth={height} />
        )
    }

    if (nameIcon === 'PomodorNoData') {
        return (
            <PomodorNoData width={width} hidth={height} />
        )
    }
    return (
        <div></div>
    );
}
