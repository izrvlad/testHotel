const enMounths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

export function formatCardDate(date, days) {
    if (date === null) return ""
    date = date.split('-')
    if (days === 1) {
        return `${date[2]} ${enMounths[+date[1] - 1]}, ${date[0]} - ${days} день`
    }
    if (days > 1 && days < 5) {
        return `${date[2]} ${enMounths[+date[1] - 1]}, ${date[0]} - ${days} дня`
    }
    return `${date[2]} ${enMounths[+date[1] - 1]}, ${date[0]} - ${days} дней`
}