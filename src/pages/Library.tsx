import React from 'react'
import { Pagination } from '@mui/material'
import { Link } from 'react-router-dom'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Wrapper from '../layouts/Wrapper'

export default function Library() {
    const dummyBook = [
        {
            id: 1,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
        {
            id: 2,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
        {
            id: 3,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
        {
            id: 4,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
        {
            id: 5,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
        {
            id: 6,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
        {
            id: 7,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
        {
            id: 8,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
        {
            id: 9,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
        {
            id: 10,
            thumbnail:
                'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189782900.jpg',
            isbn: '1235',
        },
    ]

    const handleClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {
        const tabId = e.currentTarget.id
        console.log(tabId)
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
                <div className="grid grid-cols-5 gap-x-8 gap-y-16 mb-20">
                    {dummyBook.map((book) => (
                        <Link to={`/library/${book.isbn}`} key={book.id}>
                            <img src={book.thumbnail} alt="book thumbnail" />
                        </Link>
                    ))}
                </div>
                <Pagination count={10} size="large" className="w-fit mx-auto" />
            </Wrapper>
            <Footer />
        </>
    )
}
