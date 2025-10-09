import type { RuntimeConfig } from "nuxt/schema"

export namespace Types {
    export type PublicationStatus = 'open' | 'closed';

    export interface Project {
        name: string;
        description: string;
        link: string;
        public: boolean;
        status: 'in progress' | 'beta' | 'released' | 'archived' | 'dropped';
        long: string;
    }

    export interface SocialMediaAccount {
        username: string;
        identifier: string;
        link: string;
        platform: string;
        icon: string;
    }

    export interface AboutSection {
        header: string;
        description: string;
    }

    export interface CustomTag {
        text: string;
        color: string;
        icon: string;
    }

    export interface Friend {
        id: number;
        name: string;
        description: string;
        active: boolean;
        start: string;
        end: string | null;
        aliases: string;
        image: string | 'none';
        custom_tags: CustomTag[];
    }

    export interface ContactMethod {
        name: string;
        identifier: string;
        link: string;
        icon: string;
    }
}

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

export class Mapper {
    static PSIM = {
        'in progress': 'clock',
        beta: 'sparkles',
        released: 'check-circle',
        archived: 'archive',
        dropped: 'x-circle',
    } as Record<string, string>;
    static PSC = {
        released: 'green',
        beta: 'yellow',
        'in progress': 'orange',
        archived: 'red',
        dropped: 'gray',
    } as Record<string, string>;
    static PPI = {
        open: 'book',
        closed: 'lock',
    } as Record<string, string>;
    static PPC = {
        open: 'blue',
        closed: 'gray',
    } as Record<string, string>;
    static getProjectStatusIcon(status: string): string {
        return `heroicons-solid:${Mapper.PSIM[status] || 'question-mark-circle'}`;
    }
    static getProjectStatusColor(status: string): string {
        return `bg-${Mapper.PSC[status] || 'gray'}-500`;
    }
    static processProjectStatus(status: boolean): Types.PublicationStatus {
        return status ? 'open' : 'closed';
    }
    static getProjectPublicationIcon(publication: boolean): string {
        return `material-symbols:${Mapper.PPI[this.processProjectStatus(publication) || 'help']}-outline`;
    }
    static getProjectPublicationColor(publication: boolean): string {
        return `bg-${Mapper.PPC[this.processProjectStatus(publication) || 'help']}-500`;
    }
}

export const buildSQLQuery = async <type>(
    rtc: RuntimeConfig,
    table: string,
    attr: Record<string, string> = {}
): Promise<type[]> => {
    const search = new URLSearchParams(attr)
    const url = new URL(`/rest/v1/${table}`, rtc.supabase.url)
    url.search = search.toString()
    return fetch(
        url,
        {
            headers: {
                apikey: rtc.supabase.key,
                'Accept-Profile': 'ben',
            }
        }
    ).then(res => res.json()) as Promise<type[]>;
}