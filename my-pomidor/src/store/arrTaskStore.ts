import {makeAutoObservable} from "mobx";
import {dateType, typesArrTask, typesArrTaskComplete, typesTask} from "../../types/typesArrTask";


class ArrayTask {
    //----Массив для хранения текущих задач
    arrTask: typesArrTask = []
    //----Массив для хранения выполненных задач
    acceptArr: typesArrTaskComplete = [] // ????? JSON.parse( localStorage.acceptArr)
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

    //----Увеличиваем значение счетчика ВЫПОЛНЕННЫХ помидоров, первым параметром передаем id,
    //----вторым параметром передаем прошлое значение выполненных помидоров
    editAccept(id: string, count: number) {
        count++
        this.arrTask = this.arrTask.map(task => task.id === id ? {...task, acceptedPomodoro: 1} : task)
    }

    //----С каждым переходом в паузу отрабатывает эта функция. Параметрами передаем:
    // 1- НОВЫЙ ID
    // 2- Полный объект из старого массива
    // 3- Объект со свойствами Даты
    // 4- ID Из задачи из старого массива
    acceptTask(id: string, task: typesTask, dateCompletion: dateType, idArrTasks: string, acceptedPomodoro: number, countBrake: number) {
        this.acceptArr.push({...task, dateCompletion, idArrTasks, acceptedPomodoro, countBrake})
    }

    addLocalStorage(arr: any) {
        this.acceptArr = arr
    }
}

export default new ArrayTask()