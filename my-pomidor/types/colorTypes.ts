import {FormEvent} from "react";


export type colorVar =
    'var(--black)'
    | 'var(--red22)'
    | 'var(--green4F)'
    | 'var(--fullWhite)'
    | 'var(--whiteF4)'
    | 'var(--green41)'
    | 'var(--red0F)'
    | 'var(--pinc79)'
    | 'var(--pinc5D)'
    | 'var(--greyC4)'
    | 'var(--orange35)'
    | 'var(--blueD7)'
    | 'var(--violetD7)'
    | 'var(--blueFF)'
    | 'var(--violetFE)'
    | 'var(--greyEC)'
    | 'var(--orangeA9)'
    | 'var(--red0C)'
    | 'var(--grey99)'
    | 'var(--greyE4)'
    | 'none'

type border = '2px solid'

export type styleBtn = {color?: colorVar, backgroundColor?: colorVar, border?: border}

export interface IStateButton {
    text: string;
    onClick?: (event: FormEvent)=> void;
    style: styleBtn;
    hoverIn: styleBtn;
    hoverOut?: styleBtn;
}

