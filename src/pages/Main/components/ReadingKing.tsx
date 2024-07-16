import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import readingKingData from '../../../data/readingKing.json'
import ReadingKingItem from './ReadingKingItem'

export default function ReadingKing() {
    return (
        <div className="flex flex-col gap-8 mx-auto">
            <div className="grid grid-cols-3 gap-4">
                {readingKingData?.readingKing.map(
                    (data) =>
                        data.rank <= 3 && (
                            <ReadingKingItem
                                key={data.rank}
                                rank={data.rank}
                                profileImg={data.profileImg}
                                nickname={data.nickname}
                                books={data.books}
                            />
                        )
                )}
            </div>
            <Table aria-label="독서왕 순위(4~10위)">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" width={70}>
                            순위
                        </TableCell>
                        <TableCell align="left">이름</TableCell>
                        <TableCell align="left">권 수</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {readingKingData?.readingKing.map(
                        (data) =>
                            data.rank > 3 && (
                                <TableRow key={data.rank}>
                                    <TableCell align="center">
                                        {data.rank}
                                    </TableCell>
                                    <TableCell>{data.nickname}</TableCell>
                                    <TableCell>{data.books}</TableCell>
                                </TableRow>
                            )
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
