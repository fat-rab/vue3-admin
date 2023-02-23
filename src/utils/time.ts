export function formatTimeStamp(timeStamp: number, type = 'YYYY-MM-DD HH:mm:ss'): string {
    if (!timeStamp) return ''
    const date = new Date(timeStamp)
    const year = date.getFullYear()
    const tempMonth = date.getMonth()
    const month = tempMonth < 9 ? '0' + (tempMonth + 1) : tempMonth + 1
    const tempDay = date.getDate()
    const day = tempDay < 10 ? '0' + tempDay : tempDay
    const tempHour = date.getHours()
    const hour = tempHour < 10 ? '0' + tempHour : tempHour
    const tempMinute = date.getMinutes()
    const minute = tempMinute < 10 ? '0' + tempMinute : tempMinute
    const tempSeconds = date.getSeconds()
    const seconds = tempSeconds < 10 ? '0' + tempSeconds : tempSeconds
    if (type === 'YYYY-MM-DD HH:mm:ss') {
        return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`
    } else {
        return `${year}-${month}-${day}`
    }

}

/**
 * @description 返回一段时间间隔
 * @param {string} type
 * @param {number} week
 * @returns {Array<string>}
 */
type timeType = 'future' | 'ago'

export function getWeekTime(type: timeType = 'future', week = 2, timeFormat= 'YYYY-MM-DD'): Array<string> {
    if (week < 1) return []
    const now = new Date().getTime()
    let twoWeekFuture
    let twoWeekAgo
    // 返回未来几周
    if (type === 'future') {
        twoWeekFuture = now + ((7 * week) - 1) * 24 * 60 * 60 * 1000
        if (timeFormat === 'YYYY-MM-DD') {
            return [formatTimeStamp(now, 'YYYY-MM-DD'), formatTimeStamp(twoWeekFuture, 'YYYY-MM-DD')]
        } else {
            return [formatTimeStamp(now, 'YYYY-MM-DD HH:mm:ss'), formatTimeStamp(twoWeekFuture, 'YYYY-MM-DD HH:mm:ss')]
        }


    }
    // 返回过去几周
    if (type === 'ago') {
        twoWeekAgo = now - ((7 * week) - 1) * 24 * 60 * 60 * 1000
        if (timeFormat === 'YYYY-MM-DD') {
            return [formatTimeStamp(twoWeekAgo, 'YYYY-MM-DD'), formatTimeStamp(now, 'YYYY-MM-DD')]
        } else {
            return [formatTimeStamp(twoWeekAgo, 'YYYY-MM-DD HH:mm:ss'), formatTimeStamp(now, 'YYYY-MM-DD HH:mm:ss')]
        }
    }
    return []
}

export function disabledDate(date: Date) {
    return new Date() < date
}
