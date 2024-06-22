import React, { useState } from 'react'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Header from '../../components/Header'
import Wrapper from '../../components/Wrapper'
import Footer from '../../components/Footer'
import MonthlyAmount from './components/MonthlyAmount'

export default function Statistics() {
    const [year, setYear] = useState<string>('2024')
    const yearArr: string[] = ['2024', '2023', '2022', '2021', '2020']

    const handleSelectYear = (e: SelectChangeEvent) => {
        setYear(e.target.value as string)
    }
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
                        {yearArr.map((value) => (
                            <MenuItem value={value}>{value}</MenuItem>
                        ))}
                    </Select>
                </div>
                <MonthlyAmount />
            </Wrapper>
            <Footer />
        </>
    )
}
