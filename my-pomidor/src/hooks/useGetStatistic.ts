import {typesArrTaskComplete, typeTaskAdditionName} from "../../types/typesArrTask";
import {useEffect, useState} from "react";
import arrTaskStore from "../store/arrTaskStore";

export type timeGraph = {
    property?: typeTaskAdditionName
    time: number
    date?: Date
    countDay: number
}
export type arrTimeGraph = Array<timeGraph>

export const useGetStatistic = (arr: typesArrTaskComplete, dailyInterval: number, dayStartInterval: Date, property: typeTaskAdditionName, dayStop: Date) => {
    let arrTime: arrTimeGraph = []
    useEffect(() => {
        let __count = 0
        for (let i = dayStartInterval; dayStop >= i; i.setDate(i.getDate() + 1)) {
            const dailyArr = arr.filter(value => new Date(value.dateCompletion?.Date).getDate() === i.getDate() && new Date(value.dateCompletion?.Date).getMonth() === i.getMonth() )
            if (dailyArr !== []) {
                let __plus: number = 0
                dailyArr.forEach((value) => {
                    if (value[property]) {
                        // @ts-ignore ------------- Как убрать ??? Как проверить на наличие переменной?
                        __plus = __plus + value[property]
                    }
                })
                arrTime.push({property: property, time: __plus, date: new Date(i), countDay: __count++})
                __plus = 0
            }
        }
    },[arr, dayStartInterval, dailyInterval, property, dayStop, arrTaskStore.acceptArr])
    return arrTime
}
