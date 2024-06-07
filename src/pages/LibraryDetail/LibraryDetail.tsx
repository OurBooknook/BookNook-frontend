import React, { useEffect, useState } from 'react'
import { Chip, Pagination } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Wrapper from '../../components/Wrapper'
import SearchItem from '../Search/components/SearchItem'
import ReadRecordInfo from './components/Record/ReadRecordInfo'
import Record from './components/Record/Record'
import ReadingRecordInfo from './components/Record/ReadingRecordInfo'
import WishRecordInfo from './components/Record/WishRecordInfo'
import { statusKo } from '../../types/bookType'
import { searchDocumentType } from '../../types/searchResultType'
import getSearchBook from '../../services/searchBook'
import {
    deleteLibrary,
    getLibraryDetail,
    getRecordList,
} from '../../services/library'
import { LibraryDetailType, RecordListType } from '../../types/libraryType'
import RecordingModal from './components/Record/RecordingModal'
import UpdateBookModal from './components/UpdateBookModal'

export default function LibraryDetail() {
    const { isbn } = useParams()
    const [searchDocument, setSearchDocument] = useState<searchDocumentType>()
    const [recordPage, setRecordPage] = useState<number>(1)
    const [isOpenRecordingModal, setIsOpenRecordingModal] =
        useState<boolean>(false)
    const [isOpenUpdateBookModal, setIsOpenUpdateBookModal] =
        useState<boolean>(false)

    useEffect(() => {
        if (isbn !== undefined) {
            getSearchBook(isbn, 1).then((result) =>
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

    const { data: recordData } = useQuery<RecordListType, AxiosError>({
        queryKey: ['records'],
        queryFn: () =>
            getRecordList({ isbn: isbn || '', pageNumber: recordPage }),
    })

    useEffect(() => {
        setRecordPage(recordData?.currentPage ?? 1)
        console.log(libraryDetailData?.status)
    }, [recordData])

    const navigate = useNavigate()

    const queryClient = useQueryClient()
    const deleteLibraryMutation = useMutation({
        mutationFn: () => deleteLibrary(isbn ?? ''),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['library'],
            })

            alert(
                '해당 도서가 서재에서 삭제되었습니다! 3초 후 서재로 이동합니다!'
            )
            setTimeout(() => navigate('/library'), 3000)
        },
        onError: (error) => {
            console.log(error)
        },
    })

    const handleDeleteLibrary = () => {
        deleteLibraryMutation.mutate()
    }

    return (
        <div>
            {isOpenRecordingModal && (
                <RecordingModal setIsOpenModal={setIsOpenRecordingModal} />
            )}
            {isOpenUpdateBookModal && (
                <UpdateBookModal
                    setIsOpenModal={setIsOpenUpdateBookModal}
                    isbn={isbn ?? ''}
                />
            )}
            <Header />
            <Wrapper>
                <div className="flex justify-between mb-6">
                    <Chip
                        label={
                            libraryDetailData?.status !== undefined
                                ? statusKo[libraryDetailData.status]
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
                                onClick={() => setIsOpenUpdateBookModal(true)}
                            >
                                수정
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="text-gray underline"
                                onClick={handleDeleteLibrary}
                            >
                                삭제
                            </button>
                        </li>
                    </ul>
                </div>
                {searchDocument && <SearchItem searchResult={searchDocument} />}
                {libraryDetailData?.status.toUpperCase() === 'READ' && (
                    <ReadRecordInfo
                        rate={libraryDetailData.rate ?? 0}
                        startDate={libraryDetailData.startDate ?? '없음'}
                        endDate={libraryDetailData.endDate ?? '없음'}
                    />
                )}
                {libraryDetailData?.status.toUpperCase() === 'READING' && (
                    <ReadingRecordInfo
                        page={libraryDetailData.page ?? 0}
                        startDate={libraryDetailData.startDate ?? '없음'}
                    />
                )}
                {libraryDetailData?.status.toUpperCase() === 'WISH' && (
                    <WishRecordInfo
                        expectation={libraryDetailData.expectation ?? '없음'}
                    />
                )}

                <div className="mt-20">
                    <div className="flex justify-between">
                        <p className="text-lg">
                            총{' '}
                            <span className="font-bold text-primary">
                                {recordData?.recordList?.length ?? 0}
                            </span>
                            개의 기록이 있습니다.
                        </p>
                        <button
                            type="button"
                            className="underline"
                            onClick={() => setIsOpenRecordingModal(true)}
                        >
                            기록 추가하기
                        </button>
                    </div>
                    <div>
                        {recordData?.recordList?.map((record) => (
                            <Record value={record} key={record.recordId} />
                        ))}
                    </div>
                    <Pagination
                        count={recordData?.totalPages}
                        page={recordPage}
                        onChange={(e, value) => setRecordPage(value)}
                        size="large"
                        className="w-fit mx-auto"
                    />
                </div>
            </Wrapper>
            <Footer />
        </div>
    )
}
