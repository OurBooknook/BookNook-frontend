import React from 'react'

export default function Prepare({
    setIsDemo,
}: {
    setIsDemo: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const handleClickCheckDemo = () => {
        setIsDemo(true)
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[10rem]">🚜</h1>
            <h2 className="text-4xl mb-4">COMING SOON</h2>
            <p className="text-lg">보다 좋은 서비스를 위해 준비 중입니다.</p>
            <p className="text-lg mb-4">
                데모를 확인하고 싶다면, 아래 버튼을 클릭해주세요!
            </p>
            <button
                type="button"
                className="px-4 py-2 border-primary border-[1px] rounded-3xl text-white bg-primary hover:text-primary hover:bg-transparent"
                onClick={handleClickCheckDemo}
            >
                데모 확인하기
            </button>
        </div>
    )
}
