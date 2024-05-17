import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function ReadRecordInfo({
    rate,
    startDate,
    endDate,
}: {
    rate: number
    startDate: string
    endDate: string
}) {
    const printStarScore = (cnt: number) => {
        const arr = []
        for (let i = 0; i < cnt; i += 1) {
            arr.push(<FaStar key={i} />)
        }

        return arr
    }
    return (
        <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-12 items-center text-xl">
                <span className="text-gray text-lg">평점</span>
                <div className="flex gap-3 text-3xl text-[#FFE55B]">
                    {printStarScore(rate)}
                </div>
            </div>
            <div className="flex flex-col gap-2 text-xl">
                <span className="text-gray text-lg">독서 기간</span>
                <div className="grid grid-cols-2 px-6 py-4 bg-lightGray rounded-md">
                    <div className="flex gap-10">
                        <span className="text-primary font-bold">시작일</span>
                        <p>{startDate}</p>
                    </div>
                    <div className="flex gap-10">
                        <span className="text-primary font-bold">종료일</span>
                        <p>{endDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
