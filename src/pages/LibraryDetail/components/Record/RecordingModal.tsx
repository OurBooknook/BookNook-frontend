import { FormControl, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

export default function RecordingModal({
    setIsOpenModal,
}: {
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const handleCloseModal = () => {
        setIsOpenModal((prev) => !prev)
    }

    return (
        <div className="absolute w-full h-full flex justify-center items-center bg-black/60 z-10">
            <div className="relative flex flex-col gap-4 p-8 w-[35rem] h-[36rem] bg-primaryVariant rounded-lg">
                <h1 className="text-2xl font-bold">기록하기</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <span className="w-20 text-gray">기록 태그</span>
                        <FormControl variant="standard" sx={{ minWidth: 200 }}>
                            <Select label="기록 태그" defaultValue="quote">
                                <MenuItem value="quote">인용</MenuItem>
                                <MenuItem value="summary">줄거리</MenuItem>
                                <MenuItem value="review">감상평</MenuItem>
                                <MenuItem value="question">의문점</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="w-20 text-gray">페이지 번호</span>
                        <TextField
                            type="number"
                            variant="standard"
                            sx={{ minWidth: 200 }}
                            placeholder="몇 페이지의 내용인가요?"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-gray">내용</span>
                        <textarea
                            placeholder="기록하고 싶은 내용을 입력하세요"
                            className="p-2 h-72 text-black bg-white rounded-md border-2 border-gray resize-none"
                        />
                    </div>
                </div>
                <div className="flex gap-4 self-end">
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
