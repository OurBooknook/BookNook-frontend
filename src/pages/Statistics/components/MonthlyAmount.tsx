import React, { useEffect, useState } from 'react'
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts'

interface MonthlyType {
    month: string
    amount: number
}
export default function MonthlyAmount({ data }: { data: number[] }) {
    const [monthly, setMonthly] = useState<MonthlyType[]>([])
    useEffect(() => {
        const arr: MonthlyType[] = []
        data.forEach((value, index) => {
            arr.push({
                month: `${index}월`,
                amount: value,
            })
        })

        console.log(arr)

        setMonthly(arr)
    }, [data])

    return (
        <BarChart width={800} height={400} data={monthly}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
    )
}
