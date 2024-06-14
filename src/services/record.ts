import axios from 'axios'
// import responseType from '../types/responseType'

const postRecord = async ({
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

export default postRecord
