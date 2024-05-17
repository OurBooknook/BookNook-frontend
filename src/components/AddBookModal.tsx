import React, { useState } from 'react'
import { FcReading, FcOk, FcLike } from 'react-icons/fc'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ReadingBook from './ReadingBook'
import WishBook from './WishBook'
import ReadBook from './ReadBook'
import { postLibrary } from '../services/library'
import { Status } from '../types/bookType'
import todayStr from '../utils/getTodayStr'

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

export default function AddBookModal({
    setIsOpenModal,
    isbn,
}: {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    isbn: string
}) {
    const [currentType, setCurrentType] = useState<Status>('READ')
    const [readInfo, setReadInfo] = useState<ReadInfoType>({
        startDate: todayStr(),
        endDate: todayStr(),
        starScore: 3,
    })
    const [readingInfo, setReadingInfo] = useState<ReadingInfoType>({
        startDate: todayStr(),
        page: 0,
    })
    const [wishInfo, setWishInfo] = useState<WishInfoType>({
        expectation: '',
    })

    const handleClickBookType = (type: Status) => {
        console.log(type)
        setCurrentType(type)
    }

    const queryClient = useQueryClient()
    const addLibraryMutation = useMutation({
        mutationFn: (newBook: Book) =>
            postLibrary({
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
            console.log(`${isbn} 책 담기 성공`)
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

    const handleAddLibrary = () => {
        if (isbn === '') {
            console.log('isbn 없음')
            return
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
                    alert(
                        `${readInfo.startDate} ${readInfo.endDate} ${readInfo.starScore} 읽은 책 정보를 모두 입력해주세요!`
                    )
                    break
                }

                addLibraryMutation.mutate({
                    status: currentType,
                    startDate: readInfo.startDate,
                    endDate: readInfo.endDate,
                    page: null,
                    rate: readInfo.starScore,
                    expectation: null,
                })
                break
            case 'READING':
                if (hasNullorEmpty(readingInfo.startDate, readingInfo.page)) {
                    alert('읽고 있는 책 정보를 모두 입력해주세요!')
                    break
                }
                addLibraryMutation.mutate({
                    status: currentType,
                    startDate: readingInfo.startDate,
                    endDate: null,
                    page: readingInfo.page,
                    rate: null,
                    expectation: null,
                })
                break
            case 'WISH':
                if (hasNullorEmpty(wishInfo.expectation)) {
                    alert('읽고 싶은 책 정보를 모두 입력해주세요!')
                    break
                }
                addLibraryMutation.mutate({
                    status: currentType,
                    startDate: null,
                    endDate: null,
                    page: null,
                    rate: null,
                    expectation: wishInfo.expectation,
                })
                break
            default:
                break
        }
    }

    const handleCloseModal = () => {
        setIsOpenModal((prev) => !prev)
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
                    <WishBook setWishInfo={setWishInfo} />
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
                        onClick={handleAddLibrary}
                    >
                        저장
                    </button>
                </div>
            </div>
        </div>
    )
}
