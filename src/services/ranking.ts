import axios from 'axios'
import responseType from '../types/responseType'

export interface BookRankingType {
    bookRanking: {
        isbn: string
        count: number
    }[]
}
export interface YearAmountType {
    totalCnt: number
    monthly: number[]
}

export const getBookRanking = async () => {
    const response = await axios.get<responseType<BookRankingType>>(
        `${process.env.REACT_APP_API}/api/statistics/books`
    )

    return response.data.results
}

export const getYearAmount = async (year: string) => {
    const response = await axios.get<responseType<YearAmountType>>(
        `${process.env.REACT_APP_API}/api/statistics/me?year=${year}`
    )

    return response.data.results
}
