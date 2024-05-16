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

export const deleteLibrary = async (isbn: string) => {
    const response = await axios.delete<responseType<null>>(
        `${process.env.REACT_APP_API}/api/library`,
        {
            params: { isbn },
        }
    )

    return response
    // FIXME - 데이터 있을 때 테스트하고 정상 동작하면 변경하기
    // if (response.data.success) return true
    // return false
}

export const postLibrary = async ({
    isbn,
    status,
    startDate,
    finishDate,
    readingPages,
    rate,
    expectation,
}: {
    isbn: string
    status: Status
    startDate: string | null
    finishDate: string | null
    readingPages: number | null
    rate: number | null
    expectation: string | null
}) => {
    console.log(
        `${isbn} ${status} ${startDate} ${finishDate} ${readingPages} ${rate} ${expectation}`
    )

    const response = await axios.post(
        `${process.env.REACT_APP_API}/api/library`,
        {
            params: {
                isbn,
                status: status.toUpperCase(),
                startDate,
                finishDate,
                readingPages,
                rate,
                expactation: expectation,
            },
        }
    )

    return response
}
