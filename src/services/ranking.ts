import axios from 'axios'
import responseType from '../types/responseType'

interface BookRankingType {
    bookRanking: {
        isbn: string
        count: number
    }[]
}
const getBookRanking = async () => {
    const response = await axios.get<responseType<BookRankingType>>(
        `${process.env.REACT_APP_API}/api/statistics/books`
    )

    return response.data.results
}

export default getBookRanking
