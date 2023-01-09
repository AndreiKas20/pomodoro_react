export type typesTask = {
    countPomodoro: number;
    textTask: string
    id: string
    acceptedPomodoro: number
    timeWorkAllTask?: number
    timeBreakAllTask?: number
    timeBreakTask?:number
    timeWorkTask?: number
}
export type typesArrTask = Array<typesTask>