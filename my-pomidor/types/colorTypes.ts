

type colorVar =
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
    | 'none'

type border = '2px solid'

export interface IStateButton {
    colorText: colorVar;
    colorBack: colorVar;
    border?: border ;
    text: string;
    // styleHover: {
    //     color?: colorVar,
    //     backgroundColor?: colorVar
    // };
}

