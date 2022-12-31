import React from 'react';
import {TitleDescription} from "./TitleDescription";
import {ListDescription} from "./ListDescription";

export function DescriptionSection() {
    console.log('render Description')
    return (
        <div>
            <TitleDescription/>
            <ListDescription/>
        </div>
    );
}
