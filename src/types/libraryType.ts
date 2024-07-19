import { Status } from './bookType'

// Record의 태그(감상평, 인용, 줄거리, 의문점)
const recordTag = {
    review: 'review',
    quote: 'quote',
    summary: 'summary',
    question: 'question',
} as const
export type RecordTag = (typeof recordTag)[keyof typeof recordTag]
// 기록 태그(인용, 줄거리, 감상평, 의문점)
export type RecordTagKoType = Record<
    'quote' | 'summary' | 'review' | 'question',
    string
>
export const recordTagKo: RecordTagKoType = {
    quote: '인용',
    summary: '줄거리',
    review: '감상평',
    question: '의문점',
}

// 서재 상세 데이터 타입
export interface LibraryDetailType {
    isbn: string
    status: Status
    rate: number | null
    startDate: string | null
    endDate: string | null
    page: number | null
    expectation: string | null
}

// 기록 데이터 타입
export interface RecordListType {
    totalPages: number
    currentPage: number
    recordDTOList: RecordType[]
}
export interface RecordType {
    recordId: number
    page: number | null
    tag: RecordTag
    date: string
    content: string
    createdAt: string
    updatedAt: string
}
