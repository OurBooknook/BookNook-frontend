import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BookRanking from './components/BookRanking'
import ReadingKingContainer from './components/ReadingKingContainer'

export default function Main() {
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center w-full bg-primary">
                <div className="flex justify-between w-[70rem] mx-auto">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-extrabold mb-5 text-white">
                            책과 함께하는 여정, <br />
                            당신의 서재를 채워보세요
                        </h1>
                        <p className="mb-4 text-white">
                            책을 서재에 담고, <br />
                            독서를 하며 기억하고 싶은 내용을 기록하세요
                        </p>
                        {/* NOTE - 완성되지 않은 버튼 주석 처리 */}
                        {/* 
                        <button
                            type="button"
                            className="text-white border-white rounded-3xl border-[1px] py-2 px-3 w-fit"
                        >
                            이달의 독서왕 확인하기
                        </button> 
                        */}
                    </div>
                    <img
                        src="reading.png"
                        alt="독서 이미지"
                        className="w-[35rem] h-[35rem]"
                    />
                </div>
                <div className="w-full bg-primaryVariant pt-32">
                    <div className="flex gap-12 w-[70rem] mx-auto">
                        <ReadingKingContainer />
                        <BookRanking />
                    </div>
                </div>
            </div>
            <Footer backGround="primaryVariant" />
        </>
    )
}
