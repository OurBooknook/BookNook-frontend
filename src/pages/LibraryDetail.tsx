import React from 'react'
import { Chip } from '@mui/material'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Wrapper from '../layouts/Wrapper'
import SearchItem from '../components/SearchItem'
import searchResult from '../data/SearchResult.json'
import ReadRecordInfo from '../components/ReadRecordInfo'
import Record from '../components/Record'
import ReadingRecordInfo from '../components/ReadingRecordInfo'
import WishRecordInfo from '../components/WishRecordInfo'
import { LibraryDetailType } from '../types/libraryType'
import { statusKo } from '../types/bookType'

export default function LibraryDetail() {
    const dummyData: LibraryDetailType = {
        status: 'wish',
        rate: 3,
        startDate: '2024-03-01',
        endDate: '2024-03-05',
        page: 100,
        expectation: '짱 기대중',
        recordList: [
            {
                recordId: 1,
                tag: 'review',
                date: '2024-03-01T09:00:00',
                content: '오늘은 어쩌구를 읽었다',
                page: 54,
            },
            {
                recordId: 2,
                tag: 'review',
                date: '2024-03-01T09:00:00',
                content: '오늘은 어쩌구를 읽었다',
                page: 54,
            },
        ],
    }
    return (
        <div>
            <Header />
            <Wrapper>
                <div className="flex justify-between mb-6">
                    <Chip
                        label={statusKo[dummyData.status]}
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
                <SearchItem searchResult={searchResult.documents[0]} />
                {dummyData.status === 'read' && (
                    <ReadRecordInfo
                        rate={dummyData.rate ?? 0}
                        startDate={dummyData.startDate ?? '없음'}
                        endDate={dummyData.endDate ?? '없음'}
                    />
                )}
                {dummyData.status === 'reading' && (
                    <ReadingRecordInfo
                        page={dummyData.page ?? 0}
                        startDate={dummyData.startDate ?? '없음'}
                    />
                )}
                {dummyData.status === 'wish' && (
                    <WishRecordInfo
                        expectation={dummyData.expectation ?? '없음'}
                    />
                )}

                <div className="mt-20">
                    <p className="text-lg">
                        총{' '}
                        <span className="font-bold text-primary">
                            {dummyData.recordList.length}
                        </span>
                        개의 기록이 있습니다.
                    </p>
                    <div>
                        {dummyData.recordList.map((record) => (
                            <Record value={record} key={record.recordId} />
                        ))}
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </div>
    )
}
