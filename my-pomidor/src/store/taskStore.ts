import {makeAutoObservable} from "mobx";

 class Task {
    value = ''

    constructor() {
        makeAutoObservable(this)
    }

    updateValue(newValues: string) {
        this.value = newValues
    }
}
export default new Task()