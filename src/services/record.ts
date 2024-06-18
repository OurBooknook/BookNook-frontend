import axios from 'axios'
// import responseType from '../types/responseType'

export const postRecord = async ({
    isbn,
    tag,
    page,
    content,
}: {
    isbn: string
    tag: string
    page: number
    content: string
}) => {
    const response = await axios.post(
        `${process.env.REACT_APP_API}/api/record`,
        {
            isbn,
            tag,
            page,
            content,
        }
    )

    return response
}

export const deleteRecord = async (recordId: number) => {
    const response = await axios.delete(
        `${process.env.REACT_APP_API}/api/record/${recordId}`
    )

    return response
}
