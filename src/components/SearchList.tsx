import React from 'react'
import { Pagination } from '@mui/material'
import searchResult from '../data/SearchResult.json'
import SearchItem from './SearchItem'
import Wrapper from '../layouts/Wrapper'

// interface BookType {
//     title: string
//     contents: string
//     isbn: string
//     dateTime: string
//     authors: string[]
//     publisher: string
//     translators: string[]
//     thumbnail: string
// }
// interface SearchResultType {
//     documents: BookType[]
//     meta: {
//         totalCount: number
//         pageableCount: number
//         isEnd: boolean
//     }
// }
export default function SearchList() {
    return (
        <Wrapper>
            <p className="text-lg mb-6">
                전체{' '}
                <span className="font-bold text-primary">
                    {searchResult.meta.total_count}
                </span>
                건
            </p>
            <div className="flex flex-col gap-6">
                {searchResult.documents.map((document) => (
                    <SearchItem searchResult={document} key={document.isbn} />
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <Pagination
                    count={searchResult.meta.total_count}
                    size="large"
                />
            </div>
        </Wrapper>
    )
}
