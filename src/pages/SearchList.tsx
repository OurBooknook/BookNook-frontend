import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import Wrapper from '../layouts/Wrapper'
import SearchItem from '../components/SearchItem'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import getSearchBook, { BookData } from '../services/searchBook'
import EmptyBookResult from '../components/EmptyBookResult'

const SIZE = 10
export default function SearchList() {
    const [searchResult, setSearchResult] = useState<BookData>()
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') ?? ''
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        if (query !== '') {
            getSearchBook(query, page).then((result) => setSearchResult(result))
        } else {
            setSearchResult({
                meta: { total_count: 0, pageable_count: 0, is_end: true },
                documents: [],
            })
        }
    }, [query, page])

    const countTotalPages = (cntItems: number) => {
        const totalPage = Math.floor(cntItems / SIZE) + 1
        return Math.min(totalPage, 100) // NOTE - 카카오 api 정책 상 page는 최대 100까지 가능
    }

    return (
        <>
            <Header />
            <Wrapper>
                <p className="text-lg mb-6">
                    전체{' '}
                    <span className="font-bold text-primary">
                        {searchResult && searchResult.meta.pageable_count}
                    </span>
                    건
                </p>
                <div className="flex flex-col gap-6">
                    {searchResult &&
                        (searchResult.meta.total_count === 0 ? (
                            <EmptyBookResult />
                        ) : (
                            searchResult.documents.map((document) => (
                                <SearchItem
                                    searchResult={document}
                                    key={document.isbn}
                                />
                            ))
                        ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Pagination
                        page={page}
                        count={
                            searchResult &&
                            countTotalPages(searchResult.meta.pageable_count)
                        }
                        onChange={(e, value) => setPage(value)}
                        size="large"
                    />
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}
