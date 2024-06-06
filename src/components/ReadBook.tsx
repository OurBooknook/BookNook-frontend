import React, { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { ReadInfoType } from '../pages/BookDetail/components/AddBookModal'

export default function ReadBook({
    readInfo,
    setReadInfo,
}: {
    readInfo: ReadInfoType
    setReadInfo: React.Dispatch<React.SetStateAction<ReadInfoType>>
}) {
    const getStarArr = (starScore: number): number[] => {
        const arr = new Array(5).fill(0)
        for (let i = 0; i < starScore; i += 1) {
            arr[i] = 1
        }
        return arr
    }
    // FIXME 효율적이지 않은 코드 같음. 하드코딩 아닌 방식으로 구현
    const [starArr, setStarArr] = useState<number[]>(
        getStarArr(readInfo.starScore ?? 0)
    )
    const handleClickStarScore = (index: number) => {
        const updatedStarArr = starArr.map((star, i) => (i <= index ? 1 : 0))
        setStarArr(updatedStarArr)
    }

    useEffect(() => {
        let count = 0
        starArr.forEach((num) => {
            count += num === 1 ? 1 : 0
        })

        setReadInfo((prevValue) => ({ ...prevValue, starScore: count }))
    }, [starArr])

    const handleChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReadInfo((prev) => ({ ...prev, startDate: e.target.value }))
    }
    const handleChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReadInfo((prev) => ({ ...prev, endDate: e.target.value }))
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
                            max={readInfo.endDate ?? undefined}
                            value={readInfo.startDate ?? undefined}
                            className="font-bold"
                            onChange={(e) => handleChangeStartDate(e)}
                        />
                    </div>
                    <div className="flex justify-between p-4 border-[0.5px] border-gray bg-white rounded-md">
                        <span className="font-bold">종료일</span>
                        <input
                            type="date"
                            name="endDate"
                            min={readInfo.startDate ?? undefined}
                            value={readInfo.endDate ?? undefined}
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
                    {starArr.map((star, index) => (
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
