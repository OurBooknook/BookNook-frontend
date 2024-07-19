import React, { useEffect, useState } from 'react'
import { FaBookmark } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import Wrapper from '../../components/Wrapper'
import AddBookModal from './components/AddBookModal'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import getSearchBook from '../../services/searchBook'
import { searchDocumentType } from '../../types/searchResultType'
import getFormattedDate from '../../utils/getFormattedDate'
import { LibraryDetailType } from '../../types/libraryType'
import { getLibraryDetail } from '../../services/library'
import UpdateBookModal from '../LibraryDetail/components/UpdateBookModal'

export default function BookDetail() {
    const { isbn } = useParams()
    const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false)
    const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false)
    const [searchDocument, setSearchDocument] = useState<searchDocumentType>()

    useEffect(() => {
        if (isbn !== undefined) {
            getSearchBook(isbn, 1).then((result) =>
                setSearchDocument(result.documents[0])
            )
        }
    }, [])

    const { data: libraryDetailData, isLoading } = useQuery<
        LibraryDetailType,
        AxiosError
    >({
        queryKey: ['bookDetail', isbn],
        queryFn: () => getLibraryDetail(isbn ?? ''),
    })

    const handleOpenModal = () => {
        // 새로운 책 담기
        if (isLoading || libraryDetailData === undefined) {
            setIsOpenAddModal(true)
        }
        // 담긴 책 수정하기
        else {
            setIsOpenUpdateModal(true)
        }
    }

    return (
        <>
            {isOpenAddModal && (
                <AddBookModal
                    setIsOpenModal={setIsOpenAddModal}
                    isbn={isbn ?? ''}
                />
            )}
            {isOpenUpdateModal && (
                <UpdateBookModal
                    setIsOpenModal={setIsOpenUpdateModal}
                    isbn={isbn ?? ''}
                />
            )}
            <Header />
            <Wrapper>
                <div className="flex gap-8">
                    {/* NOTE 예시 이미지 */}
                    <img
                        src={searchDocument?.thumbnail}
                        alt={`${searchDocument?.title} 도서 이미지`}
                        className="w-96 h-fit"
                    />
                    <div className="flex flex-col gap-12 w-full">
                        <div className="flex flex-col gap-3 text-xl">
                            <h1 className="text-4xl">
                                {searchDocument?.title}
                            </h1>
                            <div className="flex gap-4">
                                <ul className="flex gap-2">
                                    <span>저자: </span>
                                    {/* eslint-disable react/no-array-index-key */}
                                    {searchDocument?.authors.map(
                                        (author, index) => (
                                            <li key={index}>{author}</li>
                                        )
                                    )}
                                </ul>
                                <ul className="flex gap-2">
                                    <span>번역: </span>
                                    {/* eslint-disable react/no-array-index-key */}
                                    {searchDocument?.translators.map(
                                        (translator, index) => (
                                            <li key={index}>{translator}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="flex gap-4">
                                <p>{searchDocument?.publisher}</p>
                                <p>
                                    {getFormattedDate(
                                        searchDocument?.datetime ?? ''
                                    )}
                                </p>
                            </div>
                            <p>{searchDocument?.contents}</p>
                        </div>
                        <button
                            type="button"
                            className="flex gap-2 items-center w-fit px-6 py-3 bg-primary text-white text-xl rounded-md "
                            onClick={handleOpenModal}
                        >
                            <FaBookmark />
                            {isLoading || libraryDetailData === undefined
                                ? '내 서재에 담기'
                                : '담은 책 수정하기'}
                        </button>
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}
