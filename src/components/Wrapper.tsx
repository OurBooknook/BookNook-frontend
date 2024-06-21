import React from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="self-center max-w-[70rem] mx-auto mb-6 pt-12 px-3 "
            style={{ minHeight: 'calc(100vh - 10rem)' }}
        >
            {children}
        </div>
    )
}
