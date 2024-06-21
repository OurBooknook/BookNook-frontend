import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { AxiosError } from 'axios'
import getBookRanking, { BookRankingType } from '../../../services/ranking'
import getSearchBook, { BookData } from '../../../services/searchBook'
import getFormattedIsbn from '../../../utils/getFormattedIsbn'

export default function BookRanking() {
    const [rankingDetails, setRankingDetails] = useState<BookData[]>([])
    const { data: bookRankingData } = useQuery<BookRankingType, AxiosError>({
        queryKey: ['bookRanking'],
        queryFn: getBookRanking,
    })

    useEffect(() => {
        const getRankingDetails = async () => {
            if (bookRankingData) {
                const details = await Promise.all(
                    bookRankingData.bookRanking.map(async (book) => {
                        const detail = await getSearchBook(book.isbn, 1)
                        return detail
                    })
                )
                setRankingDetails(details)
            }
        }

        getRankingDetails()
    }, [bookRankingData])

    return (
        <div>
            <h2 className="text-2xl font-bold">📙 이달의 도서</h2>
            <p className="mb-6">BookNook Top5 도서입니다(읽은 책 기준)</p>
            <div className="flex flex-col gap-4">
                {/* eslint-disable react/no-array-index-key */}
                {rankingDetails.map((detail, index) => (
                    <div key={index} className="flex gap-2">
                        <img
                            src={detail.documents[0].thumbnail}
                            alt={`${detail.documents[0].title} 도서 이미지`}
                        />
                        <div className="flex flex-col gap-1">
                            <Link
                                to={`/search/${getFormattedIsbn(detail.documents[0].isbn)}`}
                                className="text-lg font-bold hover:underline"
                            >
                                🏅{detail.documents[0].title}
                            </Link>
                            <p className="text-sm">
                                {detail.documents[0].authors}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
