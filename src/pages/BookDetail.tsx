import React, { useEffect, useState } from 'react'
import { FaBookmark } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import Wrapper from '../layouts/Wrapper'
import AddBookModal from '../components/AddBookModal'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import getSearchBook from '../services/searchBook'
import { searchDocumentType } from '../types/searchResultType'
import getFormattedDate from '../utils/getFormattedDate'

export default function BookDetail() {
    const { isbn } = useParams()
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [searchDocument, setSearchDocument] = useState<searchDocumentType>()

    useEffect(() => {
        if (isbn !== undefined) {
            getSearchBook(isbn, 1).then((result) =>
                setSearchDocument(result.documents[0])
            )
        }
    }, [])

    return (
        <>
            {isOpenModal && (
                <AddBookModal
                    setIsOpenModal={setIsOpenModal}
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
                        <div className="flex flex-col gap-2 w-fit">
                            <p className="text-xl">
                                담은 사람{' '}
                                <span className="font-bold text-primary">
                                    n
                                </span>
                                명
                            </p>
                            <button
                                type="button"
                                className="flex gap-2 items-center px-6 py-3 bg-primary text-white text-xl rounded-md "
                                onClick={() => setIsOpenModal(true)}
                            >
                                <FaBookmark />내 서재에 담기
                            </button>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}
