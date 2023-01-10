export type dateType = {
    UTC: number, Date: Date
}
export type typesTask = {
    countPomodoro: number;
    textTask: string
    id: string
    acceptedPomodoro: number
    timeWorkAllTask?: number
    timeBreakAllTask?: number
    timeBreakTask?:number
    timeWorkTask?: number
    dateCompletion?: dateType
    idArrTasks?: string
}

export type typesTaskComplete = {
    countPomodoro: number;
    textTask: string
    id: string
    acceptedPomodoro: number
    timeWorkAllTask?: number
    timeBreakAllTask?: number
    timeBreakTask?:number
    timeWorkTask?: number
    dateCompletion: dateType
    idArrTasks?: string
}
export type typesArrTask = Array<typesTask>
export type typesArrTaskComplete = Array<typesTaskComplete>