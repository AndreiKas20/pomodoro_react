import React from 'react';
import {IconMinus} from "../Icons/IconMinus";
import {IconDelete} from "../Icons/IconDelete";
import {IconPlus} from "../Icons/IconPlus";
import {IconPomidor} from "../Icons/IconPomidor";
import {IconRedactor} from "../Icons/IconRedactor";
import {IconStatistic} from "../Icons/IconStatistic";
import {PomodorNoData} from "../Icons/PomodorNoData";
import {IconFocus} from "../Icons/IconFocus";
import {IconTimeBrake} from "../Icons/IconTimeBrake";
import {IconStops} from "../Icons/IconStops";
import {Setting} from "../Icons/Setting";
import {IconAlert} from "../Icons/IconAlert";
import {IconNoAlert} from "../Icons/IconNoAlert";

type nameIcon =
    'IconMinus'
    | 'IconDelete'
    | 'IconPlus'
    | 'IconPomidor'
    | 'IconRedactor'
    | 'IconStatistic'
    | 'PomodorNoData'
    | 'IconFocus'
    | 'IconStops'
    | 'IconTimeBrake'
    | 'Setting'
    | 'IconAlert'
    | 'IconNoAlert'

interface IIcon {
    nameIcon: nameIcon
    width?: string
    height?: string
    noActive?: boolean
}

export function Icon({nameIcon, height, width, noActive}: IIcon) {
    if (nameIcon === 'IconMinus') {
        return (
            <IconMinus width={width} height={height} noActive={noActive}/>
        )
    }
    if (nameIcon === 'IconDelete') {
        return (
            <IconDelete width={width} height={height} noActive={noActive}/>
        )
    }
    if (nameIcon === 'IconPlus') {
        return (
            <IconPlus width={width} height={height} noActive={noActive}/>
        )
    }

    if (nameIcon === 'IconPomidor') {
        return (
            <IconPomidor width={width} height={height} noActive={noActive}/>
        )
    }

    if (nameIcon === 'IconRedactor') {
        return (
            <IconRedactor width={width} height={height} noActive={noActive}/>
        )
    }

    if (nameIcon === 'IconStatistic') {
        return (
            <IconStatistic width={width} height={height}/>
        )
    }

    if (nameIcon === 'PomodorNoData') {
        return (
            <PomodorNoData width={width} height={height}/>
        )
    }
    if (nameIcon === 'IconFocus') {
        return (
            <IconFocus width={width} height={height}/>
        )
    }
    if (nameIcon === 'IconTimeBrake') {
        return (
            <IconTimeBrake width={width} height={height}/>
        )
    }
    if (nameIcon === 'IconStops') {
        return (
            <IconStops width={width} height={height}/>
        )
    }
    if (nameIcon === 'Setting') {
        return (
            <Setting width={width} height={height}/>
        )
    }
    if (nameIcon === 'IconAlert') {
        return (
            <IconAlert width={width} height={height}/>
        )
    }
    if (nameIcon === 'IconNoAlert') {
        return (
            <IconNoAlert width={width} height={height}/>
        )
    }
    return (
        <div></div>
    );
}
