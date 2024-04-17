// 책 담기 상태(읽은 책, 읽고 있는 책, 읽고 싶은 책)
export const statusEn = {
    read: 'read',
    rading: 'reading',
    wish: 'wish',
} as const
export type Status = (typeof statusEn)[keyof typeof statusEn]

// 책 담기 상태 한국어
export const statusKo = {
    read: '읽은 책',
    reading: '읽고 있는 책',
    wish: '읽고 싶은 책',
}
