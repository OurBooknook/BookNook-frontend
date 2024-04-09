import React, { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function ReadBook() {
    // FIXME 효율적이지 않은 코드 같음. 하드코딩 아닌 방식으로 구현
    const [starScore, setStarScore] = useState<number[]>([1, 1, 1, 0, 0])
    const [startDate, setStartDate] = useState<string>('')
    const [endDate, setEndDate] = useState<string>('')
    const handleClickStarScore = (value: number) => {
        switch (value) {
            case 0:
                setStarScore([1, 0, 0, 0, 0])
                break
            case 1:
                setStarScore([1, 1, 0, 0, 0])
                break
            case 2:
                setStarScore([1, 1, 1, 0, 0])
                break
            case 3:
                setStarScore([1, 1, 1, 1, 0])
                break
            case 4:
                setStarScore([1, 1, 1, 1, 1])
                break
            default:
                setStarScore([1, 1, 1, 1, 1])
        }
    }

    const handleChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value)
    }
    const handleChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value)
    }

    return (
        <>
            <div className="flex flex-col gap-2 mb-6">
                <span className="text-gray">독서 기간</span>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between p-4 border-[0.5px] border-gray bg-white rounded-md">
                        <span className="font-bold">시작일</span>
                        <input
                            type="date"
                            name="startDate"
                            max={endDate}
                            value={startDate}
                            className="font-bold"
                            onChange={(e) => handleChangeStartDate(e)}
                        />
                    </div>
                    <div className="flex justify-between p-4 border-[0.5px] border-gray bg-white rounded-md">
                        <span className="font-bold">종료일</span>
                        <input
                            type="date"
                            name="endDate"
                            min={startDate}
                            value={endDate}
                            className="font-bold"
                            onChange={(e) => handleChangeEndDate(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mb-10">
                <span className="text-gray">평점</span>
                <div className="flex gap-4 text-3xl text-[#FFE55B]">
                    {/* eslint-disable react/no-array-index-key */}
                    {starScore.map((star, index) => (
                        <button
                            type="button"
                            key={index}
                            aria-label={`star${index}`}
                            onClick={() => handleClickStarScore(index)}
                        >
                            {star === 1 ? <FaStar /> : <FaRegStar />}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
