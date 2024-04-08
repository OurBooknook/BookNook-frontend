import React from 'react'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'

export default function LoginPage() {
    return (
        <div className="grid grid-cols-2 items-center w-[100vw] h-[100vh] bg-primaryVariant">
            <div className="absolute -top-[45vw] -left-[10vw] w-[80vw] h-[80vw] rounded-full bg-primary">
                {' '}
            </div>
            <div className="flex flex-col items-center z-10 -translate-y-[15rem]">
                <h1 className="text-[6rem] font-danjo text-white">
                    📚 BookNook
                </h1>
                <p className="text-xl text-white">
                    독서 기록 서비스 BookNook입니다. 사용을 위해서 로그인
                    해주세요.
                </p>
            </div>
            <div className="flex flex-col items-center mx-auto gap-6 w-fit h-fit p-12 bg-white rounded-2xl z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <h1 className="text-2xl font-bold">로그인</h1>
                <div className="flex flex-col gap-4">
                    <button
                        type="button"
                        className="flex gap-2 justify-center items-center px-10 py-4 w-[30rem] text-xl bg-kakao text-black rounded-md"
                    >
                        <RiKakaoTalkFill />
                        카카오로 로그인
                    </button>
                    <button
                        type="button"
                        className="flex gap-2 justify-center items-center px-10 py-4 w-[30rem] text-xl bg-naver text-white rounded-md"
                    >
                        <SiNaver />
                        네이버로 로그인
                    </button>
                </div>
            </div>
        </div>
    )
}
