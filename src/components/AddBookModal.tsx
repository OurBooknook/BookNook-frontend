import React, { useState } from 'react'
import { FcReading, FcOk, FcLike } from 'react-icons/fc'
import ReadingBook from './ReadingBook'
import WishBook from './WishBook'
import ReadBook from './ReadBook'

const bookTypes = [
    {
        id: 1,
        icon: <FcOk />,
        type: 'read',
        title: '읽은 책',
        description: '다 읽었어요!',
    },
    {
        id: 2,
        icon: <FcReading />,
        type: 'reading',
        title: '읽고 있는 책',
        description: '읽는 중이에요',
    },
    {
        id: 3,
        icon: <FcLike />,
        type: 'wish',
        title: '읽고 싶은 책',
        description: '앞으로 읽을 예정!',
    },
]

export default function AddBookModal({
    setIsOpenModal,
}: {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [currentType, setCurrentType] = useState('read')
    // const [bookRecord, setBookRecord] = useState({
    //     status: currentType.toUpperCase(),
    //     startDate: null,
    //     endDate: null,
    //     page: null,
    //     rate: null,
    //     expectation: null,
    // })

    const handleClickBookType = (type: string) => {
        console.log(type)
        setCurrentType(type)
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
                {currentType === 'read' ? (
                    <ReadBook />
                ) : currentType === 'reading' ? (
                    <ReadingBook />
                ) : (
                    <WishBook />
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
                    >
                        저장
                    </button>
                </div>
            </div>
        </div>
    )
}
