import {makeAutoObservable} from "mobx";class SettingTimer {    onePomidor = 20    oneBrake = 5    oneLongBrake = 20    countLongBrake = 1    countShortBrake = 4    alert = true    constructor() {        makeAutoObservable(this)    }    updateOnePomidor(value: number ) {        this.onePomidor = value    }    updateOneBrake(value: number) {        this.oneBrake = value    }    updateOneLongBrake(value: number) {        this.oneLongBrake = value    }    updateCountLongBrake(value: number) {        this.countLongBrake = value    }    updateCountShortBrake(value: number) {        this.countShortBrake = value    }    updateAlert(value: boolean) {        this.alert = value    }}export default new SettingTimer()