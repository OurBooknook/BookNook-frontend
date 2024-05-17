// 책 담기 상태(읽은 책, 읽고 있는 책, 읽고 싶은 책)
export const statusEn = {
    READ: 'READ',
    READING: 'READING',
    WISH: 'WISH',
} as const
export type Status = (typeof statusEn)[keyof typeof statusEn]

// 책 담기 상태 한국어
export const statusKo = {
    READ: '읽은 책',
    READING: '읽고 있는 책',
    WISH: '읽고 싶은 책',
}
