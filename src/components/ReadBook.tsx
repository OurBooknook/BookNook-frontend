import React, { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { ReadInfoType } from './AddBookModal'

export default function ReadBook({
    readInfo,
    setReadInfo,
}: {
    readInfo: ReadInfoType
    setReadInfo: React.Dispatch<React.SetStateAction<ReadInfoType>>
}) {
    // FIXME 효율적이지 않은 코드 같음. 하드코딩 아닌 방식으로 구현
    const [starScore, setStarScore] = useState<number>()
    const [starArr, setStarArr] = useState<number[]>([1, 1, 1, 0, 0])
    const handleClickStarScore = (value: number) => {
        switch (value) {
            case 0:
                setStarArr([1, 0, 0, 0, 0])
                break
            case 1:
                setStarArr([1, 1, 0, 0, 0])
                break
            case 2:
                setStarArr([1, 1, 1, 0, 0])
                break
            case 3:
                setStarArr([1, 1, 1, 1, 0])
                break
            case 4:
                setStarArr([1, 1, 1, 1, 1])
                break
            default:
                setStarArr([1, 1, 1, 1, 1])
        }
    }

    useEffect(() => {
        let count = 0
        starArr.forEach((num) => {
            count += num === 1 ? 1 : 0
        })

        console.log(count)
        console.log(starScore)

        setStarScore(count)
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
