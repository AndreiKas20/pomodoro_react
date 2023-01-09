import {makeAutoObservable} from "mobx";
import {typesArrTask, typesTask} from "../../types/typesArrTask";


class ArrayTask {
    arrTask: typesArrTask = []

    constructor() {
        makeAutoObservable(this)
    }

    //-----Добавляем в конец массива объект с данными, он является входным параметром
    addTask(newValue: typesTask) {
        this.arrTask.push(newValue)
    }

    //----Увеличиваем счетчик, первым входным параметром является id необходимого объекта, вторым текущее значение счетчика
    countEditPlus(id: string, count: number) {
        count++
        this.arrTask = this.arrTask.map(task => task.id === id ? {...task, countPomodoro: count} : task)
    }

    //----Уменьшаем счетчик, первым входным параметром является id необходимого объекта, вторым текущее значение счетчика
    countEditMinus(id: string, count: number) {
        count--
        if (count === 0) return
        this.arrTask = this.arrTask.map(task => task.id === id ? {...task, countPomodoro: count} : task)
    }

    //----Удаляем объект из массива, входным параметром является id необходимого объекта
    deleteTask(id: string) {
        this.arrTask = this.arrTask.filter(task => task.id !== id)
    }

    //----Меняем значение в поле textTask, первый входной параметр id, второй новый текст
    editTask(id: string, newTextTask: string) {
        this.arrTask = this.arrTask.map(task => task.id === id ? {...task, textTask: newTextTask} : task)
    }
}

export default new ArrayTask()