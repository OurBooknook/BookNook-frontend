const getFormattedDate = (datetime: string): string => {
    const date = datetime.split('T')[0].split('-')
    const year = date[0]
    const month = date[1]
    const day = date[2]

    return `${year}년 ${month}월 ${day}일`
}

export default getFormattedDate
