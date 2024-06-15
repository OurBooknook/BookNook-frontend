import { Chip } from '@mui/material'
import React from 'react'

interface readingKingType {
    rank: number
    nickname: string
    profileImg: string
    books: number
}

export default function ReadingKing({
    rank,
    nickname,
    profileImg,
    books,
}: readingKingType) {
    const medal: { [key: number]: string } = {
        1: '🥇',
        2: '🥈',
        3: '🥉',
    }

    return (
        <div>
            <div>
                <img src={profileImg} alt="독서왕 프로필 이미지" />
                <span>{medal[rank]}</span>
            </div>
            <h3>{nickname}</h3>
            <Chip label={`📚 ${books}권`} color="success" size="small" />
        </div>
    )
}
