import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LibraryDetail from './pages/LibraryDetail'
import SearchList from './pages/SearchList'
import BookDetail from './pages/BookDetail'
import Library from './pages/Library'
import LoginPage from './pages/LoginPage'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    {/* <Route path="/" element={<Main />} /> */}
                    <Route path="/search" element={<SearchList />} />
                    <Route path="/search/:isbn" element={<BookDetail />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/library/:isbn" element={<LibraryDetail />} />
                    {/* <Route path="/statistics" element={<Statistics />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
