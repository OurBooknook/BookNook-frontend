import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import Logo from '../components/Logo'

export default function Header() {
    return (
        <header className="flex flex-row justify-between p-3 bg-primary">
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
                    />
                    <button
                        type="submit"
                        className="text-2xl text-primary"
                        aria-label="search button"
                    >
                        <IoIosSearch />
                    </button>
                </form>
            </div>
        </header>
    )
}
