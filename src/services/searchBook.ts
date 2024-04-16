import axios from 'axios'
import { searchDocumentType, searchMetaType } from '../types/searchResultType'

export interface BookData {
    meta: searchMetaType
    documents: searchDocumentType[]
}

const getSearchBook = async (query: string): Promise<BookData> => {
    const response = await axios.get<BookData>(
        'https://dapi.kakao.com/v3/search/book',
        {
            headers: {
                Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
            },
            params: {
                query,
            },
        }
    )

    return response.data
}

export default getSearchBook
