import { Avatar, Chip } from '@mui/material'
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
        <div className="flex flex-col justify-center items-center py-6 bg-primaryVariant rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="relative mb-2">
                <Avatar
                    alt={`${nickname}의 프로필 사진`}
                    src={profileImg}
                    sx={{ width: 80, height: 80 }}
                />
                <span className="absolute -top-2 -right-2 text-4xl">
                    {medal[rank]}
                </span>
            </div>
            <h3 className="text-lg font-bold mb-1">{nickname}</h3>
            <Chip
                label={`📚 ${books}권`}
                color="success"
                size="small"
                sx={{
                    fontSize: 14,
                    paddingX: 0.5,
                    paddingY: 1,
                    fontWeight: 'bold',
                }}
            />
        </div>
    )
}
