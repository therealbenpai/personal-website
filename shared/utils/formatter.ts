export class Formatter {
    static dateTime(date: Date): string {
        return new Intl.DateTimeFormat('en-US', {
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
        }).format(date);
    }
    static date(date: Date): string {
        return new Intl.DateTimeFormat('en-US', {
            year: "numeric",
            month: "short",
            day: "numeric",
            timeZone: "America/Detroit",
        }).format(date);
    }
    static time(date: Date): string {
        return new Intl.DateTimeFormat('en-US', {
            hour: "2-digit",
            hour12: false,
            minute: "2-digit",
            timeZone: "America/Detroit",
            timeZoneName: "short",
        }).format(date);
    }
    static currency(amount: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    }
    static listAnd(items: string[]): string {
        return new Intl.ListFormat('en-US', {
            type: 'conjunction',
        }).format(items);
    }
    static listOr(items: string[]): string {
        return new Intl.ListFormat('en-US', {
            type: 'disjunction',
        }).format(items);
    }
    static processTime(timeString: string): string {
        const fTimeString = `${timeString}`;
        return this.date(new Date(fTimeString));
    }
}
