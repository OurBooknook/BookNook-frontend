import axios from 'axios'
import { Status } from '../types/bookType'
import responseType from '../types/responseType'

export interface LibraryType {
    totalPages: number
    currentPage: number
    isbnList: string[]
}

const getLibrary = async (
    status: Status,
    page: number
): Promise<LibraryType> => {
    const response = await axios.get<responseType<LibraryType>>(
        `${process.env.REACT_APP_API}/api/library/${status}`,
        {
            params: {
                pageNumber: page,
            },
        }
    )
    return response.data.results
}

export default getLibrary
