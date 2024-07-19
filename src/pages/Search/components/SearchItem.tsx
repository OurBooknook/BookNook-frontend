import React from 'react'
import { Link } from 'react-router-dom'
import { getFormattedDate } from '../../../utils/getFormattedDate'
import getFormattedIsbn from '../../../utils/getFormattedIsbn'
import { searchDocumentType } from '../../../types/searchResultType'

export default function SearchItem({
    searchResult,
}: {
    searchResult: searchDocumentType
}) {
    return (
        <div className="w-full max-h-40 flex gap-4 pb-4 border-b-[0.5px] border-lightGray">
            {/* SECTION - 이미지 */}
            <img
                src={searchResult.thumbnail}
                alt={`${searchResult.title} 도서 이미지`}
                width="112"
                height="160"
            />
            {/* SECTION - 도서 정보 */}
            <div className="flex flex-col gap-1 text-sm">
                <Link
                    to={`/search/${getFormattedIsbn(searchResult.isbn)}`}
                    className="text-xl font-bold hover:underline"
                >
                    {searchResult.title}
                </Link>
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
