import {makeAutoObservable} from "mobx";

class StateDayTarget {
    dayTarget = 0
    constructor() {
        makeAutoObservable(this)
    }

    changeDayTarget(newValue: number) {
        this.dayTarget = newValue
    }
}

export default new StateDayTarget()