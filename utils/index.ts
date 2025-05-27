export const { format: formatFullDateTime } = new Intl.DateTimeFormat('en-US', {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    timeZone: "America/Detroit",
    timeZoneName: "longGeneric",
})

export const { format: formatDate } = new Intl.DateTimeFormat('en-US', {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "America/Detroit",
})

export const { format: formatTime } = new Intl.DateTimeFormat('en-US', {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    timeZone: "America/Detroit",
    timeZoneName: "short",
})

export const { format: formatCurrency } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

export const formatListAnd = new Intl.ListFormat('en-US', {
    type: 'conjunction',
})

export const { format: formatListOr } = new Intl.ListFormat('en-US', {
    type: 'disjunction',
})