import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import Wrapper from '../layouts/Wrapper'

export default function BookDetail() {
    return (
        <Wrapper>
            <div className="flex gap-8">
                {/* NOTE 예시 이미지 */}
                <img
                    src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788998441012.jpg"
                    alt="도서 이미지"
                    className="w-96 h-fit"
                />
                <div className="relative w-full">
                    <div className="flex flex-col gap-3 text-xl">
                        <h1 className="text-4xl">
                            도서 제목이 이렇게나 길어지면 어떻게 보여질까요?
                            한번 확인해보겠습니다
                        </h1>
                        <div className="flex gap-4">
                            <ul className="flex gap-2">
                                <span>저자: </span>
                            </ul>
                            <ul className="flex gap-2">
                                <span>번역: </span>
                            </ul>
                        </div>
                        <div className="flex gap-4">
                            <p>출판사</p>
                            <p>출판 날짜</p>
                        </div>
                        <p>
                            도서 설명이 이렇게나 길어지면 어떻게 보여질까요?
                            한번 확인해보겠습니다도서 설명이 이렇게나 길어지면
                            어떻게 보여질까요? 한번 확인해보겠습니다도서 설명이
                            이렇게나 길어지면 어떻게 보여질까요? 한번
                            확인해보겠습니다도서 설명이 이렇게나 길어지면 어떻게
                            보여질까요? 한번 확인해보겠습니다도서 설명이
                            이렇게나 길어지면 어떻게 보여질까요? 한번
                            확인해보겠습니다도서 설명이 이렇게나 길어지면 어떻게
                            보여질까요? 한번 확인해보겠습니다도서 설명이
                            이렇게나 길어지면 어떻게 보여질까요? 한번
                            확인해보겠습니다도서 설명이 이렇게나 길어지면 어떻게
                            보여질까요? 한번 확인해보겠습니다도서 설명이
                            이렇게나 길어지면 어떻게 보여질까요? 한번
                            확인해보겠습니다도서 설명이 이렇게나 길어지면 어떻게
                            보여질까요? 한번 확인해보겠습니다도서 설명이
                            이렇게나 길어지면 어떻게 보여질까요? 한번
                            확인해보겠습니다도서 설명이 이렇게나 길어지면 어떻게
                            보여질까요? 한번 확인해보겠습니다도서 설명이
                            이렇게나 길어지면 어떻게 보여질까요? 한번
                            확인해보겠습니다도서 설명이 이렇게나 길어지면 어떻게
                            보여질까요? 한번 확인해보겠습니다도서 설명이
                            이렇게나 길어지면 어떻게 보여질까요? 한번
                            확인해보겠습니다
                        </p>
                    </div>
                    <div className="absolute bottom-0 flex flex-col gap-2 ">
                        <p className="text-xl">
                            담은 사람{' '}
                            <span className="font-bold text-primary">n</span>명
                        </p>
                        <button
                            type="button"
                            className="flex gap-2 items-center px-6 py-3 bg-primary text-white text-xl rounded-md "
                        >
                            <FaBookmark />내 서재에 담기
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
