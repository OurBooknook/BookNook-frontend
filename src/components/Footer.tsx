import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Footer({ backGround }: { backGround?: string }) {
    return (
        <footer
            className={`flex justify-center w-full border-t-[0.5px] border-lightGray bg-${backGround}`}
        >
            <div className="flex flex-row justify-between items-center p-4 w-[90rem] text-gray">
                <p className="text-sm">
                    Copyright @ 2024 BookNook. All rights reserved.
                </p>
                <a
                    href="https://github.com/OurBooknook"
                    type="button"
                    target="blank"
                    aria-label="깃허브로 이동하기"
                    className="text-xl"
                >
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}
Footer.defaultProps = {
    backGround: 'white',
}
