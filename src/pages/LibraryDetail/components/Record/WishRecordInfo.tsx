import React from 'react'

export default function WishRecordInfo({
    expectation,
}: {
    expectation: string
}) {
    return (
        <div className="flex flex-col gap-6 mt-4">
            <div className="flex flex-col gap-2 text-xl">
                <span className="text-gray text-lg">기대평</span>
                <div className="grid grid-cols-2 px-6 py-4 bg-lightGray rounded-md">
                    <p>{expectation}</p>
                </div>
            </div>
        </div>
    )
}
