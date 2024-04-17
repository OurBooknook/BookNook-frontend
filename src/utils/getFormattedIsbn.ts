const getFormattedIsbn = (isbn: string) => {
    const arr = isbn.split(' ')
    if (arr.length <= 1) {
        return arr[0]
    }

    return arr[1]
}

export default getFormattedIsbn
