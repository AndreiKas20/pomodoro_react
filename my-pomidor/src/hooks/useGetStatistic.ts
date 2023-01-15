import {typesArrTaskComplete, typeTaskAdditionName} from "../../types/typesArrTask";
import {useEffect, useState} from "react";

export type timeGraph = {
    property?: typeTaskAdditionName
    time: number
    date?: Date
    countDay: number
}
export type arrTimeGraph = Array<timeGraph>

export const useGetStatistic = (arr: typesArrTaskComplete, dailyInterval: number, dayStartInterval: number, property: typeTaskAdditionName) => {
    const nowDate = new Date()
    let arrTime: arrTimeGraph = []
    const nowMonth = nowDate.getMonth() + 1
    const nowYear = nowDate.getFullYear()
    let dayStop = dayStartInterval + dailyInterval
    useEffect(() => {
        let __count = 0
        for (let i = dayStartInterval; dayStop > i; i++) {

            const dailyArr = arr.filter(value => value.dateCompletion?.Date > new Date(`${nowYear}-${nowMonth}-${i}`) && value.dateCompletion?.Date < new Date(`${nowYear}-${nowMonth}-${i + 1}`))
            if (dailyArr !== []) {
                let __plus: number = 0
                dailyArr.forEach((value) => {
                    if (value[property]) {
                        // @ts-ignore ------------- Как убрать ??? Как проверить на наличие переменной?
                        __plus = __plus + value[property]
                    }
                })
                arrTime.push({property: property, time: __plus, date: new Date(`${nowYear}-${nowMonth}-${i}`), countDay: __count++})
                __plus = 0
            }
        }
    })
    return arrTime
}
