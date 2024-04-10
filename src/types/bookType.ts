// 책 담기 상태(읽은 책, 읽고 있는 책, 읽고 싶은 책)
const status = {
    read: 'read',
    rading: 'reading',
    wish: 'wish',
} as const

export type Status = (typeof status)[keyof typeof status]
