import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import Wrapper from '../layouts/Wrapper'
import SearchItem from '../components/SearchItem'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import getSearchBook, { BookData } from '../services/searchBook'
import EmptyBookResult from '../components/EmptyBookResult'

export default function SearchList() {
    const [searchResult, setSearchResult] = useState<BookData>()
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') ?? ''

    useEffect(() => {
        if (query !== '') {
            getSearchBook(query).then((result) => setSearchResult(result))
        } else {
            setSearchResult({
                meta: { total_count: 0, pageable_count: 0, is_end: true },
                documents: [],
            })
        }
    }, [query])

    return (
        <>
            <Header />
            <Wrapper>
                <p className="text-lg mb-6">
                    전체{' '}
                    <span className="font-bold text-primary">
                        {searchResult && searchResult.meta.total_count}
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
                        count={searchResult && searchResult.meta.total_count}
                        size="large"
                    />
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}
