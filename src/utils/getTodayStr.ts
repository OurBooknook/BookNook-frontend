const todayStr = (): string => {
    const today = new Date()
    const year: number = today.getFullYear()
    const month: string =
        today.getMonth() + 1 < 10
            ? `0${today.getMonth() + 1}`
            : `${today.getMonth() + 1}`
    const date: string =
        today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`

    return `${year}-${month}-${date}`
}

export default todayStr
