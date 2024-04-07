import React from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return <div className="self-center w-[90rem] mx-auto">{children}</div>
}
