import React from 'react'

export default function ReadingBook() {
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
                            className="font-bold"
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
                                min="0"
                                className="font-bold text-end"
                            />
                            <span>페이지</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
