import React, { useEffect, useState } from 'react'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import Header from '../../components/Header'
import Wrapper from '../../components/Wrapper'
import Footer from '../../components/Footer'
import MonthlyAmount from './components/MonthlyAmount'
import { YearAmountType, getYearAmount } from '../../services/ranking'

export default function Statistics() {
    const [year, setYear] = useState<string>('2024')
    const yearArr: string[] = ['2024', '2023', '2022', '2021', '2020']
    const { data: yearData } = useQuery<YearAmountType, AxiosError>({
        queryKey: ['monthly', year],
        queryFn: () => getYearAmount(year),
    })

    const handleSelectYear = (e: SelectChangeEvent) => {
        setYear(e.target.value as string)
        console.log(e.target.value)
    }

    useEffect(() => {
        console.log(yearData)
    }, [yearData])
    return (
        <>
            <Header />
            <Wrapper>
                <div className="flex justify-between">
                    <h1>통계</h1>
                    <Select
                        value={year}
                        label="year"
                        onChange={handleSelectYear}
                    >
                        {/* eslint-disable react/no-array-index-key */}
                        {yearArr.map((value, index) => (
                            <MenuItem key={index} value={value}>
                                {value}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <MonthlyAmount data={yearData?.monthly ?? []} />
            </Wrapper>
            <Footer />
        </>
    )
}
