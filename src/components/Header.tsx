import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'
import Logo from './Logo'

export default function Header() {
    const [search, setSearch] = useState<string>('')
    const navigate = useNavigate()

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (search.length !== 0) {
            e.preventDefault()
            navigate(`/search?query=${search}`)
        } else {
            alert('검색어를 입력하세요!')
        }
    }

    return (
        <header className="flex justify-center w-full bg-primary">
            <div className="flex flex-row justify-between p-3 w-[70rem]">
                <Link to="/">
                    <Logo />
                </Link>
                <div className="flex flex-row justify-between gap-4">
                    <ul className="flex flex-row items-center gap-4 text-lg text-white">
                        <li>
                            <Link to="/library">서재</Link>
                        </li>
                        <li>
                            <Link to="/statistics">통계</Link>
                        </li>
                    </ul>
                    <form className="flex items-center px-4 py-0 rounded-3xl bg-white">
                        <input
                            type="search"
                            className="bg-transparent text-md outline-none"
                            value={search}
                            placeholder="도서를 검색하세요"
                            onChange={handleChangeSearch}
                        />
                        <button
                            type="submit"
                            className="text-2xl text-primary"
                            aria-label="search button"
                            onClick={handleClickSearch}
                        >
                            <IoIosSearch />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}
