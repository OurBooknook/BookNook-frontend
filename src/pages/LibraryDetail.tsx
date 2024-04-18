import React, { useEffect, useState } from 'react'
import { Chip } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Wrapper from '../layouts/Wrapper'
import SearchItem from '../components/SearchItem'
import ReadRecordInfo from '../components/ReadRecordInfo'
import Record from '../components/Record'
import ReadingRecordInfo from '../components/ReadingRecordInfo'
import WishRecordInfo from '../components/WishRecordInfo'
import { statusKo } from '../types/bookType'
import { searchDocumentType } from '../types/searchResultType'
import getSearchBook from '../services/searchBook'
import { getLibraryDetail } from '../services/library'
import { LibraryDetailType } from '../types/libraryType'

export default function LibraryDetail() {
    const { isbn } = useParams()
    const [searchDocument, setSearchDocument] = useState<searchDocumentType>()

    useEffect(() => {
        if (isbn !== undefined) {
            getSearchBook(isbn).then((result) =>
                setSearchDocument(result.documents[0])
            )
        }
    }, [])

    const { data: libraryDetailData } = useQuery<LibraryDetailType, AxiosError>(
        {
            queryKey: ['bookDetail'],
            queryFn: () => getLibraryDetail(isbn ?? ''),
        }
    )

    return (
        <div>
            <Header />
            <Wrapper>
                <div className="flex justify-between mb-6">
                    <Chip
                        label={
                            libraryDetailData !== undefined
                                ? statusKo[libraryDetailData?.status]
                                : '없음'
                        }
                        color="success"
                        sx={{
                            fontSize: '1.2rem',
                            height: '2.1rem',
                            paddingX: '0.2rem',
                        }}
                    />
                    <ul className="flex gap-4">
                        <li>
                            <button
                                type="button"
                                className="text-gray underline"
                            >
                                수정
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="text-gray underline"
                            >
                                삭제
                            </button>
                        </li>
                    </ul>
                </div>
                {searchDocument && <SearchItem searchResult={searchDocument} />}
                {libraryDetailData?.status === 'read' && (
                    <ReadRecordInfo
                        rate={libraryDetailData.rate ?? 0}
                        startDate={libraryDetailData.startDate ?? '없음'}
                        endDate={libraryDetailData.endDate ?? '없음'}
                    />
                )}
                {libraryDetailData?.status === 'reading' && (
                    <ReadingRecordInfo
                        page={libraryDetailData.page ?? 0}
                        startDate={libraryDetailData.startDate ?? '없음'}
                    />
                )}
                {libraryDetailData?.status === 'wish' && (
                    <WishRecordInfo
                        expectation={libraryDetailData.expectation ?? '없음'}
                    />
                )}

                <div className="mt-20">
                    <p className="text-lg">
                        총{' '}
                        <span className="font-bold text-primary">
                            {libraryDetailData?.recordList.length ?? 0}
                        </span>
                        개의 기록이 있습니다.
                    </p>
                    <div>
                        {libraryDetailData?.recordList.map((record) => (
                            <Record value={record} key={record.recordId} />
                        ))}
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </div>
    )
}
