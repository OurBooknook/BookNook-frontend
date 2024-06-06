import React from 'react'
import todayStr from '../utils/getTodayStr'
import { ReadingInfoType } from '../pages/BookDetail/components/AddBookModal'

export default function ReadingBook({
    readingInfo,
    setReadingInfo,
}: {
    readingInfo: ReadingInfoType
    setReadingInfo: React.Dispatch<React.SetStateAction<ReadingInfoType>>
}) {
    const today = todayStr()
    const handleChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReadingInfo((prev) => ({ ...prev, startDate: e.target.value }))
    }
    const handleChangePages = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const pageNumber = value.trim() === '' ? null : Number(value)

        if (Number.isNaN(pageNumber)) {
            console.log('숫자가 아님')
        } else {
            setReadingInfo((prev) => ({ ...prev, page: pageNumber }))
        }
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
                            max={today}
                            value={readingInfo.startDate ?? ''}
                            className="font-bold"
                            onChange={(e) => handleChangeStartDate(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 mb-6">
                <span className="text-gray">독서량</span>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between p-4 border-[0.5px] border-gray bg-white rounded-md">
                        <span className="font-bold">페이지</span>
                        <div>
                            <input
                                type="number"
                                name="amountReading"
                                value={readingInfo.page ?? ''}
                                min="0"
                                className="font-bold text-end"
                                onChange={(e) => handleChangePages(e)}
                            />
                            <span>페이지</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
