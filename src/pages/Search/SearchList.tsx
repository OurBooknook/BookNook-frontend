import React, { useState } from 'react'
import { Pagination } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Wrapper from '../../components/Wrapper'
import SearchItem from './components/SearchItem'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import getSearchBook from '../../services/searchBook'
import EmptyBookResult from '../../components/EmptyBookResult'

const SIZE = 10
export default function SearchList() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') ?? ''
    const [page, setPage] = useState<number>(1)

    const { data: searchList } = useQuery({
        queryKey: ['search', query, page],
        queryFn: () => getSearchBook(query, page),
        staleTime: 5 * 1000 * 60,
        gcTime: 10 * 1000 * 60,
    })

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
                        {searchList && searchList.meta.pageable_count}
                    </span>
                    건
                </p>
                <div className="flex flex-col gap-6">
                    {searchList &&
                        (searchList.meta.total_count === 0 ? (
                            <EmptyBookResult />
                        ) : (
                            searchList.documents.map((document) => (
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
                            searchList &&
                            countTotalPages(searchList.meta.pageable_count)
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
