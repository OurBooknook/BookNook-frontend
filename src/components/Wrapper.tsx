import React from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="self-center max-w-[70rem] mx-auto mt-12 px-3">
            {children}
        </div>
    )
}
