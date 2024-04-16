import axios from 'axios'
import { Status } from '../types/bookType'

export interface LibraryType {
    bookList: string[]
}

const getLibrary = async (status: Status): Promise<LibraryType> => {
    const response = await axios.get(
        `${process.env.REACT_APP_API}/api/library/${status}`
    )
    return response.data
}

export default getLibrary
