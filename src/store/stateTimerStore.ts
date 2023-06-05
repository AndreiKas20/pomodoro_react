import {makeAutoObservable} from "mobx";
import {typeStateTimer} from "../../types/typeStateTimer";


class StateTimer {
    stateTimer: typeStateTimer = 'stop';
    constructor() {
        makeAutoObservable(this)
    }

    changeState(newSate: typeStateTimer) {
        this.stateTimer = newSate
    }
}

export default new StateTimer()