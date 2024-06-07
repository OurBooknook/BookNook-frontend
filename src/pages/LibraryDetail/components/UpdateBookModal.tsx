/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { FcReading, FcOk, FcLike } from 'react-icons/fc'
import ReadingBook from '../../../components/ReadingBook'
import WishBook from '../../../components/WishBook'
import ReadBook from '../../../components/ReadBook'
import { getLibraryDetail, putLibrary } from '../../../services/library'
import { Status } from '../../../types/bookType'
import todayStr from '../../../utils/getTodayStr'

interface bookType {
    id: number
    icon: React.ReactNode
    type: Status
    title: string
    description: string
}
const bookTypes: bookType[] = [
    {
        id: 1,
        icon: <FcOk />,
        type: 'READ',
        title: '읽은 책',
        description: '다 읽었어요!',
    },
    {
        id: 2,
        icon: <FcReading />,
        type: 'READING',
        title: '읽고 있는 책',
        description: '읽는 중이에요',
    },
    {
        id: 3,
        icon: <FcLike />,
        type: 'WISH',
        title: '읽고 싶은 책',
        description: '앞으로 읽을 예정!',
    },
]

export interface ReadInfoType {
    startDate: string | null
    endDate: string | null
    starScore: number | null
}
export interface ReadingInfoType {
    startDate: string | null
    page: number | null
}
export interface WishInfoType {
    expectation: string | null
}

interface Book {
    status: Status
    startDate: string | null
    endDate: string | null
    page: number | null
    rate: number | null
    expectation: string | null
}

export default function UpdateBookModal({
    setIsOpenModal,
    isbn,
}: {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    isbn: string
}) {
    const { data: libraryDetailData, isLoading } = useQuery({
        queryKey: ['libraryDetail', isbn],
        queryFn: () => getLibraryDetail(isbn),
    })
    const [currentType, setCurrentType] = useState<Status>('READ')
    const [readInfo, setReadInfo] = useState<ReadInfoType>({
        startDate: libraryDetailData?.startDate ?? todayStr(),
        endDate: libraryDetailData?.endDate ?? todayStr(),
        starScore: libraryDetailData?.rate ?? 3,
    })
    const [readingInfo, setReadingInfo] = useState<ReadingInfoType>({
        startDate: libraryDetailData?.startDate ?? todayStr(),
        page: libraryDetailData?.page ?? 0,
    })
    const [wishInfo, setWishInfo] = useState<WishInfoType>({
        expectation: libraryDetailData?.expectation ?? '',
    })

    useEffect(() => {
        if (libraryDetailData) {
            setReadInfo({
                startDate: libraryDetailData.startDate ?? todayStr(),
                endDate: libraryDetailData.endDate ?? todayStr(),
                starScore: libraryDetailData.rate ?? 5,
            })
            setReadingInfo({
                startDate: libraryDetailData.startDate ?? '2024-06-05',
                page: libraryDetailData.page ?? 0,
            })
            setWishInfo({
                expectation: libraryDetailData.expectation ?? '기대평',
            })
        }
    }, [libraryDetailData])

    const handleClickBookType = (type: Status) => {
        console.log(type)
        setCurrentType(type)
    }

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const updateLibraryMutation = useMutation({
        // 담기 요청이 Put인지 post인지 적용
        mutationFn: (newBook: Book) =>
            putLibrary({
                isbn,
                status: newBook.status,
                startDate: newBook.startDate,
                finishDate: newBook.endDate,
                readingPages: newBook.page,
                rate: newBook.rate,
                expectation: newBook.expectation,
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['library'] })
            alert('책 수정 성공!')
            setIsOpenModal((prev) => !prev)
            navigate('/library')
        },
        onError: (error) => {
            console.log(error)
        },
    })

    const hasNullorEmpty = (...args: (string | number | null)[]): boolean => {
        const hasNull = args.some((arg) => arg === null)
        const hasEmpty = args.some(
            (arg) => arg !== null && arg.toString().length === 0
        )

        return hasNull || hasEmpty
    }

    const handleUpdateLibrary = () => {
        if (isbn === '') {
            console.log('isbn 없음')
            return
        }

        const newBook = {
            status: currentType,
            startDate: null as string | null,
            endDate: null as string | null,
            page: null as number | null,
            rate: null as number | null,
            expectation: null as string | null,
        }

        switch (currentType) {
            case 'READ':
                if (
                    hasNullorEmpty(
                        readInfo.startDate,
                        readInfo.endDate,
                        readInfo.starScore
                    )
                ) {
                    alert('읽은 책 정보를 모두 입력해주세요!')
                    return
                }
                newBook.startDate = readInfo.startDate
                newBook.endDate = readInfo.endDate
                newBook.rate = readInfo.starScore
                break

            case 'READING':
                if (hasNullorEmpty(readingInfo.startDate, readingInfo.page)) {
                    alert('읽고 있는 책 정보를 모두 입력해주세요!')
                    break
                }
                newBook.startDate = readingInfo.startDate
                newBook.page = readingInfo.page
                break

            case 'WISH':
                if (hasNullorEmpty(wishInfo.expectation)) {
                    alert('읽고 싶은 책 정보를 모두 입력해주세요!')
                    break
                }
                newBook.expectation = wishInfo.expectation
                break

            default:
                return
        }
        updateLibraryMutation.mutate(newBook)
    }

    const handleCloseModal = () => {
        setIsOpenModal((prev) => !prev)
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="absolute w-full h-full flex justify-center items-center bg-black/60 z-10">
            <div className="relative flex flex-col p-8 w-[35rem] h-[36rem] bg-primaryVariant rounded-lg">
                <h1 className="mb-4 text-2xl font-bold">책 담기</h1>
                <div className="flex justify-between mb-6">
                    {bookTypes.map((bookType) => (
                        <button
                            type="button"
                            key={bookType.id}
                            className={`flex flex-col justify-center items-center w-40 py-4 rounded-lg ${bookType.type === currentType ? 'bg-accent' : 'bg-lightGray'}`}
                            onClick={() => handleClickBookType(bookType.type)}
                        >
                            <p className="text-3xl">{bookType.icon}</p>
                            <h3 className="text-xl font-bold">
                                {bookType.title}
                            </h3>
                            <p className="text-md font-semibold">
                                {bookType.description}
                            </p>
                        </button>
                    ))}
                </div>
                {/* eslint-disable no-nested-ternary */}
                {currentType === 'READ' ? (
                    <ReadBook readInfo={readInfo} setReadInfo={setReadInfo} />
                ) : currentType === 'READING' ? (
                    <ReadingBook
                        readingInfo={readingInfo}
                        setReadingInfo={setReadingInfo}
                    />
                ) : (
                    <WishBook wishInfo={wishInfo} setWishInfo={setWishInfo} />
                )}
                <div className="absolute bottom-8 flex gap-4 self-end">
                    <button
                        type="button"
                        className="text-lg font-bold px-4 py-2 bg-lightGray text-black rounded-md"
                        onClick={handleCloseModal}
                    >
                        닫기
                    </button>
                    <button
                        type="button"
                        className="text-lg font-bold px-4 py-2 bg-primary text-white rounded-md"
                        onClick={handleUpdateLibrary}
                    >
                        저장
                    </button>
                </div>
            </div>
        </div>
    )
}
