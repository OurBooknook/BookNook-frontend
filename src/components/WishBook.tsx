import React from 'react'
import { WishInfoType } from '../pages/BookDetail/components/AddBookModal'

export default function WishBook({
    wishInfo,
    setWishInfo,
}: {
    wishInfo: WishInfoType
    setWishInfo: React.Dispatch<React.SetStateAction<WishInfoType>>
}) {
    const handleChageExpectation = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setWishInfo((prev) => ({ ...prev, expectation: e.target.value }))
    }
    return (
        <div className="flex flex-col gap-2 mb-6">
            <span className="text-gray">기대평</span>
            <textarea
                className="resize-none p-4 border-gray border-[0.5px] rounded-md"
                rows={7}
                placeholder="책을 알게 된 경로, 기대되는 점 등을 기록해보세요"
                value={wishInfo.expectation ?? ''}
                onChange={handleChageExpectation}
            />
        </div>
    )
}
