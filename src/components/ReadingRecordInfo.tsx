import React from 'react'

export default function ReadingRecordInfo({
    page,
    startDate,
}: {
    page: number
    startDate: string
}) {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-12 items-center text-xl">
                <span className="text-gray text-lg">독서량</span>
                <p className="flex gap-3 text-xl">{page}페이지</p>
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
                        <p>-</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
