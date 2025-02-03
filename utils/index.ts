export const { format: formatNumber } = new Intl.DateTimeFormat('en-US', {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    timeZone: "America/Detroit",
    timeZoneName: "longGeneric",
})

export const {format: formatCurrency} = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

