import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import Header from '../../components/Header'
// import Wrapper from '../../components/Wrapper'
import Footer from '../../components/Footer'
import readingKingData from '../../data/readingKing.json'
import ReadingKing from './components/ReadingKing'
import BookRanking from './components/BookRanking'

export default function Main() {
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center w-full bg-primary">
                <div className="flex justify-between w-[70rem] mx-auto">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-extrabold mb-5 text-white">
                            책과 함께하는 여정, <br />
                            당신의 서재를 채워보세요
                        </h1>
                        <p className="mb-4 text-white">
                            책을 서재에 담고, <br />
                            독서를 하며 기억하고 싶은 내용을 기록하세요
                        </p>
                        <button
                            type="button"
                            className="text-white border-white rounded-3xl border-[1px] py-2 px-3 w-fit"
                        >
                            이달의 독서왕 확인하기
                        </button>
                    </div>
                    <img
                        src="reading.png"
                        alt="독서 이미지"
                        className="w-[35rem] h-[35rem]"
                    />
                </div>
                <div className="w-full bg-primaryVariant pt-32">
                    <div className="flex gap-12 w-[70rem] mx-auto">
                        <div>
                            <h2 className="text-2xl font-bold">
                                이달의 독서왕 👑
                            </h2>
                            <p className="mb-6">
                                이달의 독서왕은 사용자 중 가장 많은 책을 읽은
                                top 10 입니다 (읽은 책 기준)
                            </p>
                            <div className="flex flex-col gap-8 mx-auto">
                                <div className="grid grid-cols-3 gap-4">
                                    {readingKingData?.readingKing.map(
                                        (data) =>
                                            data.rank <= 3 && (
                                                <ReadingKing
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
                                            <TableCell
                                                align="center"
                                                width={70}
                                            >
                                                순위
                                            </TableCell>
                                            <TableCell align="left">
                                                이름
                                            </TableCell>
                                            <TableCell align="left">
                                                권 수
                                            </TableCell>
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
                                                        <TableCell>
                                                            {data.nickname}
                                                        </TableCell>
                                                        <TableCell>
                                                            {data.books}
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                        <BookRanking />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
