import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import LibraryDetail from './pages/LibraryDetail/LibraryDetail'
import SearchList from './pages/Search/SearchList'
import BookDetail from './pages/BookDetail/BookDetail'
import Library from './pages/Library/Library'
import LoginPage from './pages/Login/LoginPage'
import Main from './pages/Main/Main'
import Statistics from './pages/Statistics/Statistics'

const queryClient = new QueryClient()
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/search" element={<SearchList />} />
                    <Route path="/search/:isbn" element={<BookDetail />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/library/:isbn" element={<LibraryDetail />} />
                    <Route path="/statistics" element={<Statistics />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
