import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import Logo from '../components/Logo'

export default function Header() {
    const [search, setSearch] = useState<string>('')
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleClickSearch = () => {
        console.log(search)
    }

    return (
        <header className="flex justify-center w-full bg-primary">
            <div className="flex flex-row justify-between p-3 w-[90rem]">
                <Logo />
                <div className="flex flex-row justify-between gap-4">
                    <ul className="flex flex-row items-center gap-4 text-lg text-white">
                        <li>서재</li>
                        <li>통계</li>
                    </ul>
                    <form className="flex items-center px-4 py-0 rounded-3xl bg-white">
                        <input
                            type="search"
                            className="bg-transparent text-md outline-none"
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
