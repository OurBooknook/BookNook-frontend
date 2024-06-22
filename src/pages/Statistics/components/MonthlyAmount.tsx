import React from 'react'
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts'

export default function MonthlyAmount() {
    const dummyData = [
        {
            month: '1월',
            amount: 10,
        },
        {
            month: '2월',
            amount: 10,
        },
        {
            month: '3월',
            amount: 10,
        },
        {
            month: '4월',
            amount: 10,
        },
        {
            month: '5월',
            amount: 10,
        },
        {
            month: '6월',
            amount: 10,
        },
        {
            month: '7월',
            amount: 10,
        },
        {
            month: '8월',
            amount: 10,
        },
        {
            month: '9월',
            amount: 10,
        },
        {
            month: '10월',
            amount: 10,
        },
        {
            month: '11월',
            amount: 10,
        },
        {
            month: '12월',
            amount: 10,
        },
    ]
    return (
        <BarChart width={800} height={400} data={dummyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
    )
}
