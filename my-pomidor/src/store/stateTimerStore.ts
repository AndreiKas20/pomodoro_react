import {makeAutoObservable} from "mobx";
import {typeStateTimer} from "../../types/typeStateTimer";


class StateTimer {
    stateTimer = '';
    constructor() {
        makeAutoObservable(this)
    }

    changeSate(newSate: typeStateTimer) {
        this.stateTimer = newSate
    }
}

export default new StateTimer()