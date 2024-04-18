import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Wrapper from '../layouts/Wrapper'
import { getLibrary, LibraryType } from '../services/library'
import { Status, statusEn } from '../types/bookType'
import getFormattedIsbn from '../utils/getFormattedIsbn'
import getSearchBook from '../services/searchBook'

interface LibraryListType {
    isbn: string
    title: string
    authors: string[]
    thumbnail: string
}

export default function Library() {
    const [library, setLibrary] = useState<LibraryListType[]>([])
    const [status, setStatus] = useState<Status>('read')
    const [page, setPage] = useState<number>(1)
    const { data: isbns } = useQuery<LibraryType, Error>({
        queryKey: ['library', status, page],
        queryFn: () => getLibrary(status, page),
        staleTime: 1000 * 60,
    })

    useEffect(() => {
        const libraryList: LibraryListType[] = []

        // FIXME - 유지보수, 여러 가지 기능이 한번에 들어가있음
        if (isbns?.isbnList && isbns.isbnList.length > 0) {
            isbns.isbnList.forEach((isbn) => {
                const formattedIsbn = getFormattedIsbn(isbn)

                getSearchBook(formattedIsbn).then((result) => {
                    const { title, authors, thumbnail } = result.documents[0]
                    libraryList.push({ isbn, title, authors, thumbnail })
                    console.log(libraryList)
                    setLibrary([...libraryList])
                })
            })
        } else {
            setLibrary([])
        }
    }, [isbns])

    const isStatus = (value: string): value is Status => {
        return Object.values(statusEn).includes(value as Status)
    }

    const handleClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {
        const tabId = e.currentTarget.id
        if (isStatus(tabId)) {
            setStatus(tabId)
        }
    }
    return (
        <>
            <Header />
            <Wrapper>
                <ul className="flex gap-12 mb-6 text-2xl font-bold">
                    <li>
                        <button
                            type="button"
                            className="btn-list-tab"
                            id="read"
                            onClick={(e) => handleClickTab(e)}
                        >
                            읽은 책
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="btn-list-tab"
                            id="reading"
                            onClick={(e) => handleClickTab(e)}
                        >
                            읽고 있는 책
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="btn-list-tab"
                            id="wish"
                            onClick={(e) => handleClickTab(e)}
                        >
                            읽고 싶은 책
                        </button>
                    </li>
                </ul>
                {library.length > 0 ? (
                    <div className="grid grid-cols-5 gap-x-8 gap-y-16 mb-20">
                        {library.map((book) => (
                            <div className="flex flex-col gap-3">
                                <Link
                                    to={`/library/${book.isbn}`}
                                    key={book.isbn}
                                >
                                    <img
                                        src={book.thumbnail}
                                        alt="book thumbnail"
                                        className="w-full"
                                    />
                                </Link>
                                <div className="flex flex-col gap-1 w-full overflow-hidden">
                                    <h3 className="text-2xl font-bold">
                                        {book.title}
                                    </h3>
                                    <ul className="flex gap-2">
                                        {/* eslint-disable react/no-array-index-key */}
                                        {book.authors.map((author, index) => (
                                            <li key={index}>{author}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center py-20">
                        <p className="">담긴 책이 없습니다</p>
                    </div>
                )}

                <Pagination
                    count={isbns?.totalPages}
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    size="large"
                    className="w-fit mx-auto"
                />
            </Wrapper>
            <Footer />
        </>
    )
}
