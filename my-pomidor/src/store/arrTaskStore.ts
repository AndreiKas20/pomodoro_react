import {makeAutoObservable} from "mobx";
import {typesArrTask, typesTask} from "../../types/typesArrTask";
import {generateRandomString} from "../utils/getRandomString";

class ArrayTask {
    arrTask: typesArrTask = [{countPomodoro: 1, textTask: 'pop', id: generateRandomString()}]

    constructor() {
        makeAutoObservable(this)
    }

    addTask(newValue: typesTask) {
        this.arrTask.push(newValue)
    }

    countEditPlus(id: string, count: number) {
        count ++
        this.arrTask = this.arrTask.map(task => task.id === id ? {...task, countPomodoro: count }: task)
    }

    countEditMinus(id: string, count: number) {
        count --
        if (count < 1) return
        this.arrTask = this.arrTask.map(task => task.id === id ? {...task, countPomodoro: count }: task)
    }

    deleteTask(id: string) {
        this.arrTask = this.arrTask.filter(task => task.id !== id)
    }

    editTask(id: string, newTextTask: string) {
        this.arrTask = this.arrTask.map(task => task.id === id ? {...task, textTask: newTextTask }: task)
    }
}

export default new ArrayTask()