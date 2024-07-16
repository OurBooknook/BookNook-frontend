import React, { useState } from 'react'
import ReadingKing from './ReadingKing'
import Prepare from '../../../components/Prepare'

export default function ReadingKingContainer() {
    const [isDemo, setIsDemo] = useState<boolean>(false)

    return (
        <div>
            <h2 className="text-2xl font-bold">👑 이달의 독서왕</h2>
            <p className="mb-6">
                이달의 독서왕은 사용자 중 가장 많은 책을 읽은 top 10 입니다
                (읽은 책 기준)
            </p>
            {isDemo ? <ReadingKing /> : <Prepare setIsDemo={setIsDemo} />}
        </div>
    )
}
