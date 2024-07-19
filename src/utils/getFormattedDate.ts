export const getFormattedDate = (datetime: string): string => {
    const date = datetime.split('T')[0].split('-')
    const year = date[0]
    const month = date[1]
    const day = date[2]

    return `${year}년 ${month}월 ${day}일`
}

export const getFormattedDateTime = (datetime: string): string => {
    const date = datetime.split('T')[0].split('-')
    const time = datetime.split('T')[1].split(':')

    const year = date[0]
    const month = date[1]
    const day = date[2]

    const hour = time[0]
    const minute = time[1]

    return `${year}/${month}/${day} ${hour}:${minute}`
}
