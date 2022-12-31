import React from 'react';
import {HeaderTimerBlock} from "./HeaderTimerBlock";
import {ContentTimerBlock} from "./ContentTimerBlock";

export function TimerBlock() {
    return (
        <div>
            <HeaderTimerBlock></HeaderTimerBlock>
            <ContentTimerBlock></ContentTimerBlock>
        </div>
    );
}
