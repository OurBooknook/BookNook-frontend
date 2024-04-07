import React from 'react'
import getFormattedDate from '../utils/getFormattedDate'

interface SearchResultType {
    title: string
    authors: string[]
    translators: string[]
    publisher: string
    datetime: string
    contents: string
    isbn: string
    thumbnail: string
    // 아래는 사용 x
    url: string
    price: number
    sale_price: number
    status: string
}

export default function SearchItem({
    searchResult,
}: {
    searchResult: SearchResultType
}) {
    return (
        <div className="w-full flex gap-4 pb-4 border-b-[0.5px] border-lightGray">
            {/* SECTION - 이미지 */}
            <img
                src={searchResult.thumbnail}
                alt={`${searchResult.title} 도서 이미지`}
                className="w-28 h-40 "
            />
            {/* SECTION - 도서 정보 */}
            <div className="flex flex-col gap-1">
                <a href="#test" className="text-xl font-bold hover:underline">
                    {searchResult.title}
                </a>
                <div className="flex gap-2">
                    <ul className="flex gap-2">
                        <span>저자: </span>
                        {/* eslint-disable react/no-array-index-key */}
                        {searchResult.authors.map((author, index) => (
                            <li key={index}>{author} </li>
                        ))}
                    </ul>
                    <ul className="flex gap-2">
                        <span>, 번역: </span>
                        {/* eslint-disable react/no-array-index-key */}
                        {searchResult.translators.map((translator, index) => (
                            <li key={index}>{translator} </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <p>{searchResult.publisher}</p>
                    <p>{getFormattedDate(searchResult.datetime)}</p>
                </div>
                <p className="text-overflow">{searchResult.contents}</p>
            </div>
        </div>
    )
}
