import {typesArrTaskComplete, typeTaskAdditionName} from "../../types/typesArrTask";
import {useEffect, useState} from "react";

type arrTime = Array<{
    property?: typeTaskAdditionName
    time?: number
    date?: Date
    none?: boolean
}>


export const useGetStatistic = (arr: typesArrTaskComplete, dailyInterval: number, dayStartInterval: number, property: typeTaskAdditionName) => {
    const nowDate = new Date()
    let arrTime: arrTime = []
    const nowDayWeek = nowDate.getDay()
    const nowDayDate = nowDate.getDate()
    const nowMonth = nowDate.getMonth() + 1
    const nowYear = nowDate.getFullYear()
    const dayStart = new Date(`${nowYear}-${nowMonth}-${dayStartInterval}`)
    let dayStop = dayStartInterval + dailyInterval
    // console.log('arr in',arr)
    useEffect(() => {
        for (let i = dayStartInterval; dayStop > i; i++) {
            console.log('i', i)

            let g = 8
            const dailyArr = arr.filter(value => value.dateCompletion?.Date > new Date(`${nowYear}-${nowMonth}-${i}`) && value.dateCompletion?.Date < new Date(`${nowYear}-${nowMonth}-${i + 1}`) )
            console.log('1 while, arr true' , dailyArr)
            if (dailyArr !== []) {

                let __plus: number = 0
                dailyArr.forEach((value) => {
                    console.log('in foreach', value[property])
                    if (value[property]) {
                        // @ts-ignore ------------- Как убрать ??? Как проверить на наличие переменной?
                        __plus = __plus + value[property]

                    }
                })
                arrTime.push({property: property, time: __plus, date: new Date(`${nowYear}-${nowMonth}-${i}`)})
                __plus = 0
            } else {
                arrTime.push({none: true})
            }
        }
        console.log('out while, look arr', arrTime)
    }, [])
    return arrTime
}
