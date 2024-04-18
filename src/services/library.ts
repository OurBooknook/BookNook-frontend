import axios from 'axios'
import { Status } from '../types/bookType'
import responseType from '../types/responseType'
import { LibraryDetailType, RecordType } from '../types/libraryType'

export interface LibraryType {
    totalPages: number
    currentPage: number
    isbnList: string[]
}

export const getLibrary = async (
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

export const getLibraryDetail = async (
    isbn: string
): Promise<LibraryDetailType> => {
    const response = await axios.get<
        responseType<{
            isbn: string
            status: Status
            rate: number | null
            startDate: string | null
            finishDate: string | null
            page: number | null
            expectation: string | null
            recordList: RecordType[]
        }>
    >(`${process.env.REACT_APP_API}/api/library`, {
        params: {
            isbn,
        },
    })
    const responseData = response.data.results

    const libraryDetail: LibraryDetailType = {
        isbn: responseData.isbn,
        status: responseData.status,
        rate: responseData.rate,
        startDate: responseData.startDate,
        endDate: responseData.finishDate,
        page: responseData.page,
        expectation: responseData.expectation,
        recordList: responseData.recordList,
    }

    return libraryDetail
}
