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
                month: `${index + 1}월`,
                amount: value,
            })
        })

        console.log(arr)

        setMonthly(arr)
    }, [data])

    return (
        <BarChart width={1120} height={400} data={monthly}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#1E863B" />
        </BarChart>
    )
}
